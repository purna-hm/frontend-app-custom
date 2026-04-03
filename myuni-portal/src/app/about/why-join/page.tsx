import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle, Star, Globe, Award, Users, Zap } from "lucide-react";

export const metadata: Metadata = { title: "Why Join MyUni University" };

const reasons = [
  { icon: Award, title: "NAAC A+ Accreditation", desc: "Recognized for outstanding quality in teaching, research, and governance." },
  { icon: Globe, title: "Global Exposure", desc: "International collaborations, exchange programs, and industry partnerships across 50+ countries." },
  { icon: Users, title: "Expert Faculty", desc: "1,200+ experienced faculty members including industry veterans and PhD scholars." },
  { icon: Zap, title: "Placement Excellence", desc: "96% placement rate with top recruiters including Fortune 500 companies." },
  { icon: Star, title: "Holistic Development", desc: "Sports, arts, clubs, and co-curricular activities to nurture well-rounded personalities." },
  { icon: CheckCircle, title: "State-of-the-Art Campus", desc: "Modern labs, libraries, hostels, and digital infrastructure across 500+ acres." },
];

export default function WhyJoinPage() {
  return (
    <>
      <PageHeader
        title="Why Join MyUni University"
        subtitle="Discover what makes MyUni the ideal destination for your higher education journey."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Why Join" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
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
