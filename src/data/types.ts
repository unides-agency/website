export interface Artist{
  id: string;
  enabled: boolean;
  name: string;
  description: string;
  image: string;
  imgs: string[];
  birth: string;
  location: string;
  eyeColor: string;
  hairColor: string;
  shoeSize: string;
  dressSize: string;
  height: string;
  
}

export interface Creative {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  birth?: string;
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  height?: string;
  stats?: Record<string, any>;
  enabled?: boolean;
}

export interface Talent {
  id: string;
  name: string;
  specialty: string;
  specialties?: string[]; // Add plural version for modal compatibility
  description: string;
  image?: string;
  imgs?: string[];
  location?: string;
  city?: string; // Add city field
  age?: string;
  birth?: string; // Add birth field
  eyeColor?: string;
  hairColor?: string;
  shoeSize?: string;
  dressSize?: string;
  height?: string;
  stats?: Record<string, any>;
  enabled?: boolean;
  pdfUrl?: string; // Add PDF URL field
}
