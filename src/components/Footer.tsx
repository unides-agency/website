import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={cn("w-[80%] flex items-center justify-between mx-auto pb-4 pt-6")}>
      <Link href="/">
        <Image src="/images/logo-black.png" alt="unides-logo" width={350} height={400} />
      </Link>

      <ul className={cn("flex flex-col justify-around items-end")}>
        <li className={cn("transition ", "hover:text-primaryAccent hover:duration-300")}>
          <Link href="/about">About us</Link>
        </li>

        <li className={cn("transition ", "hover:text-primaryAccent hover:duration-300")}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={cn("transition ", "hover:text-primaryAccent hover:duration-300")}>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li className={cn("transition ", "hover:text-primaryAccent hover:duration-300")}>
          <Link href="/impressum">Impressum</Link>
        </li>
      </ul>
    </footer>
  );
}
