import { VideoWork, CaseStudy, GearItem } from "./types";

export const VIDEO_WORKS: VideoWork[] = [
  {
    id: "v-1",
    title: "Behind the Lens: Kinetic POV Production",
    category: "pov",
    aspectRatio: "portrait",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-holding-a-modern-smartphone-and-browsing-40348-large.mp4",
    thumbnailUrl: "https://picsum.photos/seed/enoch-reels-1/450/800",
    duration: "0:15",
    stats: "1.4M Views",
    description: "An immersive first-person capture showing agile run-and-gun camera maneuvers inside luxury tech flagship spaces, highlighting high-speed camera whips and seamless whip-pan transitions."
  },
  {
    id: "v-2",
    title: "Sunset Chasing: Urban Lifestyle Moodreel",
    category: "lifestyle",
    aspectRatio: "portrait",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-stylish-in-the-city-at-sunset-42171-large.mp4",
    thumbnailUrl: "https://picsum.photos/seed/enoch-reels-2/450/800",
    duration: "0:30",
    stats: "820K Engagement",
    description: "Candid urban lifestyle reels capturing high-contrast light flares, textured fabrics, and motion portraits shot entirely during twilight golden hours."
  },
  {
    id: "v-3",
    title: "Aperture & Motion: Late Night Gala",
    category: "event",
    aspectRatio: "landscape",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-filmmaker-with-gimbal-stabilizer-shooting-a-scene-34351-large.mp4",
    thumbnailUrl: "https://picsum.photos/seed/enoch-reels-3/800/450",
    duration: "1:00",
    stats: "450K Reach",
    description: "Cinematic evening event coverage utilizing ultra-fluid 3-axis stabilizer tracking, panning low-angle sequences, and intentional bokeh configurations."
  },
  {
    id: "v-4",
    title: "Tactile Frames: Studio Design Process",
    category: "lifestyle",
    aspectRatio: "landscape",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-designer-working-on-a-tablet-41617-large.mp4",
    thumbnailUrl: "https://picsum.photos/seed/enoch-reels-4/800/450",
    duration: "0:45",
    stats: "630K Views",
    description: "Micro-macro cinematography highlighting real-time design rendering, stylus accuracy, and high-frequency tactile sound design."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-mjgad",
    brandName: "mj Gad",
    projectName: "Next-Gen Tech Accessories Launch",
    category: "brand",
    bannerImage: "https://picsum.photos/seed/mjgad-cover/1100/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-unboxing-a-new-technological-device-41703-large.mp4",
    objective: "To launch an futuristic brand campaign for mj Gad's customizable tech wearable accessories, positioning them as essential streetwear aesthetic objects for modern cyber-culture enthusiasts.",
    strategy: [
      "Designed and animated custom futuristic overlay typography in Adobe Illustrator, projecting neon outlines over mobile captures.",
      "Used an agile, low-footprint mobile-rig (iPhone 12 Pro) allowing ultra-low angle lens tracking inside tight architectural structures.",
      "Implemented high-density editing style: fast sound-designed match-cuts syncing tactile product clicks to rapid graphic overlays.",
      "Engineered color grading with highly saturated cyan-and-amber undertones to evoke cyberpunk lifestyle narratives."
    ],
    toolkit: [
      "iPhone 12 Pro Max (Filmed in Filmic Pro at high bit-rates)",
      "DJI OM 5 Gimbal Stabilizer for fluid structural tracks",
      "Custom Graphic Assets & Lower-Thirds built in Adobe Illustrator",
      "Whip-pan transitions & neon kinetic typography elements"
    ],
    colorPalette: [
      { name: "Neon Cyan", hex: "#00f0ff" },
      { name: "Cyberpunk Volt", hex: "#ccff00" },
      { name: "Onyx Ground", hex: "#0c0c0e" },
      { name: "Slate Muted", hex: "#4b5563" }
    ],
    deliverablesCount: 12, // 12 tailored high-retention TikTok/reels assets
    results: "3.2M overall social media views in 14 days, a 280% spikes of brand engagement on Instagram, and direct click-through rate increase of 24% to the mj Gad accessories boutique store."
  },
  {
    id: "cs-kene",
    brandName: "Kene Collection",
    projectName: "Earth-Tone Silk & Urban Runway Visuals",
    category: "social",
    bannerImage: "https://picsum.photos/seed/kene-cover/1100/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-at-sunset-41618-large.mp4",
    objective: "Create an organic, editorial lookbook and social-first video operational strategy for Kene Collection's summer linen and earth-toned silk streetwear line, maintaining premium luxury weight in compressed mobile feeds.",
    strategy: [
      "Captured model poses primarily using raw ambient sunlight, filming during the 40-minute 'Golden Hour' window.",
      "Utilized hand-held micro-shakes rather than fully motorized stabilizers, giving a raw, authentic, human fashion-journalism feel.",
      "Focused heavily on micro close-ups of fabric weaves, loose linen threads, and buttons to elevate tactile perception of material premium quality.",
      "Applied warm, pastel cinematic luts with soft highlights and grain to match heritage magazine aesthetics."
    ],
    toolkit: [
      "iPhone 12 Pro (2x Telephoto lens and built-in HDR processing)",
      "Anamorphic 1.33x Mobile Lens Attachment for wide cinematic flare",
      "Adobe Illustrator (Used to render minimalist serif fashion stamps and custom story cards)",
      "Continuous Soft Panel Reflector"
    ],
    colorPalette: [
      { name: "Warm Terracotta", hex: "#c97a53" },
      { name: "Alabaster White", hex: "#f8f5f0" },
      { name: "Olive Earth", hex: "#555D50" },
      { name: "Rich Charcoal", hex: "#1e1e1f" }
    ],
    deliverablesCount: 8, // 8 high-fashion story-driven sequences
    results: "Saved the label over $8,000 in heavy studio rental fees, drove an organic Instagram saves spike of 450%, and fully packed their exclusive seasonal preorder within 4 hours of drop."
  }
];

export const GEAR_DECK: GearItem[] = [
  {
    id: "gear-1",
    name: "iPhone 12 Pro Setup",
    spec: "Compact Cinematic Unit",
    description: "Harnessing 4K Dolby Vision HDR capture, customized anamorphic lenses, and advanced manual exposure lock at 24fps for robust, cinematic motion curves.",
    iconName: "Smartphone"
  },
  {
    id: "gear-2",
    name: "Agile Production Rig",
    spec: "3-Axis Stabilizer + Filters",
    description: "DJI stabilizer rigs paired with polarized ND filters. Controls harsh environment glares while delivering smooth tracking sequences at moments notice.",
    iconName: "Maximize2"
  },
  {
    id: "gear-3",
    name: "Adobe Illustrator",
    spec: "Post-Production Graphics",
    description: "Crafting minimalist title designs, customized lower thirds, cinematic safe marks, and bespoke high-end stickers used as high-impact video overlays.",
    iconName: "Paintbrush"
  }
];
