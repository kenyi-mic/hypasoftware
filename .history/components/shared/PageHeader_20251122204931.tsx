// components/shared/PageHeader.tsx
interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  description?: string;
  stats?: Array<{
    number: string;
    label: string;
  }>;
}

const PageHeader = ({
  badge,
  title,
  subtitle,
  description,
  stats,
}: PageHeaderProps) => {
  return (
    <section className="bg-linear-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-medium">{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Stats Section */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
