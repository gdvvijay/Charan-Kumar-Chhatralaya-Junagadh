import { Geist, Geist_Mono, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

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
  keywords: [
    "જૂનાગઢ છાત્રાલય",
    "ચારણ કુમાર છાત્રાલય",
    "boarding school Gujarat",
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
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
