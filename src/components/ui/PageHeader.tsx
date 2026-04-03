interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#1a1a5e] to-[#2e2e9e] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-3">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-blue-200 text-base md:text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
