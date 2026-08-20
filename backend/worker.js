// Cloudflare Worker backend for authentication, payments, and course access.
//
// How this file works:
// 1. The browser sends requests to /api/... endpoints.
// 2. This worker inspects the URL path and chooses the appropriate handler.
// 3. For login, registration, and progress tracking, it reads/writes data in Cloudflare D1.
// 4. For payments, it prepares a Paystack-compatible response and verifies webhook signatures.
// 5. It returns JSON responses and sets cookies for session-based authentication.
export default {
  async fetch(request, env) {
    // Read the incoming URL so we can route it based on the request path.
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = new Set([
      env.FRONTEND_ORIGIN,
      'http://127.0.0.1:8000',
      'http://localhost:8000',
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'http://127.0.0.1:5500',
      'http://localhost:5500',
    ].filter(Boolean));
    const responseOrigin = allowedOrigins.has(origin) ? origin : '';

    // Shared security and CORS headers for all API responses.
    const corsHeaders = {
      ...(responseOrigin ? { 'Access-Control-Allow-Origin': responseOrigin } : {}),
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; img-src 'self' data:; connect-src 'self' https://api.paystack.co;",
    };

    // Handle browser preflight requests before doing any other work.
    if (request.method === 'OPTIONS') {
      if (origin && !responseOrigin) {
        return new Response(null, { status: 403, headers: corsHeaders });
      }
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Route requests to the correct handler based on the path.
      if (url.pathname === '/api/auth/csrf') {
        const token = createCsrfToken();
        const response = jsonResponse({ csrfToken: token }, 200, corsHeaders);
        response.headers.set('Set-Cookie', `csrf=${token}; Secure; SameSite=None; Max-Age=3600; Path=/`);
        return response;
      }

      if (url.pathname === '/api/auth/register') {
        return await handleRegister(request, env, corsHeaders);
      }

      if (url.pathname === '/api/auth/login') {
        return await handleLogin(request, env, corsHeaders);
      }

      if (url.pathname === '/api/auth/logout') {
        return await handleLogout(request, env, corsHeaders);
      }

      if (url.pathname === '/api/auth/session') {
        return await handleSession(request, env, corsHeaders);
      }

      if (url.pathname === '/api/auth/reset-request') {
        return await handlePasswordReset(request, env, corsHeaders);
      }

      if (url.pathname === '/api/payments/initialize') {
        return await handlePaymentInitialize(request, env, corsHeaders);
      }

      if (url.pathname === '/api/payments/verify') {
        return await handlePaymentVerify(request, env, corsHeaders);
      }

      if (url.pathname === '/api/payments/webhook') {
        return await handleWebhook(request, env, corsHeaders);
      }

      if (url.pathname === '/api/progress') {
        return await handleProgress(request, env, corsHeaders);
      }

      if (url.pathname === '/api/progress/track') {
        return await handleProgressTrack(request, env, corsHeaders);
      }

      if (url.pathname === '/api/certificates/issue') {
        return await handleCertificateIssue(request, env, corsHeaders);
      }

      return jsonResponse({ message: 'Route not found.' }, 404, corsHeaders);
    } catch (error) {
      return jsonResponse({ message: error.message || 'Server error.' }, 500, corsHeaders);
    }
  },
};

function jsonResponse(payload, status = 200, headers = {}) {
  // Helper for sending JSON back to the frontend.
  return new Response(JSON.stringify(payload), { status, headers });
}

function isTrustedBrowserRequest(request, env) {
  const origin = request.headers.get('Origin') || '';
  return origin === env.FRONTEND_ORIGIN || isLocalOrigin(origin);
}

