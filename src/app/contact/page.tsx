import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Reach out to us through any of the channels below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e]" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e]" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e]" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] bg-white">
                      <option value="">Select subject</option>
                      <option>Admission Enquiry</option>
                      <option>Academic Query</option>
                      <option>Examination</option>
                      <option>Placement</option>
                      <option>Research</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] resize-none" placeholder="Write your message here..." />
                </div>
                <button type="submit" className="w-full bg-[#1a1a5e] text-white font-bold py-3.5 rounded-xl hover:bg-[#2e2e9e] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Campus Address", lines: ["MyUni University", "Knowledge Park, University Road", "City — 000001, India"] },
              { icon: Phone, title: "Phone Numbers", lines: ["+91-9999-MYUNI (Admissions)", "+91-9999-00000 (General)", "+91-9999-00001 (T&P Cell)"] },
              { icon: Mail, title: "Email", lines: ["admissions@myuni.edu.in", "info@myuni.edu.in", "research@myuni.edu.in"] },
              { icon: Clock, title: "Working Hours", lines: ["Monday – Friday: 9AM – 6PM", "Saturday: 9AM – 2PM", "Sunday: Closed"] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#1a1a5e]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a5e] mb-2">{title}</h3>
                    {lines.map((l) => (
                      <p key={l} className="text-sm text-gray-600 leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
