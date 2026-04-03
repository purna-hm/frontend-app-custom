import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/navigation/TopNav";
import MainNav from "@/components/navigation/MainNav";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | MyUni University",
    default: "MyUni University — Shaping Future Leaders",
  },
  description:
    "MyUni University — NAAC A+ Accredited university offering world-class education in Engineering, Management, Sciences, Law, and more. Admissions Open 2026.",
  keywords: ["MyUni University", "admissions 2026", "NAAC A+", "NIRF ranking", "university India"],
  openGraph: {
    type: "website",
    siteName: "MyUni University",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} bg-gray-50 min-h-full flex flex-col`}>
        <TopNav />
        <MainNav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <ChatbotWidget /> */}
      </body>
    </html>
  );
}
