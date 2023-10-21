import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ColorBarManager from "@/components/color-bar-mgr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eli Intriligator | Software Engineer",
  description:
    "Recent graduate with a passion for finding inventive technical solutions, drawing on a strong foundation in software engineering principles and experience with full stack development, visualization, and virtual reality. Actively seeking a career in software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative dark:bg-slate-900 dark:text-slate-100 dark:text-opacity-90`}
      >
        {/* <div className="bg-amber-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-blue-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Note: Header is stil a server component, even tho ActiveSec.. is a client component */}
            <Header />
            <Toaster position="top-right" />
            <ThemeSwitch />
            <ColorBarManager />
            {/* This is where the content from app/page.tsx will be injected */}
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
