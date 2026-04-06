import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ArrowRight, Trophy, BookOpen, Users, Calendar, Newspaper, BookMarked, PenLine } from "lucide-react";

export const metadata: Metadata = { title: "MyUni Life — Life at MyUni" };

const lifeLinks = [
  { icon: Users, label: "Life@MyUni", href: "/myuni", desc: "Campus experience and student life" },
  { icon: Trophy, label: "MyUni Sports", href: "/myuni/sports", desc: "Sports facilities and achievements" },
  { icon: BookOpen, label: "MyUni Library", href: "/myuni/library", desc: "Digital and physical library resources" },
  { icon: Users, label: "Alumni", href: "/myuni/alumni", desc: "Connect with our alumni network" },
  { icon: Calendar, label: "Events", href: "/myuni/events", desc: "Upcoming and past events" },
  { icon: Newspaper, label: "MyUni Times", href: "/myuni/times", desc: "University newsletter" },
  { icon: BookMarked, label: "Print Media", href: "/myuni/media", desc: "Media coverage and press releases" },
  { icon: PenLine, label: "Blogs", href: "/myuni/blogs", desc: "Student and faculty blogs" },
];

export default function MyUniLifePage() {
  return (
    <>
      <PageHeader
        title="MyUni Life — Life at MyUni"
        subtitle="A vibrant, inclusive campus community that nurtures growth beyond academics."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "MyUni Life" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {lifeLinks.map(({ icon: Icon, label, href, desc }) => (
            <Link key={href} href={href} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all">
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#1a1a5e] rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-[#1a1a5e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-[#1a1a5e] mb-1">{label}</h3>
              <p className="text-xs text-gray-500">{desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-[#1a1a5e] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>

        {/* Campus life highlights */}
        <div className="bg-gradient-to-r from-[#1a1a5e] to-[#2e2e9e] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-6">Campus Life at a Glance</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "50+", l: "Student Clubs" },
              { v: "100+", l: "Annual Events" },
              { v: "5000+", l: "Library Books" },
              { v: "20+", l: "Sports Facilities" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-yellow-400">{v}</div>
                <div className="text-sm text-blue-200 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
