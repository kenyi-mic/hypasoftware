// components/innovations/InnovationsGrid.tsx
import Link from "next/link";
import { Innovation } from "@/types/innovations";

interface InnovationsGridProps {
  featuredInnovations: Innovation[];
  regularInnovations: Innovation[];
}

const InnovationsGrid = ({
  featuredInnovations,
  regularInnovations,
}: InnovationsGridProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "research":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "beta":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "launched":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "research":
        return "🔬";
      case "development":
        return "⚙️";
      case "beta":
        return "🧪";
      case "launched":
        return "🚀";
      default:
        return "📁";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  };

  if (featuredInnovations.length === 0 && regularInnovations.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No innovations found
        </h3>
        <p className="text-gray-600">Try adjusting your filter criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Innovations */}
      {featuredInnovations.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Innovations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredInnovations.map((innovation) => (
              <div
                key={innovation.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {getStatusIcon(innovation.status)}
                      </div>
                      <div className="text-lg font-semibold">
                        Featured Project
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                        innovation.status
                      )}`}
                    >
                      {getStatusIcon(innovation.status)}{" "}
                      {innovation.status.charAt(0).toUpperCase() +
                        innovation.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {innovation.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {innovation.excerpt}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {innovation.technologies
                        .slice(0, 3)
                        .map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      {innovation.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{innovation.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact & Timeline */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {innovation.impact.students.toLocaleString()}+
                      </div>
                      <div className="text-gray-500">Students Impacted</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {formatDate(innovation.timeline.start)}
                      </div>
                      <div className="text-gray-500">Started</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/innovations/${innovation.slug}`}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    {innovation.demoUrl && (
                      <Link
                        href={innovation.demoUrl}
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Live Demo
                      </Link>
                    )}
                    {innovation.githubUrl && (
                      <a
                        href={innovation.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Innovations */}
      {regularInnovations.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularInnovations.map((innovation) => (
              <div
                key={innovation.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-3xl">
                      {getStatusIcon(innovation.status)}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        innovation.status
                      )}`}
                    >
                      {innovation.status.charAt(0).toUpperCase() +
                        innovation.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {innovation.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {innovation.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      Started {formatDate(innovation.timeline.start)}
                    </div>
                    <Link
                      href={`/innovations/${innovation.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovationsGrid;
