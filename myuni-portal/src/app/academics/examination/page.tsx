import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getAllNotices } from "@/lib/sanity/queries";
import { Bell, FileText, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Examination Notice" };

const defaultNotices = [
  { _id: "1", title: "Mid-Semester Examination Schedule — Even Semester 2026", date: "2026-03-20", isNew: true, fileUrl: "#", category: "exam" },
  { _id: "2", title: "End-Semester Examination Timetable — Even Semester 2026", date: "2026-04-01", isNew: true, fileUrl: "#", category: "exam" },
  { _id: "3", title: "Practical Examination Schedule — B.Tech (All Branches)", date: "2026-03-15", isNew: false, fileUrl: "#", category: "exam" },
  { _id: "4", title: "PhD Course Work Examination — Batch 2025-26", date: "2026-02-28", isNew: false, fileUrl: "#", category: "exam" },
  { _id: "5", title: "Back Paper Examination Schedule — Jan 2026", date: "2026-01-10", isNew: false, fileUrl: "#", category: "exam" },
  { _id: "6", title: "Result Declaration — Odd Semester 2025-26", date: "2025-12-20", isNew: false, fileUrl: "#", category: "exam" },
];

export default async function ExaminationPage() {
  const notices = await getAllNotices().catch(() => defaultNotices);
  const examNotices = notices.filter((n) => n.category === "exam");
  const displayNotices = examNotices.length > 0 ? examNotices : defaultNotices;

  return (
    <>
      <PageHeader
        title="Examination Notice"
        subtitle="Official examination schedules, timetables, and results from the Controller of Examinations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Examination Notice" }]}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a1a5e] px-6 py-4 flex items-center gap-3">
            <Bell size={20} className="text-yellow-400" />
            <h2 className="text-white font-bold">Latest Examination Notices</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {displayNotices.map(({ _id, title, date, isNew, fileUrl }) => (
              <div key={_id} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <FileText size={16} className="text-[#1a1a5e] mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 leading-snug">{title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar size={11} className="text-gray-400" />
                      <span className="text-xs text-gray-400">{new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</span>
                      {isNew && (
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
                      )}
                    </div>
                  </div>
                </div>
                {fileUrl && (
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-[#1a1a5e] font-semibold border border-[#1a1a5e] px-3 py-1.5 rounded-lg hover:bg-[#1a1a5e] hover:text-white transition-colors"
                  >
                    View PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
