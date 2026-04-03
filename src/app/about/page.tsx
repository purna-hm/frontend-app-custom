import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowRight, Award, Users, BookOpen, Target, Globe, Lightbulb } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const aboutLinks = [
  { label: "Why Join MyUni University", href: "/about/why-join", icon: Target },
  { label: "Chancellor Corner", href: "/about/chancellor", icon: Users },
  { label: "Exclusive Advisory Board", href: "/about/advisory-board", icon: Globe },
  { label: "Governing Board", href: "/about/governing-board", icon: Users },
  { label: "Awards & Recognition", href: "/about/awards", icon: Award },
  { label: "The Leadership", href: "/about/leadership", icon: Users },
  { label: "Pedagogy", href: "/about/pedagogy", icon: BookOpen },
  { label: "MyUni Extension", href: "/about/extension", icon: Globe, isNew: true },
  { label: "Experiential Learning", href: "/about/experiential-learning", icon: Lightbulb, isNew: true },
  { label: "Incubation", href: "/about/incubation", icon: Lightbulb, isNew: true },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About MyUni University"
        subtitle="A legacy of excellence, innovation, and holistic education since inception."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MyUni University stands as a beacon of academic excellence and innovative learning.
                Established with the vision to create a world-class educational institution, the university
                has grown to become one of the most sought-after destinations for higher education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With NAAC A+ accreditation, NIRF rankings, and a sprawling campus spread across acres
                of green landscape, MyUni University provides an unparalleled environment for intellectual
                growth, personal development, and professional excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our 16 specialized institutes offer over 150 programs across disciplines including
                Engineering, Management, Sciences, Law, Arts, Design, Journalism, and more — all
                designed to meet the evolving demands of the global workforce.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a5e] text-white rounded-2xl p-6">
                <h3 className="text-lg font-black mb-3 text-yellow-400">Our Vision</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  To be a globally recognized institution that empowers students with knowledge,
                  skills, and values to lead meaningful and impactful lives.
                </p>
              </div>
              <div className="bg-yellow-400 rounded-2xl p-6">
                <h3 className="text-lg font-black mb-3 text-[#1a1a5e]">Our Mission</h3>
                <p className="text-[#1a1a5e]/80 text-sm leading-relaxed">
                  To provide quality education through innovative pedagogy, research, and industry
                  partnerships that foster creativity, critical thinking, and ethical leadership.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-6">MyUni at a Glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { v: "25,000+", l: "Students" },
                  { v: "1,200+", l: "Faculty" },
                  { v: "16", l: "Institutes" },
                  { v: "150+", l: "Programs" },
                  { v: "500+", l: "Acres Campus" },
                  { v: "96%", l: "Placements" },
                  { v: "200+", l: "Companies" },
                  { v: "50+", l: "Countries" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-black text-[#1a1a5e]">{v}</div>
                    <div className="text-xs text-gray-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3">
                <h3 className="text-white font-bold">About MyUni</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {aboutLinks.map(({ label, href, icon: Icon, isNew }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-5 py-3 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={15} className="text-[#1a1a5e] shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-[#1a1a5e] font-medium">
                        {label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isNew && (
                        <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">
                          NEW
                        </span>
                      )}
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[#1a1a5e]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
