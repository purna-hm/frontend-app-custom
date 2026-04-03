import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const institutes: Record<string, { name: string; color: string; desc: string; programs: string[]; highlights: string[] }> = {
  "advance-computing": { name: "Advance Computing", color: "bg-blue-600", desc: "Cutting-edge programmes in AI, ML, Cloud Computing, and Data Science.", programs: ["M.Tech (AI & ML)", "M.Tech (Cloud Computing)", "MCA", "B.Tech (CSE-AI)", "B.Tech (Data Science)"], highlights: ["IBM Centre of Excellence", "Google Cloud Lab", "Research in Deep Learning", "100% Placement Record"] },
  "architecture": { name: "Architecture", color: "bg-teal-600", desc: "Programmes in architecture, urban design, and sustainable building practices.", programs: ["B.Arch (5 Years)", "M.Arch", "M.Plan (Urban Planning)"], highlights: ["Collaborative Studio Environment", "Industry Critique Sessions", "Heritage Documentation Lab"] },
  "agriculture": { name: "Agriculture Sciences", color: "bg-green-600", desc: "Modern agricultural education with focus on sustainable farming and agri-business.", programs: ["B.Sc Agriculture", "M.Sc Agronomy", "MBA Agri-Business"], highlights: ["Demo Farm Facility", "Soil Testing Lab", "Drone-based Precision Agriculture"] },
  "arts-humanities": { name: "Arts, Humanities", color: "bg-pink-600", desc: "Liberal arts education fostering critical thought, creativity, and cultural understanding.", programs: ["BA English", "BA History", "BA Political Science", "BA Psychology", "MA English", "MA History"], highlights: ["Language Lab", "Cultural Exchange Programs", "Annual Literary Festival"] },
  "commerce": { name: "Commerce", color: "bg-cyan-600", desc: "Comprehensive commerce education with accounting, taxation, and financial management.", programs: ["B.Com", "B.Com (Hons)", "M.Com", "B.Com (Financial Markets)"], highlights: ["Bloomberg Terminal Lab", "CA Foundation Integration", "Stock Market Simulation"] },
  "computer-application": { name: "Computer Application", color: "bg-purple-600", desc: "Industry-aligned computing programmes with focus on web, mobile, and enterprise development.", programs: ["BCA", "MCA", "B.Sc (CS)", "M.Sc (CS)"], highlights: ["AWS Academy Campus", "Hackathon Culture", "Industry Internship Guarantee"] },
  "design": { name: "Design", color: "bg-orange-600", desc: "Creative design education spanning product, graphic, fashion, and UX design.", programs: ["B.Des (Product Design)", "B.Des (Graphic Design)", "B.Des (Fashion Design)", "B.Des (UX/UI)"], highlights: ["Design Thinking Studio", "Industry Collaboration Projects", "Annual Design Fest"] },
  "engineering": { name: "Engineering and Technology", color: "bg-blue-700", desc: "India's premier engineering education with 12 specializations and 100% placement support.", programs: ["B.Tech (CSE)", "B.Tech (ECE)", "B.Tech (Mechanical)", "B.Tech (Civil)", "B.Tech (EE)", "B.Tech (Chemical)", "M.Tech (Various)"], highlights: ["NBA Accredited", "TCS iON Lab", "Central Workshop & Fab Lab", "robotics & IoT Lab"] },
  "journalism": { name: "Journalism and Mass Communication", color: "bg-red-600", desc: "Training future media professionals with digital, broadcast, and print journalism skills.", programs: ["BJMC", "MJMC", "BA Media Studies", "PG Diploma (Journalism)"], highlights: ["Fully Equipped TV Studio", "Digital Radio Station", "News Lab with Live Feeds"] },
  "management": { name: "Management Studies", color: "bg-green-700", desc: "Business education for tomorrow's leaders with specializations across all management domains.", programs: ["MBA (Marketing)", "MBA (Finance)", "MBA (HR)", "MBA (Operations)", "MBA (Business Analytics)", "BBA"], highlights: ["AACSB Aligned Curriculum", "Bloomberg Finance Lab", "Annual B-School Conclave"] },
  "sciences": { name: "Sciences", color: "bg-yellow-600", desc: "Strong foundation in pure and applied sciences with research focus.", programs: ["B.Sc (Physics)", "B.Sc (Chemistry)", "B.Sc (Mathematics)", "B.Sc (Biotechnology)", "M.Sc (Various)"], highlights: ["Advanced Research Labs", "CSIR Collaborative Research", "Science Innovation Club"] },
  "law": { name: "Law & Legal Studies", color: "bg-gray-700", desc: "Preparing legal professionals with strong foundations in constitutional, corporate, and criminal law.", programs: ["BA LLB (5 Years)", "LLB (3 Years)", "LLM", "PG Diploma (Corporate Law)"], highlights: ["Moot Court Hall", "Legal Aid Clinic", "Bar Council Approved"] },
  "pharmaceutical": { name: "Pharmaceutical Sciences", color: "bg-indigo-600", desc: "Cutting-edge pharmaceutical education with focus on drug development and clinical research.", programs: ["B.Pharm", "M.Pharm (Pharmacology)", "M.Pharm (Pharmaceutics)", "Ph.D. Pharmacy"], highlights: ["PCI Approved", "Central Instrumentation Lab", "Industry Partnerships"] },
  "pharmacy": { name: "Pharmacy", color: "bg-indigo-500", desc: "Professional pharmacy programmes preparing students for the pharmaceutical industry and healthcare.", programs: ["D.Pharm", "B.Pharm", "Pharm.D"], highlights: ["PCI Approved", "Drug Information Centre", "Hospital Internship"] },
  "performing-arts": { name: "Performing Arts", color: "bg-fuchsia-600", desc: "Classical and contemporary performing arts education in music, dance, and theatre.", programs: ["B.A. (Music)", "B.A. (Dance)", "B.A. (Theatre Arts)", "M.A. (Music)"], highlights: ["Professional Stage & Auditorium", "Annual Cultural Festival", "Faculty from National Institutions"] },
  "liberal-advanced": { name: "Centre for Liberal and Advanced Studies", color: "bg-violet-600", desc: "Interdisciplinary centre for liberal arts, critical thinking, and advanced academic research.", programs: ["B.A. Liberal Arts", "M.A. Interdisciplinary Studies", "Certificate Programmes"], highlights: ["Socratic Discussion Method", "Global Partners Network", "Annual Symposium"] },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const inst = institutes[slug];
  return { title: inst ? `MyUni Institute of ${inst.name}` : "Institute" };
}

