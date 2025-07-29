import { cn } from "@/utils/cn";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className={cn("relative h-screen flex items-center justify-center mx-auto pb-4 pt-6")}>

      <div className="absolute inset-0 bg-[url(/images/cultural-motifs.svg)] bg-cover opacity-40"></div>
      <div className="absolute inset-0 bg-[url(/images/folklore-pattern.svg)] bg-cover opacity-40"></div>
      <div className="absolute inset-0 bg-[url(/images/palm-leaves.svg)] bg-cover opacity-40"></div>

      <Link href="/" className=" flex flex-col items-center">
        <Image src="/unides_writing_green.png" alt="unides-logo" width={600} height={150} />
        <Image src="/unides_green.png" alt="unides-logo" width={300} height={150} />
      </Link> 
      <Navbar />
    </header>
  );
}
