/* grid-experience.js — the motion layer for index-grid.html.
 *
 * Page-scoped: every hook is an attribute (`data-kinetic`, `data-parallax`,
 * `data-magnetic`, `data-cursor`, `data-section`) that only exists on this page,
 * so nothing here can affect index.html or the inner pages.
 *
 * One easing family, one reveal idiom (mask + translate, never a bare fade),
 * and a single rAF loop shared by the cursor, the parallax layers and the
 * scroll readout so the page never runs competing animation loops. */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initGridExperience() {
  const body = document.body;
  if (!body.classList.contains('page-grid')) return;

  // Signals to CSS that the motion layer is alive. Every "hidden until
  // revealed" rule is scoped to this class, so a failure here leaves the page
  // fully legible instead of blank.
  body.classList.add('js-motion');

  splitKineticText();
  initReticle();
  initMagnetic();
  initBand();

  const scroll = initScrollSystems();

  // Reveals wait for the boot curtain so the hero headline animates into an
  // empty stage rather than behind it. grid-preloader always fires this, even
  // when it skips (repeat visit, reduced motion), so this never deadlocks.
  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    scroll.watchReveals(collectRevealTargets());
    scroll.enable();
  };
  if (body.classList.contains('is-booted')) {
    start();
  } else {
    window.addEventListener('jwv:ready', start, { once: true });
    // Safety net: if the boot module ever throws before dispatching, the
    // masked headings would stay hidden forever. Start regardless.
    setTimeout(start, 3000);
  }
}

/* ------------------------------------------------------------------
   Kinetic type — wrap every word in a mask so it can slide up
   ------------------------------------------------------------------ */

/* Walks text nodes rather than reading textContent, so inline markup inside a
   heading (the <em> in "Three companies. One partnership.") survives intact. */
function splitKineticText() {
  document.querySelectorAll('[data-kinetic]').forEach((root) => {
    if (root.dataset.kineticDone) return;
    root.dataset.kineticDone = '1';

    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          if (!child.data.trim()) return;
          const frag = document.createDocumentFragment();
          child.data.split(/(\s+)/).forEach((token) => {
            if (!token) return;
            if (!token.trim()) {
              frag.appendChild(document.createTextNode(token));
              return;
            }
            const outer = document.createElement('span');
            outer.className = 'kw';
            const inner = document.createElement('span');
            inner.className = 'kw__i';
            inner.textContent = token;
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(root);

    const base = parseInt(root.dataset.kineticDelay || '0', 10);
    root.querySelectorAll('.kw__i').forEach((word, i) => {
      word.style.setProperty('--kd', `${base + i * 38}ms`);
    });
  });
}

/* ------------------------------------------------------------------
   Reveal observers
   ------------------------------------------------------------------ */

/* Reveals are driven by the shared scroll loop rather than an
   IntersectionObserver. An observer only reports elements whose intersection
   state *changes*, so a jump — an in-page anchor, Cmd+End, or a browser
   restoring scroll position on reload — skips straight past mid-page headings
   without ever firing, leaving them masked and invisible for good. A position
   check catches "already scrolled past" as naturally as "coming into view". */
function collectRevealTargets() {
  const targets = [
    ...document.querySelectorAll('[data-kinetic]'),
    ...document.querySelectorAll('.page-grid .who-we-are__media'),
  ];
  if (REDUCED) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return [];
  }
  return targets;
}

/* ------------------------------------------------------------------
   Reticle cursor
   ------------------------------------------------------------------ */

function initReticle() {
  const el = document.querySelector('.reticle');
  if (!el || !FINE_POINTER || REDUCED) return;

  const label = el.querySelector('.reticle__label');
  document.body.classList.add('has-reticle');

  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let x = tx;
  let y = ty;
  let live = false;

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!live) { live = true; x = tx; y = ty; el.classList.add('is-live'); }
  }, { passive: true });

  let hovered = null;

  document.addEventListener('pointerover', (e) => {
    const hit = e.target.closest('[data-cursor]');
    if (!hit) return;
    hovered = hit;
    label.textContent = hit.dataset.cursor || '';
    el.classList.add('is-active');
  });
  document.addEventListener('pointerout', (e) => {
    const hit = e.target.closest('[data-cursor]');
    if (!hit) return;
    if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('[data-cursor]') === hit) return;
    hovered = null;
    el.classList.remove('is-active');
  });
  document.addEventListener('pointerdown', () => el.classList.add('is-down'));
  document.addEventListener('pointerup', () => el.classList.remove('is-down'));

  const tick = () => {
    // Trails the pointer slightly — an instrument settling, not a laser dot.
    x = lerp(x, tx, 0.19);
    y = lerp(y, ty, 0.19);
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    // Re-read the label each frame so a target that changes its own verb while
    // hovered — a tile flipping Expand/Collapse — updates without a re-entry.
    if (hovered) {
      const next = hovered.dataset.cursor || '';
      if (next !== label.textContent) label.textContent = next;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ------------------------------------------------------------------
   Magnetic buttons
   ------------------------------------------------------------------ */

function initMagnetic() {
  if (!FINE_POINTER || REDUCED) return;

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    let raf = 0;
    let pending = null;

    const apply = () => {
      raf = 0;
      if (!pending) return;
      const r = el.getBoundingClientRect();
      const dx = (pending.x - (r.left + r.width / 2)) * 0.28;
      const dy = (pending.y - (r.top + r.height / 2)) * 0.42;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    el.addEventListener('pointermove', (e) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(apply);
    }, { passive: true });

    el.addEventListener('pointerleave', () => {
      pending = null;
      el.style.transform = '';
    });
  });
}

