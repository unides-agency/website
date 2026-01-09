"use client";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";

const TEXT_BLOCKS: string[] = [
  `Unides is the spot where creativity gets real connections. We link artists, filmmakers, models, and creators of all kinds with brands, festivals, stages, and screens. We also turn things upside down with events that are pure vibes, where music, art, and community come together and create unforgettable memories.`,
  `Our mission? To boost the next generation of Latinx visionaries from the underground scene to visual artists who are breaking all the rules. We connect the most authentic creativity with brands and an audience that's tired of fake and hungry for something with soul. Our movement is to revolutionize what "Latin art" means in Europe, tearing apart stereotypes with attitude and innovation.`,
  `The vision is clear: to unite Latinx talent and culture to transform the creative scene with courage, purpose, and energy. We honor our roots and celebrate the diversity that makes us strong. Because, seriously, what's the point of growing if we're not all rising together?`,
  `We build careers through real collaboration and a community that gets that the journey can be challenging. That's why we're not just agents, we're ride-or-die partners. Every connection we make is built on mutual respect, full transparency, and trust that's here to stay.`,
];

const TALENTS: string[] = [
  "Models",
  "Content Creators",
  "Dancers",
  "Actors",
  "Directors",
  "Production",
  "Photographers & Videographers",
  "Stylists",
  "Makeup and Nail Artists",
  "Art Directors",
  "Tattoo Artists",
];

export default function AboutUs() {
  return (
    <ContentSection
      id="about"
      title="about us"
      subtitle=""
      secondarySubtitle=""
      bgColor="unides-lime"
      accentColor="unides-orange"
    >
      <h3 className="font-jaro text-unides-orange text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 self-start text-center sm:text-left w-full">
        our mission and manifest
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 w-full">
        <div className="flex flex-col items-stretch gap-6 sm:gap-8 lg:gap-12">
          {TEXT_BLOCKS.map((text, index) => (
            <p
              key={index}
              className={cn(
                "font-sans font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-unides-green leading-relaxed"
              )}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:gap-4">
          {TALENTS.map((talent, index) => (
            <p
              key={index}
              className={cn(
                "font-jaro text-lg sm:text-xl lg:text-2xl text-unides-orange leading-relaxed",
                "border-2 border-unides-orange text-center p-2 sm:p-3"
              )}
            >
              {talent}
            </p>
          ))}
        </div>
      </div>

      <p
        className={cn(
          "border-y-4 sm:border-y-8 border-unides-orange py-6 sm:py-12 px-4 sm:px-8 lg:px-12 mt-12 sm:mt-24",
          "font-sans font-medium text-center text-base sm:text-lg md:text-xl lg:text-2xl text-unides-green leading-relaxed"
        )}
      >
        {`Since #DayOne, our goal has been clear: to connect incredible talent with the right platforms, people, and opportunities while staying true to who we are.`}
      </p>
    </ContentSection>
  );
}
