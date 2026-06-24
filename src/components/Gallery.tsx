import { useState, useRef } from "react";
import { Play, Eye, Clock, Filter, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { VIDEO_WORKS } from "../data";
import { VideoWork } from "../types";

interface GalleryProps {
  onPlayVideo: (videoUrl: string, title: string, aspectRatio?: "portrait" | "landscape") => void;
}

export default function Gallery({ onPlayVideo }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "pov" | "lifestyle" | "event">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredWorks = VIDEO_WORKS.filter((work) => {
    if (selectedFilter === "all") return true;
    return work.category === selectedFilter;
  });

  return (
    <section className="bg-bg-primary px-6 py-24 text-text-primary border-t border-b border-border-custom font-sans transition-colors duration-300" id="gallery-section">
      <div className="mx-auto max-w-5xl">
        {/* Headlights element */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-text-muted font-bold mb-2">
              01 / MOTION FEED
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary uppercase leading-none font-display">
              DYNAMIC MEDIA <br />
              <span className="italic font-serif font-normal text-text-muted">GALLERY</span>
            </h2>
            <p className="text-xs text-text-muted font-mono mt-3 max-w-md uppercase tracking-wide">
              Muted live playback on mouse hover. Tap or click to reveal high-fidelity audio streams.
            </p>
          </div>

          {/* Clean Segmented Control / Filter buttons (Gen Z High Contrast Pill) */}
          <div className="flex flex-wrap items-center gap-1.5 bg-bg-secondary border border-border-custom p-1.5 rounded-full" id="gallery-filters">
            {(["all", "pov", "lifestyle", "event"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-[10px] font-bold tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-accent-custom text-accent-fg shadow-sm"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-primary"
                }`}
                id={`filter-${filter}`}
              >
                {filter === "all" ? "SHOW ALL" : filter === "pov" ? "POV" : filter === "lifestyle" ? "LIFESTYLE" : "EVENTS"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery Grid (Portrait / Landscape mixed elegant layout) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => {
              const isHovered = hoveredId === work.id;

              return (
                <motion.div
                   key={work.id}
                   layout
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.4 }}
                   onMouseEnter={() => setHoveredId(work.id)}
                   onMouseLeave={() => setHoveredId(null)}
                   onClick={() => onPlayVideo(work.videoUrl, work.title, work.aspectRatio)}
                   className={`relative overflow-hidden rounded-2xl bg-bg-card border border-border-custom group shadow-md cursor-pointer transform transition-all hover:border-text-primary/20 hover:shadow-xl ${
                     work.aspectRatio === "portrait"
                       ? "aspect-[9/16] lg:col-span-1"
                       : "aspect-video sm:col-span-2 lg:col-span-2"
                   }`}
                   id={`work-card-${work.id}`}
                >
                  {/* Underlay Image */}
                  <img
                    src={work.thumbnailUrl}
                    alt={work.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />

                  {/* Overlaid silent hover-to-play video element */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-10 w-full h-full bg-bg-primary"
                      >
                        <video
                          src={work.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Aesthetic Shadow Vignette Grade */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Top floating metadata */}
                  <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
                    <span className="rounded-full bg-black/85 border border-white/10 px-3 py-1 text-[9px] font-bold tracking-widest text-white/70 uppercase">
                      {work.category}
                    </span>
                    <span className="flex items-center gap-1.5 bg-accent-custom text-accent-fg px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
                      <Eye className="h-3 w-3" />
                      {work.stats}
                    </span>
                  </div>

                  {/* Center Play Indicator */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/10 border border-white/20 backdrop-blur-md text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Play className="h-4 w-4 fill-white ml-0.5" />
                    </motion.div>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-col pointer-events-none gap-1 bg-black/75 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between text-white/50 font-mono text-[9px] font-bold tracking-wider">
                      <span>FORMAT: 4K UHD</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        {work.duration}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold tracking-wide text-white transition-colors uppercase line-clamp-1 font-display">
                      {work.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
