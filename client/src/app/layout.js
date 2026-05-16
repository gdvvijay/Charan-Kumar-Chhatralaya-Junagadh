import { Geist, Geist_Mono, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gujaratiFont = Noto_Sans_Gujarati({
  variable: "--font-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય - જૂનાગઢ",
  description:
    "શ્રી કાનજીભાઈ નાગૈયા ચારણ કુમાર છાત્રાલય, જૂનાગઢની સત્તાવાર વેબસાઇટ",
    icons:{
      icon:"/images/favicon.svg"
    },
  keywords: [
    "જૂનાગઢ છાત્રાલય",
    "ચારણ કુમાર છાત્રાલય",
    "boarding school Gujarat",
    "gadhavi boarding - junagadh",
    "charan boarding - junagadh",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="gu"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${gujaratiFont.variable}
        h-full
        scroll-smooth
      `}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans selection:bg-indigo-200 dark:selection:bg-indigo-900">
        <ThemeProvider>
          <Header/>
        <main>
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
