# Portfolio Rebuild Plan — jessesalinas.dev

## Current Site Sections (to replicate)
1. Hero — Name, typewriter effect, scroll CTA
2. Projects — Filterable grid (All / Frontend / Backend / Full Stack)
3. About Me — Bio, location, languages, tech stack breakdown
4. Contact — Email CTA
5. Navigation — Sticky/scroll-aware nav (Home, Projects, About, Contact)

---

## Proposed Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Built for static sites, zero JS by default, ships only what you need |
| Styling | **Tailwind CSS** | Utility-first, fast to build, small bundle |
| Animations | **GSAP** (ScrollTrigger) | Industry-standard, smooth scroll-based animations, replaces custom typewriter JS |
| Build Output | Static HTML/CSS/JS | No server needed |
| Hosting | **AWS S3 + CloudFront** | Free-tier eligible, global CDN, HTTPS via ACM cert |
| DNS | **Route 53** or keep current registrar | Point `jessesalinas.dev` to CloudFront distribution |

---

## Implementation Plan

### Phase 1 — Project Setup
- [ ] Scaffold Astro project in current directory
- [ ] Install dependencies: `tailwindcss`, `gsap`
- [ ] Configure Tailwind and base styles (dark theme matching current site)
- [ ] Set up project structure: `src/layouts`, `src/components`, `src/pages`

### Phase 2 — Sections & Content
- [ ] **Layout** — Create base layout with sticky nav, smooth scroll anchors, and footer
- [ ] **Hero** — Full-viewport section with name, GSAP typewriter effect, scroll-down CTA
- [ ] **Projects** — Filterable card grid (All/Frontend/Backend/Full Stack) with GSAP stagger-in animations
- [ ] **About** — Bio, location, languages, tech stack grouped by category (Backend, Frontend, DB, Tools) with scroll-triggered reveals
- [ ] **Contact** — Email CTA section with entrance animation

### Phase 3 — Animations (GSAP)
- [ ] Typewriter text effect on hero (replaces custom JS)
- [ ] ScrollTrigger reveal animations on each section
- [ ] Staggered card entrance on Projects grid
- [ ] Smooth nav highlight on scroll (active section indicator)

### Phase 4 — Polish
- [ ] Responsive design (mobile-first)
- [ ] Accessibility pass (semantic HTML, focus states, reduced-motion media query)
- [ ] Meta tags, Open Graph, favicon
- [ ] Performance audit (Lighthouse)

### Phase 5 — Deployment
- [ ] `astro build` → static output in `dist/`
- [ ] Create S3 bucket configured for static website hosting
- [ ] Set up CloudFront distribution with ACM SSL cert for `jessesalinas.dev`
- [ ] Update DNS to point to CloudFront
- [ ] Tear down Digital Ocean droplet

---

## Directory Structure

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/
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
