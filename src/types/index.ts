export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string[];
  url?: string;
}

export type Theme = 'light' | 'dark';

export interface CommandOutput {
  command: string;
  output: React.ReactNode;
  timestamp: Date;
}
