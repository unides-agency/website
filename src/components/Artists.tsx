"use client";
import ContentSection from "./ContentSection";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Artist } from "@/data/types";

const FILTERS = ["All", "Creative", "Talent"] as const;

export default function Artists({ artists }: { artists: Artist[] }) {
  // React 19: useTransition for non-blocking filter updates
  const [isPending, startTransition] = useTransition();
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");
  
  // lightbox state for full-resolution images
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // modal + routing logic
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const artistId = searchParams.get("artist");
  const selectedArtist = artistId ? artists.find((a) => a.id === artistId) : undefined;

  // helper type for roles union to avoid any casts
  type RoleUnion = { type: string } & Record<string, unknown>;

  // React 19: No need for useCallback with compiler optimizations
  const closeModal = () => {
    router.push(pathname, { scroll: false });
  };

  // esc key handler
  useEffect(() => {
    if (!selectedArtist && !lightboxImage) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          router.push(pathname, { scroll: false });
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedArtist, lightboxImage, pathname, router]);

  // React 19: Direct computation without useMemo - compiler handles optimization
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

  // React 19: Handle filter changes with transition for better UX
  const handleFilterChange = (filter: typeof FILTERS[number]) => {
    startTransition(() => {
      setActiveFilter(filter);
    });
  };

  return (
    <ContentSection
      id="talents"
      title="talents"
      subtitle="Discover our exceptional talent & creative pool ready to bring your vision to life."
      accentColor="unides-purple"
      bgColor="white"
    >
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 mb-8 justify-center">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              disabled={isPending}
              className={cn(
                "px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base",
                isActive ? "bg-unides-purple text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700",
                isPending && "opacity-70 cursor-wait"
              )}
            >
              {filter} ({filter === "All" ? artists.length : getArtistCount(filter)})
            </button>
          );
        })}
      </div>

      <div className={cn(
        "w-full grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        isPending && "opacity-60 transition-opacity"
      )}>
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
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
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
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
          aria-hidden={false}
        >
          <div
            className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedArtist.name} details`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110 hover:text-unides-purple focus:outline-none focus:ring-2 focus:ring-unides-purple focus:ring-offset-2"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="p-6 md:p-8 space-y-8">
                {/* 2-column grid: Profile pic and info section */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Profile Picture */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 shadow-lg">
                    <Image
                      src={selectedArtist.profilePic}
                      alt={selectedArtist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="border-b border-gray-200 pb-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-jaro leading-tight">
                        {selectedArtist.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-sm font-medium">
                          {selectedArtist.location.city}, {selectedArtist.location.country}
                        </p>
                        {getBirthYear(selectedArtist) && (
                          <>
                            <span className="text-gray-400">•</span>
                            <p className="text-sm">{getBirthYear(selectedArtist)}</p>
                          </>
                        )}
                      </div>
                      <div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-unides-purple/10 text-unides-purple">
                          {selectedArtist.artistType}
                        </span>
                      </div>
                    </div>

                    {/* Roles */}
                    {selectedArtist.roles && Object.keys(selectedArtist.roles).length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="h-5 w-5 text-unides-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Roles & Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Object.values(selectedArtist.roles)
                            .filter((r): r is RoleUnion => {
                              if (!r) return false;
                              return typeof (r as { type?: unknown }).type === "string";
                            })
                            .map((r) => (
                              <span
                                key={r.type}
                                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                              >
                                {r.type}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Social Links */}
                    {Object.entries(selectedArtist.socialLinks).filter(([, v]) => !!v).length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="h-5 w-5 text-unides-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          Connect
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(selectedArtist.socialLinks)
                            .filter(([, v]) => !!v)
                            .map(([k, v]) => (
                              <a
                                key={k}
                                href={v as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-unides-purple to-unides-purple/80 text-white hover:from-unides-purple/90 hover:to-unides-purple/70 transition-all hover:scale-105 shadow-sm hover:shadow-md"
                              >
                                {k.charAt(0).toUpperCase() + k.slice(1)}
                              </a>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* PDF Download */}
                    {selectedArtist.pdfUrl && (
                      <div className="pt-4 border-t border-gray-200">
                        <a
                          href={selectedArtist.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full rounded-lg bg-unides-lime px-6 py-3 text-base font-semibold text-gray-900 hover:bg-unides-lime/90 transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
                        >
                          <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download Portfolio PDF
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description Row */}
                {selectedArtist.description && (
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="h-5 w-5 text-unides-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      About
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-line">
                      {selectedArtist.description}
                    </p>
                  </div>
                )}

                {/* 4-column Image Gallery */}
                {selectedArtist.imgs && selectedArtist.imgs.length > 0 && (
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="h-5 w-5 text-unides-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Gallery
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                      {selectedArtist.imgs.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setLightboxImage(img)}
                          className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-unides-purple focus:ring-offset-2 group"
                        >
                          <Image
                            src={img}
                            alt={`${selectedArtist.name} gallery image ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <svg className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Lightbox Modal for Full-Resolution Images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
          aria-hidden={false}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white shadow-lg transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={lightboxImage}
                alt="Full resolution image"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </ContentSection>
  );
}
