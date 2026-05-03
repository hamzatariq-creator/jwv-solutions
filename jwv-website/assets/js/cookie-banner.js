/* cookie-banner.js — minimal first-visit consent. Stores preference in localStorage. */
const STORAGE_KEY = 'jwv:cookie-consent';

export function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return;

  // Show after a short delay so it doesn't compete with first paint
  setTimeout(() => banner.classList.add('is-visible'), 1200);

  banner.querySelectorAll('[data-cookie-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-cookie-action');
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
      } catch (e) {}
      banner.classList.remove('is-visible');
    });
  });
}
