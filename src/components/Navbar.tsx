"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-2 bg-white/50 backdrop-blur-md shadow-md">
      <ul className={cn("flex justify-around items-center text-2xl")}>
        {/* <Link href="/">
        <Image src="/unides_yellow.png" alt="unides-logo" width={200} height={50}></Image>
      </Link> */}
        <li>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-0 cursor-pointer"
            aria-label="Scroll to top"
          >
            <Image src="/unides_yellow.png" alt="unides-logo" width={200} height={50} />
          </button>
        </li>
        <li className={cn("transition ", "hover:text-primary-accent hover:duration-300")}>
          <Link href="#talents">Talents</Link>
        </li>
        <li className={cn("transition ", "hover:text-primary-accent hover:duration-300")}>
          <Link href="#creatives">Creatives</Link>
        </li>
        <li className={cn("transition", "hover:text-primary-accent hover:duration-300")}>
          <Link href="#about">About Us</Link>
        </li>
        <li className={cn("transition ", "hover:text-primary-accent hover:duration-300")}>
          <Link href="#contact">Contact Us</Link>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
