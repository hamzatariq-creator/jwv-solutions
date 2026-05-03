/* hero-animation.js — Heico-style scroll-scrub on the homepage hero.
 *
 * Renders 121 WebP frames to a <canvas> driven by GSAP ScrollTrigger.
 * Frames are loaded progressively (priority on first/last and a sparse
 * subset, then fills in the rest) so the user can see the animation
 * starting immediately and the frames between fill in seamlessly.
 *
 * Falls back to a static image if reduced-motion is requested or if
 * GSAP / ScrollTrigger fail to load.
 */

const FRAME_COUNT = 121;
const FRAME_PATH = '/assets/images/hero-frames/hero-three-streams_';
const FRAME_EXT = '.webp';

function pad(n) {
  return String(n).padStart(4, '0');
}

function frameUrl(i) {
  return `${FRAME_PATH}${pad(i)}${FRAME_EXT}`;
}

export function initHeroScrub() {
  const section = document.querySelector('.hero-pin-spacer');
  const sticky = document.querySelector('.hero-sticky');
  const canvas = document.querySelector('.hero-canvas');
  if (!section || !sticky || !canvas) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Ring-buffer of loaded frames. Indexed 1..FRAME_COUNT for prompt parity.
  const frames = new Array(FRAME_COUNT + 1);

  // Sizing — match canvas pixel buffer to its CSS box * DPR
  function sizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }
  sizeCanvas();
  window.addEventListener('resize', () => {
    sizeCanvas();
    drawFrame(currentFrame);
  });

  // Cover-fit drawing — like CSS object-fit: cover. The mobile layout sizes
  // the canvas to a near-square stage cell, so cover keeps the full cell filled
  // (sides cropped, but no empty letterbox bands).
  function drawFrame(idx) {
    const img = frames[idx];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const cr = cw / ch;
    const ir = iw / ih;

    let dw, dh, dx, dy;
    if (ir > cr) {
      dh = ch; dw = ch * ir; dx = (cw - dw) / 2; dy = 0;
    } else {
      dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
    }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  // Find the closest already-loaded frame to a target index
  function findClosestLoaded(idx) {
    let best = null;
    let bestDist = Infinity;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const f = frames[i];
      if (f && f.complete && f.naturalWidth > 0) {
        const d = Math.abs(i - idx);
        if (d < bestDist) {
          bestDist = d;
          best = i;
          if (d === 0) break;
        }
      }
    }
    return best;
  }

  let currentFrame = 1;
  function showFrame(idx) {
    const target = Math.max(1, Math.min(FRAME_COUNT, Math.round(idx)));
    const loaded = findClosestLoaded(target);
    if (loaded != null) {
      currentFrame = loaded;
      drawFrame(loaded);
    }
  }

  // Progressive frame loading. Strategy:
  //   1. Load frame 1 first (so the canvas shows the start state ASAP)
  //   2. Load frame FRAME_COUNT (so the end state is ready when needed)
  //   3. Load every 12th frame (sparse coverage)
  //   4. Fill in the gaps
  function loadOne(i, onLoad) {
    if (frames[i]) return;
    const img = new Image();
    img.decoding = 'async';
    img.loading = 'eager';
    img.src = frameUrl(i);
    img.onload = () => {
      onLoad?.(i);
    };
    img.onerror = () => {
      // mark as missing so we skip it during draw lookups
      frames[i] = null;
    };
    frames[i] = img;
  }

  let firstFrameReady = false;
  function onFirstFrameReady() {
    if (firstFrameReady) return;
    firstFrameReady = true;
    canvas.classList.add('is-ready');
    drawFrame(1);
  }

  // Phase 1: load frame 1, frame last, and a sparse subset
  loadOne(1, (i) => {
    if (i === 1) onFirstFrameReady();
  });
  loadOne(FRAME_COUNT);

  const sparseStep = 12;
  for (let i = 1 + sparseStep; i < FRAME_COUNT; i += sparseStep) {
    loadOne(i, (idx) => {
      showFrame(currentFrame); // refresh in case current scroll position now has a closer frame
    });
  }

  // Phase 2: fill in the remaining frames (delayed slightly so initial load is fast)
  const fillDelay = 250;
  setTimeout(() => {
    let queue = [];
    for (let i = 2; i < FRAME_COUNT; i++) {
      if (!frames[i]) queue.push(i);
    }
    // Load in chunks to avoid overwhelming the network
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
  }, fillDelay);

  // ScrollTrigger — pin the sticky and scrub the frame index
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

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

  // Initial draw if frame 1 is already cached
  if (frames[1]?.complete && frames[1].naturalWidth > 0) {
    onFirstFrameReady();
  }
}
