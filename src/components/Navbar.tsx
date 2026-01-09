"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "talents", href: "#talents" },
  { label: "about us", href: "#about" },
  { label: "team", href: "#team" },
  { label: "contact", href: "#contact" },
];

// Color schemes for each section
const SECTION_COLORS = {
  hero: {
    bg: "bg-unides-purple",
    text: "text-unides-lime",
    logo: "/unides_lime.png",
  },
  talents: {
    bg: "bg-white",
    text: "text-unides-purple",
    logo: "/unides_purple.png",
  },
  about: {
    bg: "bg-unides-lime",
    text: "text-unides-orange",
    logo: "/unides_orange.png",
  },
  team: {
    bg: "bg-unides-lime",
    text: "text-unides-orange",
    logo: "/unides_orange.png",
  },
  contact: {
    bg: "bg-white",
    text: "text-unides-pink",
    logo: "/unides_pink.png",
  },
} as const;

type SectionKey = keyof typeof SECTION_COLORS;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId in SECTION_COLORS) {
            setActiveSection(sectionId as SectionKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id], header");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const colors = SECTION_COLORS[activeSection];

  return (
    <nav
      className={cn(
        "w-full sticky inset-0 z-20 px-4 sm:px-8 lg:px-24 py-6 lg:py-8",
        "flex items-center justify-between font-jaro transition-colors duration-500",
        colors.bg
      )}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-0 cursor-pointer relative z-50"
        aria-label="Scroll to top"
      >
        <Image
          src={colors.logo}
          alt="unides-logo"
          width={160}
          height={40}
          className="w-32 sm:w-40 lg:w-52 transition-opacity duration-500"
        />
      </button>

      {/* Desktop Navigation */}
      <ul className={cn("hidden lg:flex items-center gap-6 xl:gap-12", "text-xl xl:text-2xl transition-colors duration-500", colors.text)}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:opacity-70 transition-opacity">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={cn("lg:hidden relative z-50 p-2 transition-colors duration-500", colors.text)}
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
        <div className={cn("lg:hidden fixed inset-0 z-40 pt-24 px-8 transition-colors duration-500", colors.bg)}>
          <ul className={cn("flex flex-col gap-8 text-3xl transition-colors duration-500", colors.text)}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">
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
