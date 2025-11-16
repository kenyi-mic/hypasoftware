// components/blog/BlogGrid.tsx
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogGridProps {
  posts: BlogPost[];
  featuredPost?: BlogPost;
}

const BlogGrid = ({ posts, featuredPost }: BlogGridProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      month: "short",
      day: "numeric",
    });
  };

  if (posts.length === 0) {
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
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No articles found
        </h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 p-8">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Featured Article
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {featuredPost.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
            <div className="md:w-96 md:flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {featuredPost.readTime} min
                </div>
                <div className="text-blue-100">read</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {post.readTime} min
                    </div>
                    <div className="text-blue-100 text-sm">read</div>
                  </div>
                </div>
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {post.category.charAt(0).toUpperCase() +
                      post.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm text-gray-600">
                      {post.author.name}
                    </span>
                  </div>

                  <time className="text-sm text-gray-500">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
