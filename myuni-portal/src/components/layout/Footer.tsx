import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Admission Procedure", href: "/admissions/procedure" },
    { label: "Academic Calendar", href: "/academics/calendar" },
    { label: "Examination Notice", href: "/academics/examination" },
    { label: "Research", href: "/research" },
    { label: "NIRF Ranking", href: "/rankings/nirf" },
  ],
  "Institutes": [
    { label: "Engineering & Technology", href: "/institutes/engineering" },
    { label: "Management Studies", href: "/institutes/management" },
    { label: "Computer Application", href: "/institutes/computer-application" },
    { label: "Law & Legal Studies", href: "/institutes/law" },
    { label: "Sciences", href: "/institutes/sciences" },
    { label: "View All Institutes", href: "/academics" },
  ],
  "Student Life": [
    { label: "Life@MyUni", href: "/sage-life" },
    { label: "Sports", href: "/sage-life/sports" },
    { label: "Library", href: "/sage-life/library" },
    { label: "Alumni", href: "/sage-life/alumni" },
    { label: "Events", href: "/sage-life/events" },
    { label: "Blogs", href: "/sage-life/blogs" },
  ],
};

const socialLinks = [
  { label: "FB", href: "#", title: "Facebook" },
  { label: "TW", href: "#", title: "Twitter / X" },
  { label: "LI", href: "#", title: "LinkedIn" },
  { label: "YT", href: "#", title: "YouTube" },
  { label: "IG", href: "#", title: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d3d] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-[#1a1a5e] font-black text-lg">MU</span>
              </div>
              <div>
                <div className="font-black text-white text-xl">MyUni University</div>
                <div className="text-blue-300 text-xs">Shaping Future Leaders</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              MyUni University is a premier institution dedicated to academic excellence,
              innovative research, and holistic development. Accredited NAAC A+ university
              committed to transforming lives through quality education.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-yellow-400" />
                <span>University Campus, Knowledge Park, City — 000001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-400" />
                <span>+91-9999-MYUNI (69864)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-400" />
                <span>admissions@myuni.edu.in</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ label, href, title }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={title}
                  title={title}
                  className="w-8 h-8 bg-blue-800 hover:bg-yellow-400 hover:text-[#1a1a5e] rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-yellow-400 mb-4 text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white text-sm transition-colors hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation bar */}
      <div className="border-t border-blue-800 bg-[#080828]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-blue-300">
              <span className="bg-green-700 text-white px-2 py-1 rounded text-xs font-bold">NAAC A+</span>
              <span className="bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold">NIRF Ranked</span>
              <span className="bg-orange-700 text-white px-2 py-1 rounded text-xs font-bold">AICTE Approved</span>
              <span className="bg-purple-700 text-white px-2 py-1 rounded text-xs font-bold">UGC Recognized</span>
            </div>
            <p className="text-blue-400 text-xs">
              © {new Date().getFullYear()} MyUni University. All rights reserved. |{" "}
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> |{" "}
              <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
