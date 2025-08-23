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
        "w-full mx-auto flex flex-col items-center gap-4 scroll-mt-24 py-24"
      )}
    >
      <article className="text-center">
        <h2
          className={cn(
            "relative z-0 inline-block",
            "font-jaro text-unides-text-dark text-center text-5xl",
            "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[110%] after:h-[70%]",
            `after:bg-${accentColor} after:rounded-sm after:-z-10 after:translate-x-[20%] after:translate-y-[20%]`
          )}
        >
          {title}
        </h2>
        {secondarySubtitle ? (
          <div className="flex items-center justify-center gap-12 flex-wrap my-4">
            <p className="max-w-sm text-center text-xl mt-4 ">{subtitle}</p>
            <p className="max-w-sm text-center text-xl mt-4 
            ">{secondarySubtitle}</p>
          </div>
        ) : (
          <p className="max-w-md text-center text-xl mt-4 mb-12">{subtitle}</p>
        )}
      </article>

      <div className="container mx-auto flex flex-col items-center gap-4">{children}</div>
    </section>
  );
}
