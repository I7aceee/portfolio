import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {GoogleTagManager} from "@next/third-parties/google";
import {usePageView} from "@/shared/lib/use-page-view";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Максим — Frontend Developer",
  description:
    "Frontend-разработчик с 4,8 годами коммерческого опыта. Специализируюсь на сложных продуктах: мессенджеры, CRM, аналитические платформы. Next.js, TypeScript, React, FSD.",
  openGraph: {
    title: "Максим — Frontend Developer",
    description:
      "Frontend-разработчик с 4,8 годами коммерческого опыта. Next.js, TypeScript, React.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary",
    title: "Максим — Frontend Developer",
    description:
      "Frontend-разработчик с 4,8 годами коммерческого опыта. Next.js, TypeScript, React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-[#080808]`}>
    <GoogleTagManager gtmId={"GTM-M7RGTZSR"} />
    <AnalyticsListener />
      <body className="min-h-screen bg-[#080808] text-[#f0f0f0] font-sans">
        {children}
      </body>
    </html>
  );
}

const AnalyticsListener = () => {
  usePageView()
  return <></>
}
