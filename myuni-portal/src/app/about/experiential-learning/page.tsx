import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Experiential Learning" };

export default function ExperientialLearningPage() {
  return (
    <>
      <PageHeader
        title="Experiential Learning"
        subtitle="Learn by doing — immersive, hands-on education that prepares you for the real world."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Experiential Learning" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            NEW INITIATIVE
          </div>
          <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">What is Experiential Learning?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Experiential Learning at MyUni goes beyond the classroom. It is a structured approach
            to education where students learn through direct experience — internships, live projects,
            simulations, field visits, hackathons, and industry immersion programs.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { t: "Industry Internships", d: "Semester-long internships with leading companies." },
              { t: "Live Projects", d: "Work on real business problems with corporate partners." },
              { t: "Simulations & Labs", d: "Virtual simulations and advanced laboratory environments." },
              { t: "Field Visits", d: "On-site exposure to industry operations and practices." },
              { t: "Hackathons", d: "48-hour problem-solving challenges with industry mentors." },
              { t: "Study Abroad", d: "International exchange programs with partner universities." },
            ].map(({ t, d }) => (
              <div key={t} className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-bold text-[#1a1a5e] text-sm mb-1">{t}</h4>
                <p className="text-xs text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
