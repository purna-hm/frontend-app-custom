import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "MyUni Virtual Tour" };

export default function VirtualTourPage() {
  return (
    <>
      <PageHeader
        title="MyUni Virtual Tour"
        subtitle="Explore the MyUni University campus from the comfort of your home."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Virtual Tour" }]}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
          {/* Virtual tour embed placeholder */}
          <div className="bg-gradient-to-br from-[#1a1a5e] to-[#2e2e9e] aspect-video flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl font-bold">360° Virtual Campus Tour</p>
              <p className="text-blue-200 text-sm mt-2">
                Embed your 360° virtual tour video or iframe here.
                <br />Set <code className="bg-white/20 px-1 rounded">NEXT_PUBLIC_VIRTUAL_TOUR_URL</code> to embed your tour.
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {["Main Campus", "Academic Blocks", "Labs & Workshops", "Library", "Hostel & Cafeteria", "Sports Complex"].map((loc) => (
            <div key={loc} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-[#1a1a5e] font-black text-xs">{loc.split(" ").map(w => w[0]).join("")}</span>
              </div>
              <p className="font-semibold text-sm text-gray-700">{loc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
