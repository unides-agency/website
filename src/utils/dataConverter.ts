import { getCollection } from "@/actions";
import type { Artist } from "@/data/types";

const creatives = await getCollection("creatives");
const talents = await getCollection("talents");

function toArray(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter((v) => typeof v === "string") as string[];
  if (typeof val === "string") return [val];
  return [];
}

function str(val: unknown, fallback = ""): string {
  if (val === null || val === undefined) return fallback;
  if (typeof val === "string") return val;
  return String(val);
}

function isVideoUrl(url: string): boolean {
  const u = url.toLowerCase();
  return u.includes("youtube.com") || u.includes("youtu.be") || u.includes("vimeo.com") || u.includes("soundcloud.com");
}

function normalizeLocation(raw: any): { city: string; country: string } {
  // Accepts string "Berlin", or object { city, country }, or root-level city/country
  if (!raw) return { city: "", country: "" };
  if (typeof raw === "string") return { city: raw, country: "" };
  if (typeof raw === "object") {
    const city = str(raw.city ?? raw.town ?? "", "");
    const country = str(raw.country ?? "", "");
    return { city, country };
  }
  return { city: "", country: "" };
}

function pickSocialLinks(source: any): Artist["socialLinks"] {
  const allowed = ["website", "instagram", "linkedin", "youtube", "twitter", "facebook", "tiktok", "behance"] as const;
  const raw = (source?.socialLinks ?? {}) as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const key of allowed) {
    const v = raw[key];
    if (typeof v === "string" && v.trim()) out[key] = v;
  }
  return out;
}

function lowerIncludes(arr: string[] | undefined, term: string) {
  if (!arr || arr.length === 0) return false;
  const t = term.toLowerCase();
  return arr.some((v) => v && typeof v === "string" && v.toLowerCase().includes(t));
}

function toArtist(item: any, artistType: Artist["artistType"]): Artist {
  // Base fields
  const id = str(item.id);
  const name = str(item.name || id);
  const enabled = Boolean(item.enabled);
  const joinedAt = str(item.joinedAt || "");
  const pronouns = str(item.pronouns || "");
  const description = str(item.description || "");

  const profilePic = str(item.profilePic ?? item.image ?? "");
  const imgs = toArray(item.imgs);

  // Location normalization
  let location = normalizeLocation(item.location);
  if (!location.city && (item.city || item.country)) {
    location = { city: str(item.city || ""), country: str(item.country || "") };
  }

  // Social links
  const socialLinks = pickSocialLinks(item);

  // PDF / portfolio urls
  const pdfUrl = item.pdfUrl ? str(item.pdfUrl) : item.portifolioUrl ? str(item.portifolioUrl) : undefined;

  // Specialties and hint fields
  const specialties = toArray(item.specialties).map((s) => s.toLowerCase());
  const hasModelKeyword = lowerIncludes(specialties, "model") || /(^|\b)model(s)?(\b|$)/i.test(description);
  const hasDancerKeyword =
    lowerIncludes(specialties, "dance") ||
    lowerIncludes(specialties, "dancer") ||
    lowerIncludes(specialties, "choreographer") ||
    /\b(dancer|dance|choreograph)\b/i.test(description);
  const isDJ =
    lowerIncludes(specialties, "dj") ||
    /\bdj\b/i.test(name) ||
    /\bdj\b/i.test(description);
  const isMusicianKeyword =
    lowerIncludes(specialties, "music") ||
    lowerIncludes(specialties, "musician") ||
    /\b(musician|music)\b/i.test(description);
  const isTattooKeyword = lowerIncludes(specialties, "tattoo") || /\btattoo\b/i.test(description);

  // Stats detection for modeling/acting
  // Accept multiple possible keys from old data
  const eyeColor = str(item.eyeColor ?? item.stats?.eyeColor ?? item.personalInfo?.eyeColor ?? "");
  const hairColor = str(item.hairColor ?? item.stats?.hairColor ?? item.personalInfo?.hairColor ?? "");
  const shoeSize = str(item.shoeSize ?? item.shoe ?? item.stats?.shoeSize ?? item.personalInfo?.shoeSize ?? "");
  const dressSize = str(item.dressSize ?? item.dress ?? item.stats?.dressSize ?? item.personalInfo?.dressSize ?? "");
  const height = str(item.height ?? item.stats?.height ?? item.personalInfo?.height ?? "");
  const birthData = str(item.birth ?? item.stats?.birth ?? item.personalInfo?.birthData ?? "");

  const hasModelStats = Boolean(eyeColor || hairColor || shoeSize || dressSize || height || birthData);

  // Musician fields
  const rawVideos = imgs.filter(isVideoUrl);
  const videoUrl = rawVideos;
  const instrument = str(item.instrument ?? item.instruments ?? "");
  const genres = str(item.genres ?? "");

  // Dancer fields
  const danceStyles =
    (Array.isArray(item.danceStyles) ? item.danceStyles : undefined) ??
    (specialties.length ? specialties.filter((s) => /dance|hip hop|ballet|contemporary|jazz/i.test(s)) : undefined) ??
    [];

  // Tattoo artist fields
  const tattooStyles =
    (Array.isArray(item.tattooStyles) ? item.tattooStyles : undefined) ??
    (specialties.length ? specialties.filter((s) => /tattoo/i.test(s)) : undefined) ??
    [];

  // Build roles
  const roles: Artist["roles"] = {};

  if (hasModelStats || hasModelKeyword) {
    roles.actor = {
      type: hasModelKeyword || hasModelStats ? "Model" : "Actor",
      birthData,
      eyeColor,
      hairColor,
      shoeSize,
      dressSize,
      height,
    };
  }

  if (hasDancerKeyword || danceStyles.length > 0) {
    roles.dancer = {
      type: "Dancer",
      danceStyles: Array.from(new Set(danceStyles.map(String))),
      videoUrls: videoUrl.length ? videoUrl : [],
    };
  }

  if (isDJ || isMusicianKeyword || videoUrl.length > 0) {
    roles.musician = {
      type: isDJ ? "DJ" : "Musician",
      instrument,
      genres,
      videoUrl,
    };
  }

  if (isTattooKeyword || tattooStyles.length > 0) {
    roles.tattooArtist = {
      type: "Tattoo Artist",
      tattooStyles: Array.from(new Set(tattooStyles.map(String))),
      studioName: str(item.studioName ?? ""),
      portfolioUrls: toArray(item.portfolioUrls),
    };
  }

  const artist: Artist = {
    id,
    enabled,
    joinedAt,
    artistType,
    name,
    description,
    pronouns,
    pdfUrl,
    profilePic,
    imgs,
    location,
    socialLinks,
    roles,
  };

  return artist;
}

const artists: Artist[] = [
  ...(Array.isArray(creatives) ? creatives.map((c: any) => toArtist(c, "Creative")) : []),
  ...(Array.isArray(talents) ? talents.map((t: any) => toArtist(t, "Talent")) : []),
];

export async function getEverybody(): Promise<Artist[]> {
  return artists;
}