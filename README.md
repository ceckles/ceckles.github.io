# Portfolio — Chad Eckles

A scrolling, GSAP-animated developer portfolio built with [Astro](https://astro.build), Tailwind CSS, and GSAP ScrollTrigger. Deploys to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Customize

All real content lives in `src/data/*.js` — no need to touch components to update copy:

| File | What it controls |
|---|---|
| `src/data/links.js` | Name, title, bio, roles for the typing effect, socials, resume path |
| `src/data/skills.js` | Skills grid (by category) + the stat tiles in About |
| `src/data/projects.js` | Featured projects + full case-study content (`/projects/[slug]`) |
| `src/data/experience.js` | Vertical timeline entries |
| `src/data/blog.js` | Blog/writing cards — section auto-hides if `posts` is empty |

**Before you deploy, replace these placeholders:**

- `src/data/links.js` — real LinkedIn URL, X/Twitter handle
- `public/resume/resume.pdf` — your actual resume (currently a text stub)
- `src/components/ContactCTA.astro` — sign up at [formspree.io](https://formspree.io) (free) and swap `YOUR_FORM_ID` in the form's `action` attribute, or point it at your own form backend
- `public/images/og-cover.svg` — swap for a real PNG/JPG social-preview image if you want reliable rendering on platforms that don't render SVG `og:image` (e.g. some link-preview bots)
- `src/data/skills.js` — the `Years Building` stat

## Deploy to GitHub Pages

This repo is configured as a **user site** (`https://ceckles.github.io`), so `astro.config.mjs` sets `base: '/'`. Push this project to the `ceckles.github.io` repository's `main` branch.

1. In the repo's Settings → Pages, set **Source** to "GitHub Actions".
2. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically.

> If you instead want this as a **project page** (e.g. `ceckles.github.io/portfolio`), change `base` in `astro.config.mjs` to `/portfolio/` and push to a separate repo named `portfolio`.

## Stack

- **Astro** — static site generation, island architecture, file-based routing
- **Tailwind CSS** — utility styling, dark terminal-inspired theme
- **GSAP + ScrollTrigger** — scroll-based reveal animations (respects `prefers-reduced-motion`)
- **@astrojs/sitemap** — automatic sitemap generation for SEO
