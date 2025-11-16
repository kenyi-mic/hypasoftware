// app/innovations/page.tsx
import { Suspense } from "react";
import InnovationsContent from "@/components/innovations/InnovationsContent";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";

export const metadata = {
  title: "Innovations - Hypasoftware",
  description:
    "Explore cutting-edge technologies and R&D projects shaping the future of education in Africa.",
};

export default function InnovationsPage() {
  return (
    <Suspense fallback={<LoadingSkeleton type="innovations" />}>
      <InnovationsContent />
    </Suspense>
  );
}
