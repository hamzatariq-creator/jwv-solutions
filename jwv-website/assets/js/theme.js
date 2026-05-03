/* theme.js — light/dark toggle.
   The early inline head script (see partials/head.html or each page's <head>)
   resolves the initial theme and adds `paper` to <html> before paint. This
   module wires the user-visible toggle button and persists the choice. */

const KEY = 'jwv-theme';

function setTheme(mode) {
  const isLight = mode === 'light';
  document.documentElement.classList.toggle('paper', isLight);
  if (document.body) document.body.classList.toggle('paper', isLight);

  // Update meta theme-color so mobile chrome matches the bg
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isLight ? '#F6F4EF' : '#0E1014');

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.setAttribute('aria-pressed', String(isLight));
    btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  });
}

export function initTheme() {
  // Sync body class with html class set by the inline head script
  if (document.documentElement.classList.contains('paper')) {
    document.body.classList.add('paper');
  }

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    const current = document.documentElement.classList.contains('paper') ? 'light' : 'dark';
    btn.setAttribute('aria-pressed', String(current === 'light'));
    btn.setAttribute('aria-label', current === 'light' ? 'Switch to dark theme' : 'Switch to light theme');

    btn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('paper') ? 'dark' : 'light';
      try { localStorage.setItem(KEY, next); } catch (_) { /* private mode */ }
      setTheme(next);
    });
  });
}
