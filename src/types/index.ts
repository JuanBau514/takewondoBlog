export interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
  role: 'admin' | 'member' | 'guest';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'actividades' | 'competencias' | 'noticias' | 'tecnica' | 'logros';
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  belt: string;
  dan?: number;
  bio: string;
  image: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  year: number;
  description: string;
  type: 'oro' | 'plata' | 'bronce' | 'especial';
  athlete?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'competencias' | 'entrenamientos' | 'eventos' | 'graduaciones';
}
