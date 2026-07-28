const CACHE_NAME = 'peptide-bank-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// App installieren und Dateien lokal auf dem Handy speichern
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Anfragen abfangen: Wenn Offline, lade aus dem Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
