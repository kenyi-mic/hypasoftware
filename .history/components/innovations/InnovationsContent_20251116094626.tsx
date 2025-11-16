// components/innovations/InnovationsContent.tsx (Updated)
"use client";

import { useState, useMemo } from "react";
import { Innovation, InnovationCategory } from "@/types/innovations";
import PageHeader from "@/components/shared/PageHeader";
import Filters from "@/components/shared/Filters";
import Sidebar from "@/components/shared/Sidebar";
import InnovationsGrid from "./InnovationsGrid";

const InnovationsContent = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("newest");

  // ... (keep the same innovations data and categories)

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
            <Filters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortOption={sortOption}
              onSortChange={setSortOption}
              totalItems={filteredInnovations.length}
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
