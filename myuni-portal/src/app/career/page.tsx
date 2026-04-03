import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Briefcase, Mail, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Career at MyUni" };

const openings = [
  { title: "Associate Professor — Computer Science", dept: "MIAC", type: "Full-Time", last: "30 Apr 2026" },
  { title: "Assistant Professor — Management", dept: "MIMS", type: "Full-Time", last: "15 May 2026" },
  { title: "Research Associate — Life Sciences", dept: "Research Cell", type: "Contract", last: "10 May 2026" },
  { title: "Lab Technician — Electronics Lab", dept: "MIET", type: "Full-Time", last: "20 Apr 2026" },
];

export default function CareerPage() {
  return (
    <>
      <PageHeader
        title="Career at MyUni University"
        subtitle="Join a dynamic, inclusive, and innovation-driven institution. Explore opportunities below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-4 mb-10">
          {openings.map(({ title, dept, type, last }) => (
            <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-[#1a1a5e]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-sm">{title}</h3>
                  <div className="flex gap-3 mt-1 text-xs text-gray-400">
                    <span>{dept}</span>
                    <span className="bg-blue-50 text-[#1a1a5e] px-2 py-0.5 rounded-full font-medium">{type}</span>
                    <span>Last Date: {last}</span>
                  </div>
                </div>
              </div>
              <a href="#" className="shrink-0 bg-[#1a1a5e] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#2e2e9e] transition-colors flex items-center gap-1">
                <FileText size={12} /> Apply
              </a>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
          <Mail size={22} className="text-[#1a1a5e] shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-[#1a1a5e] mb-1">Send Your Resume</h3>
            <p className="text-sm text-gray-600">For general applications and future openings, email your resume to <a href="mailto:hr@myuni.edu.in" className="text-[#1a1a5e] font-semibold hover:underline">hr@myuni.edu.in</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
