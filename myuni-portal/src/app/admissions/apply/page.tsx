import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getOnlineApplication } from "@/lib/sanity/queries";
import { ExternalLink, Mail, Phone, ChevronDown } from "lucide-react";

export const metadata: Metadata = { title: "Online Application & Enquiry" };

const defaultFaqs = [
  { question: "What is the application fee?", answer: "The non-refundable application processing fee is ₹500 for general category and ₹250 for SC/ST/OBC candidates." },
  { question: "Can I apply for multiple programmes?", answer: "Yes, you can apply for up to 3 programmes in a single application. Each programme will require separate eligibility verification." },
  { question: "What documents are required for the online application?", answer: "You'll need scanned copies of your academic marksheets, ID proof, passport size photograph, and category certificate (if applicable)." },
  { question: "When will I receive confirmation of my application?", answer: "You'll receive an email confirmation within 24 hours of submitting your application along with your application number." },
];

export default async function OnlineApplicationPage() {
  const data = await getOnlineApplication().catch(() => null);
  const faqs = data?.faqs ?? defaultFaqs;

  return (
    <>
      <PageHeader
        title={data?.formTitle ?? "Online Application & Enquiry"}
        subtitle={data?.formDescription ?? "Apply online for admission or submit an enquiry — we'll get back to you within 24 hours."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Online" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Application Portal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[#1a1a5e] to-[#2e2e9e] rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-black mb-3">Apply Online</h2>
              <p className="text-blue-200 mb-6">
                Our online application portal is quick, secure, and mobile-friendly. Complete your
                application in under 15 minutes.
              </p>
              {data?.applicationLink ? (
                <a
                  href={data.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-[#1a1a5e] font-black px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors text-lg shadow-lg"
                >
                  Open Application Portal <ExternalLink size={20} />
                </a>
              ) : (
                <div className="bg-white/10 border border-white/30 rounded-xl p-4">
                  <p className="text-yellow-300 font-semibold text-sm">
                    Application portal link will be configured via Sanity CMS.
                  </p>
                  <p className="text-blue-200 text-xs mt-1">
                    Set the <code className="bg-white/20 px-1 rounded">applicationLink</code> field in
                    the Online Application document in Sanity Studio.
                  </p>
                </div>
              )}
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-6">Submit an Enquiry</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Programme of Interest *</label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] focus:border-transparent bg-white">
                      <option value="">Select Programme</option>
                      <option>B.Tech</option>
                      <option>MBA</option>
                      <option>BCA / MCA</option>
                      <option>B.Sc / M.Sc</option>
                      <option>LLB / LLM</option>
                      <option>BBA / BCA</option>
                      <option>Ph.D.</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a5e] focus:border-transparent resize-none"
                    placeholder="Your question or message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a1a5e] text-white font-bold py-3.5 rounded-xl hover:bg-[#2e2e9e] transition-colors"
                >
                  Submit Enquiry
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </form>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#1a1a5e] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map(({ question, answer }, i) => (
                  <details key={i} className="border border-gray-100 rounded-xl group">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                      <span className="font-semibold text-sm text-gray-800">{question}</span>
                      <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                      {answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3">
                <h3 className="text-white font-bold">Contact Admissions</h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#1a1a5e] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Phone / WhatsApp</p>
                    <p className="font-bold text-[#1a1a5e]">
                      {data?.enquiryPhone ?? "+91-9999-MYUNI"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#1a1a5e] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-bold text-[#1a1a5e] break-all">
                      {data?.enquiryEmail ?? "admissions@myuni.edu.in"}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2">
                  Mon–Sat · 9:00 AM to 6:00 PM
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <h4 className="font-bold text-[#1a1a5e] mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { l: "Admission Procedure", h: "/admissions/procedure" },
                  { l: "Information Brochure", h: "/admissions/brochure" },
                  { l: "Fee Structure", h: "/admissions/fee" },
                  { l: "Admission Offices", h: "/admissions/offices" },
                ].map(({ l, h }) => (
                  <li key={h}>
                    <a href={h} className="text-[#1a1a5e] hover:underline font-medium">→ {l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