async function handleRegister(request, env, corsHeaders) {
  // Register a new user, hash the password, create a user row, and create a session cookie.
  if (!isTrustedBrowserRequest(request, env)) {
    return jsonResponse({ message: 'Request origin is not allowed.' }, 403, corsHeaders);
  }

  const body = await request.json().catch(() => ({}));
  const fullName = String(body.fullName || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const phone = String(body.phone || '').trim();
  const password = String(body.password || '');
  const rememberMe = Boolean(body.rememberMe);

  if (!fullName || !email || !phone || password.length < 8 || !isValidEmail(email)) {
    return jsonResponse({ message: 'Invalid registration payload.' }, 400, corsHeaders);
  }

  const passwordHash = await hashPassword(password);
  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (existing) {
    return jsonResponse({ message: 'An account already exists for this email.' }, 409, corsHeaders);
  }

  const userId = crypto.randomUUID();
  await env.DB.prepare('INSERT INTO users (id, full_name, email, phone, password_hash, remember_me) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(userId, fullName, email, phone, passwordHash, rememberMe ? 1 : 0)
    .run();

  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + (rememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 12)).toISOString();
  await env.DB.prepare('INSERT INTO sessions (id, user_id, expires_at, remember_me) VALUES (?, ?, ?, ?)')
    .bind(sessionId, userId, expiresAt, rememberMe ? 1 : 0)
    .run();

  const response = jsonResponse({ user: { id: userId, fullName, email, phone }, accessGranted: false }, 201, corsHeaders);
  response.headers.set('Set-Cookie', `session=${sessionId}; HttpOnly; Secure; SameSite=None; Max-Age=${rememberMe ? 2592000 : 43200}; Path=/`);
  return response;
}

async function handleLogin(request, env, corsHeaders) {
  // Verify the submitted email/password pair and issue a session cookie on success.
  if (!isTrustedBrowserRequest(request, env)) {
    return jsonResponse({ message: 'Request origin is not allowed.' }, 403, corsHeaders);
  }

  const body = await request.json().catch(() => ({}));
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const rememberMe = Boolean(body.rememberMe);

  if (!email || !password || !isValidEmail(email)) {
    return jsonResponse({ message: 'Email and password are required.' }, 400, corsHeaders);
  }

  const user = await env.DB.prepare('SELECT id, full_name, email, phone, password_hash FROM users WHERE email = ?').bind(email).first();
  if (!user || !await verifyPassword(password, user.password_hash)) {
    return jsonResponse({ message: 'Invalid credentials.' }, 401, corsHeaders);
  }

  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + (rememberMe ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 12)).toISOString();
  await env.DB.prepare('INSERT INTO sessions (id, user_id, expires_at, remember_me) VALUES (?, ?, ?, ?)')
    .bind(sessionId, user.id, expiresAt, rememberMe ? 1 : 0)
    .run();

  const payment = await env.DB.prepare('SELECT id FROM payments WHERE user_id = ? AND status = ?').bind(user.id, 'success').first();
  const response = jsonResponse({ user: { id: user.id, fullName: user.full_name, email: user.email, phone: user.phone }, accessGranted: Boolean(payment) }, 200, corsHeaders);
  response.headers.set('Set-Cookie', `session=${sessionId}; HttpOnly; Secure; SameSite=None; Max-Age=${rememberMe ? 2592000 : 43200}; Path=/`);
  return response;
}

async function handleLogout(request, env, corsHeaders) {
  // Remove the session record and clear the browser cookie.
  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');

  if (sessionId) {
    await env.DB.prepare('DELETE FROM sessions WHERE id = ?').bind(sessionId).run();
  }

  const response = jsonResponse({ message: 'Logged out.' }, 200, corsHeaders);
  response.headers.set('Set-Cookie', 'session=; HttpOnly; Secure; SameSite=None; Max-Age=0; Path=/');
  return response;
}

async function handleSession(request, env, corsHeaders) {
  // Check whether the browser still has a valid session cookie.
  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Not authenticated.' }, 401, corsHeaders);
  }

  const session = await env.DB.prepare('SELECT user_id, expires_at FROM sessions WHERE id = ?').bind(sessionId).first();
  if (!session || new Date(session.expires_at) < new Date()) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }

  const user = await env.DB.prepare('SELECT id, full_name, email, phone FROM users WHERE id = ?').bind(session.user_id).first();
  const payment = await env.DB.prepare('SELECT id FROM payments WHERE user_id = ? AND status = ?').bind(session.user_id, 'success').first();
  return jsonResponse({ user: { id: user.id, fullName: user.full_name, email: user.email, phone: user.phone }, accessGranted: Boolean(payment) }, 200, corsHeaders);
}

