# UGC Portfolio Content

This document describes how to add work to the UGC portfolio.

## Asset locations

- Video files belong in `public/videos/`.
- Poster images belong in `public/images/ugc/`.
- Use lowercase kebab-case filenames, for example:
  - `public/videos/ai-product-demo.mp4`
  - `public/images/ugc/ai-product-demo-poster.jpg`

Every video should have a poster image. Posters keep the portfolio visually useful before a video is loaded and improve the initial page experience.

The current `placeholder-*.mp4` files and matching posters are temporary layout assets only. Replace them with Jesse's approved UGC footage before launch.

## Adding a project

Add an entry to `src/data/projects.ts`:

```ts
{
  id: 'ai-product-demo',
  title: 'AI Productivity App',
  category: 'Product Demo',
  description: 'Voiceover-led product demo for social media.',
  video: '/videos/ai-product-demo.mp4',
  poster: '/images/ugc/ai-product-demo-poster.jpg',
  alt: 'Jesse demonstrating an AI productivity app',
  featured: true,
}
```

The layout should consume this data without requiring project-specific markup.

## Recommended categories

- UGC Ads
- Product Demo
- Voiceover + B-roll
- Screen Recording
- Problem → Solution

## Content checklist

Before adding a project, confirm:

- The video is approved for portfolio use.
- The poster represents the video clearly.
- The video has been compressed for web delivery.
- The `alt` text describes the content without relying on the filename.
- The title and category are concise.
