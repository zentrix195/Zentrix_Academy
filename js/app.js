// Main application logic for the Zentrix Academy page flows.
import { APP_CONFIG } from './config.js';
import { COURSE_DATA } from './course-data.js';
import {
  getCsrfToken,
  registerUser,
  loginUser,
  logoutUser,
  requestReset,
  getSession,
  initializePayment,
  verifyPayment,
  getProgress,
  markLessonCompleted,
  issueCertificate,
} from './api.js';
import { initPwa } from './pwa.js';

const state = {
  csrfToken: '',
  user: null,
  accessGranted: false,
  progress: [],
  currentLessonId: null,
  theme: 'dark',
};

const elements = {
  loadingScreen: document.getElementById('loading-screen'),
  paymentGate: document.getElementById('payment-gate'),
  unlockCourse: document.getElementById('unlock-course'),
  registerForm: document.getElementById('register-form'),
  loginForm: document.getElementById('login-form'),
  logoutButton: document.getElementById('logout-button'),
  lessonSidebar: document.getElementById('lesson-sidebar'),
  lessonTitle: document.getElementById('lesson-title'),
  lessonBody: document.getElementById('lesson-body'),
  lessonCompletionStatus: document.getElementById('lesson-completion-status'),
  courseProgressBar: document.getElementById('course-progress-bar'),
  courseProgressLabel: document.getElementById('course-progress-label'),
  courseCompleteMessage: document.getElementById('course-complete-message'),
  completeLesson: document.getElementById('complete-lesson'),
  prevLesson: document.getElementById('prev-lesson'),
  nextLesson: document.getElementById('next-lesson'),
  toast: document.getElementById('toast'),
  themeToggle: document.getElementById('theme-toggle'),
};

function getCurrentPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/login')) return 'login';
  if (path.includes('/register')) return 'register';
  if (path.includes('/payment')) return 'payment';
  if (path.includes('/welcome')) return 'welcome';
  if (path.includes('/certificate')) return 'certificate';
  if (path.includes('/course')) return 'course';
  return 'landing';
}

function init() {
  bindEvents();
  initPwa();
  bootstrap();
  setTimeout(() => {
    elements.loadingScreen?.classList.add('hidden');
  }, 350);
}

function bindEvents() {
  bindMobileNavigation();
  bindPasswordToggles();
  elements.registerForm?.addEventListener('submit', handleRegister);
  elements.loginForm?.addEventListener('submit', handleLogin);
  elements.logoutButton?.addEventListener('click', handleLogout);
  elements.unlockCourse?.addEventListener('click', handleUnlockCourse);
  elements.completeLesson?.addEventListener('click', handleCompleteLesson);
  elements.prevLesson?.addEventListener('click', () => navigateLesson(-1));
  elements.nextLesson?.addEventListener('click', () => navigateLesson(1));
  elements.themeToggle?.addEventListener('click', toggleTheme);
}

function bindPasswordToggles() {
  document.querySelectorAll('.password-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const input = toggle.closest('.password-field')?.querySelector('input');
      if (!input) {
        return;
      }

      const isVisible = input.type === 'text';
      input.type = isVisible ? 'password' : 'text';
      toggle.textContent = isVisible ? 'Show' : 'Hide';
      toggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
      toggle.setAttribute('aria-pressed', String(!isVisible));
    });
  });
}

function bindMobileNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-menu-toggle');
  const navigation = document.querySelector('.nav-links');
  if (!header || !toggle || !navigation) {
    return;
  }

  navigation.id = 'primary-navigation';
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });
}

