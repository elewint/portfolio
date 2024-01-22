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
import ColorGradient from "@/components/color-gradient";

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
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <Toaster position="top-right" />
            <ThemeSwitch />
            {/* <ColorBarManager /> */}
            {/* This is where the content from app/page.tsx will be injected */}
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
