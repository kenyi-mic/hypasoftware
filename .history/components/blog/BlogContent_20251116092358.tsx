// components/blog/BlogContent.tsx
"use client";

import { useState, useMemo } from "react";
import { BlogPost, BlogCategory, BlogFiltersType } from "@/types/blog";
import BlogHeader from "./BlogHeader";
import BlogFilters from "./BlogFilters";
import BlogGrid from "./BlogGrid";
import BlogSidebar from "./BlogSidebar";

const BlogContent = () => {
  const [filters, setFilters] = useState<BlogFiltersType>({
    category: "all",
    search: "",
    sort: "newest",
  });

  // Mock data - replace with actual API calls
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Digital Learning in African Schools",
      excerpt:
        "Exploring how technology is transforming traditional classrooms and creating new opportunities for personalized learning across Africa.",
      content: "Full content here...",
      author: {
        name: "Chidi Okonkwo",
        role: "CEO & Founder",
        avatar: "/team/chidi-okonkwo.jpg",
      },
      category: "innovation",
      tags: ["Digital Learning", "EdTech", "Africa"],
      readTime: 6,
      publishedAt: "2024-01-15",
      image: "/blog/future-digital-learning.jpg",
      slug: "future-digital-learning-african-schools",
      featured: true,
    },
    {
      id: "2",
      title: "How Our School Management System Saved 500+ Hours for Teachers",
      excerpt:
        "Real-world case study showing how our platform reduced administrative workload and increased teaching time in Nigerian schools.",
      content: "Full content here...",
      author: {
        name: "Amina Mohammed",
        role: "CTO",
        avatar: "/team/amina-mohammed.jpg",
      },
      category: "case-study",
      tags: ["School Management", "Efficiency", "Teachers"],
      readTime: 8,
      publishedAt: "2024-01-12",
      image: "/blog/school-management-case-study.jpg",
      slug: "school-management-system-saved-hours",
    },
    {
      id: "3",
      title: "Building Offline-First Educational Apps for Rural Africa",
      excerpt:
        "Technical deep dive into our approach to creating learning tools that work seamlessly without constant internet connectivity.",
      content: "Full content here...",
      author: {
        name: "David Okafor",
        role: "Lead Developer",
        avatar: "/team/david-okafor.jpg",
      },
      category: "technology",
      tags: ["Offline Apps", "Rural Education", "Technology"],
      readTime: 5,
      publishedAt: "2024-01-10",
      image: "/blog/offline-first-apps.jpg",
      slug: "offline-first-educational-apps-rural-africa",
    },
    {
      id: "4",
      title: "Parent Engagement: The Missing Link in African Education",
      excerpt:
        "Why involving parents in the learning process is crucial and how technology can bridge the communication gap.",
      content: "Full content here...",
      author: {
        name: "Faith Adebayo",
        role: "Community Manager",
        avatar: "/team/faith-adebayo.jpg",
      },
      category: "insights",
      tags: ["Parent Engagement", "Communication", "Community"],
      readTime: 7,
      publishedAt: "2024-01-08",
      image: "/blog/parent-engagement.jpg",
      slug: "parent-engagement-missing-link-african-education",
    },
    {
      id: "5",
      title: "AI-Powered Learning Analytics: Transforming Student Assessment",
      excerpt:
        "How we use artificial intelligence to provide actionable insights into student performance and learning patterns.",
      content: "Full content here...",
      author: {
        name: "Kwame Asante",
        role: "Head of Education",
        avatar: "/team/kwame-asante.jpg",
      },
      category: "innovation",
      tags: ["AI", "Analytics", "Assessment"],
      readTime: 9,
      publishedAt: "2024-01-05",
      image: "/blog/ai-learning-analytics.jpg",
      slug: "ai-powered-learning-analytics",
    },
    {
      id: "6",
      title: "Scaling Educational Technology Across 15 African Countries",
      excerpt:
        "Lessons learned from expanding our solutions to diverse educational systems and cultures across the continent.",
      content: "Full content here...",
      author: {
        name: "Zara Nkosi",
        role: "Product Manager",
        avatar: "/team/zara-nkosi.jpg",
      },
      category: "growth",
      tags: ["Scaling", "Expansion", "Africa"],
      readTime: 6,
      publishedAt: "2024-01-03",
      image: "/blog/scaling-edtech-africa.jpg",
      slug: "scaling-educational-technology-africa",
    },
  ];

  const categories: BlogCategory[] = [
    {
      id: "all",
      name: "All Articles",
      count: blogPosts.length,
      color: "bg-blue-500",
    },
    { id: "innovation", name: "Innovation", count: 2, color: "bg-purple-500" },
    { id: "case-study", name: "Case Studies", count: 1, color: "bg-green-500" },
    { id: "technology", name: "Technology", count: 1, color: "bg-orange-500" },
    { id: "insights", name: "Insights", count: 1, color: "bg-pink-500" },
    { id: "growth", name: "Growth", count: 1, color: "bg-indigo-500" },
  ];

  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Filter by category
    if (filters.category !== "all") {
      filtered = filtered.filter((post) => post.category === filters.category);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort posts
    switch (filters.sort) {
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
        );
        break;
      case "popular":
        // For now, using readTime as popularity proxy - replace with actual views/likes
        filtered.sort((a, b) => b.readTime - a.readTime);
        break;
      case "newest":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
        break;
    }

    return filtered;
  }, [filters, blogPosts]);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <BlogFilters
              filters={filters}
              onFiltersChange={setFilters}
              categories={categories}
              totalPosts={filteredPosts.length}
            />

            <BlogGrid posts={filteredPosts} featuredPost={featuredPost} />
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <BlogSidebar
              categories={categories}
              popularPosts={blogPosts.slice(0, 3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
