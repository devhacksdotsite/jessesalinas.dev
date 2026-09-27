# UGC Portfolio Deployment

The UGC portfolio is a standalone static Astro site for:

```text
https://ugc.jesse-salinas.com
```

## Current AWS deployment

- AWS profile: `axolutely`
- AWS account: `691862619118`
- S3 bucket: `ugc.jesse-salinas.com`
- CloudFront distribution: `EQ7UJH31IY14C`
- CloudFront hostname: `doaw9ncbtpubo.cloudfront.net`
- Route 53 hosted zone: `jesse-salinas.com`
- ACM certificate: `arn:aws:acm:us-east-1:691862619118:certificate/f4621e90-5e51-4ff2-9cbd-60ec3a04391d`

The S3 bucket is private. CloudFront accesses it through Origin Access Control.

GitHub Actions deployment behavior and IAM setup are documented in [`../../docs/GITHUB-DEPLOYMENT.md`](../../docs/GITHUB-DEPLOYMENT.md).

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

To publish a new build with the AWS CLI:

```sh
aws s3 sync dist/ s3://ugc.jesse-salinas.com --profile axolutely --region us-east-1 --delete
aws s3 cp dist/index.html s3://ugc.jesse-salinas.com/index.html --profile axolutely --region us-east-1 --cache-control 'no-cache, no-store, must-revalidate' --content-type 'text/html; charset=utf-8'
aws cloudfront create-invalidation --distribution-id EQ7UJH31IY14C --profile axolutely --paths '/*'
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
