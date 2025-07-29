import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const links = [
  {
    url: "https://instagram.com/unidesagency",
    description: "Follow Unides on Instagram",
    icon: "",
  },
  {
    url: "https://wa.me/1728027395",
    description: "Contact Unides on WhatsApp",
    icon: "",
  },
  {
    url: "https://www.youtube.com/@UnidesAgency",
    description: "Watch Unides on YouTube",
    icon: "",
  },
];

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col min-h-64 py-8 items-center justify-center overflow-hidden relative",
        "bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-slate-900/40"
      )}
    >
      {/* Logo at top for mobile, bottom right for desktop is replaced with top center */}
      <div className="absolute top-4 left-4 sm:top-auto sm:left-auto sm:bottom-8 sm:right-8">
        <Image
          src="/unides_agency_orange.png"
          alt="Unides"
          className="h-12 sm:h-16 w-auto"
          width={200}
          height={50}
        />
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-lg mx-auto px-4 py-8 sm:py-0">
        {/* Header text */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-medium text-white/90 mb-1">{`Let's connect.`}</h3>
          <p className="text-sm text-white/80">Follow us and say hi.</p>
        </div>

        {/* Social links */}
        <ul className="flex justify-center items-center gap-4 sm:gap-6 w-full">
          {links.map((link) => {
            // const IconComp = link.icon;
            return (
              <li className="flex-shrink-0" key={link.url}>
                <Link
                  className={cn(
                    "flex size-12 sm:size-16 items-center justify-center rounded-full border-2 border-current p-3 sm:p-4",
                    "hover:scale-110 hover:bg-white/10 transition-all duration-200 ease-in-out"
                  )}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.description
                    .replace("Follow Unides on ", "")
                    .replace("Contact Unides on ", "")
                    .replace("Watch Unides on ", "")}
                >
                  <span className="sr-only">{link.description}</span>
                  {/* <IconComp className="size-full" /> */}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
          <a href="/impressum" className="hover:text-white/80 transition-colors whitespace-nowrap">
            Impressum
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="/privacy" className="hover:text-white/80 transition-colors whitespace-nowrap">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-white/70 text-center">
          © {new Date().getFullYear()} Unides. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
