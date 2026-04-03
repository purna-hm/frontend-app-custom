import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "MyUni Extension" };

export default function ExtensionPage() {
  return (
    <>
      <PageHeader
        title="MyUni Extension"
        subtitle="Extending learning beyond campus through community engagement and outreach programs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "MyUni Extension" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            NEW INITIATIVE
          </div>
          <h2 className="text-2xl font-black text-[#1a1a5e] mb-4">About MyUni Extension</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MyUni Extension is a new initiative that bridges the gap between the university and society.
            Through extension activities, students and faculty engage with communities, NGOs, government
            bodies, and industries to address real-world challenges and create lasting social impact.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Programs include community service, rural development projects, skill development workshops,
            awareness campaigns, and collaborative research with local industries. MyUni Extension
            reinforces our belief that education must serve a greater social purpose.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {["Community Outreach", "Skill Development", "Rural Engagement", "Industry Connect", "NGO Partnerships", "Social Research"].map((p) => (
              <div key={p} className="bg-blue-50 text-[#1a1a5e] text-sm font-semibold px-4 py-3 rounded-xl text-center">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
