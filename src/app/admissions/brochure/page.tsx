import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getInfoBrochure } from "@/lib/sanity/queries";
import { Download, FileText, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Information Brochure" };

const defaultBrochures = [
  { _key: "1", name: "University Prospectus 2026-27", year: "2026-27", fileUrl: "#" },
  { _key: "2", name: "Engineering & Technology Brochure", year: "2026-27", fileUrl: "#" },
  { _key: "3", name: "Management Studies Brochure", year: "2026-27", fileUrl: "#" },
  { _key: "4", name: "Sciences & Arts Brochure", year: "2026-27", fileUrl: "#" },
  { _key: "5", name: "Law & Legal Studies Brochure", year: "2026-27", fileUrl: "#" },
  { _key: "6", name: "Ph.D. Programme Brochure", year: "2026-27", fileUrl: "#" },
];

export default async function BrochurePage() {
  const data = await getInfoBrochure().catch(() => null);
  const brochures = data?.brochures ?? defaultBrochures;

  return (
    <>
      <PageHeader
        title={data?.title ?? "Information Brochure"}
        subtitle={data?.description ?? "Download official brochures and prospectus for all programmes at MyUni University."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Brochure" },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {brochures.map(({ _key, name, year, fileUrl }) => (
            <div key={_key} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                <FileText size={22} className="text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-sm truncate">{name}</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <Calendar size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{year}</span>
                </div>
              </div>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#1a1a5e] text-white p-2.5 rounded-lg hover:bg-[#2e2e9e] transition-colors"
                title="Download"
              >
                <Download size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
