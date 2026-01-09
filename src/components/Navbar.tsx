"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "talents", href: "#talents" },
  { label: "about us", href: "#about" },
  { label: "team", href: "#team" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn("w-full sticky inset-0 z-50 bg-unides-purple px-4 sm:px-8 lg:px-24 py-6 lg:py-8", "flex items-center justify-between font-jaro")}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-0 cursor-pointer relative z-50"
        aria-label="Scroll to top"
      >
        <Image src="/unides_lime.png" alt="unides-logo" width={160} height={40} className="w-32 sm:w-40 lg:w-52" />
      </button>
      
      {/* Desktop Navigation */}
      <ul
        className={cn("hidden lg:flex items-center gap-6 xl:gap-12", "text-xl xl:text-2xl text-unides-lime")}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:opacity-80 transition-opacity">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden relative z-50 p-2 text-unides-lime"
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-unides-purple z-40 pt-24 px-8">
          <ul className="flex flex-col gap-8 text-3xl text-unides-lime">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
