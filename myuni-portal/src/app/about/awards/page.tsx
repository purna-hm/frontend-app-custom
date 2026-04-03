import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Award, Trophy, Star } from "lucide-react";

export const metadata: Metadata = { title: "Awards & Recognition" };

const awards = [
  { year: "2025", title: "Best University in Northern India", org: "Education World Rankings", icon: Trophy },
  { year: "2025", title: "NAAC A+ Re-Accreditation", org: "National Assessment and Accreditation Council", icon: Award },
  { year: "2024", title: "Top 50 NIRF University Rankings", org: "Ministry of Education, Govt. of India", icon: Star },
  { year: "2024", title: "Best Placement Record Award", org: "CII (Confederation of Indian Industry)", icon: Trophy },
  { year: "2024", title: "Innovation Excellence Award", org: "AICTE", icon: Award },
  { year: "2023", title: "Green Campus Certification", org: "Ministry of Environment, India", icon: Star },
];

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards & Recognition"
        subtitle="Celebrating milestones that affirm our commitment to excellence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Awards & Recognition" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {awards.map(({ year, title, org, icon: Icon }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} className="text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#1a1a5e]">{title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{org}</p>
                  </div>
                  <span className="shrink-0 bg-blue-50 text-[#1a1a5e] text-sm font-bold px-3 py-1 rounded-full">
                    {year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
