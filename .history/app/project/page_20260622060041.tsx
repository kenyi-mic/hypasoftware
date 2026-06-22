// app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Project, ProjectCategory } from "@/types/projects";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showCredentials, setShowCredentials] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories: ProjectCategory[] = [
    {
      id: "all",
      name: "All Projects",
      description: "Complete suite of educational solutions",
      icon: (props) => (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      count: 6,
    },
    {
      id: "management",
      name: "School Management",
      description: "Administrative and operational tools",
      icon: (props) => (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      count: 2,
    },
    {
      id: "learning",
      name: "Learning Platforms",
      description: "Interactive teaching and learning tools",
      icon: (props) => (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      count: 2,
    },
    {
      id: "engagement",
      name: "Parent Engagement",
      description: "Communication and involvement tools",
      icon: (props) => (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      count: 1,
    },
    {
      id: "analytics",
      name: "Analytics & Insights",
      description: "Data-driven decision making tools",
      icon: (props) => (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      count: 1,
    },
  ];

  const projects: Project[] = [
    {
      id: "hypaedu",
      title: "HypaEDU",
      description:
        "Comprehensive school management system for African educational institutions",
      fullDescription:
        "A complete school management solution designed specifically for African schools, handling everything from student admissions to financial management, attendance tracking, and academic reporting. Built to work reliably in low-bandwidth environments.",
      image: "/projects/hypaedu.jpg",
      category: "management",
      status: "active",
      features: [
        "Student Information System",
        "Attendance Tracking",
        "Grade Management",
        "Fee Management",
        "Timetable Scheduling",
        "Staff Management",
        "Library Management",
        "Offline Capability",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
      impact: {
        schools: 350,
        teachers: 12500,
        students: 450000,
        countries: 12,
      },
      demoUrl: "https://school.hypasoftware.com",
      demoCredentials: {
        username: "admin",
        password: "Hypa@123",
      },
      caseStudyUrl: "/case-studies/hypaedu",
    },
    {
      id: "learn-africa",
      title: "LearnAfrica Platform",
      description:
        "Interactive digital learning platform with localized content",
      fullDescription:
        "An engaging learning platform that provides interactive lessons, quizzes, and educational games tailored to African curricula. Features offline access, multilingual support, and culturally relevant content.",
      image: "/projects/learn-africa.jpg",
      category: "learning",
      status: "upcoming",
      features: [
        "Interactive Lessons",
        "Localized Curriculum",
        "Offline Access",
        "Multilingual Support",
        "Progress Tracking",
        "Gamified Learning",
        "Teacher Resources",
        "Parent Dashboard",
      ],
      technologies: ["React Native", "Firebase", "Python", "AWS", "FFmpeg"],
      impact: {
        schools: 0,
        teachers: 0,
        students: 0,
        countries: 0,
      },
      demoUrl: null,
      caseStudyUrl: null,
    },
    {
      id: "parent-connect",
      title: "ParentConnect",
      description: "Real-time parent engagement and communication platform",
      fullDescription:
        "Bridges the communication gap between schools and parents with real-time updates, progress reports, and direct messaging. Designed for parents with limited internet access.",
      image: "/projects/parent-connect.jpg",
      category: "engagement",
      status: "upcoming",
      features: [
        "Real-time Notifications",
        "Progress Reports",
        "Direct Messaging",
        "Fee Payment Integration",
        "Event Calendar",
        "SMS Integration",
        "Multi-language Support",
        "Low-data Mode",
      ],
      technologies: ["Flutter", "Node.js", "Twilio API", "MySQL", "Redis"],
      impact: {
        schools: 0,
        teachers: 0,
        students: 0,
        countries: 0,
      },
      demoUrl: null,
      caseStudyUrl: null,
    },
    {
      id: "edu-analytics",
      title: "EduAnalytics Suite",
      description:
        "AI-powered analytics for educational insights and predictions",
      fullDescription:
        "Advanced analytics platform that helps schools make data-driven decisions. Provides insights into student performance, teacher effectiveness, and institutional trends with predictive analytics.",
      image: "/projects/edu-analytics.jpg",
      category: "analytics",
      status: "upcoming",
      features: [
        "Student Performance Analytics",
        "Predictive Learning Analytics",
        "Teacher Effectiveness Metrics",
        "Institutional Reporting",
        "Custom Dashboard",
        "Early Warning System",
        "Benchmarking Tools",
        "Export Capabilities",
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "D3.js"],
      impact: {
        schools: 0,
        teachers: 0,
        students: 0,
        countries: 0,
      },
      demoUrl: null,
      caseStudyUrl: null,
    },
    {
      id: "teacher-assistant",
      title: "Teacher Assistant Pro",
      description:
        "All-in-one tool for lesson planning and classroom management",
      fullDescription:
        "Comprehensive teaching assistant that helps educators create engaging lessons, track student progress, manage assignments, and communicate with parents efficiently.",
      image: "/projects/teacher-assistant.jpg",
      category: "learning",
      status: "upcoming",
      features: [
        "Lesson Planning Tools",
        "Gradebook Management",
        "Assignment Creator",
        "Behavior Tracking",
        "Resource Library",
        "Parent Communication",
        "Progress Reports",
        "Curriculum Alignment",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets", "Redis"],
      impact: {
        schools: 0,
        teachers: 0,
        students: 0,
        countries: 0,
      },
      demoUrl: null,
      caseStudyUrl: null,
    },
    {
      id: "smart-admissions",
      title: "Smart Admissions",
      description: "Streamlined student enrollment and registration system",
      fullDescription:
        "Digital admissions platform that simplifies student enrollment, document verification, and placement processes. Reduces administrative workload and improves applicant experience.",
      image: "/projects/smart-admissions.jpg",
      category: "management",
      status: "upcoming",
      features: [
        "Online Applications",
        "Document Verification",
        "Automated Placement",
        "Payment Processing",
        "Waitlist Management",
        "Communication Tools",
        "Analytics Dashboard",
        "Mobile Responsive",
      ],
      technologies: ["Next.js", "NestJS", "MongoDB", "Stripe API", "AWS"],
      impact: {
        schools: 0,
        teachers: 0,
        students: 0,
        countries: 0,
      },
      demoUrl: null,
      caseStudyUrl: null,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border border-green-200";
      case "upcoming":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return (
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "upcoming":
        return (
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "management":
        return "bg-blue-100 text-blue-800";
      case "learning":
        return "bg-purple-100 text-purple-800";
      case "engagement":
        return "bg-green-100 text-green-800";
      case "analytics":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              HypaEDU is Live
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-8">
              Innovative solutions transforming education across Africa
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of educational technology
              products designed specifically for African schools, teachers,
              students, and parents.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {projects.filter((p) => p.status === "active").length}
              </div>
              <div className="text-gray-600">Active Project</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
                {projects.reduce((acc, proj) => acc + proj.impact.schools, 0)}+
              </div>
              <div className="text-gray-600">Schools Served</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                {projects
                  .reduce((acc, proj) => acc + proj.impact.students, 0)
                  .toLocaleString()}
                +
              </div>
              <div className="text-gray-600">Students Impacted</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {projects.filter((p) => p.status === "upcoming").length}+
              </div>
              <div className="text-gray-600">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Our Solutions
              </h2>
              <p className="text-gray-600">
                Filter by category to explore specific solutions
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <category.icon
                    className={`w-6 h-6 ${
                      activeCategory === category.id
                        ? "text-white"
                        : "text-blue-600"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p
                  className={`text-sm ${
                    activeCategory === category.id
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Projects Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                } ${project.status === "upcoming" ? "opacity-75" : ""}`}
              >
                {/* Project Image */}
                <div
                  className={`relative ${
                    viewMode === "list" ? "md:w-64 md:flex-shrink-0" : "h-48"
                  }`}
                >
                  <div
                    className={`w-full h-full flex items-center justify-center text-white ${
                      project.status === "active"
                        ? "bg-gradient-to-br from-blue-500 to-purple-600"
                        : "bg-gradient-to-br from-gray-400 to-gray-600"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div className="text-sm opacity-90">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(
                        project.status,
                      )}`}
                    >
                      {getStatusIcon(project.status)}
                      {project.status === "active" ? "Live" : "Coming Soon"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        project.category,
                      )}`}
                    >
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                  </div>
                  {project.status === "upcoming" && (
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-gray-900 font-semibold text-sm">
                          🚀 Coming Soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {expandedProject === project.id
                      ? project.fullDescription
                      : project.description}
                  </p>
                  {project.fullDescription !== project.description && (
                    <button
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.id ? null : project.id,
                        )
                      }
                      className="text-blue-600 text-sm hover:text-blue-700 mb-4"
                    >
                      {expandedProject === project.id
                        ? "Show less"
                        : "Read more"}
                    </button>
                  )}

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {project.impact.schools > 0
                          ? `${project.impact.schools}+`
                          : "—"}
                      </div>
                      <div className="text-xs text-gray-500">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {project.impact.students > 0
                          ? `${project.impact.students.toLocaleString()}+`
                          : "—"}
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {project.status === "active" && project.demoUrl && (
                      <div className="w-full space-y-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Launch Demo
                        </a>
                        {project.demoCredentials && (
                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowCredentials(!showCredentials)
                              }
                              className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                />
                              </svg>
                              {showCredentials
                                ? "Hide Credentials"
                                : "Show Demo Credentials"}
                            </button>
                            {showCredentials && (
                              <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-900 text-white p-3 rounded-lg text-xs space-y-1 z-10">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">
                                    Username:
                                  </span>
                                  <span className="font-mono font-semibold">
                                    {project.demoCredentials.username}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">
                                    Password:
                                  </span>
                                  <span className="font-mono font-semibold">
                                    {project.demoCredentials.password}
                                  </span>
                                </div>
                                <div className="mt-2 pt-2 border-t border-gray-700 text-gray-400">
                                  Click &quot;Launch Demo&quot; to access the
                                  system
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    {project.status === "upcoming" && (
                      <button
                        disabled
                        className="w-full px-4 py-2 bg-gray-300 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Coming Soon
                      </button>
                    )}
                    {project.status === "active" && project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
                      >
                        View Case Study
                      </Link>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-full px-4 py-2 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 mb-4">
                Try selecting a different category
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ProjectsCTA />
    </div>
  );
};

export default ProjectsPage;
