const CACHE_NAME = "esm-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/db.js",
  "/tournament.html",
  "/teams.html",
  "/players.html",
  "/matches.html",
  "/standings.html",
  "/bracket.html",
  "/media.html",
  "/faqs.html"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
