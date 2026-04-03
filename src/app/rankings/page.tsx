import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowRight, Award, Star, BarChart } from "lucide-react";

export const metadata: Metadata = { title: "Rankings & Accreditations" };

const rankingLinks = [
  { label: "About IQAC", href: "/rankings" },
  { label: "Composition of IQAC", href: "/rankings/composition" },
  { label: "NIRF Ranking", href: "/rankings/nirf" },
  { label: "NAAC AQAR", href: "/rankings/naac-aqar" },
  { label: "NAAC A+ Accredited University", href: "/rankings/naac-accreditation" },
  { label: "Affiliations and Accreditations", href: "/rankings/affiliations" },
];

export default function RankingsPage() {
  return (
    <>
      <PageHeader
        title="Rankings & Accreditations"
        subtitle="MyUni University's commitment to quality, accountability, and continuous improvement."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ranking" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Accreditation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { badge: "NAAC A+", sub: "National Assessment & Accreditation", icon: Award, color: "bg-green-600" },
            { badge: "NIRF", sub: "National Institutional Ranking Framework", icon: BarChart, color: "bg-blue-600" },
            { badge: "AICTE", sub: "All India Council for Technical Education", icon: Star, color: "bg-orange-600" },
            { badge: "UGC", sub: "University Grants Commission", icon: Award, color: "bg-purple-600" },
          ].map(({ badge, sub, icon: Icon, color }) => (
            <div key={badge} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className={`${color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4`}>
                <span className="text-white font-black">{badge}</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">About IQAC</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Internal Quality Assurance Cell (IQAC) at MyUni University is the backbone of our
                quality assurance framework. Established as per UGC/NAAC guidelines, the IQAC plays a
                pivotal role in setting academic standards, ensuring compliance, and fostering a culture
                of continuous improvement across all departments and administrative units.
              </p>
              <h3 className="font-bold text-[#1a1a5e] mt-6 mb-3">IQAC Objectives</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Ensure timely, efficient, and progressive performance of academic, administrative, and financial tasks",
                  "Promote research and collaborative activities across departments",
                  "Organize workshops, seminars, and quality circles for continuous improvement",
                  "Document activities leading to quality enhancement",
                  "Act as a nodal agency for coordinating quality-related activities and NAAC/NIRF submissions",
                ].map((obj) => (
                  <li key={obj} className="flex items-start gap-2">
                    <span className="text-[#1a1a5e] font-bold mt-0.5">•</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3"><h3 className="text-white font-bold">Quick Links</h3></div>
              {rankingLinks.map(({ label, href }) => (
                <Link key={href} href={href} className="flex items-center justify-between px-5 py-3 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a1a5e]">{label}</span>
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-[#1a1a5e]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
