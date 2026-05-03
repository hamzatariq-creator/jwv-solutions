# JWV Solutions — Holding Company Website

Static HTML site for JWV Solutions, the parent of three operating businesses:

- **Altaris Industrial** — industrial liquids and pastes (contract packaging, toll mixing, post-processing, procurement & warehousing)
- **ARTech Lubricants** — boutique lubricant blender (specialty greases, MIL-SPEC silicones, gear oils)
- **Michaelson Fluid Power** — hydraulic power units, authorized distribution and authorized repair

## Tech stack

- Plain HTML, CSS, and JavaScript (no framework, no build step required)
- GSAP 3 + ScrollTrigger + Lenis (loaded from CDN, only on the homepage) for the hero scroll-scrub animation
- IntersectionObserver for scroll-into-view reveals on inner pages
- Self-hosted WebP image sequence for the hero animation (121 frames, ~5.9 MB total at 1920×1080)
- Google Fonts (Fraunces, Inter) loaded via `<link>` — fully self-host before launch if preferred

## Site structure

```
jwv-website/
├── index.html              # Home (with hero scroll-scrub animation)
├── about.html              # About / how the group operates
├── companies/
│   └── index.html          # Our Companies — 3 cards linking to each operating company
├── partnerships.html       # For founders considering succession
├── contact.html            # Group contact form + operating-company redirects
├── 404.html                # Not Found
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── assets/
│   ├── css/
│   │   ├── reset.css       # modern CSS reset
│   │   ├── tokens.css      # design tokens (colors, type, spacing)
│   │   ├── base.css        # typography, body, links
│   │   ├── layout.css      # containers, grids, sections
│   │   ├── animations.css  # scroll-reveal classes & @keyframes
│   │   ├── components/     # header, footer, button, cards, form
│   │   └── pages/
│   │       ├── home.css    # hero scroll-scrub + homepage sections
│   │       └── inner.css   # inner-page hero, prose, contact, 404
│   ├── js/
│   │   ├── main.js         # entry point — wires up modules
│   │   ├── nav.js          # mobile nav toggle
│   │   ├── reveal.js       # IntersectionObserver scroll reveals
│   │   ├── smooth-scroll.js# Lenis smooth scroll (homepage only)
│   │   ├── hero-animation.js # 121-frame canvas scroll-scrub (homepage only)
│   │   └── form.js         # async form submission
│   ├── images/
│   │   ├── hero-frames/    # 121 WebP frames driving the hero animation
│   │   └── icons/          # favicon, social
│   └── video/
│       └── hero-three-streams.mp4  # source video for the hero (not used at runtime)
└── partials/               # canonical reference snippets (paste into each page)
```

## Editing pages

There is no template engine. Header and footer markup is repeated in every page. To change navigation or footer site-wide:

1. Edit the canonical version in `partials/header.html` or `partials/footer.html`.
2. Search-and-replace the same block across every `*.html` page.

Search for `<!-- Footer -->` or the site-header `<header>` tag to find the boundaries.

If you want to migrate to a partial-include build later, the simplest upgrade path is a tiny Node script that stitches `partials/*.html` into each page before deploy.

## The hero scroll-scrub animation

The homepage hero is a 121-frame WebP sequence drawn to a `<canvas>` and scrubbed by GSAP ScrollTrigger:

- Source video: `assets/video/hero-three-streams.mp4` (3836×2160, 24 fps, 5.04s)
- Extracted to: `assets/images/hero-frames/hero-three-streams_0001.webp` … `_0121.webp` (1920×1080, WebP q:80)
- Total payload: ~5.9 MB (eager-loaded; the first frame is preloaded so the hero is never blank)
- Pin distance: 250 vh (configured in `home.css` `.hero-pin-spacer`)
- Driven by: `assets/js/hero-animation.js`

To regenerate frames from the source video (requires `ffmpeg` and `cwebp`):

```bash
mkdir -p /tmp/jwv-png-frames
ffmpeg -y -i assets/video/hero-three-streams.mp4 -vf "scale=1920:1080:flags=lanczos" -an /tmp/jwv-png-frames/f_%04d.png
cd /tmp/jwv-png-frames
for f in f_*.png; do
  n=$(echo $f | sed 's/f_/hero-three-streams_/' | sed 's/\.png/\.webp/')
  cwebp -q 80 -mt -quiet "$f" -o "/path/to/jwv-website/assets/images/hero-frames/$n"
done
rm -rf /tmp/jwv-png-frames
```

## The contact form

`contact.html` posts to a Formspree endpoint. Replace the placeholder in the form action:

```html
<form ... action="https://formspree.io/f/REPLACE_FORM_ID" method="POST">
```

Set up your Formspree account, create a form, copy the form ID, and replace `REPLACE_FORM_ID`.

If you prefer a different backend (Netlify Forms, Cloudflare Pages Functions, Vercel API route), swap the `action` URL — `assets/js/form.js` works with any endpoint that returns `200 OK` on success.

## Hosting

The site is fully static. Recommended hosts:

1. **Cloudflare Pages** — free, fast global CDN, pairs naturally with Cloudflare DNS for `jwv-solutions.com`. Drag-and-drop ZIP or connect a Git repo.
2. **Netlify** — same workflow, easy drag-and-drop or Git.
3. **Vercel** — same.

Any static host that serves `index.html` and respects directory routing will work.

### `companies/` directory routing

When deploying, ensure your host serves `companies/index.html` when the URL `companies/` is requested. Cloudflare Pages, Netlify, and Vercel do this by default.

## Performance notes

- All pages share the same CSS bundle (~10 KB minified). The hero scroll-scrub assets are isolated to the homepage.
- GSAP / ScrollTrigger / Lenis are loaded ONLY on the homepage (the `<script>` tags are absent on inner pages).
- Inner pages use `IntersectionObserver` for cheap scroll reveals — no library needed.
- All animations respect `prefers-reduced-motion: reduce` and fall back to instant fade-in.
- Hero animation falls back to a static image (`hero-three-streams_0001.webp`) when JS fails or motion is reduced.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari current and previous version). Old IE / Edge Legacy are not supported.
