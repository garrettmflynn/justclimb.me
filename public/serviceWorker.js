const cacheName = "dev-justclimb";

let pathname = globalThis.location.pathname
if (pathname.includes('.html')) pathname = pathname.split('/').slice(0, -1).join('/')

const assets = [
  // pathname ?? '/', // NOTE: This breaks
  `${pathname}/assets`, // NOTE: This has to be solved for Vite
  `${pathname}/images/justclimb-logo-192x192.png`,
  `${pathname}/images/justclimb-logo`
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
