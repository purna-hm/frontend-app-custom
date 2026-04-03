import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
export const metadata: Metadata = { title: "Certifications (VAC)" };
const certifications = [
  { name: "Value Added Course: AI & Machine Learning", duration: "40 hours", credit: "2 credits" },
  { name: "Value Added Course: Digital Marketing", duration: "40 hours", credit: "2 credits" },
  { name: "Value Added Course: Financial Literacy", duration: "30 hours", credit: "1 credit" },
  { name: "Value Added Course: Communication Skills", duration: "30 hours", credit: "1 credit" },
  { name: "Value Added Course: Entrepreneurship", duration: "40 hours", credit: "2 credits" },
  { name: "Value Added Course: Yoga & Wellness", duration: "30 hours", credit: "1 credit" },
  { name: "Value Added Course: Environmental Science", duration: "40 hours", credit: "2 credits" },
  { name: "Value Added Course: Cybersecurity Basics", duration: "40 hours", credit: "2 credits" },
];
export default function CertificationsPage() {
  return (
    <>
      <PageHeader title="Certifications (VAC)" subtitle="Value Added Courses (VAC) to enhance employability and skill development." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Certifications (VAC)" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map(({ name, duration, credit }) => (
            <div key={name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-purple-600 font-black text-xs">VAC</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">{name}</h3>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-gray-400">{duration}</span>
                  <span className="text-xs text-[#1a1a5e] font-semibold">{credit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
