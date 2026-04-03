import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Users, BookOpen, Shield } from "lucide-react";

export const metadata: Metadata = { title: "Login — MyUni University Portal" };

const portals = [
  { icon: GraduationCap, title: "Student Portal", desc: "Access results, attendance, timetable, and more.", href: "#", color: "bg-blue-600" },
  { icon: Users, title: "Faculty Portal", desc: "Manage classes, grades, and academic activities.", href: "#", color: "bg-green-600" },
  { icon: BookOpen, title: "Exam Portal", desc: "Examination forms, hall tickets, and results.", href: "#", color: "bg-purple-600" },
  { icon: Shield, title: "Admin Portal", desc: "Administrative tools and management system.", href: "#", color: "bg-gray-700" },
];

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-[#1a1a5e] via-[#2e2e9e] to-[#0d0d3d] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-[#1a1a5e] font-black text-xl">MU</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-2">MyUni University Portal</h1>
          <p className="text-blue-200">Select your login portal below</p>
        </div>

        {/* Portal Selection */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {portals.map(({ icon: Icon, title, desc, href, color }) => (
            <a
              key={title}
              href={href}
              className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all flex items-center gap-4"
            >
              <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-yellow-300 transition-colors">{title}</h3>
                <p className="text-sm text-blue-200">{desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Login Form */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
          <h2 className="text-xl font-black text-white mb-6 text-center">Quick Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-blue-200 mb-1.5">User ID / Roll No.</label>
              <input type="text" className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your User ID" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-200 mb-1.5">Password</label>
              <input type="password" className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-[#1a1a5e] font-black py-3.5 rounded-xl hover:bg-yellow-300 transition-colors">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-blue-300 hover:text-white transition-colors">Forgot Password?</a>
            <span className="text-blue-400 mx-2">|</span>
            <a href="#" className="text-xs text-blue-300 hover:text-white transition-colors">First Time Login?</a>
          </div>
        </div>

        <p className="text-center text-blue-400 text-xs mt-6">
          Need help? Contact{" "}
          <a href="mailto:support@myuni.edu.in" className="text-yellow-300 hover:underline">
            support@myuni.edu.in
          </a>
        </p>
      </div>
    </div>
  );
}
