import { cn } from "@/utils/cn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      className={cn(
        "w-full min-h-[60vh] sm:h-[70vh] flex flex-col items-center justify-center mx-auto bg-unides-purple py-12 sm:py-0"
      )}
    >
      <div className="max-w-6xl w-full px-4 sm:px-8">
        <Image
          src="/unides_agency_green.png"
          alt="unides-logo"
          width={1200}
          height={200}
          className="object-contain object-center w-full h-auto"
          priority
        />
      </div>

      <p className={cn("font-jaro text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white", "max-w-4xl px-4 pb-12 sm:pb-24 mt-8")}>
        we represent
        <span className="text-unides-lime"> talents </span>
        that inspire
      </p>
    </header>
  );
}
