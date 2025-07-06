
export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnailUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  technologies: string[];
  outcomes: string;
  gallery?: GalleryItem[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title:string;
  skills: Skill[];
}