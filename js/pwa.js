// Progressive Web App setup for installability, offline support, and app-like behavior. 
export function initPwa() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (error) {
        console.warn('Service worker registration failed', error);
      }
    });
  }

  const installButton = document.getElementById('install-button');

  installButton?.remove();
}
