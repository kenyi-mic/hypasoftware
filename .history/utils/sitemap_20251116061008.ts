// utils/sitemap.ts
export interface SitemapPage {
  path: string;
  title: string;
  description: string;
  category: string;
}

export const sitemapPages: SitemapPage[] = [
  {
    path: "/",
    title: "Home",
    description: "Welcome to Hypasoftware",
    category: "main",
  },
  {
    path: "/about",
    title: "About Us",
    description: "Learn about our mission and team",
    category: "about",
  },
  {
    path: "/about/who-we-are",
    title: "Who We Are",
    description: "Our story and values",
    category: "about",
  },
  {
    path: "/about/our-team",
    title: "Our Team",
    description: "Meet our dedicated team",
    category: "about",
  },
  {
    path: "/projects",
    title: "Our Projects",
    description: "Explore our educational solutions",
    category: "products",
  },
  {
    path: "/news",
    title: "News & Blog",
    description: "Latest updates and articles",
    category: "content",
  },
  {
    path: "/contact",
    title: "Contact Us",
    description: "Get in touch with our team",
    category: "contact",
  },
  {
    path: "/support",
    title: "Support",
    description: "Get help and documentation",
    category: "support",
  },
  {
    path: "/faq",
    title: "FAQ",
    description: "Frequently asked questions",
    category: "support",
  },
];

export const findSimilarPages = (currentPath: string): SitemapPage[] => {
  const currentPathLower = currentPath.toLowerCase();

  // Exact match in different case
  const exactMatch = sitemapPages.find(
    (page) => page.path.toLowerCase() === currentPathLower
  );
  if (exactMatch) return [exactMatch];

  // Fuzzy matching for common typos
  return sitemapPages.filter((page) => {
    const pagePathLower = page.path.toLowerCase();

    // Check for common typos (removing/adding characters)
    if (levenshteinDistance(pagePathLower, currentPathLower) <= 2) {
      return true;
    }

    // Check if current path contains parts of the correct path
    if (
      pagePathLower.includes(currentPathLower) ||
      currentPathLower.includes(pagePathLower)
    ) {
      return true;
    }

    return false;
  });
};

// Simple Levenshtein distance implementation for typo detection
const levenshteinDistance = (a: string, b: string): number => {
  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[b.length][a.length];
};
