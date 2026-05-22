// Princess Palace Service Worker
// Caches everything for full offline use

const CACHE_NAME = 'princess-palace-v1';

// All files to cache on install
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install: cache all files immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Princess Palace: caching all files for offline use');
      return cache.addAll(FILES_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // Not in cache - try network, then cache it
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, toCache);
        });
        return response;
      }).catch(() => {
        // Offline and not cached - return offline page fallback
        return caches.match('/index.html');
      });
    })
  );
});
