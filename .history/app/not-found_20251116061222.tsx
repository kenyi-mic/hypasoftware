// app/not-found.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();
  const [clickedLink, setClickedLink] = useState<string>("");
  const [isInternalLink, setIsInternalLink] = useState<boolean>(true);

  useEffect(() => {
    // Get the current path that caused the 404
    setClickedLink(pathname);

    // Check if this might be an external link or a common typo
    const commonExternalDomains = [".com", ".org", ".net", ".edu", ".gov"];
    const isLikelyExternal = commonExternalDomains.some((domain) =>
      pathname.toLowerCase().includes(domain)
    );
    setIsInternalLink(!isLikelyExternal);

    // Log the 404 for analytics (you can integrate with your analytics service)
    console.warn(`404 Error: User attempted to access ${pathname}`);
  }, [pathname]);

  // Common fixes for frequent issues
  const getSuggestedFixes = () => {
    const fixes = [];

    // Check for common typos in the path
    if (pathname.includes("abot") || pathname.includes("abou")) {
      fixes.push({
        type: "typo",
        message: 'Did you mean "/about"?',
        correctPath: "/about",
      });
    }

    if (pathname.includes("projct") || pathname.includes("projet")) {
      fixes.push({
        type: "typo",
        message: 'Did you mean "/projects"?',
        correctPath: "/projects",
      });
    }

    if (pathname.includes("contct") || pathname.includes("contat")) {
      fixes.push({
        type: "typo",
        message: 'Did you mean "/contact"?',
        correctPath: "/contact",
      });
    }

    // Check for case sensitivity issues
    if (pathname.toLowerCase() !== pathname) {
      fixes.push({
        type: "case_sensitivity",
        message: "URLs are case-sensitive. Try using lowercase.",
        correctPath: pathname.toLowerCase(),
      });
    }

    // Check for trailing slash issues
    if (pathname.endsWith("/") && pathname !== "/") {
      fixes.push({
        type: "trailing_slash",
        message: "Try without the trailing slash",
        correctPath: pathname.slice(0, -1),
      });
    }

    return fixes;
  };

  const suggestedFixes = getSuggestedFixes();
  const hasSuggestedFixes = suggestedFixes.length > 0;

  // Get popular pages based on the context
  const getPopularPages = () => {
    const basePages = [
      { name: "Home", path: "/", description: "Return to our homepage" },
      {
        name: "Our Projects",
        path: "/projects",
        description: "Explore our educational solutions",
      },
      {
        name: "About Us",
        path: "/about",
        description: "Learn about our mission",
      },
      {
        name: "Contact",
        path: "/contact",
        description: "Get in touch with our team",
      },
    ];

    // Add context-specific suggestions
    if (pathname.includes("blog") || pathname.includes("news")) {
      basePages.push({
        name: "News & Blog",
        path: "/news",
        description: "Check out our latest articles",
      });
    }

    if (pathname.includes("product") || pathname.includes("software")) {
      basePages.push({
        name: "Products",
        path: "/projects",
        description: "View all our educational products",
      });
    }

    return basePages;
  };

  const popularPages = getPopularPages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="mb-8">
          <div className="relative inline-block">
            <span className="text-9xl font-bold text-gray-900 opacity-10 absolute -top-4 -left-4">
              404
            </span>
            <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
              404
            </span>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        {/* Error Details */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 text-left">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We couldn't find the page you're looking for
              </h3>
              <p className="text-gray-600 mb-4">
                The page{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  "{clickedLink}"
                </code>{" "}
                doesn't exist or may have been moved.
              </p>

              {isInternalLink ? (
                <p className="text-gray-600">
                  This appears to be an internal link that might be broken or
                  outdated.
                </p>
              ) : (
                <p className="text-gray-600">
                  This looks like it might be an external link. Please check the
                  URL or contact the source.
                </p>
              )}
            </div>
          </div>

          {/* Suggested Fixes */}
          {hasSuggestedFixes && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Quick Fixes
              </h4>
              <div className="space-y-2">
                {suggestedFixes.map((fix, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {fix.message}
                      </p>
                    </div>
                    <Link
                      href={fix.correctPath}
                      className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                    >
                      Try This
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Suggestion */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-4">
            Try searching our website for the content you need.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Search Website
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages You Might Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {page.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {page.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Still Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors text-center"
            >
              Go Home
            </Link>
          </div>
        </div>

        {/* Debug Information (Visible in development only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="text-sm font-semibold text-yellow-800 mb-2">
              Development Info
            </h4>
            <div className="text-xs text-yellow-700 space-y-1">
              <p>
                <strong>Path:</strong> {pathname}
              </p>
              <p>
                <strong>Internal Link:</strong> {isInternalLink ? "Yes" : "No"}
              </p>
              <p>
                <strong>Suggested Fixes:</strong> {suggestedFixes.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
