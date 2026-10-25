/* Zeftawii service worker: pages network-first (offline fallback), assets stale-while-revalidate */
const V = 'zf-v2';
const SHELL = ['/offline.html', '/favicon.svg', '/icon-192.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r).then((m) => m || caches.match('/offline.html'))));
    return;
  }
  if (/\.(?:js|css|png|jpe?g|svg|webp|woff2?|ico)$/.test(u.pathname)) {
    e.respondWith(caches.match(r).then((m) => { const f = fetch(r).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); } return res; }).catch(() => m); return m || f; }));
  }
});
