/* companies-wall.js — companies section that scales past three businesses.
 *
 * Replaces companies-scrolly.js for the grid variant. Two differences that
 * matter:
 *
 *   1. The ingot scrub is mapped to `.companies-wall__cinematic`, a spacer with
 *      a CONSTANT height in CSS. companies-scrolly.js mapped it to the whole
 *      section, whose height was `companies x 100vh` — so every company added
 *      stretched the same 121 frames over more scrolling until the animation
 *      read as frozen. Here the travel is fixed no matter the company count.
 *
 *   2. No per-company ScrollTrigger. The old module created one instance per
 *      fold to track which was active; the grid shows all of them at once, so
 *      there is nothing to track.
 *
 * The canvas frame loader (sizing, DPR, progressive decode, closest-frame
 * fallback) is carried over from companies-scrolly.js unchanged — it was
 * already tuned and there was no reason to rewrite it. */

const FRAME_PATH = '/assets/images/ingot-frames/ingot-three-facets_';
const FRAME_EXT = '.webp';
const FRAME_COUNT = 121;
const HASH_PREFIX = 'companies-';
/* Slightly longer than --duration-base (400ms) so the panel is only unmounted
   once its collapse has finished. */
const COLLAPSE_MS = 440;

const pad = (n) => String(n).padStart(4, '0');
const frameUrl = (i) => `${FRAME_PATH}${pad(i)}${FRAME_EXT}`;

export function initCompaniesWall() {
  const section = document.querySelector('.companies-wall');
  if (!section) return;

  // The accordion is wired first and unconditionally — expanding a company must
  // work with reduced motion on, with GSAP blocked, or if the canvas fails.
  initAccordion(section);
  initSpotlight(section);
  initEntrance(section);
  initCinematic(section);
}

/* ------------------------------------------------------------------
   Staggered entrance
   ------------------------------------------------------------------ */

/* Tiles wipe up in a diagonal cascade the first time the grid is reached.
   The `is-armed` class is what hides them, and it is only ever applied from
   here — so if this module fails to load, the grid renders plainly rather
   than staying invisible. */
function initEntrance(section) {
  const grid = section.querySelector('.companies-wall__grid');
  if (!grid) return;

  const tiles = Array.from(grid.querySelectorAll('.company-tile'));
  if (!tiles.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const columns = () => {
    const tracks = window.getComputedStyle(grid).gridTemplateColumns;
    return tracks && tracks !== 'none' ? tracks.split(' ').filter(Boolean).length : 1;
  };
  const cols = columns();
  tiles.forEach((tile, i) => {
    // Diagonal rather than straight left-to-right: row + column, so the wave
    // travels across the grid instead of marching along it.
    const wave = Math.floor(i / cols) + (i % cols);
    tile.style.setProperty('--tile-delay', `${wave * 90}ms`);
  });

  grid.classList.add('is-armed');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      grid.classList.add('is-revealed');
      io.disconnect();
    });
  }, { threshold: 0.12 });
  io.observe(grid);
}

/* ------------------------------------------------------------------
   Expand in place
   ------------------------------------------------------------------ */

function initAccordion(section) {
  const wall = section.querySelector('.companies-wall__grid');
  if (!wall) return;

  // Panels are siblings of their tiles in the grid, not children — they are
  // paired through aria-controls.
  const tiles = Array.from(wall.querySelectorAll('.company-tile'));
  const entries = tiles
    .map((tile) => {
      const trigger = tile.querySelector('.company-tile__trigger');
      const panelId = trigger && trigger.getAttribute('aria-controls');
      return {
        tile,
        trigger,
        panel: panelId ? document.getElementById(panelId) : null,
        unmountTimer: 0,
      };
    })
    .filter((entry) => entry.trigger && entry.panel);

  if (!entries.length) return;

  // Count readout in the cinematic reflects the real number of tiles, so it
  // stays honest as companies are added.
  const countValue = section.querySelector('.companies-wall__count-value');
  if (countValue) countValue.textContent = String(entries.length).padStart(2, '0');

  let current = null;

  const close = (entry) => {
    if (!entry) return;
    window.clearTimeout(entry.unmountTimer);
    entry.tile.classList.remove('is-open');
    entry.panel.classList.remove('is-open');
    entry.trigger.setAttribute('aria-expanded', 'false');
    // `inert` keeps the panel's links out of the tab order and out of the
    // accessibility tree during the collapse, before display:none takes over.
    entry.panel.setAttribute('inert', '');
    entry.tile.dataset.cursor = 'Expand';
    // Stay mounted until the collapse finishes, then drop out of grid
    // placement so the tiles repack.
    entry.unmountTimer = window.setTimeout(() => {
      entry.panel.classList.remove('is-mounted');
    }, COLLAPSE_MS);
    if (current === entry) current = null;
  };

  const open = (entry) => {
    if (current && current !== entry) close(current);
    window.clearTimeout(entry.unmountTimer);

    placePanel(wall, tiles, entry);
    entry.panel.classList.add('is-mounted');
    // Force layout so the 0fr start value is committed before 1fr is applied.
    // Without this the browser coalesces both into one style change and the
    // panel snaps open with no transition.
    void entry.panel.offsetHeight;

    entry.tile.classList.add('is-open');
    entry.panel.classList.add('is-open');
    entry.trigger.setAttribute('aria-expanded', 'true');
    entry.panel.removeAttribute('inert');
    entry.tile.dataset.cursor = 'Collapse';
    current = entry;
  };

  entries.forEach((entry) => {
    entry.trigger.setAttribute('aria-expanded', 'false');
    entry.panel.setAttribute('inert', '');

    entry.trigger.addEventListener('click', () => {
      if (current === entry) {
        close(entry);
        return;
      }
      open(entry);
      revealPanel(entry);
    });
  });

  // Escape closes the open panel and hands focus back to its tile
  section.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !current) return;
    const entry = current;
    close(entry);
    entry.trigger.focus();
  });

  // Column count changes at the breakpoints, so the open panel may belong at
  // the end of a different row after a resize.
  let placeTimer;
  window.addEventListener('resize', () => {
    if (!current) return;
    window.clearTimeout(placeTimer);
    placeTimer = window.setTimeout(() => {
      if (current) placePanel(wall, tiles, current);
    }, 150);
  });

  // Deep link — /index-grid.html#companies-artech opens that company on arrival
  const slug = window.location.hash.replace('#', '');
  if (slug.startsWith(HASH_PREFIX)) {
    const match = entries.find(
      (entry) => entry.tile.dataset.company === slug.slice(HASH_PREFIX.length)
    );
    if (match) {
      open(match);
      window.setTimeout(() => scrollTo(match.trigger, 'center'), 120);
    }
  }
}

