// components/innovations/InnovationsFilters.tsx
import { InnovationCategory } from "@/types/innovations";
import Filters from "@/components/shared/Filters";

interface StatusOption {
  id: string;
  name: string;
  color: string;
}

interface InnovationsFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  statusFilter: string;
  onStatusChange: (status: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: string;
  onSortChange: (sort: string) => void;
  categories: InnovationCategory[];
  statusOptions: StatusOption[];
  totalInnovations: number;
}

const InnovationsFilters = ({
  activeCategory,
  onCategoryChange,
  statusFilter,
  onStatusChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  categories,
  statusOptions,
  totalInnovations,
}: InnovationsFiltersProps) => {
  // Convert InnovationCategory to FilterOption format
  const filterCategories = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    count: cat.count,
    color: cat.color,
    icon: cat.icon,
  }));

  // Add status filter to the shared Filters component
  const enhancedFilters = (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      {/* Use shared Filters component for main filters */}
      <Filters
        categories={filterCategories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        sortOption={sortOption}
        onSortChange={onSortChange}
        totalItems={totalInnovations}
        sortOptions={[
          { id: "newest", name: "Newest First" },
          { id: "oldest", name: "Oldest First" },
          { id: "featured", name: "Featured First" },
        ]}
      />

      {/* Status Filter Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Project Status
        </h3>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <button
              key={status.id}
              onClick={() => onStatusChange(status.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                statusFilter === status.id
                  ? `${status.color} text-white shadow-md`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {status.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return enhancedFilters;
};

export default InnovationsFilters;