async function handlePasswordReset(request, env, corsHeaders) {
  // This is currently a stub. In production, you would send a real email reset link.
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || '').trim().toLowerCase();
  if (!email) {
    return jsonResponse({ message: 'Email is required.' }, 400, corsHeaders);
  }
  return jsonResponse({ message: `Password reset instructions sent to ${email}.` }, 200, corsHeaders);
}

async function handlePaymentInitialize(request, env, corsHeaders) {
  // Initialize a real Paystack transaction for the authenticated user.
  if (!env.PAYSTACK_SECRET_KEY) {
    return jsonResponse({ message: 'Payment service is not configured.' }, 503, corsHeaders);
  }

  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Authentication required.' }, 401, corsHeaders);
  }

  const session = await env.DB.prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > CURRENT_TIMESTAMP').bind(sessionId).first();
  if (!session) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }

  const user = await env.DB.prepare('SELECT id, email FROM users WHERE id = ?').bind(session.user_id).first();
  if (!user) {
    return jsonResponse({ message: 'User account not found.' }, 404, corsHeaders);
  }

  const reference = `zentrix-${crypto.randomUUID()}`;
  const amount = 3000;
  const requestOrigin = request.headers.get('Origin') || '';
  const callbackUrl = env.FRONTEND_CALLBACK_URL || (isLocalOrigin(requestOrigin)
    ? new URL('./welcome.html', requestOrigin).toString()
    : '');
  if (!callbackUrl) {
    return jsonResponse({ message: 'Frontend callback URL is not configured.' }, 503, corsHeaders);
  }
  const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      amount: amount * 100,
      currency: 'NGN',
      reference,
      callback_url: callbackUrl,
      metadata: { userId: user.id, courseId: 'zentrix-certified-marketing-specialist' },
    }),
  });
  const payload = await paystackResponse.json().catch(() => ({}));
  if (!paystackResponse.ok || !payload.status || !payload.data?.authorization_url) {
    return jsonResponse({ message: 'Unable to initialize payment.' }, 502, corsHeaders);
  }

  await env.DB.prepare('INSERT INTO payments (id, user_id, reference, amount, currency, status) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(crypto.randomUUID(), user.id, reference, amount, 'NGN', 'pending')
    .run();

  return jsonResponse({ message: 'Payment initialized.', authorizationUrl: payload.data.authorization_url, reference }, 200, corsHeaders);
}

