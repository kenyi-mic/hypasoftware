// types/index.ts

// Import and re-export from navigation types
import { NavItem } from "./navigation";

export interface NavigationItem {
  id: string;
  name: string;
  label?: string;
  href?: string;
  children?: NavigationItem[];
  dropdown?: {
    id: string;
    label: string;
    href: string;
    description?: string;
  }[];
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  isButton?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  school?: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export type { NavItem };
