/* smooth-scroll.js — Lenis smooth scroll integration.
   Lenis is loaded via CDN <script> in scripts.html on the home page only.
   This module ties Lenis into requestAnimationFrame and ScrollTrigger.update. */
export function initSmoothScroll() {
  if (typeof window.Lenis !== 'function') return;

  const lenis = new window.Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });

  // Drive Lenis from rAF
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Bridge Lenis -> ScrollTrigger if loaded
  if (window.ScrollTrigger) {
    lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap?.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap?.ticker.lagSmoothing(0);
  }

  // Expose for debugging / programmatic scroll
  window.__lenis = lenis;
}
