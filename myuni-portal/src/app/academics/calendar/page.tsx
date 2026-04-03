import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { Calendar } from "lucide-react";
export const metadata: Metadata = { title: "Academic Calendar" };
const events = [
  { month: "July 2026", items: ["01 Jul — Orientation Week Begins", "07 Jul — Odd Semester Classes Commence", "15 Jul — Last Date for Admission (UG/PG)"] },
  { month: "September 2026", items: ["01 Sep — Mid-Semester Examination Begins", "15 Sep — Mid-Semester Results Declared"] },
  { month: "November 2026", items: ["01 Nov — End-Semester Examination Form Submission", "15 Nov — End-Semester Examinations Begin", "30 Nov — End-Semester Examinations End"] },
  { month: "December 2026", items: ["15 Dec — Semester Break Begins", "31 Dec — Even Semester Registration Opens"] },
];
export default function AcademicCalendarPage() {
  return (
    <>
      <PageHeader title="Academic Calendar 2026-27" subtitle="Key academic dates, examination schedules, and holiday list for the current academic year." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Academic Calendar" }]} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {events.map(({ month, items }) => (
            <div key={month} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a5e] px-5 py-3 flex items-center gap-2">
                <Calendar size={16} className="text-yellow-400" />
                <h3 className="text-white font-bold">{month}</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item} className="px-5 py-3 text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
