import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "NAAC A+ Accredited University" };
export default function Page() {
  return (
    <>
      <PageHeader title="NAAC A+ Accredited University" subtitle="Quality and accreditation information from MyUni University." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rankings", href: "/rankings" }, { label: "NAAC A+ Accredited University" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600">Content for NAAC A+ Accredited University will be published here.</p>
        </div>
      </div>
    </>
  );
}
