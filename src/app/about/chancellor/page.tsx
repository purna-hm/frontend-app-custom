import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Chancellor Corner" };

export default function ChancellorPage() {
  return (
    <>
      <PageHeader
        title="Chancellor Corner"
        subtitle="A message from the Chancellor of MyUni University."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Chancellor Corner" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="bg-gradient-to-b from-[#1a1a5e] to-[#2e2e9e] p-8 text-white flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-yellow-400 mb-4 flex items-center justify-center">
                <span className="text-4xl font-black text-yellow-400">CH</span>
              </div>
              <h2 className="font-black text-lg">Hon. Chancellor</h2>
              <p className="text-blue-200 text-sm mt-1">MyUni University</p>
              <div className="mt-4 text-xs text-blue-300 space-y-1">
                <p>Ph.D., D.Sc.</p>
                <p>Educator · Visionary · Leader</p>
              </div>
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="text-2xl font-black text-[#1a1a5e] mb-6">
                A Message from the Chancellor
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to MyUni University — a place where curiosity is celebrated, excellence
                  is pursued, and young minds are shaped to meet the challenges of tomorrow.
                </p>
                <p>
                  Since our founding, MyUni has remained steadfast in its commitment to provide
                  quality education that is both academically rigorous and deeply humane. Our NAAC A+
                  accreditation and NIRF rankings are not mere accolades — they are a testament to
                  the relentless dedication of our faculty, staff, and students.
                </p>
                <p>
                  We believe that true education goes beyond classrooms. It is about developing
                  critical thinkers, compassionate leaders, and responsible citizens who can make a
                  meaningful difference in the world.
                </p>
                <p>
                  As you embark on your journey at MyUni, know that you are part of a community
                  that believes in your potential and is committed to helping you achieve your dreams.
                </p>
                <p className="font-semibold text-[#1a1a5e]">
                  — Chancellor, MyUni University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
