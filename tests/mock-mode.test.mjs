import test from 'node:test';
import assert from 'node:assert/strict';

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

const mockLocation = { hostname: 'localhost', search: '?mock=1' };
globalThis.window = { localStorage: createMemoryStorage(), location: mockLocation };
globalThis.location = mockLocation;

const { APP_CONFIG } = await import('../js/config.js');
const { getCsrfToken, registerUser, getSession, getProgress, markLessonCompleted } = await import('../js/api.js');

test('mock mode enables local auth and progress updates', async () => {
  assert.equal(APP_CONFIG.mockMode, true);

  const csrf = await getCsrfToken();
  assert.equal(csrf, 'mock-csrf-token');

  const registration = await registerUser({
    fullName: 'Ada Lovelace',
    email: 'ada@example.com',
    phone: '08000000000',
    password: 'demo123',
  }, 'mock-token');

  assert.equal(registration.accessGranted, true);

  const session = await getSession();
  assert.equal(session.user.email, 'ada@example.com');

  const initialProgress = await getProgress();
  assert.deepEqual(initialProgress.progress, []);

  await markLessonCompleted('lesson-1');
  const updatedProgress = await getProgress();
  assert.equal(updatedProgress.progress[0].lessonId, 'lesson-1');
  assert.equal(updatedProgress.progress[0].completed, true);
});
