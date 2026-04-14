import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZero — Your Website, Fully Managed",
  description:
    "We build, host, and maintain a simple landing page for your business — no upfront cost, just a monthly plan. Perfect for realtors, barbers, contractors, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0d1525] text-slate-50">
        {children}
      </body>
    </html>
  );
}
