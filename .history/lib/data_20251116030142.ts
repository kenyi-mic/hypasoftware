import { NavItem } from "@/types/navigation";

export const navigationItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "about",
    label: "About",
    dropdown: [
      { id: "who-we-are", label: "Who We Are", href: "/about/who-we-are" },
      { id: "our-team", label: "Our Team", href: "/about/our-team" },
    ],
  },
  { id: "projects", label: "Our Projects", href: "/project" },
  {
    id: "news",
    label: "News",
    dropdown: [
      { id: "blog", label: "Blog", href: "/news/blog" },
      { id: "innovation", label: "New Innovations", href: "/news/innovations" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    dropdown: [
      { id: "support", label: "Support", href: "/contact/support" },
      { id: "contact-us", label: "Contact Us", href: "/contact/contact-us" },
    ],
  },
  { id: "faq", label: "FAQ", href: "/faq" },
];
