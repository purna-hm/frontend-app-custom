import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "AICTE-Idea Lab" };
export default function AICTELabPage() {
  return (
    <>
      <PageHeader title="AICTE-Idea Lab" subtitle="A creative space for innovation, prototyping, and entrepreneurship — powered by AICTE." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "AICTE-Idea Lab" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-black text-[#1a1a5e] mb-4">About AICTE-Idea Lab</h2>
          <p className="text-gray-600 leading-relaxed mb-4">MyUni University has been selected by AICTE to establish an Idea Lab — a state-of-the-art facility equipped with the latest tools for design thinking, prototyping, and innovation.</p>
          <p className="text-gray-600 leading-relaxed">The lab fosters a culture of experimentation, maker-thinking, and entrepreneurial spirit among students and faculty through hands-on workshops, ideathons, and design sprints.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {["3D Printing", "Laser Cutting", "Arduino/Raspberry Pi", "IoT Prototyping", "VR/AR Development", "PCB Design", "CNC Machining", "Robotics Kit", "Design Workstations"].map((tool) => (
            <div key={tool} className="bg-blue-50 text-[#1a1a5e] text-sm font-semibold px-4 py-3 rounded-xl text-center">{tool}</div>
          ))}
        </div>
      </div>
    </>
  );
}