export default async function InstitutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const inst = institutes[slug];
  if (!inst) notFound();

  return (
    <>
      <PageHeader
        title={`MyUni Institute of ${inst.name}`}
        subtitle={inst.desc}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: inst.name }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {/* Programs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-4">Programmes Offered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {inst.programs.map((prog) => (
                  <div key={prog} className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
                    <div className={`${inst.color} w-2 h-2 rounded-full shrink-0`} />
                    <span className="text-sm font-semibold text-gray-800">{prog}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-4">Key Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {inst.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-yellow-500 font-bold mt-0.5">✦</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className={`${inst.color} rounded-2xl p-6 text-white text-center`}>
              <div className="text-4xl font-black mb-2">{inst.name.split(" ").map(w => w[0]).join("").slice(0, 3)}</div>
              <p className="text-sm opacity-80">MyUni Institute of {inst.name}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <Link href="/admissions/apply" className="block w-full bg-[#1a1a5e] text-white font-bold py-3 rounded-xl text-center hover:bg-[#2e2e9e] transition-colors mb-3">
                Apply for Admission
              </Link>
              <Link href="/admissions/brochure" className="block w-full border border-[#1a1a5e] text-[#1a1a5e] font-bold py-3 rounded-xl text-center hover:bg-blue-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(institutes).map((slug) => ({ slug }));
}
