export interface VideoWork {
  id: string;
  title: string;
  category: "pov" | "lifestyle" | "event";
  aspectRatio: "portrait" | "landscape";
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  stats: string; // e.g., "1.2M Views", "800K Views", etc.
  description: string;
}

export interface CaseStudy {
  id: string;
  brandName: string;
  projectName: string;
  category: "brand" | "social" | "creative";
  bannerImage: string;
  videoUrl?: string;
  objective: string;
  strategy: string[];
  toolkit: string[];
  colorPalette: { name: string; hex: string }[];
  deliverablesCount: number;
  results: string;
}

export interface GearItem {
  id: string;
  name: string;
  spec: string;
  description: string;
  iconName: string;
}
