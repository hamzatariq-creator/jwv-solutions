/* grid-preloader.js — boot sequence for index-grid.html.
 *
 * Replaces the shared preloader.js on this page (main-grid.js calls this
 * instead of initPreloader). Differences that matter:
 *   - counts real progress 0→100 instead of holding a fixed 3.05s bar
 *   - ~1.6s minimum instead of 3.05s; a splash that outstays its welcome reads
 *     as slow, not premium
 *   - exits with a two-panel curtain part rather than a fade
 *   - always fires `jwv:ready`, including on the skip paths, because the page's
 *     reveal system waits on that event
 *
 * Same sessionStorage key semantics as the shared module: once per tab. */

const SEEN_KEY = 'jwv-boot-shown';
const MIN_HOLD_MS = 1600;
const PART_MS = 1000;

export function initGridPreloader() {
  const el = document.querySelector('.boot');
  const done = () => {
    document.body.classList.add('is-booted');
    window.dispatchEvent(new CustomEvent('jwv:ready'));
  };

  if (!el) { done(); return; }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let seen = false;
  try {
    seen = sessionStorage.getItem(SEEN_KEY) === '1';
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch (e) { /* private browsing — just show it */ }

  if (seen || reduced) {
    el.remove();
    done();
    return;
  }

  const value = el.querySelector('.boot__count-value');
  const fill = el.querySelector('.boot__rule-fill');

  const started = performance.now();
  const loaded = new Promise((resolve) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });

  let settled = false;
  let shown = 0;

  // Two inputs race to 100: elapsed time against MIN_HOLD, and real load state.
  // Whichever is further behind holds the number back, so the count always
  // reflects something true rather than running a fake timeline.
  let loadTarget = 0;
  loaded.then(() => { loadTarget = 100; });

  const tick = () => {
    const byTime = ((performance.now() - started) / MIN_HOLD_MS) * 100;
    const target = Math.min(byTime, settled ? 100 : Math.max(loadTarget, byTime * 0.92));
    shown += (Math.min(target, 100) - shown) * 0.12;

    const n = Math.min(100, Math.round(shown));
    if (value) value.textContent = String(n);
    if (fill) fill.style.transform = `scaleX(${n / 100})`;

    if (n >= 100) { part(); return; }
    requestAnimationFrame(tick);
  };

  Promise.all([
    loaded,
    new Promise((r) => setTimeout(r, MIN_HOLD_MS)),
  ]).then(() => { settled = true; });

  requestAnimationFrame(tick);

  let parted = false;
  function part() {
    if (parted) return;
    parted = true;
    if (value) value.textContent = '100';
    if (fill) fill.style.transform = 'scaleX(1)';

    // Beat before the curtain so 100 is legible, then part and hand off.
    setTimeout(() => {
      el.classList.add('is-parting');
      done();
      setTimeout(() => el.remove(), PART_MS + 60);
    }, 220);
  }
}
