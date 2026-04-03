import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "NIRF Ranking" };
export default function Page() {
  return (
    <>
      <PageHeader title="NIRF Ranking" subtitle="Quality and accreditation information from MyUni University." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rankings", href: "/rankings" }, { label: "NIRF Ranking" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600">Content for NIRF Ranking will be published here.</p>
        </div>
      </div>
    </>
  );
}
