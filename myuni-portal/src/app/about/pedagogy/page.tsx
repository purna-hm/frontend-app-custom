import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { BookOpen, Monitor, Users, Lightbulb, RefreshCw, Globe } from "lucide-react";

export const metadata: Metadata = { title: "Pedagogy" };

const approaches = [
  { icon: Monitor, title: "Blended Learning", desc: "Seamless integration of online and offline methods for flexible and effective learning experiences." },
  { icon: Users, title: "Project-Based Learning", desc: "Real-world projects that develop problem-solving, collaboration, and critical thinking skills." },
  { icon: Lightbulb, title: "Case Study Method", desc: "Industry-relevant case studies that bridge the gap between theory and practice." },
  { icon: BookOpen, title: "Research-Oriented Teaching", desc: "Faculty integrate cutting-edge research into curriculum to keep content current and relevant." },
  { icon: RefreshCw, title: "Continuous Assessment", desc: "Regular assessments, quizzes, and feedback loops to track and enhance student progress." },
  { icon: Globe, title: "Global Perspective", desc: "Curriculum designed with international benchmarks and cross-cultural competencies." },
];

export default function PedagogyPage() {
  return (
    <>
      <PageHeader
        title="Pedagogy"
        subtitle="Our approach to learning that transforms students into thinkers, innovators, and leaders."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Pedagogy" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">Our Teaching Philosophy</h2>
          <p className="text-gray-600 leading-relaxed">
            At MyUni University, we believe that learning is a transformative experience. Our pedagogy
            is rooted in evidence-based practices, student-centered approaches, and a commitment to
            developing not just knowledge but the capacity to think critically, communicate effectively,
            and lead with empathy. Our faculty are not just teachers — they are mentors, researchers,
            and industry practitioners who bring real-world insights into every classroom.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Icon size={22} className="text-[#1a1a5e]" />
              </div>
              <h3 className="font-bold text-[#1a1a5e] mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
