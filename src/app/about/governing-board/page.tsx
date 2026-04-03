import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Governing Board" };

export default function GoverningBoardPage() {
  return (
    <>
      <PageHeader
        title="Governing Board"
        subtitle="The apex governing body overseeing MyUni University's institutional policies and direction."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Governing Board" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-black text-[#1a1a5e] mb-4">About the Governing Board</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Governing Board of MyUni University is the supreme decision-making authority responsible
            for approving major policies, overseeing financial matters, and ensuring institutional
            compliance with regulatory frameworks.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a1a5e] text-white">
                  <th className="px-4 py-3 text-left">S.No.</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Designation</th>
                  <th className="px-4 py-3 text-left">Category</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "TBD", "Chairman", "Promoter"],
                  ["2", "TBD", "Vice Chairman", "Promoter"],
                  ["3", "TBD", "Vice Chancellor (Ex-officio)", "Ex-officio"],
                  ["4", "TBD", "Nominee — State Government", "Government Nominee"],
                  ["5", "TBD", "UGC Nominee", "Central Government Nominee"],
                  ["6", "TBD", "Expert Member", "Expert"],
                  ["7", "TBD", "Expert Member", "Expert"],
                  ["8", "TBD", "Registrar (Secretary)", "Ex-officio"],
                ].map(([sno, name, desig, cat]) => (
                  <tr key={sno} className={parseInt(sno) % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-500">{sno}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{name}</td>
                    <td className="px-4 py-3 text-gray-600">{desig}</td>
                    <td className="px-4 py-3 text-gray-500">{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
