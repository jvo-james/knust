const CACHE = 'shuttle-v1';
const ASSETS = ['/', '/index.html', '/shuttle.jpeg', /*…*/];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);

self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, data.options);
});
