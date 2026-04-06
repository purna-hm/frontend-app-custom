import Link from "next/link";
import {
  GraduationCap, Building2, FlaskConical, Trophy, Users, BookOpen,
  ArrowRight, ChevronRight, Bell, Download, Phone,
} from "lucide-react";

const stats = [
  { value: "25,000+", label: "Students Enrolled" },
  { value: "1,200+", label: "Faculty Members" },
  { value: "150+", label: "Programs Offered" },
  { value: "96%", label: "Placement Rate" },
];

const highlights = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "NAAC A+ accredited with world-class faculty and curriculum designed for the future.", href: "/academics" },
  { icon: FlaskConical, title: "Cutting-edge Research", desc: "State-of-the-art labs, patents, and publications driving real-world impact.", href: "/research" },
  { icon: Building2, title: "16 Institutes", desc: "Specialized institutes covering Engineering, Law, Management, Arts, Sciences, and more.", href: "/academics" },
  { icon: Trophy, title: "NIRF Ranked", desc: "Consistently ranked among top universities for quality education and research output.", href: "/rankings/nirf" },
  { icon: Users, title: "Vibrant Campus Life", desc: "Sports, clubs, events, alumni network — a holistic university experience.", href: "/myuni" },
  { icon: BookOpen, title: "Incubation Center", desc: "Nurturing student entrepreneurship with dedicated mentoring and funding support.", href: "/about/incubation" },
];

const notices = [
  { text: "Admissions Open 2026 — Apply Now for UG/PG Programs", isNew: true, href: "/admissions/apply" },
  { text: "Exam Notice: Mid-Semester Examination Schedule Published", isNew: true, href: "/academics/examination" },
  { text: "Ph.D. Admissions — July 2026 Session Open", isNew: false, href: "/phd" },
  { text: "NAAC A+ Reaccreditation Achieved — View Report", isNew: false, href: "/rankings/naac-accreditation" },
  { text: "Information Brochure 2026-27 Available for Download", isNew: false, href: "/admissions/brochure" },
];

const institutes = [
  { name: "Engineering & Technology", short: "IET", href: "/institutes/engineering", color: "bg-blue-600" },
  { name: "Management Studies", short: "IMS", href: "/institutes/management", color: "bg-green-600" },
  { name: "Computer Application", short: "ICA", href: "/institutes/computer-application", color: "bg-purple-600" },
  { name: "Law & Legal Studies", short: "ILS", href: "/institutes/law", color: "bg-red-600" },
  { name: "Sciences", short: "IOS", href: "/institutes/sciences", color: "bg-yellow-600" },
  { name: "Architecture", short: "IAR", href: "/institutes/architecture", color: "bg-pink-600" },
  { name: "Pharmaceutical Sciences", short: "IPS", href: "/institutes/pharmaceutical", color: "bg-indigo-600" },
  { name: "Design", short: "IOD", href: "/institutes/design", color: "bg-orange-600" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1a5e] via-[#2e2e9e] to-[#0d0d3d] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 -left-16 w-64 h-64 bg-yellow-400/10 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-yellow-400/30">
                <Bell size={14} />
                Admissions Open 2026-27
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Shape Your Future at{" "}
                <span className="text-yellow-400">MyUni</span> University
              </h1>
              <p className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                NAAC A+ Accredited · NIRF Ranked · 16+ Institutes · 150+ Programs.
                Join a community of innovators, leaders, and changemakers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-[#1a1a5e] font-bold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link
                  href="/admissions/brochure"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Download size={18} /> Brochure
                </Link>
                <Link
                  href="/virtual-tour"
                  className="inline-flex items-center gap-2 border-2 border-yellow-400/50 text-yellow-300 font-semibold px-7 py-3.5 rounded-full hover:bg-yellow-400/10 transition-colors"
                >
                  Virtual Tour
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">{value}</div>
                  <div className="text-sm text-blue-200">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice Ticker */}
      <div className="bg-[#1a1a5e] text-white py-2.5 overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 bg-yellow-400 text-[#1a1a5e] font-bold text-xs px-4 py-1 mr-4 z-10">
            NOTICES
          </div>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate whitespace-nowrap flex gap-10">
              {[...notices, ...notices].map((n, i) => (
                <Link
                  key={i}
                  href={n.href}
                  className="inline-flex items-center gap-2 hover:text-yellow-300 transition-colors text-sm"
                >
                  {n.isNew && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                      NEW
                    </span>
                  )}
                  {n.text}
                  <span className="text-blue-400 mx-2">●</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose MyUni */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a5e] mt-2">
              Excellence in Every Dimension
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              MyUni University blends academic rigour with real-world exposure to produce graduates ready for a global stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#1a1a5e] rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-[#1a1a5e] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#1a1a5e]">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[#1a1a5e] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Institutes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
                Our Institutes
              </span>
              <h2 className="text-3xl font-black text-[#1a1a5e] mt-1">
                16 Specialized Institutes
              </h2>
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-[#1a1a5e] font-semibold text-sm hover:underline"
            >
              View All Institutes <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {institutes.map(({ name, short, href, color }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                  <span className="text-white font-black text-xs">{short}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1a1a5e] transition-colors leading-snug">
                  MyUni Institute of {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Banner */}
      <section className="bg-[#1a1a5e] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: GraduationCap, title: "Admission Procedure", desc: "Step-by-step guide to joining", href: "/admissions/procedure", cta: "Learn More" },
              { icon: Download, title: "Information Brochure", desc: "Download 2026-27 brochure", href: "/admissions/brochure", cta: "Download PDF" },
              { icon: Bell, title: "Exam Notices", desc: "Latest examination schedules", href: "/academics/examination", cta: "View Notices" },
              { icon: Phone, title: "Admission Helpline", desc: "+91-9999-MYUNI (69864)", href: "/contact", cta: "Contact Us" },
            ].map(({ icon: Icon, title, desc, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-5 transition-colors group"
              >
                <Icon size={24} className="text-yellow-400 mb-3" />
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-blue-200 mb-3">{desc}</p>
                <span className="text-xs text-yellow-300 font-semibold flex items-center gap-1">
                  {cta} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1a1a5e] mb-8">Accreditations & Rankings</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { badge: "NAAC A+", sub: "Accredited", color: "bg-green-600" },
              { badge: "NIRF", sub: "National Rankings", color: "bg-blue-600" },
              { badge: "AICTE", sub: "Approved", color: "bg-orange-600" },
              { badge: "UGC", sub: "Recognized", color: "bg-purple-600" },
              { badge: "NBA", sub: "Accredited Programs", color: "bg-red-600" },
              { badge: "ISO", sub: "9001:2015 Certified", color: "bg-gray-700" },
            ].map(({ badge, sub, color }) => (
              <div key={badge} className="flex flex-col items-center gap-2">
                <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <span className="text-white font-black text-xs text-center leading-tight px-1">
                    {badge}
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#1a1a5e] mb-3">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-[#1a1a5e]/80 mb-6">
            Admissions are open for 2026-27. Secure your seat at MyUni University today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions/apply"
              className="bg-[#1a1a5e] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#2e2e9e] transition-colors shadow-lg"
            >
              Apply Online Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#1a1a5e] text-[#1a1a5e] font-bold px-8 py-3.5 rounded-full hover:bg-[#1a1a5e] hover:text-white transition-colors"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
