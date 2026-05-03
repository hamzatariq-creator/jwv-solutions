/* nav.js — mobile nav toggle + close on link click + Esc key */
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  // Close on link click
  nav.querySelectorAll('.site-nav__link').forEach((link) => {
    link.addEventListener('click', close);
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
  });

  // Close if resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880 && nav.classList.contains('is-open')) close();
  });
}