async function handlePaymentVerify(request, env, corsHeaders) {
  if (!env.PAYSTACK_SECRET_KEY) {
    return jsonResponse({ message: 'Payment service is not configured.' }, 503, corsHeaders);
  }

  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Authentication required.' }, 401, corsHeaders);
  }

  const session = await env.DB.prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > CURRENT_TIMESTAMP').bind(sessionId).first();
  if (!session) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }

  const reference = new URL(request.url).searchParams.get('reference')?.trim() || '';
  if (!reference || !/^zentrix-[a-f0-9-]+$/.test(reference)) {
    return jsonResponse({ message: 'Invalid payment reference.' }, 400, corsHeaders);
  }

  const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}` },
  });
  const payload = await paystackResponse.json().catch(() => ({}));
  const payment = payload.data;
  const expectedAmount = 3000 * 100;
  if (!paystackResponse.ok || !payload.status || payment?.status !== 'success' || Number(payment.amount) < expectedAmount) {
    return jsonResponse({ message: 'Payment has not been confirmed.' }, 402, corsHeaders);
  }

  if (payment.metadata?.userId !== session.user_id) {
    return jsonResponse({ message: 'Payment does not belong to this account.' }, 403, corsHeaders);
  }

  const existing = await env.DB.prepare('SELECT id FROM payments WHERE reference = ?').bind(reference).first();
  if (existing) {
    await env.DB.prepare('UPDATE payments SET status = ?, amount = ? WHERE reference = ?')
      .bind('success', Number(payment.amount) / 100, reference)
      .run();
  } else {
    await env.DB.prepare('INSERT INTO payments (id, user_id, reference, amount, currency, status) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(crypto.randomUUID(), session.user_id, reference, Number(payment.amount) / 100, 'NGN', 'success')
      .run();
  }

  return jsonResponse({ message: 'Payment verified.', accessGranted: true }, 200, corsHeaders);
}

async function handleWebhook(request, env, corsHeaders) {
  // Verify the Paystack webhook signature before recording successful payments.
  const signature = request.headers.get('x-paystack-signature');
  if (!signature) {
    return jsonResponse({ message: 'Missing signature.' }, 401, corsHeaders);
  }

  const body = await request.text();
  const expected = await createHmacSignature(body, env.PAYSTACK_SECRET_KEY || '');
  if (!timingSafeEqualHex(signature, expected)) {
    return jsonResponse({ message: 'Invalid signature.' }, 401, corsHeaders);
  }

  const payload = JSON.parse(body);
  if (payload.event === 'charge.success' && payload.data?.status === 'success') {
    const userId = payload.data.metadata?.userId || '';
    const paymentReference = payload.data.reference || crypto.randomUUID();
    const amount = Number(payload.data.amount || 0);
    const user = await env.DB.prepare('SELECT id FROM users WHERE id = ?').bind(userId).first();
    if (!user || amount < 300000) {
      return jsonResponse({ message: 'Invalid payment data.' }, 400, corsHeaders);
    }
    const existing = await env.DB.prepare('SELECT id FROM payments WHERE reference = ?').bind(paymentReference).first();
    if (!existing) {
      await env.DB.prepare('INSERT INTO payments (id, user_id, reference, amount, currency, status) VALUES (?, ?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), userId, paymentReference, amount / 100, 'NGN', 'success')
        .run();
    } else {
      await env.DB.prepare('UPDATE payments SET status = ?, amount = ? WHERE reference = ?')
        .bind('success', amount / 100, paymentReference)
        .run();
    }
  }

  return jsonResponse({ message: 'Webhook received.' }, 200, corsHeaders);
}

async function handleProgress(request, env, corsHeaders) {
  // Return the current user's lesson progress from D1.
  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Authentication required.' }, 401, corsHeaders);
  }
  const session = await env.DB.prepare('SELECT user_id FROM sessions WHERE id = ?').bind(sessionId).first();
  if (!session) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }
  const rows = await env.DB.prepare('SELECT lesson_id, completed FROM lesson_progress WHERE user_id = ?').bind(session.user_id).all();
  const progress = (rows.results || []).map((row) => ({
    lessonId: row.lesson_id,
    completed: Boolean(row.completed),
  }));
  return jsonResponse({ progress }, 200, corsHeaders);
}

async function handleProgressTrack(request, env, corsHeaders) {
  // Save or update one lesson's completion status in D1.
  const cookie = request.headers.get('cookie') || '';
  const sessionId = getCookieValue(cookie, 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Authentication required.' }, 401, corsHeaders);
  }
  const session = await env.DB.prepare('SELECT user_id FROM sessions WHERE id = ?').bind(sessionId).first();
  if (!session) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }
  const body = await request.json().catch(() => ({}));
  const lessonId = String(body.lessonId || '').trim();
  const completed = Boolean(body.completed);
  if (!/^lesson-[a-z0-9-]+$/i.test(lessonId)) {
    return jsonResponse({ message: 'Lesson ID is required.' }, 400, corsHeaders);
  }
  await env.DB.prepare('INSERT OR REPLACE INTO lesson_progress (user_id, lesson_id, completed) VALUES (?, ?, ?)')
    .bind(session.user_id, lessonId, completed ? 1 : 0)
    .run();
  return jsonResponse({ message: 'Progress updated.' }, 200, corsHeaders);
}

async function handleCertificateIssue(request, env, corsHeaders) {
  const sessionId = getCookieValue(request.headers.get('cookie') || '', 'session');
  if (!sessionId) {
    return jsonResponse({ message: 'Authentication required.' }, 401, corsHeaders);
  }

  const session = await env.DB.prepare('SELECT user_id FROM sessions WHERE id = ? AND expires_at > CURRENT_TIMESTAMP').bind(sessionId).first();
  if (!session) {
    return jsonResponse({ message: 'Session expired.' }, 401, corsHeaders);
  }

  const user = await env.DB.prepare('SELECT id, full_name FROM users WHERE id = ?').bind(session.user_id).first();
  const paid = await env.DB.prepare('SELECT id FROM payments WHERE user_id = ? AND status = ?').bind(session.user_id, 'success').first();
  if (!user || !paid) {
    return jsonResponse({ message: 'Course access is required.' }, 403, corsHeaders);
  }

  const completed = await env.DB.prepare("SELECT COUNT(DISTINCT lesson_id) AS count FROM lesson_progress WHERE user_id = ? AND completed = 1 AND lesson_id LIKE 'lesson-%'").bind(session.user_id).first();
  if (Number(completed?.count || 0) < 169) {
    return jsonResponse({ message: 'Complete every lesson before requesting a certificate.' }, 409, corsHeaders);
  }

  const courseId = 'zentrix-certified-marketing-specialist';
  const existing = await env.DB.prepare('SELECT certificate_number, course_id, issued_at, status FROM certificates WHERE user_id = ? AND course_id = ?').bind(session.user_id, courseId).first();
  if (existing) {
    return jsonResponse({ certificate: { ...existing, studentName: user.full_name } }, 200, corsHeaders);
  }

  const issuedAt = new Date().toISOString();
  const certificateNumber = `ZENTRIX-${crypto.randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`;
  await env.DB.prepare('INSERT INTO certificates (id, certificate_number, user_id, course_id, issued_at, status) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(crypto.randomUUID(), certificateNumber, session.user_id, courseId, issuedAt, 'issued')
    .run();

  return jsonResponse({ certificate: { certificateNumber, courseId, issuedAt, status: 'issued', studentName: user.full_name } }, 201, corsHeaders);
}

function getCookieValue(cookie, name) {
  // Extract a cookie value from the browser request header.
  const parts = cookie.split(';').map((entry) => entry.trim());
  const match = parts.find((entry) => entry.startsWith(`${name}=`));
  return match ? match.split('=').slice(1).join('=') : '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isLocalOrigin(origin) {
  return [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://127.0.0.1:8080',
    'http://localhost:8080',
  ].includes(origin);
}

async function hashPassword(password) {
  // Hash passwords with PBKDF2 so plain-text passwords are never stored in D1.
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
  const derived = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, baseKey, 256);
  return `pbkdf2:${toHex(salt)}:${toHex(new Uint8Array(derived))}`;
}

async function verifyPassword(password, stored) {
  // Compare the submitted password with the stored hash using a constant-time check.
  if (!stored || !stored.startsWith('pbkdf2:')) {
    return false;
  }
  const [algorithm, saltHex, derivedHex] = stored.split(':');
  if (algorithm !== 'pbkdf2') {
    return false;
  }
  const salt = fromHex(saltHex);
  const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
  const derived = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, baseKey, 256);
  const expected = fromHex(derivedHex);
  const actual = new Uint8Array(derived);
  return timingSafeEqualHex(toHex(actual), toHex(expected));
}

async function createHmacSignature(body, secret) {
  // Create the HMAC signature that Paystack sends in the webhook headers.
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-512' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(body));
  return toHex(new Uint8Array(signature));
}

function toHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex) {
  const normalized = hex.replace(/\s+/g, '');
  const bytes = new Uint8Array(normalized.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = parseInt(normalized.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function timingSafeEqualHex(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return result === 0;
}
