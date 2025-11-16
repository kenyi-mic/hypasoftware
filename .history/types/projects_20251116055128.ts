// types/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "management" | "learning" | "engagement" | "analytics";
  status: "active" | "completed" | "upcoming";
  features: string[];
  technologies: string[];
  impact: {
    schools: number;
    teachers: number;
    students: number;
    countries: number;
  };
  demoUrl?: string;
  caseStudyUrl?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}
