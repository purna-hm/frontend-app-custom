import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getAdmissionFee } from "@/lib/sanity/queries";
import { CreditCard, Info } from "lucide-react";

export const metadata: Metadata = { title: "Provisional Admission Fee" };

const defaultFees = [
  { _key: "1", category: "B.Tech (All Branches)", amount: 25000, currency: "INR", note: "Provisional fee; adjusted against annual fee" },
  { _key: "2", category: "MBA (2-Year)", amount: 30000, currency: "INR", note: "Includes orientation kit" },
  { _key: "3", category: "BCA / MCA", amount: 15000, currency: "INR", note: "" },
  { _key: "4", category: "B.Sc / M.Sc", amount: 10000, currency: "INR", note: "" },
  { _key: "5", category: "LLB / LLM", amount: 20000, currency: "INR", note: "" },
  { _key: "6", category: "Ph.D. Programmes", amount: 20000, currency: "INR", note: "Per semester fee; subject to scholarship adjustments" },
  { _key: "7", category: "B.Design / B.Arch", amount: 25000, currency: "INR", note: "" },
  { _key: "8", category: "B.Pharm / M.Pharm", amount: 20000, currency: "INR", note: "" },
];

const defaultPaymentModes = ["NEFT / RTGS", "UPI / QR Code", "Debit / Credit Card", "Demand Draft"];

export default async function AdmissionFeePage() {
  const data = await getAdmissionFee().catch(() => null);
  const fees = data?.feeCategories ?? defaultFees;
  const paymentModes = data?.paymentModes ?? defaultPaymentModes;

  return (
    <>
      <PageHeader
        title={data?.title ?? "Provisional Admission Fee"}
        subtitle={data?.description ?? "Fee structure for provisional admission confirmation. Fees are subject to revision."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Fee" },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Fee Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="bg-[#1a1a5e] px-6 py-4 flex items-center gap-3">
            <CreditCard size={20} className="text-yellow-400" />
            <h2 className="text-white font-bold">Fee Structure 2026-27</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <th className="px-6 py-3 text-left font-bold text-[#1a1a5e]">Programme / Category</th>
                  <th className="px-6 py-3 text-right font-bold text-[#1a1a5e]">Provisional Fee (₹)</th>
                  <th className="px-6 py-3 text-left font-bold text-[#1a1a5e]">Note</th>
                </tr>
              </thead>
              <tbody>
                {fees.map(({ _key, category, amount, note }, i) => (
                  <tr key={_key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3 font-medium text-gray-800">{category}</td>
                    <td className="px-6 py-3 text-right font-bold text-[#1a1a5e]">
                      ₹{amount.toLocaleString("en-IN")}
                    </td>
                    <td className="px-6 py-3 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Modes */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a1a5e] mb-4">Accepted Payment Modes</h3>
            <div className="grid grid-cols-2 gap-3">
              {paymentModes.map((mode) => (
                <div key={mode} className="bg-blue-50 text-[#1a1a5e] text-sm font-semibold px-4 py-2.5 rounded-xl text-center">
                  {mode}
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Info size={18} className="text-yellow-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#1a1a5e] mb-3">Important Notes</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  {[
                    "Provisional fee is non-refundable once seat is confirmed.",
                    "Fee is adjusted against the first semester/year tuition fee.",
                    "Scholarship holders may submit credentials before paying provisional fee.",
                    "Receipt will be generated online and sent to registered email.",
                    "For fee concession queries, contact the admission office.",
                  ].map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
