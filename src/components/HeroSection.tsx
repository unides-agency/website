import { cn } from "@/utils/cn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      className={cn(
        "w-full h-[70vh] flex flex-col items-center justify-center mx-auto bg-unides-purple"
      )}
    >
      <div className="max-w-6xl">
        <Image
          src="/unides_agency_green.png"
          alt="unides-logo"
          width={1200}
          height={200}
          className="object-contain object-center"
        />
      </div>

      <p className={cn("font-jaro text-6xl text-center text-white", "max-w-4xl px-4 pb-24")}>
        we represent
        <span className="text-unides-lime"> talents </span>
        that inspire
      </p>
    </header>
  );
}
