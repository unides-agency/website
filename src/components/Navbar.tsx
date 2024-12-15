import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-4/5 mx-auto">
      <ul className={cn("w-full flex justify-around items-center bg-primaryAccent")}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/talents">Talents</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
