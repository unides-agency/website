"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "talents", href: "#talents" },
  { label: "about us", href: "#about" },
  { label: "team", href: "#team" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className={cn("w-full bg-unides-purple px-24 py-8", "flex items-center justify-between font-jaro")}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-0 cursor-pointer"
        aria-label="Scroll to top"
      >
        <Image src="/unides_lime.png" alt="unides-logo" width={200} height={50} />
      </button>
      <ul
        className={cn("flex items-center gap-12", "text-2xl text-unides-lime")}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
