# Portfolio Rebuild Plan — jessesalinas.dev

## Proposed Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Built for static sites, zero JS by default, ships only what you need |
| Styling | **Tailwind CSS v4** | Utility-first, fast to build, small bundle |
| Animations | **GSAP** (ScrollTrigger) | Industry-standard, smooth scroll-based animations |
| Build Output | Static HTML/CSS/JS | No server needed |
| Hosting | **AWS S3 + CloudFront** | Free-tier eligible, global CDN, HTTPS via ACM cert |

---

## Current Status

### ✅ Phase 1 — Project Setup
- Astro project scaffolded (minimal template)
- Tailwind CSS v4 via `@tailwindcss/vite`
- GSAP installed
- Dark theme configured (`#0a0a0a` bg, blue accent, Inter font)
- Project structure: layouts, components, pages, styles

### ✅ Phase 2 — Sections & Content
- **Nav** — Hamburger menu (3 lines → X), half-screen slide-in panel with light gray bg, large bold links with teal strikethrough for active section, "JESSE SALINAS" slides in from left, GitHub icon top-right, IntersectionObserver for active section tracking
- **Hero** — Full-viewport, GSAP slide-up name reveal, async typewriter cycling roles, blinking cursor, mouse scroll SVG with animated wheel, staggered links + scroll CTA
- **Projects** — Filter buttons (All/Frontend/Backend/Full Stack), 6 placeholder project cards, GSAP animated filter transitions (fade + scale), stagger-in on scroll
- **About** — 2-column layout (bio + tech stack), content from original site, GSAP scroll reveal
- **Contact** — Email CTA pill button, footer with copyright, GSAP scroll reveal

### ✅ Phase 3 — Animations (GSAP)
- Section heading slide-up reveals (overflow-hidden mask + translateY)
- Hero name slide-up with `power3.out` easing
- Project filter: GSAP timeline fade/scale transitions
- `prefers-reduced-motion` media query disables all animations
- `gsap.fromTo` with `toggleActions: 'play none none reset'` for reliable scroll animations

### ✅ Horizontal Scroll Transition (matching original site)
- 3-stage system: `hero` → `projects` → `scrolling`
- Hero and Projects sit side-by-side in a `200vw` flex track
- Scroll down on hero → GSAP slides track left (hero exits right, projects enters from left)
- Scroll up on projects → slides back to hero
- Scroll down on projects → smooth scroll into About/Contact (normal flow)
- Scroll back to top from About → re-enters projects stage
- Nav links properly manage stage transitions
- Body `overflow: hidden` during hero/projects stages, unlocked for scrolling
- `scrollRestoration: manual` prevents browser restoring scroll on refresh
- Touch support for mobile (swipe up/down)

### ⬜ Phase 4 — Polish (TODO)
- [ ] Responsive design audit (mobile-first)
- [ ] Accessibility pass (semantic HTML, focus states, ARIA)
- [ ] Meta tags, Open Graph, favicon
- [ ] Performance audit (Lighthouse)

### ⬜ Phase 5 — Deployment (TODO)
- [ ] `astro build` → static output in `dist/`
- [ ] Create S3 bucket for static website hosting
- [ ] CloudFront distribution with ACM SSL cert
- [ ] Update DNS for `jessesalinas.dev`
- [ ] Tear down Digital Ocean droplet

---

## Directory Structure

```
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── docs/
│   └── PLAN.md
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── layouts/
│   │   └── Base.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── About.astro
│   │   └── Contact.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
```

---

## Hosting Cost Comparison

| | Digital Ocean Droplet | AWS S3 + CloudFront |
|---|---|---|
| Monthly cost | ~$4–6/mo | ~$0.50–1/mo (or free tier first 12 months) |
| SSL | Manual / Let's Encrypt | Free via ACM |
| CDN | None | CloudFront (global edge) |
| Maintenance | OS updates, nginx config | Zero — fully managed |
