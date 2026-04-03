import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getAdmissionProcedure } from "@/lib/sanity/queries";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Admission Procedure" };

// Default/fallback data when Sanity is not configured
const defaultSteps = [
  { step: 1, title: "Choose Your Programme", description: "Browse our 150+ programmes across 16 institutes. Identify the programme that aligns with your interests and career goals." },
  { step: 2, title: "Check Eligibility", description: "Review the eligibility criteria for your chosen programme including academic qualifications and entrance exam requirements." },
  { step: 3, title: "Fill Online Application", description: "Complete the online application form available on our admissions portal. Attach all required documents." },
  { step: 4, title: "Pay Application Fee", description: "Pay the non-refundable application processing fee through our secure online payment gateway." },
  { step: 5, title: "Entrance Test / Merit", description: "Appear for the relevant entrance test (if applicable) or await merit-based shortlisting." },
  { step: 6, title: "Counselling & Seat Allotment", description: "Attend the counselling session, verify documents, and receive your seat allotment letter." },
  { step: 7, title: "Pay Admission Fee", description: "Pay the provisional admission fee to confirm your seat. Partial payment options available." },
  { step: 8, title: "Report to Campus", description: "Report on the designated date with original documents. Collect your student ID and begin your journey!" },
];

const importantDates = [
  { label: "Application Start Date", date: "15 January 2026" },
  { label: "Application Last Date", date: "31 May 2026" },
  { label: "Entrance Test (MUAT)", date: "15 June 2026" },
  { label: "Counselling Starts", date: "1 July 2026" },
  { label: "Classes Commence", date: "1 August 2026" },
];

export default async function AdmissionProcedurePage() {
  const data = await getAdmissionProcedure().catch(() => null);
  const steps = data?.steps ?? defaultSteps;
  const dates = data?.importantDates ?? importantDates;

  return (
    <>
      <PageHeader
        title={data?.heroTitle ?? "Admission Procedure"}
        subtitle={data?.heroSubtitle ?? "A simple, transparent, and student-friendly admission process."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Procedure" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-[#1a1a5e] mb-8">Step-by-Step Admission Process</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100 hidden sm:block" />
              <div className="space-y-6">
                {steps.map(({ step, title, description }) => (
                  <div key={step} className="flex gap-6 group">
                    <div className="shrink-0 relative z-10">
                      <div className="w-12 h-12 bg-[#1a1a5e] group-hover:bg-yellow-400 text-white group-hover:text-[#1a1a5e] rounded-full flex items-center justify-center font-black text-lg transition-colors shadow-md">
                        {step}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#1a1a5e] mb-2">{title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-2 bg-[#1a1a5e] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#2e2e9e] transition-colors"
              >
                Start Application <ArrowRight size={16} />
              </Link>
              <Link
                href="/admissions/brochure"
                className="inline-flex items-center gap-2 border-2 border-[#1a1a5e] text-[#1a1a5e] font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                <FileText size={16} /> Download Brochure
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3 flex items-center gap-2">
                <Calendar size={16} className="text-yellow-400" />
                <h3 className="text-white font-bold">Important Dates</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {dates.map(({ label, date }) => (
                  <div key={label} className="px-5 py-3">
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="font-semibold text-[#1a1a5e] text-sm mt-0.5">{date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1a1a5e] mb-2">Documents Required</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {[
                      "Class 10 Marksheet & Certificate",
                      "Class 12 Marksheet & Certificate",
                      "Transfer/Migration Certificate",
                      "Character Certificate",
                      "Passport Size Photographs (4)",
                      "ID Proof (Aadhar/Passport)",
                      "Category Certificate (if applicable)",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
