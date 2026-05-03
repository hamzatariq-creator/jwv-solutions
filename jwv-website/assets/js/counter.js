/* counter.js — animate stat numbers from 0 to target value
   when a .stats-band__value enters the viewport.
   Reads target from data-target attribute (numeric only).
   Honors prefers-reduced-motion. */
export function initCounter() {
  const targets = document.querySelectorAll('.stats-band__value[data-target]');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => {
      el.textContent = el.dataset.target + (el.dataset.suffix || '');
    });
    return;
  }

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const animate = (el) => {
    const target = parseFloat(el.dataset.target);
    if (Number.isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const value = Math.round(target * easeOut(progress));
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  targets.forEach((el) => {
    el.textContent = (el.dataset.prefix || '') + '0' + (el.dataset.suffix || '');
    observer.observe(el);
  });
}
