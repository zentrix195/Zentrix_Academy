// Small API client that wraps requests to the Cloudflare Worker backend.
import { APP_CONFIG } from './config.js';

function createMemoryStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };
}

function getStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    return globalThis.localStorage;
  }
  if (!globalThis.__zentrixMockStorage) {
    globalThis.__zentrixMockStorage = createMemoryStorage();
  }
  return globalThis.__zentrixMockStorage;
}

function readStorageJson(key, fallback) {
  const storage = getStorage();
  const rawValue = storage.getItem(key);
  if (!rawValue) {
    return fallback;
  }
  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
}

function writeStorageJson(key, value) {
  getStorage().setItem(key, JSON.stringify(value));
}

function readMockSession() {
  return readStorageJson(APP_CONFIG.storageKey, { user: null, accessGranted: false });
}

function writeMockSession(session) {
  writeStorageJson(APP_CONFIG.storageKey, session);
}

function readMockProgress() {
  return readStorageJson(`${APP_CONFIG.storageKey}:progress`, []);
}

function writeMockProgress(progress) {
  writeStorageJson(`${APP_CONFIG.storageKey}:progress`, progress);
}

function readMockUsers() {
  return readStorageJson(`${APP_CONFIG.storageKey}:users`, []);
}

function writeMockUsers(users) {
  writeStorageJson(`${APP_CONFIG.storageKey}:users`, users);
}

function parseJsonBody(body) {
  if (!body) {
    return {};
  }
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

function handleMockRequest(path, options = {}) {
  switch (path) {
    case '/auth/csrf':
      return { csrfToken: 'mock-csrf-token' };
    case '/auth/register': {
      const payload = parseJsonBody(options.body);
      const users = readMockUsers();
      const user = {
        id: `user-${Date.now()}`,
        fullName: payload.fullName || payload.email || 'Local Learner',
        email: payload.email || '',
        phone: payload.phone || '',
      };
      users.push(user);
      writeMockUsers(users);
      const session = { user, accessGranted: true };
      writeMockSession(session);
      return session;
    }
    case '/auth/login': {
      const payload = parseJsonBody(options.body);
      const users = readMockUsers();
      let user = users.find((entry) => entry.email === payload.email);
      if (!user) {
        user = {
          id: `user-${Date.now()}`,
          fullName: payload.fullName || payload.email?.split('@')[0] || 'Local Learner',
          email: payload.email || '',
          phone: '',
        };
        users.push(user);
        writeMockUsers(users);
      }
      const session = { user, accessGranted: true };
      writeMockSession(session);
      return session;
    }
    case '/auth/logout': {
      writeMockSession({ user: null, accessGranted: false });
      return { success: true };
    }
    case '/auth/reset-request':
      return { message: 'Mock reset request accepted.' };
    case '/auth/reset-password':
      return { message: 'Mock password reset accepted.' };
    case '/auth/session':
      return readMockSession();
    case '/payments/initialize': {
      const session = readMockSession();
      session.accessGranted = true;
      writeMockSession(session);
      return { success: true, accessGranted: true, authorizationUrl: null, message: 'Mock checkout complete. Course unlocked.' };
    }
    case '/progress':
      return { progress: readMockProgress() };
    case '/progress/track': {
      const payload = parseJsonBody(options.body);
      const progress = readMockProgress();
      const nextProgress = progress.filter((entry) => entry.lessonId !== payload.lessonId);
      nextProgress.push({ lessonId: payload.lessonId, completed: Boolean(payload.completed), updatedAt: new Date().toISOString() });
      writeMockProgress(nextProgress);
      return { progress: nextProgress };
    }
    default:
      return { message: 'Mock route handled.' };
  }
}

async function request(path, options = {}) {
  if (APP_CONFIG.mockMode) {
    return handleMockRequest(path, options);
  }

  const headers = new Headers(options.headers || {});
  headers.set('Accept', 'application/json');

  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${APP_CONFIG.apiBase}${path}`, {
    credentials: 'include',
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json') ? await response.json() : await response.text();

  if (!response.ok) {
    throw new Error(payload.message || 'Request failed.');
  }

  return payload;
}

export async function getCsrfToken() {
  const result = await request('/auth/csrf', { method: 'GET' });
  return result.csrfToken;
}

export async function registerUser(payload) {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function logoutUser() {
  return request('/auth/logout', { method: 'POST' });
}

export async function requestReset(payload, csrfToken) {
  return request('/auth/reset-request', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'X-CSRF-Token': csrfToken },
  });
}

export async function resetPassword(payload, csrfToken) {
  return request('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'X-CSRF-Token': csrfToken },
  });
}

export async function getSession() {
  return request('/auth/session', { method: 'GET' });
}

export async function initializePayment() {
  return request('/payments/initialize', { method: 'POST' });
}

export async function verifyPayment(reference) {
  return request(`/payments/verify?reference=${encodeURIComponent(reference)}`, { method: 'GET' });
}

export async function getProgress() {
  return request('/progress', { method: 'GET' });
}

export async function markLessonCompleted(lessonId) {
  return request('/progress/track', {
    method: 'POST',
    body: JSON.stringify({ lessonId, completed: true }),
  });
}

export async function issueCertificate() {
  return request('/certificates/issue', { method: 'POST' });
}
