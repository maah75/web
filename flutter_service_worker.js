'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c804f55fcd3ae48cc9ed47d61e5ac034",
"/": "c804f55fcd3ae48cc9ed47d61e5ac034",
"main.dart.js": "21bf197544cb1b6b7bebc7ac44d50d51",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8461c377b19e3084c18a0b58e5888c75",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "16601246474e37a05a0b5beb342ac7cb",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/Background.png": "dd575d260c674deafd2c4e1a83d25a9a",
"assets/assets/img/logo.png": "e5820b4ffa79796b294cff23fb571672"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
