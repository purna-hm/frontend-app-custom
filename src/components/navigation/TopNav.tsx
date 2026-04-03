"use client";

import Link from "next/link";
import { topNavItems } from "./navData";
import { Phone, Mail, Globe } from "lucide-react";

export default function TopNav() {
  return (
    <div className="bg-[#1a1a5e] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact strip */}
        <div className="flex items-center justify-between py-1 border-b border-blue-800">
          <div className="flex items-center gap-4 text-xs text-blue-200">
            <span className="flex items-center gap-1">
              <Phone size={11} />
              +91-9999-MYUNI
            </span>
            <span className="flex items-center gap-1">
              <Mail size={11} />
              admissions@myuni.edu.in
            </span>
            <span className="flex items-center gap-1">
              <Globe size={11} />
              www.myuni.edu.in
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-200">
            <span>Follow Us:</span>
            {["Facebook", "Twitter", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
        {/* Top nav links */}
        <div className="flex items-center overflow-x-auto hide-scrollbar">
          {topNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                whitespace-nowrap px-3 py-2 text-xs font-medium hover:text-yellow-300 transition-colors border-r border-blue-800 last:border-r-0
                ${item.label === "Login"
                  ? "bg-yellow-400 text-[#1a1a5e] hover:bg-yellow-300 hover:text-[#1a1a5e] font-bold px-4"
                  : "text-blue-100"}
                ${item.label === "Admissions Open 2026"
                  ? "text-yellow-300 font-semibold animate-pulse"
                  : ""}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
