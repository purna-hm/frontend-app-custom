import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Briefcase, Building, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Training & Placement" };

const topRecruiters = ["TCS", "Infosys", "Wipro", "HCL", "Accenture", "Deloitte", "L&T", "Cognizant", "IBM", "Amazon", "Flipkart", "Zomato", "KPMG", "PwC", "EY", "ICICI Bank"];

export default function TPPage() {
  return (
    <>
      <PageHeader
        title="Training & Placement"
        subtitle="Building industry-ready professionals with dedicated career support and placement services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "T&P" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: TrendingUp, v: "96%", l: "Placement Rate", color: "bg-green-50", ic: "text-green-600" },
            { icon: Building, v: "200+", l: "Recruiting Companies", color: "bg-blue-50", ic: "text-blue-600" },
            { icon: Briefcase, v: "₹8.5L", l: "Average Package", color: "bg-purple-50", ic: "text-purple-600" },
            { icon: Users, v: "₹42L", l: "Highest Package", color: "bg-orange-50", ic: "text-orange-600" },
          ].map(({ icon: Icon, v, l, color, ic }) => (
            <div key={l} className={`${color} rounded-2xl p-6 text-center`}>
              <Icon size={28} className={`${ic} mx-auto mb-3`} />
              <div className="text-2xl font-black text-gray-800">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black text-[#1a1a5e] mb-4">T&P Cell Services</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Pre-placement training: communication, aptitude, GD, and interview preparation",
                "Campus recruitment drives — on-campus and virtual",
                "Industry mentorship and networking sessions",
                "Resume building workshops and mock interviews",
                "Internship facilitation for all programmes",
                "Career counselling and guidance",
                "Job portal access for graduating students",
                "Alumni connect for referrals and networking",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[#1a1a5e] font-bold shrink-0 mt-0.5">•</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black text-[#1a1a5e] mb-4">Contact T&P Cell</h2>
            <div className="space-y-4 text-sm">
              {[
                { l: "Head, T&P Cell", v: "Name TBD" },
                { l: "Phone", v: "+91-9999-TP0001" },
                { l: "Email", v: "placement@myuni.edu.in" },
                { l: "Office Hours", v: "Mon–Sat, 10 AM – 5 PM" },
                { l: "Location", v: "Placement Block, Main Campus" },
              ].map(({ l, v }) => (
                <div key={l} className="flex gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="font-bold text-[#1a1a5e] w-32 shrink-0">{l}</span>
                  <span className="text-gray-600">{v}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1a1a5e] hover:underline">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-black text-[#1a1a5e] mb-6">Our Top Recruiters</h2>
          <div className="flex flex-wrap gap-3">
            {topRecruiters.map((r) => (
              <div key={r} className="border border-gray-200 rounded-xl px-5 py-3 text-sm font-bold text-gray-700 hover:border-[#1a1a5e] hover:text-[#1a1a5e] transition-colors">
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
