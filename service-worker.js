const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = 'offline.html';

const FILES_TO_CACHE = [
  OFFLINE_URL,
  'script.js',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887837/sbjaytiLogo_sjbm6a.png',
  'about.js',
  'becomeVolunteer.html',
  'buy_bouquet.js',
  'contact.html',
  'cstyle.css',
  'font-style.css',
  'index.html',
  'media.css',
  'media.js',
  'style.css',
  'nav.css',
  'https://res.cloudinary.com/dts528npw/image/upload/v1722145678/Kisan2_xcorn6.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720930337/wma5dkeol6u1p7vtl8i3.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720895655/about-sky-bg_zr3pjd.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887826/pashudhan_sejjju.gif',
  'https://sabkavikasjayti.onrender.com/image/machinery.gif',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887831/vermi-compost_yhoivx.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887804/book_iffjeu.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887805/brainTech_iy43fp.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887803/cows_jfnumu.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887803/compost_avtedh.jpg',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887827/Product-in-Marketing_processed_hfhorv.png',
  'https://res.cloudinary.com/dts528npw/image/upload/v1720887827/pr-home-bg_yucfas.jpg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
      caches.open(CACHE_NAME)
          .then(cache => {
              console.log('Caching files');
              return cache.addAll(FILES_TO_CACHE);
          })
          .then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(
      caches.keys().then(cacheNames => {
          return Promise.all(
              cacheNames.map(cache => {
                  if (cache !== CACHE_NAME) {
                      console.log('Clearing old cache');
                      return caches.delete(cache);
                  }
              })
          );
      })
  );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
  e.respondWith(
      fetch(e.request)
          .catch(() => caches.match(e.request)
              .then(response => response || caches.match(OFFLINE_URL)))
  );
});
