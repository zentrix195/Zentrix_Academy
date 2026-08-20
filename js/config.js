// Shared application configuration and defaults for the frontend.
function resolveMockMode() {
  const location = typeof window !== 'undefined' && window.location
    ? window.location
    : (typeof globalThis !== 'undefined' && globalThis.location ? globalThis.location : null);

  if (!location) {
    return false;
  }

  const params = new URLSearchParams(location.search || '');
  if (params.has('mock')) {
    return params.get('mock') !== '0';
  }

  return false;
}

export const APP_CONFIG = {
  appName: 'Zentrix Academy',
  courseTitle: 'Zentrix Certified Marketing Specialist',
  coursePrice: 3000,
  currency: 'NGN',
  apiBase: 'https://zentrixacademyapi.zentrix195.workers.dev/api',
  storageKey: 'zentrix-academy-session',
  mockMode: resolveMockMode(),
};
