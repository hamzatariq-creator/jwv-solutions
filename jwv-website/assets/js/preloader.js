/* preloader.js — homepage-only brand splash. Bails out on inner pages (no
   .preloader element) and on subsequent in-session navigations so returning
   visitors don't re-watch the intro every page load. */

const SESSION_KEY = 'jwv-preloader-shown';
const MIN_HOLD_MS = 3050;
const FADE_OUT_MS = 900;

export function initPreloader() {
  const el = document.querySelector('.preloader');
  if (!el) return;

  let shownThisSession = false;
  try { shownThisSession = sessionStorage.getItem(SESSION_KEY) === '1'; } catch (_) {}

  if (shownThisSession) {
    el.parentNode && el.parentNode.removeChild(el);
    return;
  }
  try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (_) {}

  const dismiss = () => {
    if (el.classList.contains('is-leaving')) return;
    el.classList.add('is-leaving');
    setTimeout(() => {
      el.parentNode && el.parentNode.removeChild(el);
    }, FADE_OUT_MS + 80);
  };

  const minHold = new Promise(r => setTimeout(r, MIN_HOLD_MS));
  const loaded = new Promise(r => {
    if (document.readyState === 'complete') r();
    else window.addEventListener('load', r, { once: true });
  });
  Promise.all([minHold, loaded]).then(dismiss);
}
