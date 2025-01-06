if ('caches' in window) {
    // Detecta quando a página foi recarregada
    window.addEventListener('beforeunload', function() {
      // Limpa todos os caches
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);  // Exclui o cache
        });
      });
    });
  }
  