"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="text-5xl">
      <ul className={cn("flex flex-col justify-around items-end")}>
        <li
          className={cn(
            path === "/about" && "text-primaryAccent",
            "transition",
            "hover:text-primaryAccent hover:duration-300"
          )}
        >
          <Link href="/about">About us</Link>
        </li>
        <li
          className={cn(
            path.startsWith("/talents") && "text-primaryAccent",
            "transition ",
            "hover:text-primaryAccent hover:duration-300"
          )}
        >
          <Link href="/talents">Talents</Link>
        </li>
        <li
          className={cn(
            path === "/contact" && "text-primaryAccent",
            "transition ",
            "hover:text-primaryAccent hover:duration-300"
          )}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
