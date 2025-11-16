// types/footer.ts
export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
