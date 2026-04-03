import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "Unique Approach of Learning" };
export default function ApproachPage() {
  return (
    <>
      <PageHeader title="Unique Approach of Learning" subtitle="An innovative pedagogical framework that sets MyUni apart from conventional universities." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Unique Approach" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {[
            { n: "1", t: "Learn-Apply-Reflect Cycle", d: "Every concept is taught, applied through practical activity, and reflected upon through discussion — cementing understanding at every stage." },
            { n: "2", t: "Industry-Academia Collaboration", d: "Regular industry expert sessions, live projects with companies, and curriculum co-designed with industry leaders." },
            { n: "3", t: "Research-Integrated Teaching", d: "Faculty incorporate live research findings and encourage students to engage with cutting-edge knowledge." },
            { n: "4", t: "Flipped Classroom Model", d: "Students pre-study content digitally, and class time is used for discussions, problem-solving, and deeper engagement." },
            { n: "5", t: "Competency Mapping", d: "Each programme maps to specific graduate competencies aligned with industry expectations and national qualification frameworks." },
          ].map(({ n, t, d }) => (
            <div key={n} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-5">
              <div className="w-10 h-10 bg-[#1a1a5e] text-white rounded-full flex items-center justify-center font-black shrink-0">{n}</div>
              <div><h3 className="font-bold text-[#1a1a5e] mb-1">{t}</h3><p className="text-sm text-gray-600">{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
