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
        <div className="flex w-screen h-screen justify-center -z-[500] absolute opacity-50">
          {/* <div className="w-[100vh] h-[100vh] absolute bg-gradient-to-r from-blue-300 via-orange-300 to-amber-200"></div> */}
          <div className="w-[80vw] h-[100vh] absolute bg-gradient-to-r from-amber-200 via-blue-300 to-orange-300 from-15% via-50% to-80"></div>

          <div className="w-[70rem] h-[100vh] z-[100] absolute bg-gradient-radial from-transparent via-transparent to-slate-50 dark:to-slate-900 from-0% via-0% to-55%  "></div>
        </div>

        {/* <div className="absolute h-[100vh] -z-[500] backdrop-blur-[8rem]">
          <div className="bg-[#fbe2e3] top-[-6rem] right-[11rem] h-[39rem] rounded-full w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] top-[-1rem] h-[31.25rem] w-[70rem] rounded-full left-[-28rem] xl:left-[-15rem] dark:bg-[#676394]"></div>
        </div> */}

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
