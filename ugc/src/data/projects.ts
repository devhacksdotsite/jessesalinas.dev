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
export const projects: Project[] = [];
