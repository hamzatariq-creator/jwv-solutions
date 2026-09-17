/* main-grid.js — entry point for the companies-wall variant (index-grid.html).
 *
 * Identical to main.js except for one swap: initCompaniesScrolly ->
 * initCompaniesWall. It exists as a separate file so the variant can ship
 * without editing main.js, which the live index.html depends on. Every other
 * module is imported from the same shared source — nothing is forked. */
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initHeroPeriodic } from './hero-periodic.js';
import { initForms } from './form.js';
import { initCookieBanner } from './cookie-banner.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initCounter } from './counter.js';
import { initCompaniesWall } from './companies-wall.js';
import { initTheme } from './theme.js';
import { initGridPreloader } from './grid-preloader.js';
import { initGridExperience } from './grid-experience.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Boot sequence replaces the shared preloader on this page. It must run before
// initGridExperience so the reveal system can hook the `jwv:ready` handoff.
initGridPreloader();
initGridExperience();

initTheme();
initNav();
initReveal();
initForms();
initCookieBanner();
initCounter();

// The companies grid runs in every case — the expand/collapse behaviour is
// navigation, not decoration, so it must survive reduced motion. The module
// skips the canvas scrub internally when motion is reduced.
initCompaniesWall();

// Hero artwork. Outside the reduced-motion gate below on purpose: this is the
// hero's visual, not an embellishment, so it always renders. The module itself
// drops the random cycling and holds a few elements lit when motion is reduced.
initHeroPeriodic();

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
  initSmoothScroll();
}
