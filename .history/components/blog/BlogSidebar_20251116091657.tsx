// components/blog/BlogSidebar.tsx
import Link from "next/link";
import { BlogCategory, BlogPost } from "@/types/blog";

interface BlogSidebarProps {
  categories: BlogCategory[];
  popularPosts: BlogPost[];
}

const BlogSidebar = ({ categories, popularPosts }: BlogSidebarProps) => {
  // Format date consistently for both server and client
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Use consistent locale
  };

  return (
    <div className="space-y-6">
      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest articles and insights on African EdTech delivered to
          your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Popular Articles</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex items-start space-x-3 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {post.readTime}m
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-xs mt-1">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories
            .filter((cat) => cat.id !== "all")
            .map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between py-2"
              >
                <span className="text-gray-700">{category.name}</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                  {category.count}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "EdTech",
            "Africa",
            "Innovation",
            "Digital Learning",
            "Teachers",
            "AI",
            "Mobile Apps",
            "Offline",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
