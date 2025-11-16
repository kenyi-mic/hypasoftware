// components/blog/BlogHeader.tsx
const BlogHeader = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-medium">
              Latest Insights & Innovations
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hypasoftware
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Blog
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Exploring the future of education technology in Africa
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest insights, case studies, and innovations
            from our journey to transform education across the African
            continent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
