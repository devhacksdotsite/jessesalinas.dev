export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  video: string;
  poster: string;
  alt: string;
  featured?: boolean;
}

/**
 * Add new portfolio work here. Keep video and poster files in public/videos/
 * and public/images/ugc/ respectively.
 */
export const projects: Project[] = [
  {
    id: 'placeholder-product-demo',
    title: 'Placeholder Product Demo',
    category: 'Product Demo',
    description: 'Temporary footage for evaluating the portfolio layout.',
    video: '/videos/placeholder-product-demo.mp4',
    poster: '/images/ugc/placeholder-product-demo.svg',
    alt: 'Placeholder video for a product demo project',
  },
  {
    id: 'placeholder-voiceover-broll',
    title: 'Placeholder Voiceover + B-roll',
    category: 'Voiceover + B-roll',
    description: 'Temporary footage for evaluating the portfolio layout.',
    video: '/videos/placeholder-voiceover-broll.mp4',
    poster: '/images/ugc/placeholder-voiceover-broll.svg',
    alt: 'Placeholder video for a voiceover and b-roll project',
  },
  {
    id: 'placeholder-screen-recording',
    title: 'Placeholder Screen Recording',
    category: 'Screen Recording',
    description: 'Temporary footage for evaluating the portfolio layout.',
    video: '/videos/placeholder-screen-recording.mp4',
    poster: '/images/ugc/placeholder-screen-recording.svg',
    alt: 'Placeholder video for a screen recording project',
  },
];
