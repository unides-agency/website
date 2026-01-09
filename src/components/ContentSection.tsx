import { cn } from "@/utils/cn";
import React from "react";

export interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  secondarySubtitle?: string;
  bgColor: string;
  accentColor: string;
  children: React.ReactNode;
}

export default function ContentSection({
  id,
  title,
  subtitle,
  secondarySubtitle,
  bgColor,
  accentColor,
  children,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        `bg-${bgColor}`,
        "w-full mx-auto flex flex-col items-center gap-4 scroll-mt-20 py-12 sm:py-16 md:py-20 lg:py-24"
      )}
    >
      <div className="text-center px-4">
        <h2
          className={cn(
            "relative z-0 inline-block",
            "font-jaro text-unides-text-dark text-center text-3xl sm:text-4xl md:text-5xl",
            "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[110%] after:h-[70%]",
            `after:bg-${accentColor} after:rounded-sm after:-z-10 after:translate-x-[20%] after:translate-y-[20%]`
          )}
        >
          {title}
        </h2>
        {secondarySubtitle ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 flex-wrap my-4">
            <p className="max-w-sm text-center text-base sm:text-lg md:text-xl mt-4">{subtitle}</p>
            <p className="max-w-sm text-center text-base sm:text-lg md:text-xl mt-4">{secondarySubtitle}</p>
          </div>
        ) : (
          <p className="max-w-md text-center text-base sm:text-lg md:text-xl mt-4 mb-8 sm:mb-12">{subtitle}</p>
        )}
      </div>

      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto flex flex-col items-center gap-4">{children}</div>
    </section>
  );
}
