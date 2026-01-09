"use client";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react"; // changed
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Artist } from "@/data/types";

const FILTERS = ["All", "Creative", "Talent"] as const;

export default function Artists({ artists }: { artists: Artist[] }) {
  // filtering logic
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");

  // modal + routing logic (temporary inline implementation)
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const artistId = searchParams.get("artist");
  const selectedArtist = artistId ? artists.find((a) => a.id === artistId) : undefined;

  // helper type for roles union to avoid any casts
  type RoleUnion = { type: string } & Record<string, unknown>;

  const closeModal = useCallback(() => {
    // remove artist param while staying on page
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // esc key handler
  useEffect(() => {
    if (!selectedArtist) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedArtist, closeModal]);

  const filteredArtists =
    activeFilter === "All"
      ? artists
      : artists.filter((artist) => activeFilter === artist.artistType);

  const getArtistCount = (type: string) =>
    artists.filter((artist) => artist.artistType === type).length;

  // derive birth year from any role that has a birthData field (e.g., actor)
  const getBirthYear = (artist: Artist): string | null => {
    if (!artist.roles) return null;
    interface RoleWithBirth { birthData: string }
    const rolesArray = Object.values(artist.roles) as unknown[];
    for (const role of rolesArray) {
      if (role && typeof role === "object" && "birthData" in role) {
        const birthData = (role as RoleWithBirth).birthData;
        if (typeof birthData === "string") {
          const match = birthData.match(/(19|20)\d{2}/);
          if (match) return match[0];
        }
      }
    }
    return null;
  };

  return (
    <ContentSection
      id="talents"
      title="talents"
      subtitle="Discover our exceptional talent & creative pool ready to bring your vision to life."
      accentColor="unides-lime"
      bgColor="white"
    >
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 mb-8 justify-center">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base",
                isActive ? "bg-unides-purple text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              )}
            >
              {filter} ({filter === "All" ? artists.length : getArtistCount(filter)})
            </button>
          );
        })}
      </div>

      <div className={cn("w-full grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")}>
        {filteredArtists.map((artist) => {
          const roles = artist.roles;
          const href = `${pathname}?artist=${encodeURIComponent(artist.id)}`;
          const birthYear = getBirthYear(artist);
          return (
            <button
              key={artist.id}
              onClick={(e) => {
                e.preventDefault();
                router.push(href, { scroll: false });
              }}
              className={cn(
                "group w-full overflow-hidden rounded-xl cursor-pointer",
                // container height governed by inner aspect box
                "shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-unides-purple/60 hover:shadow-lg"
              )}
            >
              <div className="relative w-full aspect-9/16 min-h-75 sm:min-h-87.5 lg:min-h-[25vh] rounded-xl overflow-hidden">
                {/* Background image */}
                <Image
                  src={artist.profilePic}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover scale-100 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500"
                  priority={false}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white">
                  <h3 className="font-jaro text-lg sm:text-xl leading-tight drop-shadow-sm">{artist.name}</h3>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">
                    {artist.location.city}, {artist.location.country}
                    {birthYear ? ` • ${birthYear}` : ""}
                  </p>
                  {roles && (
                    <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] uppercase tracking-wide line-clamp-2 opacity-80">
                      {Object.values(roles)
                        .filter((role): role is { type: string } => {
                          if (!role) return false;
                          const r = role as unknown as { type?: unknown };
                          return typeof r.type === "string";
                        })
                        .map((role) => role.type)
                        .join(" • ") || "No roles"}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inline modal implementation when ?artist=id is present */}
      {selectedArtist ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeModal}
          aria-hidden={false}
        >
          <div
            className="relative w-full max-w-3xl rounded-xl bg-white shadow-xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedArtist.name} details`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-gray-200 px-2 py-1 text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-unides-purple"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src={selectedArtist.profilePic}
                  alt={selectedArtist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedArtist.name}</h2>
                  <p className="text-sm text-gray-500">{selectedArtist.location.city}, {selectedArtist.location.country}</p>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line">{selectedArtist.description}</p>
                {/* Roles summary */}
                {selectedArtist.roles ? (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Roles</h3>
                    <ul className="list-disc ml-5 text-sm space-y-1">
                      {Object.values(selectedArtist.roles)
                        .filter((r): r is RoleUnion => {
                          if (!r) return false;
                          return typeof (r as { type?: unknown }).type === "string";
                        })
                        .map((r) => <li key={r.type}>{r.type}</li>)}
                    </ul>
                  </div>
                ) : null}
                {/* Social Links */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Social</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {Object.entries(selectedArtist.socialLinks)
                      .filter(([, v]) => !!v)
                      .map(([k, v]) => (
                        <a
                          key={k}
                          href={v as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full bg-unides-purple/10 text-unides-purple hover:bg-unides-purple/20 transition"
                        >
                          {k}
                        </a>
                      ))}
                  </div>
                </div>
                {selectedArtist.pdfUrl ? (
                  <a
                    href={selectedArtist.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-md bg-unides-purple px-4 py-2 text-sm font-medium text-white hover:bg-unides-purple/90 transition"
                  >
                    Download PDF
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </ContentSection>
  );
}