# UGC Portfolio Deployment

The UGC portfolio is a standalone static Astro site for:

```text
https://ugc.jesse-salinas.com
```

## Build

Run from the `ugc/` directory:

```sh
npm install
npm run build
```

The deployable output is:

```text
ugc/dist/
```

## Hosting requirements

The host should serve the contents of `ugc/dist/` at the subdomain root and provide:

- HTTPS for `ugc.jesse-salinas.com`
- Correct MIME types for `.mp4`, `.svg`, `.css`, and `.js`
- SPA-style fallback only if additional client routes are added later
- Compression for HTML, CSS, and JavaScript

Recommended caching:

- HTML: short cache or revalidation
- CSS and JavaScript: long cache with hashed filenames when generated
- Poster images: long cache
- Video files: long cache after approval and replacement of placeholders

## DNS and domain

Configure the DNS record for `ugc.jesse-salinas.com` according to the selected static host. Keep this deployment separate from the existing developer portfolio site.

## Pre-launch checklist

- Replace all `placeholder-*.mp4` files with approved UGC footage.
- Replace the portrait placeholder with Jesse's approved portrait.
- Verify email and social links.
- Confirm the canonical URL and social preview metadata.
- Test video playback on mobile Safari, mobile Chrome, and desktop browsers.
- Run `npm run build` from `ugc/` and deploy only `ugc/dist/`.
