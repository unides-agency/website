import { cn } from "@/utils/cn";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className={cn("w-4/5 flex items-center justify-between mx-auto pb-4 pt-6")}>
      <Link href="/">
        <Image src="/images/logo-black.png" alt="unides-logo" width={350} height={400} />
      </Link>
      <Navbar />
    </header>
  );
}