async function bootstrap() {
  try {
    state.csrfToken = await getCsrfToken();
  } catch (error) {
    console.warn('Unable to fetch CSRF token', error);
  }

  const paymentReference = new URLSearchParams(window.location.search).get('reference');
  if (paymentReference && getCurrentPage() === 'welcome') {
    try {
      await verifyPayment(paymentReference);
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.warn('Payment verification is pending', error);
    }
  }

  try {
    const session = await getSession();
    if (session?.user) {
      state.user = session.user;
      state.accessGranted = Boolean(session.accessGranted);
    }
  } catch (error) {
    console.info('No active session', error);
  }

  const page = getCurrentPage();

  if (page === 'payment') {
    if (!state.user) {
      window.location.replace('./login.html');
      return;
    }
    if (state.accessGranted) {
      window.location.replace('./course.html');
      return;
    }
    return;
  }

  if (page === 'welcome') {
    if (!state.user) {
      window.location.replace('./login.html');
      return;
    }
    if (!state.accessGranted) {
      window.location.replace('./payment.html');
      return;
    }
    const welcomeName = document.getElementById('welcome-name');
    if (welcomeName) {
      welcomeName.textContent = state.user.fullName.split(' ')[0];
    }
    return;
  }

  if (page === 'certificate') {
    if (!state.user) {
      window.location.replace('./login.html');
      return;
    }

    await loadProgress();
    if (getCompletedLessons().length !== getAllLessons().length) {
      window.location.replace('./course.html');
      return;
    }

    try {
      const result = await issueCertificate();
      renderCertificate(result.certificate);
    } catch (error) {
      console.warn('Certificate issuance failed', error);
      window.location.replace('./course.html');
    }
    return;
  }

  if (page === 'course') {
    if (!state.user) {
      window.location.replace('./login.html');
      return;
    }

    if (!state.accessGranted) {
      showPaymentGate();
      return;
    }

    await loadProgress();
    state.currentLessonId = getSavedLessonId() || COURSE_DATA.modules[0].lessons[0].id;
    renderLesson();
    return;
  }

  if ((page === 'login' || page === 'register') && state.user && state.accessGranted) {
    window.location.replace('./course.html');
  }
}

function showPaymentGate() {
  elements.paymentGate?.classList.remove('hidden');
  document.getElementById('course-section')?.classList.add('hidden');
}

async function handleUnlockCourse() {
  if (!state.user) {
    window.location.replace('./login.html');
    return;
  }

  try {
    const payment = await initializePayment();
    if (payment.authorizationUrl) {
      window.location.assign(payment.authorizationUrl);
      return;
    }
    showToast('Unable to start checkout.');
  } catch (error) {
    showToast(error.message || 'Unable to start checkout.');
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const payload = {
    fullName: formData.get('fullName')?.toString().trim() || '',
    email: formData.get('email')?.toString().trim() || '',
    phone: formData.get('phone')?.toString().trim() || '',
    password: formData.get('password')?.toString() || '',
    rememberMe: Boolean(formData.get('rememberMe')),
  };

  if (!payload.fullName || !payload.email || !payload.phone || !payload.password) {
    showToast('Please complete all registration fields.');
    return;
  }

  try {
    const csrfToken = await ensureCsrfToken();
    const result = await registerUser(payload, csrfToken);
    state.user = result.user;
    state.accessGranted = Boolean(result.accessGranted);
    showToast('Registration complete. Continue to payment.');
    window.location.assign('./payment.html');
  } catch (error) {
    showToast(error.message || 'Registration failed.');
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const payload = {
    email: formData.get('email')?.toString().trim() || '',
    password: formData.get('password')?.toString() || '',
    rememberMe: Boolean(formData.get('rememberMe')),
  };

  try {
    const csrfToken = await ensureCsrfToken();
    const result = await loginUser(payload, csrfToken);
    state.user = result.user;
    state.accessGranted = Boolean(result.accessGranted);
    showToast('Login successful.');
    window.location.assign(state.accessGranted ? './course.html' : './payment.html');
  } catch (error) {
    showToast(error.message || 'Login failed.');
  }
}

async function handleLogout() {
  try {
    await logoutUser();
    state.user = null;
    state.accessGranted = false;
    state.progress = [];
    showToast('You have been logged out.');
    window.location.assign('./index.html');
  } catch (error) {
    showToast(error.message || 'Logout failed.');
  }
}

async function handleCompleteLesson() {
  if (!state.currentLessonId) {
    return;
  }
  try {
    await markLessonCompleted(state.currentLessonId);
    await loadProgress();
    const lessons = getAllLessons();
    const completedCount = getCompletedLessons().length;
    if (completedCount === lessons.length) {
      showToast('Course completed.');
    } else {
      showToast('Lesson marked complete.');
    }
    renderLesson();
  } catch (error) {
    showToast(error.message || 'Unable to save lesson progress.');
  }
}

function renderLesson() {
  const lesson = getLessonById(state.currentLessonId);
  if (!lesson) {
    return;
  }

  saveCurrentLessonId(lesson.id);
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonBody.innerHTML = renderLessonContent(lesson.content);
  const completed = isLessonCompleted(lesson.id);
  elements.completeLesson.textContent = completed ? 'Completed' : 'Mark complete';
  elements.completeLesson.disabled = completed;
  if (elements.lessonCompletionStatus) {
    elements.lessonCompletionStatus.textContent = completed ? 'Lesson completed' : '';
    elements.lessonCompletionStatus.classList.toggle('visible', completed);
  }
  updateCourseProgress();
  elements.courseCompleteMessage?.classList.toggle('hidden', getCompletedLessons().length !== getAllLessons().length);
  elements.lessonSidebar.innerHTML = COURSE_DATA.modules.map((module) => `
    <div class="curriculum-item">
      <h4>${module.title}</h4>
      ${module.lessons.map((item) => `
        <button class="lesson-item ${item.id === state.currentLessonId ? 'active' : ''}" data-lesson-id="${item.id}">
          ${item.title}
        </button>
      `).join('')}
    </div>
  `).join('');

  elements.lessonSidebar.querySelectorAll('[data-lesson-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentLessonId = button.getAttribute('data-lesson-id');
      renderLesson();
    });
  });
}

