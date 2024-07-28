const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = 'offline.html';

const FILES_TO_CACHE = [
  OFFLINE_URL,
  // Update if you have separate CSS files
  'script.js',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887837/sbjaytiLogo_sjbm6a.png'  // Add other assets as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.open(CACHE_NAME)
            .then((cache) => {
              return cache.match(OFFLINE_URL);
            });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});
