"use client";
import Image from "next/image";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";
import React from "react";

interface TeamMember {
  id: string;
  name: string;
  pronouns: string;
  role: string;
  subtitle: string;
  imgUrl: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "grasi",
    name: "Grasi Pacheco",
    pronouns: "she/her",
    role: "Founder & CEO",
    subtitle: "Operations & Talent Management",
    imgUrl:
      "https://unides.s3.eu-central-1.amazonaws.com/images/about/meetTheQueens/grasi-primary.jpg",
  },
  {
    id: "oguz",
    name: "Oguz Kabasakal",
    pronouns: "he/him",
    role: "Web Developer",
    subtitle: "Web Technologies & User Experience",
    imgUrl:
      "https://unides.s3.eu-central-1.amazonaws.com/images/about/meetTheQueens/oguz-primary.jpg",
  },
  {
    id: "cavi",
    name: "Cavi Loos",
    pronouns: "he/him",
    role: "Web Designer",
    subtitle: "Digital Spaces & Creative Interfaces",
    imgUrl:
      "https://unides.s3.eu-central-1.amazonaws.com/images/about/meetTheQueens/cavi-primary.jpg",
  },
  {
    id: "eve",
    name: "Eve Queiroz",
    pronouns: "she/her",
    role: "Creative Director",
    subtitle: "Artistic Vision & Strategy",
    imgUrl: "https://unides.s3.eu-central-1.amazonaws.com/images/about/meetTheQueens/eve-hover.jpg",
  },
];

export default function Team() {
  return (
    <ContentSection
      id="team"
      title="meet the queens"
      subtitle="Our team is a diverse group of passionate individuals dedicated to empowering artists and creators. "
      bgColor="unides-lime"
      accentColor="unides-orange"
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {TEAM_MEMBERS.map((m) => (
          <TeamCard key={m.id} member={m} />
        ))}
      </div>
    </ContentSection>
  );
}

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden",
        "bg-neutral-200/5 border border-unides-orange/40 backdrop-blur-sm",
        "aspect-9/16 w-full",
        "shadow-sm hover:shadow-lg transition-shadow",
        "focus-within:ring-2 focus-within:ring-unides-orange/60"
      )}
      tabIndex={0}
    >
      {/* Image area (3/4 height) */}
      <div className="flex-3 relative w-full h-full">
        <Image
          src={member.imgUrl}
          alt={member.name}
          fill
          sizes="(min-width:1024px) 20vw, 40vw"
          className={cn(
            "object-cover object-center select-none",
            "transition-transform duration-700",
            "group-hover:scale-105"
          )}
          loading="lazy"
        />
      </div>
      {/* Footer (1/4 height) */}
      <div className="flex-1 bg-unides-orange text-white p-3 sm:p-4 flex flex-col justify-start gap-1">
        <h3 className="font-jaro text-base sm:text-lg md:text-xl leading-tight">{member.name}</h3>
        <span className="font-sans text-xs font-normal">{member.pronouns}</span>
        <p className="text-sm sm:text-base font-medium tracking-wide leading-snug">{member.role}</p>
        <p className="text-xs leading-snug opacity-90">{member.subtitle}</p>
      </div>
    </article>
  );
}
