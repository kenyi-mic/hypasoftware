// components/blog/BlogFilters.tsx
import { BlogFiltersType as FiltersType } from "@/types/blog";

interface BlogFiltersProps {
  filters: FiltersType;
  onFiltersChange: (filters: FiltersType) => void;
  categories: BlogCategory[];
  totalPosts: number;
}

const BlogFilters = ({
  filters,
  onFiltersChange,
  categories,
  totalPosts,
}: BlogFiltersProps) => {
  const handleCategoryChange = (categoryId: string) => {
    onFiltersChange({ ...filters, category: categoryId });
  };

  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleSortChange = (sort: FiltersType["sort"]) => {
    onFiltersChange({ ...filters, sort });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          {totalPosts} {totalPosts === 1 ? "article" : "articles"} found
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-4">
          <label
            htmlFor="sort"
            className="text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            Sort by:
          </label>
          <select
            id="sort"
            value={filters.sort}
            onChange={(e) =>
              handleSortChange(e.target.value as FiltersType["sort"])
            }
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filters.category === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
              <span
                className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                  filters.category === category.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
