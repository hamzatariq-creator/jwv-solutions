/* preloader.js — drives the percentage counter and dismisses the overlay
   after window load + a minimum hold so the choreography lands. */

const MIN_HOLD_MS = 2500;
const COUNTER_DELAY_MS = 950;
const COUNTER_DURATION_MS = 1700;
const PANEL_EXIT_MS = 1000;

/* Mirrors CSS cubic-bezier(0.65, 0, 0.35, 1) closely enough for the counter. */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function initPreloader() {
  const el = document.querySelector('.preloader');
  if (!el) return;

  const numEl = el.querySelector('[data-count]');
  if (numEl) {
    const startAt = performance.now() + COUNTER_DELAY_MS;
    const tick = (now) => {
      const elapsed = now - startAt;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, elapsed / COUNTER_DURATION_MS);
      numEl.textContent = String(Math.round(easeInOutCubic(t) * 100));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const dismiss = () => {
    if (el.classList.contains('is-leaving')) return;
    el.classList.add('is-leaving');
    const remove = () => el.parentNode && el.parentNode.removeChild(el);
    setTimeout(remove, PANEL_EXIT_MS + 100);
  };

  const minHold = new Promise(r => setTimeout(r, MIN_HOLD_MS));
  const loaded = new Promise(r => {
    if (document.readyState === 'complete') r();
    else window.addEventListener('load', r, { once: true });
  });
  Promise.all([minHold, loaded]).then(dismiss);
}
