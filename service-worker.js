const CACHE_NAME = 'tic-tac-toe-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/tictactoe.js',
  '/icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
