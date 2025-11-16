// components/innovations/InnovationsContent.tsx
"use client";

import { useState, useMemo } from "react";
import { Innovation, InnovationCategory } from "@/types/innovations";
import PageHeader from "@/components/shared/PageHeader";
import Sidebar from "@/components/shared/Sidebar";
import InnovationsFilters from "./InnovationsFilters";
import InnovationsGrid from "./InnovationsGrid";

const InnovationsContent = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("newest");

  // Mock data
  const innovations: Innovation[] = [
    {
      id: "1",
      title: "AI-Powered Adaptive Learning Engine",
      excerpt:
        "Machine learning system that personalizes educational content based on individual student performance and learning patterns.",
      description:
        "Our adaptive learning engine uses advanced machine learning algorithms to analyze student performance data and dynamically adjust the difficulty and presentation of educational content.",
      category: "ai",
      status: "beta",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      team: ["AI Research Team", "Data Scientists", "Frontend Engineers"],
      timeline: {
        start: "2023-06-01",
        estimatedCompletion: "2024-03-01",
      },
      impact: {
        schools: 45,
        students: 15000,
        efficiency: "35% improvement in learning outcomes",
      },
      image: "/innovations/adaptive-learning.jpg",
      slug: "ai-powered-adaptive-learning",
      featured: true,
      githubUrl: "https://github.com/hypasoftware/adaptive-learning",
      demoUrl: "/demo/adaptive-learning",
    },
    // Add other innovations here...
  ];

  const categories: InnovationCategory[] = [
    {
      id: "all",
      name: "All Innovations",
      description: "Complete portfolio of R&D projects",
      icon: "🚀",
      count: innovations.length,
      color: "bg-blue-500",
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      description: "ML and AI-driven solutions",
      icon: "🤖",
      count: 2,
      color: "bg-purple-500",
    },
    {
      id: "mobile",
      name: "Mobile Technology",
      description: "Mobile-first applications",
      icon: "📱",
      count: 1,
      color: "bg-green-500",
    },
    {
      id: "analytics",
      name: "Data Analytics",
      description: "Insights and visualization",
      icon: "📊",
      count: 1,
      color: "bg-orange-500",
    },
    {
      id: "platform",
      name: "Platform Solutions",
      description: "Core platform features",
      icon: "🛠️",
      count: 1,
      color: "bg-red-500",
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      description: "Backend and architecture",
      icon: "⚡",
      count: 1,
      color: "bg-indigo-500",
    },
  ];

  const statusOptions = [
    { id: "all", name: "All Status", color: "bg-gray-500" },
    { id: "research", name: "Research", color: "bg-yellow-500" },
    { id: "development", name: "Development", color: "bg-blue-500" },
    { id: "beta", name: "Beta Testing", color: "bg-purple-500" },
    { id: "launched", name: "Launched", color: "bg-green-500" },
  ];

  const filteredInnovations = useMemo(() => {
    let filtered = [...innovations];

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (innovation) => innovation.category === activeCategory
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (innovation) => innovation.status === statusFilter
      );
    }

    // Filter by search
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (innovation) =>
          innovation.title.toLowerCase().includes(searchLower) ||
          innovation.excerpt.toLowerCase().includes(searchLower) ||
          innovation.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          )
      );
    }

    // Sort innovations
    switch (sortOption) {
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.timeline.start).getTime() -
            new Date(b.timeline.start).getTime()
        );
        break;
      case "featured":
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (
            new Date(b.timeline.start).getTime() -
            new Date(a.timeline.start).getTime()
          );
        });
        break;
      case "newest":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.timeline.start).getTime() -
            new Date(a.timeline.start).getTime()
        );
        break;
    }

    return filtered;
  }, [activeCategory, statusFilter, searchQuery, sortOption, innovations]);

  const featuredInnovations = filteredInnovations.filter(
    (innovation) => innovation.featured
  );
  const regularInnovations = filteredInnovations.filter(
    (innovation) => !innovation.featured
  );

  const sidebarSections = [
    {
      type: "stats" as const,
      title: "Innovation Stats",
      content: {
        title: "Innovation Stats",
        items: [
          { label: "Total Projects", value: innovations.length },
          {
            label: "Launched",
            value: innovations.filter((i) => i.status === "launched").length,
          },
          {
            label: "In Development",
            value: innovations.filter((i) => i.status === "development").length,
          },
          {
            label: "In Research",
            value: innovations.filter((i) => i.status === "research").length,
          },
        ],
      },
    },
    {
      type: "tags" as const,
      title: "Our Tech Stack",
      content: {
        title: "Our Tech Stack",
        items: [
          "AI/ML",
          "React",
          "Node.js",
          "Python",
          "Flutter",
          "TensorFlow",
          "Blockchain",
          "Web3",
        ],
      },
    },
    {
      type: "cta" as const,
      title: "Join Our Innovation Team",
      content: {
        title: "Join Our Innovation Team",
        description:
          "We're always looking for talented engineers, researchers, and innovators.",
        buttonText: "View Open Positions",
        buttonLink: "/careers",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        badge="Research & Development"
        title="Innovation Lab"
        subtitle="Pioneering the future of educational technology in Africa"
        stats={[
          { number: "6+", label: "Active Projects" },
          { number: "15+", label: "Technologies" },
          { number: "25+", label: "Team Members" },
          { number: "2", label: "Products Launched" },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <InnovationsFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortOption={sortOption}
              onSortChange={setSortOption}
              categories={categories}
              statusOptions={statusOptions}
              totalInnovations={filteredInnovations.length}
            />

            <InnovationsGrid
              featuredInnovations={featuredInnovations}
              regularInnovations={regularInnovations}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Sidebar sections={sidebarSections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationsContent;
