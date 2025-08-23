import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import Artists from "@/components/Artists";
import Team from "@/components/Team";
import { use } from "react";
import { getEverybody } from "@/utils/dataConverter";

export default function Home() {

  const everybody = use(getEverybody());
  const artists = everybody.filter((person) => person.enabled);

  return (
    <main>
      <HeroSection />
      <Artists artists={artists} />
      <AboutUs />
      <Team />
      <ContactUs />
    </main>
  );
}
