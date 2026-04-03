import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "NAAC AQAR" };
export default function Page() {
  return (
    <>
      <PageHeader title="NAAC AQAR" subtitle="Quality and accreditation information from MyUni University." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rankings", href: "/rankings" }, { label: "NAAC AQAR" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600">Content for NAAC AQAR will be published here.</p>
        </div>
      </div>
    </>
  );
}
