/* main.js — entry point. Wires up all modules. */
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initHeroScrub } from './hero-animation.js';
import { initForms } from './form.js';
import { initCookieBanner } from './cookie-banner.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initCounter } from './counter.js';
import { initCompaniesScrolly } from './companies-scrolly.js';
import { initTheme } from './theme.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Always run
initTheme();
initNav();
initReveal();
initForms();
initCookieBanner();
initCounter();

// Hero entrance — fade in on load
window.addEventListener('load', () => {
  document.body.classList.add('hero-loaded');
});

// Sticky header on scroll
const header = document.querySelector('.site-header');
if (header) {
  let scrolled = false;
  const onScroll = () => {
    const next = window.scrollY > 32;
    if (next !== scrolled) {
      scrolled = next;
      header.classList.toggle('is-scrolled', scrolled);
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Motion-heavy modules — only on homepage and only when not reduced
if (document.body.classList.contains('page-home') && !prefersReducedMotion) {
  // Smooth scroll (Lenis) is opt-in; loaded only here
  initSmoothScroll();
  // Hero scroll-scrub
  initHeroScrub();
  // Companies scrollytelling section (placeholder uses hero frames; swap to ingot frames later)
  initCompaniesScrolly();
}
