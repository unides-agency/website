import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex items-center justify-between mx-auto px-16 pb-10 pt-2"
        // "grid grid-cols-3 px-8 items-center"
      )}
    >
      <Link href="/">
        <Image src="/images/logo-black.png" alt="unides-logo" width={200} height={100} />
      </Link>

      <div className="bg-red-500">
        UNIDES AGENCY
        <br />
        Wisbyer str 74
        <br />
        10439, Berlin
      </div>

      <div className="bg-red-500">
        {`Let's work together`} <br /> Email:info@unides-agency.com
      </div>

      <ul className={cn("flex flex-col justify-around items-end")}>
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
