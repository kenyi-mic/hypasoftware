// app/blog/page.tsx
import { Suspense } from "react";
import BlogContent from "@/components/blog/BlogContent";
import BlogLoading from "@/components/blog/BlogLoading";

export const metadata = {
  title: "Blog - Hypasoftware",
  description:
    "Latest insights, innovations, and updates from Hypasoftware on educational technology in Africa.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<BlogLoading />}>
        <BlogContent />
      </Suspense>
    </div>
  );
}
