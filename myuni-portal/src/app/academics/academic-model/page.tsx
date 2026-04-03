import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "Academic Model" };
export default function AcademicModelPage() {
  return (
    <>
      <PageHeader title="Academic Model" subtitle="Our innovative academic framework designed for 21st-century learning." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Academic Model" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Choice Based Credit System (CBCS)", d: "Students choose electives across disciplines to build interdisciplinary expertise." },
            { t: "Outcome-Based Education (OBE)", d: "Curriculum designed around defined graduate outcomes and industry competencies." },
            { t: "Blended Delivery", d: "Mix of in-class lectures, online modules, labs, and fieldwork for flexible learning." },
            { t: "Continuous Evaluation", d: "Regular assessments, assignments, projects, and end-semester examinations." },
            { t: "Industry Integration", d: "Guest lectures, internships, and live projects embedded within the academic calendar." },
            { t: "Research Component", d: "Mandatory research projects and dissertation at PG level to develop analytical skills." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#1a1a5e] mb-2">{t}</h3>
              <p className="text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
