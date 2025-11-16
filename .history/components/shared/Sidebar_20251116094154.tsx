// components/shared/Sidebar.tsx
import Link from "next/link";

interface SidebarSection {
  title: string;
  type: "newsletter" | "stats" | "categories" | "tags" | "cta" | "partners";
  content: any;
}

interface SidebarProps {
  sections: SidebarSection[];
}

const Sidebar = ({ sections }: SidebarProps) => {
  const renderSection = (section: SidebarSection) => {
    switch (section.type) {
      case "newsletter":
        return (
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-3">{section.content.title}</h3>
            <p className="text-blue-100 text-sm mb-4">
              {section.content.description}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={section.content.placeholder}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                {section.content.buttonText}
              </button>
            </form>
          </div>
        );

      case "stats":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              {section.content.title}
            </h3>
            <div className="space-y-3">
              {section.content.items.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "categories":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              {section.content.title}
            </h3>
            <div className="space-y-2">
              {section.content.items.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-gray-700">{item.name}</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "tags":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              {section.content.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.content.items.map((tag: string, index: number) => (
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

      case "cta":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3">
              {section.content.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {section.content.description}
            </p>
            <Link
              href={section.content.buttonLink}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {section.content.buttonText}
            </Link>
          </div>
        );

      case "partners":
        return (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              {section.content.title}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              {section.content.items.map((partner: string, index: number) => (
                <div key={index}>{partner}</div>
              ))}
            </div>
          </div>
        );

      default:
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