function renderCertificate(certificate) {
  const certificateName = document.getElementById('certificate-name');
  const certificateDate = document.getElementById('certificate-date');
  const certificateId = document.getElementById('certificate-id');
  const dateValue = new Date(certificate.issuedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (certificateName) {
    certificateName.textContent = state.user.fullName;
  }
  if (certificateDate) {
    certificateDate.textContent = dateValue;
  }
  if (certificateId) {
    certificateId.textContent = certificate.certificateNumber;
  }
}

function renderLessonContent(content) {
  return content.map((block) => {
    if (block.type === 'heading') {
      return `<h3>${block.value}</h3>`;
    }
    if (block.type === 'paragraph') {
      return `<p>${block.value}</p>`;
    }
    if (block.type === 'list') {
      return `<ul>${block.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    }
    if (block.type === 'orderedList') {
      return `<ol>${block.items.map((item) => `<li>${item}</li>`).join('')}</ol>`;
    }
    if (block.type === 'code') {
      return `<pre><code>${block.value}</code></pre>`;
    }
    if (block.type === 'table') {
      return `
        <table>
          <thead><tr>${block.headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
          <tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      `;
    }
    return '';
  }).join('');
}

function navigateLesson(direction) {
  const lessons = getAllLessons();
  const currentIndex = lessons.findIndex((lesson) => lesson.id === state.currentLessonId);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), lessons.length - 1);
  state.currentLessonId = lessons[nextIndex].id;
  renderLesson();
}

function getAllLessons() {
  return COURSE_DATA.modules.flatMap((module) => module.lessons);
}

function getResumeStorageKey() {
  const userId = state.user?.id || state.user?.email;
  return userId ? `${APP_CONFIG.storageKey}:current-lesson:${userId}` : '';
}

function getSavedLessonId() {
  const key = getResumeStorageKey();
  if (!key || typeof window === 'undefined') {
    return '';
  }

  try {
    const savedLessonId = window.localStorage.getItem(key) || '';
    return getLessonById(savedLessonId) ? savedLessonId : '';
  } catch {
    return '';
  }
}

function saveCurrentLessonId(lessonId) {
  const key = getResumeStorageKey();
  if (!key || typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, lessonId);
  } catch {
    // Resume support is optional when browser storage is unavailable.
  }
}

function getCompletedLessons() {
  return state.progress.filter((entry) => entry.completed);
}

function isLessonCompleted(lessonId) {
  return state.progress.some((entry) => entry.lessonId === lessonId && entry.completed);
}

function updateCourseProgress() {
  const totalLessons = getAllLessons().length;
  const completedCount = getCompletedLessons().length;
  const percent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  if (elements.courseProgressBar) {
    elements.courseProgressBar.style.width = `${percent}%`;
  }
  if (elements.courseProgressLabel) {
    elements.courseProgressLabel.textContent = `${completedCount} of ${totalLessons} lessons complete (${percent}%)`;
  }
}

function getLessonById(lessonId) {
  return COURSE_DATA.modules.flatMap((module) => module.lessons).find((lesson) => lesson.id === lessonId);
}

async function loadProgress() {
  try {
    const result = await getProgress();
    state.progress = (result.progress || []).map((entry) => ({
      lessonId: entry.lessonId || entry.lesson_id,
      completed: Boolean(entry.completed),
    }));
  } catch (error) {
    console.warn('Unable to load progress', error);
    state.progress = [];
  }
}

async function ensureCsrfToken() {
  if (!state.csrfToken) {
    state.csrfToken = await getCsrfToken();
  }
  return state.csrfToken;
}

function showToast(message) {
  if (!elements.toast) {
    return;
  }
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => elements.toast.classList.remove('show'), 2800);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.classList.toggle('light', state.theme === 'light');
}

window.addEventListener('DOMContentLoaded', init);