/* Move the panel so it follows the LAST tile in its tile's visual row. Grid
   auto-placement then drops it onto the row directly beneath, full width, with
   the remaining tiles carrying on below — instead of the panel splitting the
   row it was authored in.
   Column count is read back from the resolved grid so the responsive
   breakpoints live in one place (the stylesheet) rather than being duplicated
   here. */
function placePanel(wall, tiles, entry) {
  const index = tiles.indexOf(entry.tile);
  if (index < 0) return;
  const columns = columnCount(wall);
  const lastInRow = Math.min(Math.ceil((index + 1) / columns) * columns, tiles.length) - 1;
  const anchor = tiles[lastInRow];
  if (!anchor || anchor.nextElementSibling === entry.panel) return;
  wall.insertBefore(entry.panel, anchor.nextSibling);
}

function columnCount(wall) {
  const tracks = window.getComputedStyle(wall).gridTemplateColumns;
  if (!tracks || tracks === 'none') return 1;
  return tracks.split(' ').filter(Boolean).length;
}

/* Once the panel has finished unfolding, pull it into view if it opened below
   the fold. Waits out the CSS transition so the measurement is of the final
   height, not a mid-animation one. */
function revealPanel(entry) {
  window.setTimeout(() => {
    const rect = entry.panel.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top >= 0 && rect.bottom <= viewport) return;
    scrollTo(entry.panel, 'nearest');
  }, 440);
}

/* Route through Lenis where it is running — a native smooth scrollIntoView
   fights the Lenis rAF loop and lands in the wrong place. */
function scrollTo(element, block) {
  const lenis = window.__lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    const offset = block === 'center'
      ? -(window.innerHeight - element.getBoundingClientRect().height) / 2
      : -96;
    lenis.scrollTo(element, { offset });
    return;
  }
  element.scrollIntoView({ block, behavior: 'smooth' });
}

/* ------------------------------------------------------------------
   Cursor-tracked accent glow
   ------------------------------------------------------------------ */

function initSpotlight(section) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiles = Array.from(section.querySelectorAll('.company-tile'));
  if (!tiles.length) return;

  let frame = 0;
  let pending = null;

  const apply = () => {
    frame = 0;
    if (!pending) return;
    const { target, x, y } = pending;
    const rect = target.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    target.style.setProperty('--mx', `${((x - rect.left) / rect.width) * 100}%`);
    target.style.setProperty('--my', `${((y - rect.top) / rect.height) * 100}%`);
  };

  tiles.forEach((tile) => {
    tile.addEventListener('pointermove', (event) => {
      pending = { target: tile, x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(apply);
    }, { passive: true });
  });
}

/* ------------------------------------------------------------------
   Fixed-length ingot cinematic
   ------------------------------------------------------------------ */

function initCinematic(section) {
  const cinematic = section.querySelector('.companies-wall__cinematic');
  const canvas = section.querySelector('.companies-wall__canvas');
  if (!cinematic || !canvas) return;

  // Reduced motion: leave the static first-frame <img> showing and never touch
  // the canvas. The CSS also collapses the spacer to a single panel, so there
  // is no long empty scroll past a frozen render.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const frames = new Array(FRAME_COUNT + 1);

  function sizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    canvas.width = Math.round(rect.width * dpr);
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
    else { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
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
    img.onload = () => onLoad?.(i);
    img.onerror = () => { frames[i] = null; };
    frames[i] = img;
  }

  sizeCanvas();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sizeCanvas();
      drawFrame(currentFrame);
    }, 120);
  });

  // Phase 1 — endpoints plus a sparse subset, so scrubbing is usable early
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

  // Phase 2 — backfill the remainder in small chunks
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

  // Trigger is the fixed-height spacer, NOT the section. This is what caps the
  // scroll: the spacer is a constant in CSS, so travel never grows with the
  // number of companies.
  const proxy = { frame: 1 };
  gsap.to(proxy, {
    frame: FRAME_COUNT,
    ease: 'none',
    scrollTrigger: {
      trigger: cinematic,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: () => showFrame(proxy.frame),
    },
  });
}
