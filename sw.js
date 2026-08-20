// Service worker that caches core assets for offline access and fast loading. 
const CACHE_NAME = 'zentrix-academy-v5';
const APP_SHELL = [
  './',
  './index.html',
  './login.html',
  './register.html',
  './payment.html',
  './welcome.html',
  './course.html',
  './privacy.html',
  './terms.html',
  './support.html',
  './certificate.html',
  './css/styles.css',
  './js/app.js',
  './js/api.js',
  './js/config.js',
  './js/course-data.js',
  './js/pwa.js',
  './manifest.webmanifest',
  './assets/icons/icon-192.svg',
  './assets/images/hero-illustration.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    try {
      const networkResponse = await fetch(event.request);
      if (networkResponse.ok) {
        const copy = networkResponse.clone();
        await caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return networkResponse;
    } catch {
      return cached || caches.match('./offline.html').then((offlineResponse) => offlineResponse || new Response('Offline', { status: 503 }));
    }
  })());
});
