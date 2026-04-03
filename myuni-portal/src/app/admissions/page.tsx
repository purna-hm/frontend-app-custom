import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowRight, FileText, Phone, BookOpen, CreditCard, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "Admissions" };

const admissionLinks = [
  { icon: FileText, label: "Admission Procedure", desc: "Step-by-step guide to applying", href: "/admissions/procedure", color: "bg-blue-600" },
  { icon: BookOpen, label: "Online Application & Enquiry", desc: "Apply online or submit an enquiry", href: "/admissions/apply", color: "bg-green-600" },
  { icon: FileText, label: "Information Brochure", desc: "Download programme brochure", href: "/admissions/brochure", color: "bg-purple-600" },
  { icon: CreditCard, label: "Provisional Admission Fee", desc: "Fee structure and payment details", href: "/admissions/fee", color: "bg-orange-600" },
  { icon: MapPin, label: "Admission Offices", desc: "Find an admission office near you", href: "/admissions/offices", color: "bg-red-600" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions 2026-27"
        subtitle="Begin your journey at MyUni University. Applications are open for all UG, PG, and Ph.D. programmes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-[#1a1a5e] mb-2">Admissions Open 2026-27!</h2>
            <p className="text-[#1a1a5e]/80">
              Enroll in 150+ programs across 16 institutes. NAAC A+ | NIRF Ranked | 96% Placements.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/admissions/apply"
              className="bg-[#1a1a5e] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2e2e9e] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/admissions/brochure"
              className="border-2 border-[#1a1a5e] text-[#1a1a5e] font-bold px-6 py-3 rounded-full hover:bg-[#1a1a5e] hover:text-white transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>

        {/* Admission Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {admissionLinks.map(({ icon: Icon, label, desc, href, color }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all flex items-start gap-4"
            >
              <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1a1a5e] mb-1">{label}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
                <div className="mt-3 flex items-center gap-1 text-sm text-[#1a1a5e] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Helpline */}
        <div className="bg-[#1a1a5e] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Phone size={32} className="text-yellow-400 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Admission Helpline</h3>
              <p className="text-blue-200 text-sm">Mon–Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-2xl font-black text-yellow-400">+91-9999-MYUNI</p>
            <p className="text-blue-200 text-sm">admissions@myuni.edu.in</p>
          </div>
        </div>
      </div>
    </>
  );
}
