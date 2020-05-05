var CACHE_VERSION = 'sw_v8';
var CACHE_FILES = [
  'index.html',
  'images/feccnews-1.png',
  'images/search.png',
  'css/base.css',
  'css/index.css',
  'css/toutiao1.css',
  'css/toutiao2.css',
  'js/ajax.css',
  'js/jquery.min.css',
  'js/sw.css'
];
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
    .then(cache => cache.addAll(CACHE_FILES)));
});
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key, i) {
        if (key !== CACHE_VERSION) {
          return caches.delete(keys[i]);
        }
      }));
    })
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      var requestToCache = event.request.clone();
      return fetch(requestToCache).then(
        function (response) {
          if (!response || response.status !== 200) {
            return response;
          }
          var responseToCache = response.clone();
          caches.open(CACHE_VERSION)
            .then(function (cache) {
              cache.put(requestToCache, responseToCache);
            });
          return response;
        }
      );
    })
  );
});