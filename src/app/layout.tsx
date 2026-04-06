import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopNav from "@/components/navigation/TopNav";
import MainNav from "@/components/navigation/MainNav";
import Footer from "@/components/layout/Footer";
import ReactGlobalExport from "@/components/chatbot/ReactGlobalExport";

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
      <head>
        <link rel="stylesheet" href="/widget-styles.css" />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-full flex flex-col`}>
        <TopNav />
        <MainNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ReactGlobalExport />
        <div id="uniknow-widget-root"></div>
        <Script
          id="uniknow-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s=document.createElement('script');
                s.src='/widget.js';
                s.onload=function(){
                  var container=document.getElementById('uniknow-widget-root');
                  if(container&&window.UniKnowWidget&&window.UniKnowWidget.ChatWidget&&window.ReactDOM){
                    var root=window.ReactDOM.createRoot(container);
                    root.render(window.React.createElement(window.UniKnowWidget.ChatWidget,{
                      apiUrl:'https://af-uniknow-backend.wonderfulmeadow-66859750.uksouth.azurecontainerapps.io',
                      primaryColor:'#3a9545'
                    }));
                  }
                };
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
