"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNavItems, type NavItem } from "./navData";

function DropdownMenu({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) {
  if (!isOpen || !items.length) return null;
  return (
    <div className="absolute top-full left-0 mt-0 bg-white shadow-2xl border border-gray-100 rounded-b-lg z-50 min-w-[260px] py-2 max-h-[80vh] overflow-y-auto">
      {items.map((item) => (
        item.href === "#" ? (
          <div key={item.label} className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1a1a5e] bg-blue-50 mt-1">
            {item.label}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a5e] transition-colors group"
          >
            <span>{item.label}</span>
            {item.isNew && (
              <span className="ml-2 text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span>
            )}
          </Link>
        )
      ))}
    </div>
  );
}

export default function MainNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav ref={navRef} className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 py-3 shrink-0">
            <div className="w-12 h-12 bg-[#1a1a5e] rounded-full flex items-center justify-center">
              <span className="text-white font-black text-lg">MU</span>
            </div>
            <div>
              <div className="font-black text-[#1a1a5e] text-lg leading-tight">MyUni</div>
              <div className="text-xs text-gray-500 leading-tight">University</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center h-full">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative h-full"
                onMouseEnter={() => item.children?.length ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-1 px-3 py-5 text-sm font-semibold transition-colors
                    ${activeMenu === item.label
                      ? "text-[#1a1a5e] border-b-2 border-[#1a1a5e]"
                      : "text-gray-700 hover:text-[#1a1a5e]"}
                  `}
                >
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <ChevronDown size={14} className={`transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {item.children && (
                  <DropdownMenu items={item.children} isOpen={activeMenu === item.label} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-[#1a1a5e]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          {mainNavItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="p-1 text-gray-500"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
              {mobileExpanded === item.label && item.children && (
                <div className="bg-gray-50 pl-4">
                  {item.children.filter(c => c.href !== "#").map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#1a1a5e] border-b border-gray-100 last:border-b-0"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                      {child.isNew && (
                        <span className="text-[10px] bg-red-500 text-white px-1 py-0.5 rounded font-bold">NEW</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
