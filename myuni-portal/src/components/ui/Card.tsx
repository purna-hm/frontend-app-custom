import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
}

export default function Card({ title, description, href, icon, badge, className = "" }: CardProps) {
  const content = (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group ${className}`}>
      {icon && (
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#1a1a5e] group-hover:bg-[#1a1a5e] group-hover:text-white transition-colors">
          {icon}
        </div>
      )}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-gray-800 group-hover:text-[#1a1a5e] transition-colors">{title}</h3>
        {badge && (
          <span className="shrink-0 text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">
            {badge}
          </span>
        )}
      </div>
      {description && <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>}
      {href && (
        <div className="mt-4 flex items-center gap-1 text-sm text-[#1a1a5e] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight size={14} />
        </div>
      )}
    </div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}
