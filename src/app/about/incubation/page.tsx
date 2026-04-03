import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Lightbulb, DollarSign, Users, Rocket } from "lucide-react";

export const metadata: Metadata = { title: "Incubation Center" };

export default function IncubationPage() {
  return (
    <>
      <PageHeader
        title="Incubation Center"
        subtitle="Turning student ideas into successful ventures — MyUni's entrepreneurship engine."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Incubation" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: Lightbulb, title: "Idea Incubation", desc: "Support for ideation, validation, and business model development." },
            { icon: DollarSign, title: "Seed Funding", desc: "Access to grants and seed funding through MyUni's investor network." },
            { icon: Users, title: "Expert Mentoring", desc: "One-on-one mentoring from industry veterans and successful entrepreneurs." },
            { icon: Rocket, title: "Market Launch", desc: "End-to-end support from prototype to market-ready product launch." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a5e] mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#1a1a5e] to-[#2e2e9e] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-4">MyUni Incubation by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "50+", l: "Startups Incubated" },
              { v: "₹2Cr+", l: "Funding Raised" },
              { v: "200+", l: "Jobs Created" },
              { v: "15+", l: "Awards Won" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-yellow-400">{v}</div>
                <div className="text-sm text-blue-200 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
