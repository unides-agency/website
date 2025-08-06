export interface Artist {
  id: string;
  enabled: boolean;

  joinedAt: string;

  artistType: "Creative" | "Talent";

  name: string;
  description: string;
  pronouns: string;

  pdfUrl?: string;
  profilePic: string;
  imgs: string[];

  location: {
    city: string;
    country: string;
  };

  socialLinks: {
    website?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
    facebook?: string;
    tiktok?: string;
    behance?: string;
  };

  roles: RoleData;
}

interface RoleData {
  actor?: {
    type: "Actor" | "Model" | "Presenter";
    birthData: string;
    eyeColor: string;
    hairColor: string;
    shoeSize: string;
    dressSize: string;
    height: string;
  };
  musician?: {
    type: "Musician" | "DJ";
    instrument: string;
    genres: string;
    videoUrl: string[];
  };
  tattooArtist?: {
    type: "Tattoo Artist";
    tattooStyles?: string[];
    studioName?: string;
    portfolioUrls?: string[];
  };
  dancer?: {
    type: "Dancer" | "Choreographer";
    danceStyles?: string[];
    videoUrls?: string[];
  };
  creator?: {
    type:
      | "Content Creator"
      | "Influencer"
      | "Blogger"
      | "Vlogger"
      | "Podcaster"
      | "Streamer"
      | "Photographer"
      | "Videographer";
    contentStyles?: string[];
    portfolioUrls?: string[];
  };
}

// export interface Creative {
//   id: string;
//   name: string;
//   specialty: string;
//   description: string;
//   image?: string;
//   imgs?: string[];
//   location?: string;
//   birth?: string;
//   eyeColor?: string;
//   hairColor?: string;
//   shoeSize?: string;
//   dressSize?: string;
//   height?: string;
//   // stats?: Record<string, any>;
//   enabled?: boolean;
// }

// export interface Talent {
//   id: string;
//   name: string;
//   specialty: string;
//   specialties?: string[]; // Add plural version for modal compatibility
//   description: string;
//   image?: string;
//   imgs?: string[];
//   location?: string;
//   city?: string; // Add city field
//   age?: string;
//   birth?: string; // Add birth field
//   eyeColor?: string;
//   hairColor?: string;
//   shoeSize?: string;
//   dressSize?: string;
//   height?: string;
//   // stats?: Record<string, any>;
//   enabled?: boolean;
//   pdfUrl?: string; // Add PDF URL field
// }
