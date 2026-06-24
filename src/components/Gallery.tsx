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
    <section className="bg-[#050505] px-6 py-24 text-[#F5F5F5] border-t border-b border-white/5 font-sans" id="gallery-section">
      <div className="mx-auto max-w-7xl">
        {/* Headlights element */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold mb-2">
              01 / MOTION FEED
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase leading-none">
              DYNAMIC MEDIA <br />
              <span className="italic font-serif text-white/40">GALLERY</span>
            </h2>
            <p className="text-xs text-white/30 font-mono mt-3 max-w-md uppercase tracking-wide">
              Muted live playback on mouse hover. Tap or click to reveal high-fidelity audio streams.
            </p>
          </div>

          {/* Clean Segmented Control / Filter buttons */}
          <div className="flex flex-wrap items-center gap-1 bg-[#111] border border-white/5 p-1 rounded-sm" id="gallery-filters">
            {(["all", "pov", "lifestyle", "event"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-all rounded-sm cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-white/10 text-white font-medium border border-white/10"
                    : "text-white/40 hover:text-white border border-transparent"
                }`}
                id={`filter-${filter}`}
              >
                {filter === "all" ? "SHOW ALL" : filter === "pov" ? "POV PRODUCTION" : filter === "lifestyle" ? "LIFESTYLE" : "CINEMATIC EVENTS"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery Grid (Portrait / Landscape mixed elegant layout) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                  className={`relative overflow-hidden rounded-sm bg-[#111] border border-white/5 group shadow-lg cursor-pointer transform transition-transform hover:border-white/20 hover:shadow-2xl ${
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
                        className="absolute inset-0 z-10 w-full h-full bg-[#050505]"
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
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />

                  {/* Top floating metadata */}
                  <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
                    <span className="rounded-sm bg-black/80 border border-white/5 px-2.5 py-1 text-[9px] font-mono tracking-widest text-white/50 font-semibold uppercase">
                      {work.category}
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 text-white border border-white/10 px-2 py-0.5 rounded-sm text-[9px] font-mono tracking-widest font-bold">
                      <Eye className="h-3 w-3 text-white/60" />
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
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-col pointer-events-none gap-1 bg-black/40 backdrop-blur-sm p-3 rounded-sm border border-white/5">
                    <div className="flex items-center justify-between text-white/40 font-mono text-[9px]">
                      <span>FORMAT: MOV 4K</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5 text-white/40" />
                        {work.duration}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-medium tracking-wide text-[#F5F5F5] group-hover:text-white transition-colors uppercase line-clamp-1">
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
