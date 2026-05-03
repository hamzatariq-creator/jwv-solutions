/* reveal.js — IntersectionObserver scroll-into-view reveals.
   Targets: .reveal, .reveal--stagger, .fade-in
   Adds .is-visible when the element enters the viewport. */
export function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal--stagger, .fade-in');
  if (!targets.length) return;

  // Stagger children: set --i custom property based on child index
  document.querySelectorAll('.reveal--stagger').forEach((parent) => {
    [...parent.children].forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  // Reduced motion: just mark everything visible immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
