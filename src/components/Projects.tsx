import { useState } from "react";
import { ArrowLeft, Play, Cpu, CheckSquare, Layers, Award, Code, Palette, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";

interface ProjectsProps {
  onPlayVideo: (videoUrl: string, title: string) => void;
}

export default function Projects({ onPlayVideo }: ProjectsProps) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleOpenProject = (id: string) => {
    setActiveProjectId(id);
    // Smooth scroll to project anchor
    const el = document.getElementById("projects-section-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToGrid = () => {
    setActiveProjectId(null);
    const el = document.getElementById("projects-section-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentProject = CASE_STUDIES.find((cs) => cs.id === activeProjectId);

  return (
    <section className="bg-[#050505] border-t border-b border-white/5 px-6 py-24 text-[#F5F5F5] font-sans" id="projects-section-anchor">
      <div className="mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          {!activeProjectId ? (
            /* PROJECT GRID VIEW */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-16">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold">
                  02 / CASE STUDIES
                </span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase mt-2">
                  STRATEGIC <span className="italic font-serif text-white/40">DEVELOPMENTS</span>
                </h2>
                <p className="text-white/40 text-xs sm:text-sm mt-4 uppercase tracking-wider max-w-xl">
                  Deep-dives into video production architecture, social operations, and creative campaign assets designed to drive high conversion metrics.
                </p>
              </div>

              {/* Grid Layout of Case Studies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="case-studies-grid">
                {CASE_STUDIES.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleOpenProject(project.id)}
                    className="relative overflow-hidden rounded-sm bg-[#111] border border-white/5 group hover:border-white/20 cursor-pointer shadow-xl transition-all hover:scale-[1.01]"
                    id={`project-card-${project.id}`}
                  >
                    {/* Cover image banner */}
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img
                        src={project.bannerImage}
                        alt={project.brandName}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
                      
                      {/* Floating Category Label */}
                      <span className="absolute top-4 left-4 bg-black/80 text-white/80 border border-white/10 font-mono text-[9px] tracking-widest px-3 py-1 rounded-sm uppercase">
                        {project.category === "brand" ? "BRAND CAMPAIGN" : "SOCIAL OPERATIONS"}
                      </span>
                    </div>

                    {/* Brief description content */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-white/30 font-semibold">{project.projectName}</span>
                        <h3 className="text-xl sm:text-2xl font-light text-white uppercase mt-1 group-hover:text-white transition-colors">
                          {project.brandName}
                        </h3>
                        <p className="text-white/50 text-xs sm:text-sm mt-3 line-clamp-2">
                          {project.objective}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-white/40" />
                          <span className="text-[10px] font-mono font-semibold tracking-wider text-white/40 uppercase">
                            VIEW STRATEGY INDEX &amp; REELS
                          </span>
                        </div>
                        <span className="h-8 w-8 rounded-sm bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:text-white flex items-center justify-center transition-colors">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAILED CLIENT SUBPAGE VIEW */
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:p-6"
              id="projects-detailed-view"
            >
              {/* Back CTA Button */}
              <button
                onClick={handleBackToGrid}
                className="mb-8 inline-flex items-center gap-2 rounded-sm border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-mono uppercase tracking-widest text-[#F5F5F5]/60 hover:text-white transition cursor-pointer"
                id="back-to-grid-btn"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>BACK TO PROJECTS</span>
              </button>

              {/* Title & Category Banner */}
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 text-white border border-white/10 px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest font-bold uppercase">
                    {currentProject?.category === "brand" ? "Commercial Campaign" : "Social Operations"}
                  </span>
                  <span className="text-xs font-mono text-white/30">CASE STUDY ID: cs-{currentProject?.id}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-light text-white uppercase mt-3">
                  {currentProject?.brandName}
                </h1>
                <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wide mt-2 max-w-2xl">
                  {currentProject?.projectName}
                </p>
              </div>

              {/* Immersive Video Banner / Image Cover */}
              <div className="relative overflow-hidden rounded-sm aspect-video bg-[#050505] border border-white/5 mb-12">
                <img
                  src={currentProject?.bannerImage}
                  alt={currentProject?.brandName}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                {currentProject?.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileActive={{ scale: 0.98 }}
                      onClick={() => onPlayVideo(currentProject.videoUrl!, `${currentProject.brandName} - Film Strategy`)}
                      className="flex items-center gap-3 rounded-sm bg-white hover:bg-[#E0E0E0] text-black px-6 py-3.5 text-xs font-semibold tracking-widest uppercase shadow-2xl transition cursor-pointer"
                      id="cs-play-campaign-video"
                    >
                      <Play className="h-3.5 w-3.5 fill-black text-black" />
                      <span>PLAY CAMPAIGN MOVIE</span>
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Bento Details / Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 1. Left Two Columns: Objectives & Strategy */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* Strategic Focus Box */}
                  <div className="bg-[#111] rounded-sm p-6 sm:p-8 border border-white/5">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6">
                      <Cpu className="h-4 w-4 text-white/40" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-white/60 font-bold">PROJECT OBJECTIVES</h4>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-white/80">
                      {currentProject?.objective}
                    </p>
                  </div>

                  {/* Strategic Milestones list */}
                  <div className="bg-[#111] rounded-sm p-6 sm:p-8 border border-white/5">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6">
                      <Layers className="h-4 w-4 text-white/40" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-white/60 font-bold">VISUAL DEVELOPMENT &amp; STRATEGY</h4>
                    </div>

                    <div className="flex flex-col gap-6">
                      {currentProject?.strategy.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <span className="flex-shrink-0 h-6 w-6 rounded-sm bg-white/5 border border-white/10 text-white/80 text-[10px] font-mono flex items-center justify-center">
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>
                          <p className="text-xs sm:text-sm text-white/60 leading-relaxed pt-0.5 font-sans">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Right Side Column: Technical spec & metrics bento */}
                <div className="flex flex-col gap-8">
                  {/* ROI / Results Panel */}
                  <div className="bg-[#111] rounded-sm p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-[#111] to-[#1a1a1a]/40">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6">
                      <Award className="h-4 w-4 text-white/40" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-white/60 font-bold">OUTCOME METRICS</h4>
                    </div>
                    <p className="text-sm leading-relaxed tracking-wide text-white/90">
                      {currentProject?.results}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                      <span>DELIVERED ASSETS:</span>
                      <span className="text-[#F5F5F5] font-bold text-xs bg-white/5 px-3 py-1 rounded-sm border border-white/10">
                        {currentProject?.deliverablesCount} Master Reels
                      </span>
                    </div>
                  </div>

                  {/* Production Gear spec list */}
                  <div className="bg-[#111] rounded-sm p-6 sm:p-8 border border-white/5">
                    <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-4">
                      <Cpu className="h-4 w-4 text-white/40" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-white/60 font-bold">PRODUCTION STACK</h4>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {currentProject?.toolkit.map((tool, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-xs text-white/60">
                          <CheckSquare className="h-3.5 w-3.5 text-white/40 flex-shrink-0" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Palette Visualizers */}
                  <div className="bg-[#111] rounded-sm p-6 sm:p-8 border border-white/5">
                    <div className="flex items-center gap-2 border-b border-[#111] pb-4 mb-6">
                      <Palette className="h-4 w-4 text-white/40" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-white/60 font-bold">COLOR GRADING INDEX</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {currentProject?.colorPalette.map((color, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5">
                          <div
                            className="h-10 w-full rounded-sm border border-white/5 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="flex flex-col text-[10px] font-mono">
                            <span className="text-white/80 text-left truncate font-semibold">{color.name}</span>
                            <span className="text-white/40 text-left uppercase">{color.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
