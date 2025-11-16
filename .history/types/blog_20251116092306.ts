// types/blog.ts
export interface BlogFiltersType {
  // Renamed type
  category: string;
  search: string;
  sort: "newest" | "oldest" | "popular";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  count: number;
  color: string;
}
