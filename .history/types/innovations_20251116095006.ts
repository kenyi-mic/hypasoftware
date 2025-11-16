// types/innovations.ts
export interface Innovation {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  category: "ai" | "platform" | "mobile" | "analytics" | "infrastructure";
  status: "research" | "development" | "beta" | "launched";
  technologies: string[];
  team: string[];
  timeline: {
    start: string;
    estimatedCompletion?: string;
    launched?: string;
  };
  impact: {
    schools: number;
    students: number;
    efficiency: string;
  };
  image: string;
  slug: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export interface InnovationCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}
