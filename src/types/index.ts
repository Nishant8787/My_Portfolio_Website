export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ml' | 'other';
  level: number; // 1-5
}

export interface NavLink {
  title: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}