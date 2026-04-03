import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowRight, BookOpen, FileText, Calendar, Clock, GraduationCap } from "lucide-react";

export const metadata: Metadata = { title: "Ph.D. Programmes" };

const phdLinks = [
  { label: "Ph.D. Overview", href: "/phd", icon: GraduationCap },
  { label: "Ph.D. Ordinance", href: "/phd/ordinance", icon: BookOpen },
  { label: "Syllabus PhD Entrance Exam", href: "/phd/syllabus", icon: FileText },
  { label: "Course Work Scheme & Syllabus", href: "/phd/course-work", icon: BookOpen },
  { label: "Time Table For Course Work", href: "/phd/time-table", icon: Clock },
  { label: "PhD Submission Format", href: "/phd/submission", icon: FileText },
];

const departments = ["Engineering & Technology", "Management Studies", "Sciences", "Commerce", "Law", "Pharmaceutical Sciences", "Computer Application", "Humanities & Social Sciences", "Agriculture"];

export default function PhDPage() {
  return (
    <>
      <PageHeader
        title="Ph.D. Programmes"
        subtitle="Pursue doctoral research at MyUni University with UGC-recognized Ph.D. programmes across disciplines."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ph.D." }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">About Ph.D. at MyUni</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MyUni University offers UGC-recognized Ph.D. programmes across a wide range of disciplines.
                The doctoral programme is designed to produce scholars who contribute original knowledge
                to their respective fields through rigorous research and academic inquiry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our research ecosystem includes state-of-the-art labs, a well-stocked digital library,
                experienced research supervisors, and collaborations with national and international
                institutions. Ph.D. scholars benefit from seed grants, conference funding, and
                publication support.
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-4">Eligibility & Process</h2>
              <div className="space-y-3">
                {[
                  { t: "Eligibility", d: "Master's degree with minimum 55% marks (50% for SC/ST/OBC-NCL/PwD) from a UGC-recognized university." },
                  { t: "Entrance Test", d: "Appear in MyUni Ph.D. Entrance Test (MUPET) or qualify NET/JRF/GATE/SLET." },
                  { t: "Interview", d: "Shortlisted candidates appear for a personal interview before a Departmental Research Committee." },
                  { t: "Course Work", d: "All admitted scholars complete a mandatory course work of minimum 8 credits in the first semester." },
                  { t: "Research", d: "Under the guidance of a registered supervisor, scholars conduct original research and submit a thesis." },
                ].map(({ t, d }) => (
                  <div key={t} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-28 shrink-0 font-bold text-[#1a1a5e] text-sm">{t}</div>
                    <p className="text-sm text-gray-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-4">Departments Offering Ph.D.</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {departments.map((dept) => (
                  <div key={dept} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#1a1a5e] font-bold">•</span> {dept}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3">
                <h3 className="text-white font-bold">Ph.D. Resources</h3>
              </div>
              {phdLinks.map(({ label, href, icon: Icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 group">
                  <Icon size={15} className="text-[#1a1a5e] shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a1a5e]">{label}</span>
                  <ArrowRight size={14} className="ml-auto text-gray-400 group-hover:text-[#1a1a5e]" />
                </Link>
              ))}
            </div>
            <Link href="/admissions/apply" className="block bg-[#1a1a5e] text-white font-bold py-3 rounded-xl text-center hover:bg-[#2e2e9e] transition-colors">
              Apply for Ph.D.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
