import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { FileText } from "lucide-react";
export const metadata: Metadata = { title: "Ph.D. - Ordinance" };
export default function Page() {
  return (
    <>
      <PageHeader title="Ph.D. Ordinance" subtitle="Download the official document below." breadcrumbs={[{ label: "Home", href: "/" }, { label: "PhD", href: "/phd" }, { label: "Ordinance" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <FileText size={48} className="text-[#1a1a5e] mx-auto mb-4" />
          <h2 className="text-xl font-black text-[#1a1a5e] mb-2">Ph.D. Ordinance</h2>
          <p className="text-gray-500 mb-6">The document will be available for download below. Please contact the Research Cell for the latest version.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-[#1a1a5e] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2e2e9e] transition-colors">Download PDF</a>
        </div>
      </div>
    </>
  );
}