/* ------------------------------------------------------------------
   Oversized band — moves horizontally with scroll position
   ------------------------------------------------------------------ */

function initBand() {
  const band = document.querySelector('.band');
  const track = band && band.querySelector('.band__track');
  if (!band || !track || REDUCED) return;
  if (!window.gsap || !window.ScrollTrigger) return;

  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  gsap.fromTo(track,
    { xPercent: 0 },
    {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: { trigger: band, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    });
}

/* ------------------------------------------------------------------
   Scroll progress bar, section readout, parallax layers
   ------------------------------------------------------------------ */

function initScrollSystems() {
  const fill = document.querySelector('.scan__fill');
  const readout = document.querySelector('.readout');
  const indexEl = document.querySelector('.readout__index');
  const totalEl = document.querySelector('.readout__total');
  const nameEl = document.querySelector('.readout__name');
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const layers = Array.from(document.querySelectorAll('[data-parallax]'));

  if (totalEl) totalEl.textContent = String(sections.length).padStart(2, '0');

  let enabled = false;
  let active = -1;
  let raf = 0;
  let reveals = [];

  const frame = () => {
    raf = 0;
    const y = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;

    // Anything whose top has crossed 88% of the viewport is revealed — which
    // covers elements arriving from below and elements already scrolled past.
    if (reveals.length) {
      const line = vh * 0.88;
      for (let i = reveals.length - 1; i >= 0; i--) {
        if (reveals[i].getBoundingClientRect().top < line) {
          reveals[i].classList.add('is-revealed');
          reveals.splice(i, 1);
        }
      }
    }

    // Only live between the hero and the footer. Both ends own that bottom-left
    // corner already — the hero's data strip and the copyright line — and the
    // readout lands right on top of them otherwise.
    if (readout) {
      const nearEnd = y + vh > document.documentElement.scrollHeight - 220;
      readout.classList.toggle('is-live', y > vh * 0.7 && !nearEnd);
    }

    if (fill) {
      const max = document.documentElement.scrollHeight - vh;
      fill.style.transform = `scaleX(${clamp01(max > 0 ? y / max : 0)})`;
    }

    if (sections.length) {
      const mark = y + vh * 0.4;
      let next = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= mark) next = i;
      }
      if (next !== active) {
        active = next;
        if (indexEl) indexEl.textContent = String(next + 1).padStart(2, '0');
        if (nameEl) nameEl.textContent = sections[next].dataset.section || '';
      }
    }

    if (!REDUCED) {
      layers.forEach((layer) => {
        const r = layer.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        // -1..1 across the viewport, so the layer drifts through its own frame
        const progress = (r.top + r.height / 2 - vh / 2) / vh;
        const amount = parseFloat(layer.dataset.parallax || '0');
        layer.style.transform = `translate3d(0, ${(progress * amount).toFixed(2)}px, 0)`;
      });
    }
  };

  const onScroll = () => {
    if (!enabled || raf) return;
    raf = requestAnimationFrame(frame);
  };

  return {
    watchReveals(list) { reveals = list; },
    enable() {
      if (enabled) return;
      enabled = true;
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      frame();
    },
  };
}
