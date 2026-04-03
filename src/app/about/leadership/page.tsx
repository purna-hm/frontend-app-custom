import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "The Leadership" };

const leaders = [
  { title: "Chancellor", name: "Name TBD", qualification: "Ph.D., D.Sc.", initial: "CL" },
  { title: "Vice Chancellor", name: "Name TBD", qualification: "Ph.D.", initial: "VC" },
  { title: "Pro Vice Chancellor", name: "Name TBD", qualification: "Ph.D.", initial: "PV" },
  { title: "Registrar", name: "Name TBD", qualification: "MBA, LLB", initial: "RE" },
  { title: "Dean of Academics", name: "Name TBD", qualification: "Ph.D.", initial: "DA" },
  { title: "Dean of Research", name: "Name TBD", qualification: "Ph.D.", initial: "DR" },
  { title: "Controller of Examinations", name: "Name TBD", qualification: "M.Sc., Ph.D.", initial: "CE" },
  { title: "Finance Officer", name: "Name TBD", qualification: "CA, MBA", initial: "FO" },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="The Leadership"
        subtitle="Meet the visionary leaders steering MyUni University towards excellence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Leadership" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leaders.map(({ title, name, qualification, initial }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#1a1a5e] to-[#2e2e9e] flex items-center justify-center mb-4">
                <span className="text-white font-black text-lg">{initial}</span>
              </div>
              <h3 className="font-bold text-[#1a1a5e]">{name}</h3>
              <p className="text-sm font-semibold text-yellow-600 mt-1">{title}</p>
              <p className="text-xs text-gray-400 mt-1">{qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
