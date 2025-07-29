import React from "react";

export interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
}

export default function ContentSection({ id, title, subtitle, children }: ContentSectionProps) {
  return (
    <section id={id} className="flex flex-col items-center gap-4 scroll-mt-24">
      <h2 className="gradient-text text-center font-extrabold tracking-tight text-6xl">{title}</h2>
      <p className="max-w-xl text-center font-extrabold text-2xl mb-24">{subtitle}</p>
      {children}
    </section>
  );
}
