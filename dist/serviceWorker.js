const cacheName = "dev-justclimb";

const assets = [
  "/",
  "/assets", // NOTE: This has to be solved for Vite
  "/images/justclimb-logo-192x192.png",
  "/images/justclimb-logo"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
