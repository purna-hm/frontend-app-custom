import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "All Events" };
export default function Page() {
  return (
    <>
      <PageHeader title="All Events" subtitle="Research and academic resources from MyUni University." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Research", href: "/research" }, { label: "All Events" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600">Content for All Events will be published here. Please check back soon.</p>
        </div>
      </div>
    </>
  );
}
