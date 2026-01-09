import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import Footer from "@/components/Footer";
import "./globals.css";

import { Outfit } from "next/font/google";
import { Jaro } from "next/font/google";

import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jaro = Jaro({
  subsets: ["latin"],
  variable: "--font-jaro",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Unides - Talent Platform",
  description: "Connecting Creatives and Talents for Extraordinary Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${outfit.variable} ${jaro.variable}`, outfit.className, "selection:bg-unides-purple-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
