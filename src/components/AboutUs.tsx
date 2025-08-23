"use client";
import React, { useState, useRef } from "react";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";

type Section = {
  id: string;
  title: string;
  body: string;
};

const SECTIONS: Section[] = [
  {
    id: "vision",
    title: "our vision",
    body: "Our vision is to create a vibrant and inclusive community where artists and creators can thrive, collaborate, and inspire each other. We believe in the transformative power of art to connect people, challenge perspectives, and drive positive change in society.",
  },
  {
    id: "mission",
    title: "our mission",
    body: "Our mission is to empower artists and creators by providing them with the resources, opportunities, and support they need to succeed. We are committed to fostering a culture of creativity, innovation, and collaboration, and to promoting diversity and inclusion in all aspects of our work.",
  },
  {
    id: "values",
    title: "our values",
    body: "We value creativity, authenticity, and integrity in all that we do. We are dedicated to supporting and uplifting artists and creators from all backgrounds and disciplines. We believe in the power of community and collaboration to drive positive change, and we are committed to fostering a culture of respect, inclusivity, and empowerment.",
  },
];

export default function AboutUs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((curr) => (curr === id ? null : id));

  return (
    <ContentSection
      id="about"
      title="about us"
      subtitle="At Unides nides, we connect artists, filmmakers, models and creators of all kinds with brands, stages and screens."
      secondarySubtitle="We also bring culture to life through unforgettable events - where music, art and community meet."
      bgColor="unides-lime"
      accentColor="unides-orange"
    >
      <div className="w-4/5 max-w-4xl flex flex-col items-stretch gap-4">
        {SECTIONS.map((section) => (
          <AccordionItem
            key={section.id}
            section={section}
            open={openId === section.id}
            onToggle={() => toggle(section.id)}
          />
        ))}
      </div>
    </ContentSection>
  );
}

function AccordionItem({
  section,
  open,
  onToggle,
}: {
  section: Section;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "rounded-xl bg-unides-orange backdrop-blur-sm shadow-sm",
        "transition-all duration-300"
      )}
    >
      <button
        className={cn(
          "group relative w-full flex items-center justify-center p-5",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-unides-orange/60",
          "font-jaro"
        )}
        aria-expanded={open}
        aria-controls={`${section.id}-panel`}
        onClick={onToggle}
      >
        <span className="text-3xl md:text-4xl text-white pointer-events-none text-center">
          {section.title}
        </span>
        <span
          className={cn(
            "absolute right-5 flex items-center justify-center size-12 shrink-0 rounded-full",
            "bg-unides-orange text-white",
            "transition-transform duration-300",
            open ? "rotate-45" : "rotate-0"
          )}
        >
          <PlusIcon />
        </span>
      </button>
      <div
        id={`${section.id}-panel`}
        className={cn(
          "grid transition-[grid-template-rows] duration-400 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div
          ref={contentRef}
          className={cn(
            "overflow-hidden px-6 pb-6 text-base leading-relaxed text-white",
            "opacity-0 translate-y-2 transition-all duration-300",
            open && "opacity-100 translate-y-0"
          )}
        >
          <p>{section.body}</p>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="4" y2="20" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  );
}
