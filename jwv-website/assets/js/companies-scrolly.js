/* companies-scrolly.js — pinned scrollytelling section that scrubs the Industrial
 * Ingot frame sequence while the user scrolls past three "company folds" stacked
 * below the canvas pane. The ingot rotates from silver-right (Altaris) through
 * gold-center (ARTech) to burgundy-right (Michaelson) over the full scroll length. */

const FRAME_PATH = '/assets/images/ingot-frames/ingot-three-facets_';
const FRAME_EXT  = '.webp';
const FRAME_COUNT = 121;

const pad = (n) => String(n).padStart(4, '0');
const frameUrl = (i) => `${FRAME_PATH}${pad(i)}${FRAME_EXT}`;

export function initCompaniesScrolly() {
  const section = document.querySelector('.companies-scrolly');
  if (!section) return;

  const canvas = section.querySelector('.ingot-canvas');
  const folds = Array.from(section.querySelectorAll('.company-fold'));
  if (!canvas || !folds.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced-motion users get a static layout (no scrub). Mobile keeps the scrub
  // — the section CSS shrinks the sticky canvas to the top half of the viewport
  // so fold content has room to read below.
  if (prefersReducedMotion) {
    folds.forEach((f) => f.classList.add('is-active'));
    if (folds[0]) section.dataset.activeCompany = folds[0].dataset.company || '';
    return;
  }
  if (!window.gsap || !window.ScrollTrigger) return;

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const frames = new Array(FRAME_COUNT + 1);

  function sizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    canvas.width  = Math.round(rect.width  * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }

  function drawFrame(idx) {
    const img = frames[idx];
    if (!img || !img.complete || !img.naturalWidth) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (ir > cr) { dh = ch; dw = ch * ir; dx = (cw - dw) / 2; dy = 0; }
    else         { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function findClosestLoaded(idx) {
    let best = null, bestDist = Infinity;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const f = frames[i];
      if (f && f.complete && f.naturalWidth > 0) {
        const d = Math.abs(i - idx);
        if (d < bestDist) { bestDist = d; best = i; if (d === 0) break; }
      }
    }
    return best;
  }

  let currentFrame = 1;
  function showFrame(idx) {
    const target = Math.max(1, Math.min(FRAME_COUNT, Math.round(idx)));
    const loaded = findClosestLoaded(target);
    if (loaded != null) { currentFrame = loaded; drawFrame(loaded); }
  }

  function loadOne(i, onLoad) {
    if (frames[i]) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = frameUrl(i);
    img.onload  = () => onLoad?.(i);
    img.onerror = () => { frames[i] = null; };
    frames[i] = img;
  }

  // Size canvas + handle resize
  sizeCanvas();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sizeCanvas();
      drawFrame(currentFrame);
    }, 120);
  });

  // Phase 1: load endpoints + sparse subset
  let firstReady = false;
  loadOne(1, () => {
    if (firstReady) return;
    firstReady = true;
    canvas.classList.add('is-ready');
    drawFrame(1);
  });
  loadOne(FRAME_COUNT);
  for (let i = 13; i < FRAME_COUNT; i += 12) {
    loadOne(i, () => showFrame(currentFrame));
  }

  // Phase 2: fill in the rest in chunks
  setTimeout(() => {
    const queue = [];
    for (let i = 2; i < FRAME_COUNT; i++) {
      if (!frames[i]) queue.push(i);
    }
    const chunkSize = 6;
    function loadChunk() {
      const chunk = queue.splice(0, chunkSize);
      if (!chunk.length) return;
      let pending = chunk.length;
      chunk.forEach((idx) => {
        loadOne(idx, () => {
          pending--;
          if (pending === 0) {
            showFrame(currentFrame);
            requestAnimationFrame(loadChunk);
          }
        });
      });
    }
    loadChunk();
  }, 250);

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  // Pin section + scrub frames across the full scroll length
  const proxy = { frame: 1 };
  gsap.to(proxy, {
    frame: FRAME_COUNT,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: () => showFrame(proxy.frame),
    },
  });

  // Each fold drives the active company indicator + section data attribute
  folds.forEach((fold) => {
    ScrollTrigger.create({
      trigger: fold,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          folds.forEach((f) => f.classList.remove('is-active'));
          fold.classList.add('is-active');
          section.dataset.activeCompany = fold.dataset.company || '';
          updateCounter(fold);
        }
      },
    });
  });

  function updateCounter(fold) {
    const indexEl = section.querySelector('.ingot-stage__counter-value');
    const totalEl = section.querySelector('.ingot-stage__counter-total');
    if (indexEl) indexEl.textContent = String(folds.indexOf(fold) + 1).padStart(2, '0');
    if (totalEl) totalEl.textContent = String(folds.length).padStart(2, '0');
  }

  // Activate the first fold by default so something is visible immediately
  if (folds[0]) {
    folds[0].classList.add('is-active');
    section.dataset.activeCompany = folds[0].dataset.company || '';
    updateCounter(folds[0]);
  }
}
