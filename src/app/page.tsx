"use client";
// import { cn } from "@/utils/cn";
import Image from "next/image";
// import Link from "next/link";
// import { getCollection } from "@/actions";
import artistData from "@/data/artists.json";
import ContentSection from "@/components/ContentSection";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import { useState } from "react";
import { cn } from "@/utils/cn";

const artistSubtitle = (
  <>
    Discover our{" "}
    <span className="text-primary">exceptional talents and creative professionals</span> ready to
    bring your vision to life.
  </>
);

const FILTERS = ["All", "Creative", "Talent"];

export default function Home() {
  // We are just mocking the data for now.
  // We'll fetch the data from the server with the line below.
  // const artistData = await getCollection("artists");

  const artists = artistData.filter((artist) => artist.enabled && artist ) ;

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArtists = activeFilter === "All" ? artists : artists.filter((artist) => activeFilter === artist.artistType) 

  return (
    <main className="container mx-auto flex flex-col gap-48 py-48">
      <ContentSection id="artists" title="Artists" subtitle={artistSubtitle}>
        <div className="flex gap-4 mb-8">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={cn(
                "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",
                activeFilter === filter ? "bg-primary text-white" : "text-gray-700"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4 ">
          {filteredArtists.map((artist) => {
            const roles = artist.roles;

            return (
              <div key={artist.id} className="bg-primary/25 p-2 rounded-xl flex flex-col items-center">
                {artist.profilePic &&
                 <Image
                  src={artist.profilePic}
                  alt={artist.name}
                  width={400}
                  height={600}
                  className="object-cover rounded-lg aspect-[4/5]"
                />
                }
                <h3 className="mt-4 text-lg font-semibold">{artist.name}</h3>
                {roles ? (
                  <p className="text-sm text-gray-500">
                    {Object.values(roles)
                      .filter((role) => role)
                      .map((role) => role.type)
                      .join(", ") || "No roles specified"}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </ContentSection>

      <AboutUs />
      <ContactUs />
    </main>
  );
}
