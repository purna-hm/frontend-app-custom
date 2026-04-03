import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Exclusive Advisory Board" };

export default function AdvisoryBoardPage() {
  return (
    <>
      <PageHeader
        title="Exclusive Advisory Board"
        subtitle="Eminent personalities guiding MyUni's academic and strategic direction."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Advisory Board" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600 leading-relaxed mb-6">
            MyUni University's Exclusive Advisory Board comprises distinguished academicians, industry
            leaders, policymakers, and global thought leaders who provide strategic guidance and
            oversight to ensure the highest standards of academic excellence.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#1a1a5e] flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-sm">AB</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a5e] text-sm">Advisory Board Member</p>
                  <p className="text-xs text-gray-500">Distinguished Expert · Industry Leader</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
