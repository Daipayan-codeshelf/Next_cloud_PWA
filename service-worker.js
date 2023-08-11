self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('nextcloud-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/favicon.png',
          '/index.php',
          '/cron.php',
          '/public.php',

          
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  