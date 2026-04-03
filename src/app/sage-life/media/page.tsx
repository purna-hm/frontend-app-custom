import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "Print Media" };
export default function Page() {
  return (
    <>
      <PageHeader title="Print Media" subtitle="Campus life at MyUni University." breadcrumbs={[{ label: "Home", href: "/" }, { label: "SAGE Life", href: "/sage-life" }, { label: "Print Media" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600">Content for Print Media will be published here. Please check back soon.</p>
        </div>
      </div>
    </>
  );
}
