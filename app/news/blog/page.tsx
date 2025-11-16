// app/blog/page.tsx
import { Suspense } from "react";
import BlogContent from "@/components/blog/BlogContent";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";

export const metadata = {
  title: "Blog - Hypasoftware",
  description:
    "Latest insights, innovations, and updates from Hypasoftware on educational technology in Africa.",
};

export default function BlogPage() {
  return (
    <Suspense fallback={<LoadingSkeleton type="blog" />}>
      <BlogContent />
    </Suspense>
  );
}
