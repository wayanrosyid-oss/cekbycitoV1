// Naikkan angka ini SETIAP KALI Anda mengubah app.js / index.html / style,
// supaya user lama otomatis dapat versi baru (bukan stuck di cache lawas).
const CACHE_VERSION = "v2";
const CACHE_NAME = "cek-by-cito-" + CACHE_VERSION;

const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512-maskable.png",
  "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&family=JetBrains+Mono:wght@500;700&display=swap"
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(APP_SHELL.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Strategi:
// - HTML & app.js (paling sering berubah) -> NETWORK-FIRST, fallback ke cache saat offline.
// - Aset lain (font, icon, manifest) -> CACHE-FIRST, lebih cepat & hemat data.
const NETWORK_FIRST_PATHS = ["/index.html", "/app.js", "/"];

function isNetworkFirst(url) {
  const path = new URL(url).pathname;
  return NETWORK_FIRST_PATHS.some((p) => path === p || path.endsWith(p));
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const isSameOrigin = event.request.url.startsWith(self.location.origin);

  if (isSameOrigin && isNetworkFirst(event.request.url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
