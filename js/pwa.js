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

  let deferredPrompt;
  const installButton = document.getElementById('install-button');

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton?.classList.remove('hidden');
  });

  installButton?.addEventListener('click', async () => {
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    installButton.classList.add('hidden');
  });
}
