import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { FlaskConical, BookOpen, FileText, Globe, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Research & Development" };

const researchLinks = [
  { icon: FlaskConical, label: "R&D Overview", href: "/research" },
  { icon: FileText, label: "Patents & Copyrights", href: "/research/patents" },
  { icon: BookOpen, label: "Publications", href: "/research/publications" },
  { icon: BookOpen, label: "Books", href: "/research/books" },
  { icon: Cpu, label: "Research Lab", href: "/research/labs" },
  { icon: Globe, label: "All Events", href: "/research/events" },
  { icon: Globe, label: "Consultancy", href: "/research/consultancy" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Development"
        subtitle="Advancing knowledge through rigorous research, innovation, and academic collaboration."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Research" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">Research at MyUni</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Research is at the heart of MyUni University's academic mission. Our faculty and students
                are engaged in cutting-edge research across science, technology, management, law, humanities,
                and interdisciplinary fields. With dedicated research labs, generous funding, and a culture
                of inquiry, MyUni is a hub for innovation.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { v: "200+", l: "Publications (2025)" },
                  { v: "45+", l: "Patents Filed" },
                  { v: "₹5Cr+", l: "Research Funding" },
                  { v: "20+", l: "Research Labs" },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#1a1a5e]">{v}</div>
                    <div className="text-xs text-gray-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Engineering & Technology Research Centre", "Business & Management Research Lab", "Life Sciences Research Centre", "Legal Research Centre", "AI & Data Science Lab", "Sustainable Energy Research Lab"].map((lab) => (
                <div key={lab} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <FlaskConical size={18} className="text-[#1a1a5e] mb-2" />
                  <p className="font-semibold text-gray-800 text-sm">{lab}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3"><h3 className="text-white font-bold">Research Links</h3></div>
              {researchLinks.map(({ icon: Icon, label, href }) => (
                <Link key={href} href={href} className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 group">
                  <Icon size={15} className="text-[#1a1a5e] shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a1a5e]">{label}</span>
                  <ArrowRight size={14} className="ml-auto text-gray-400 group-hover:text-[#1a1a5e]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
