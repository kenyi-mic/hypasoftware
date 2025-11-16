// components/shared/Sidebar.tsx
import Link from "next/link";
import { ReactNode } from "react";

// Type definitions
interface NewsletterContent {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

interface StatsItem {
  label: string;
  value: string | number;
}

interface StatsContent {
  title: string;
  items: StatsItem[];
}

interface CategoryItem {
  name: string;
  count: number;
}

interface CategoriesContent {
  title: string;
  items: CategoryItem[];
}

interface TagsContent {
  title: string;
  items: string[];
}

interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface PartnersContent {
  title: string;
  items: string[];
}

type SidebarContent =
  | { type: "newsletter"; content: NewsletterContent }
  | { type: "stats"; content: StatsContent }
  | { type: "categories"; content: CategoriesContent }
  | { type: "tags"; content: TagsContent }
  | { type: "cta"; content: CTAContent }
  | { type: "partners"; content: PartnersContent };

interface SidebarProps {
  sections: SidebarContent[];
}

// Individual section components for better separation
const NewsletterSection = ({ content }: { content: NewsletterContent }) => (
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
    <h3 className="font-bold text-lg mb-3">{content.title}</h3>
    <p className="text-blue-100 text-sm mb-4">{content.description}</p>
    <form className="space-y-3">
      <input
        type="email"
        placeholder={content.placeholder}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
      >
        {content.buttonText}
      </button>
    </form>
  </div>
);

const StatsSection = ({ content }: { content: StatsContent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 className="font-bold text-gray-900 mb-4">{content.title}</h3>
    <div className="space-y-3">
      {content.items.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-gray-600">{item.label}</span>
          <span className="font-bold text-gray-900">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const CategoriesSection = ({ content }: { content: CategoriesContent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 className="font-bold text-gray-900 mb-4">{content.title}</h3>
    <div className="space-y-2">
      {content.items.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-2">
          <span className="text-gray-700">{item.name}</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
            {item.count}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const TagsSection = ({ content }: { content: TagsContent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 className="font-bold text-gray-900 mb-4">{content.title}</h3>
    <div className="flex flex-wrap gap-2">
      {content.items.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CTASection = ({ content }: { content: CTAContent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 className="font-bold text-gray-900 mb-3">{content.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{content.description}</p>
    <Link
      href={content.buttonLink}
      className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
    >
      {content.buttonText}
    </Link>
  </div>
);

const PartnersSection = ({ content }: { content: PartnersContent }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
    <h3 className="font-bold text-gray-900 mb-4">{content.title}</h3>
    <div className="space-y-2 text-sm text-gray-600">
      {content.items.map((partner, index) => (
        <div key={index}>{partner}</div>
      ))}
    </div>
  </div>
);

// Main component with proper type narrowing
const Sidebar = ({ sections }: SidebarProps): ReactNode => {
  const renderSection = (section: SidebarContent) => {
    switch (section.type) {
      case "newsletter":
        return <NewsletterSection content={section.content} />;

      case "stats":
        return <StatsSection content={section.content} />;

      case "categories":
        return <CategoriesSection content={section.content} />;

      case "tags":
        return <TagsSection content={section.content} />;

      case "cta":
        return <CTASection content={section.content} />;

      case "partners":
        return <PartnersSection content={section.content} />;

      default:
        // Exhaustiveness check - this will cause a TypeScript error if we forget a case
        const _exhaustiveCheck: never = section;
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index}>{renderSection(section)}</div>
      ))}
    </div>
  );
};

export default Sidebar;
