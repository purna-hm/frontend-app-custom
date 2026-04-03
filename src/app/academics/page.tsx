import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { BookOpen, Calendar, Bell, FlaskConical, Award, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Academics" };

const academicLinks = [
  { icon: Bell, label: "Examination Notice", href: "/academics/examination" },
  { icon: BookOpen, label: "Academic Model", href: "/academics/academic-model" },
  { icon: Calendar, label: "Academic Calendar", href: "/academics/calendar" },
  { icon: Zap, label: "Unique Approach of Learning", href: "/academics/approach" },
  { icon: Award, label: "Certifications (VAC)", href: "/academics/certifications" },
  { icon: FlaskConical, label: "AICTE-Idea Lab", href: "/academics/aicte-lab" },
];

const institutes = [
  { name: "Advance Computing", slug: "advance-computing", color: "bg-blue-600" },
  { name: "Architecture", slug: "architecture", color: "bg-teal-600" },
  { name: "Agriculture Sciences", slug: "agriculture", color: "bg-green-600" },
  { name: "Arts, Humanities", slug: "arts-humanities", color: "bg-pink-600" },
  { name: "Commerce", slug: "commerce", color: "bg-cyan-600" },
  { name: "Computer Application", slug: "computer-application", color: "bg-purple-600" },
  { name: "Design", slug: "design", color: "bg-orange-600" },
  { name: "Engineering and Technology", slug: "engineering", color: "bg-blue-700" },
  { name: "Journalism and Mass Communication", slug: "journalism", color: "bg-red-600" },
  { name: "Management Studies", slug: "management", color: "bg-green-700" },
  { name: "Sciences", slug: "sciences", color: "bg-yellow-600" },
  { name: "Law & Legal Studies", slug: "law", color: "bg-gray-700" },
  { name: "Pharmaceutical Sciences", slug: "pharmaceutical", color: "bg-indigo-600" },
  { name: "Pharmacy", slug: "pharmacy", color: "bg-indigo-500" },
  { name: "Performing Arts", slug: "performing-arts", color: "bg-fuchsia-600" },
  { name: "Centre for Liberal and Advanced Studies", slug: "liberal-advanced", color: "bg-violet-600" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics & Institutes"
        subtitle="World-class academic programmes, innovative curriculum, and 16 specialized institutes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Academic sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a5e] mb-6">Academics</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {academicLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 group-hover:bg-[#1a1a5e] rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={18} className="text-[#1a1a5e] group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-[#1a1a5e] text-sm transition-colors">{label}</span>
                <ArrowRight size={14} className="ml-auto text-gray-400 group-hover:text-[#1a1a5e] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Institutes */}
        <div>
          <h2 className="text-2xl font-black text-[#1a1a5e] mb-6">Our Institutes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {institutes.map(({ name, slug, color }) => (
              <Link
                key={slug}
                href={`/institutes/${slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all flex items-center gap-3"
              >
                <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <span className="text-white font-black text-xs">
                    {name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1a1a5e] transition-colors leading-snug">
                  MyUni Institute of {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
