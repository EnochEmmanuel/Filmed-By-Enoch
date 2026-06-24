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
    <section className="bg-bg-primary border-t border-b border-border-custom px-6 py-24 text-text-primary font-sans transition-colors duration-300" id="projects-section-anchor">
      <div className="mx-auto max-w-5xl">
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
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-text-muted font-bold">
                  02 / CASE STUDIES
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary uppercase mt-2 font-display">
                  STRATEGIC <span className="italic font-serif font-normal text-text-muted">DEVELOPMENTS</span>
                </h2>
                <p className="text-text-muted text-xs sm:text-sm mt-4 uppercase tracking-wider max-w-xl font-mono">
                  Deep-dives into video production architecture, social operations, and creative campaign assets designed to drive high conversion metrics.
                </p>
              </div>

              {/* Grid Layout of Case Studies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="case-studies-grid">
                {CASE_STUDIES.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleOpenProject(project.id)}
                    className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-custom group hover:border-text-primary/20 cursor-pointer shadow-md transition-all hover:scale-[1.01]"
                    id={`project-card-${project.id}`}
                  >
                    {/* Cover image banner */}
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img
                        src={project.bannerImage}
                        alt={project.brandName}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                      
                      {/* Floating Category Label */}
                      <span className="absolute top-4 left-4 bg-black/85 text-white border border-white/10 font-bold text-[9px] tracking-widest px-3 py-1.5 rounded-full uppercase">
                        {project.category === "brand" ? "BRAND CAMPAIGN" : "SOCIAL OPERATIONS"}
                      </span>
                    </div>

                    {/* Brief description content */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">{project.projectName}</span>
                        <h3 className="text-xl sm:text-2xl font-black text-text-primary uppercase mt-1 font-display">
                          {project.brandName}
                        </h3>
                        <p className="text-text-secondary text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
                          {project.objective}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border-custom flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-text-muted" />
                          <span className="text-[10px] font-bold tracking-wider text-text-secondary uppercase">
                            VIEW STRATEGY INDEX &amp; REELS
                          </span>
                        </div>
                        <span className="h-8 w-8 rounded-full bg-bg-secondary border border-border-custom text-text-primary group-hover:bg-accent-custom group-hover:text-accent-fg flex items-center justify-center transition-colors font-bold text-xs">
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
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong hover:border-text-primary/25 bg-bg-card hover:bg-bg-secondary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-text-primary transition cursor-pointer shadow-sm font-display"
                id="back-to-grid-btn"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>BACK TO PROJECTS</span>
              </button>

              {/* Title & Category Banner */}
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="bg-accent-custom text-accent-fg px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {currentProject?.category === "brand" ? "Commercial Campaign" : "Social Operations"}
                  </span>
                  <span className="text-xs font-mono text-text-muted">CASE STUDY ID: cs-{currentProject?.id}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-text-primary uppercase mt-3 font-display">
                  {currentProject?.brandName}
                </h1>
                <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wide mt-2 max-w-2xl font-mono">
                  {currentProject?.projectName}
                </p>
              </div>

              {/* Immersive Video Banner / Image Cover */}
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-bg-primary border border-border-custom mb-12 shadow-md">
                <img
                  src={currentProject?.bannerImage}
                  alt={currentProject?.brandName}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover opacity-75 dark:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {currentProject?.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileActive={{ scale: 0.98 }}
                      onClick={() => onPlayVideo(currentProject.videoUrl!, `${currentProject.brandName} - Film Strategy`)}
                      className="flex items-center gap-3 rounded-full bg-white hover:bg-zinc-100 text-black px-7 py-4 text-xs font-bold tracking-widest uppercase shadow-2xl transition cursor-pointer font-display"
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
                  <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-border-custom shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border-custom pb-4 mb-6">
                      <Cpu className="h-4 w-4 text-text-muted" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-text-secondary font-bold">PROJECT OBJECTIVES</h4>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-text-secondary">
                      {currentProject?.objective}
                    </p>
                  </div>

                  {/* Strategic Milestones list */}
                  <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-border-custom shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border-custom pb-4 mb-6">
                      <Layers className="h-4 w-4 text-text-muted" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-text-secondary font-bold">VISUAL DEVELOPMENT &amp; STRATEGY</h4>
                    </div>

                    <div className="flex flex-col gap-6">
                      {currentProject?.strategy.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <span className="flex-shrink-0 h-6 w-6 rounded-full bg-bg-secondary border border-border-strong text-text-primary text-[10px] font-bold flex items-center justify-center font-mono">
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-0.5 font-sans">
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
                  <div className="bg-bg-secondary rounded-2xl p-6 sm:p-8 border border-border-strong shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-border-custom pb-4 mb-6">
                      <Award className="h-4 w-4 text-text-secondary" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-text-primary font-bold">OUTCOME METRICS</h4>
                    </div>
                    <p className="text-sm leading-relaxed tracking-wide text-text-primary font-bold">
                      {currentProject?.results}
                    </p>
                    <div className="mt-5 pt-5 border-t border-border-custom flex items-center justify-between text-xs">
                      <span className="font-bold text-text-secondary">DELIVERED ASSETS:</span>
                      <span className="text-accent-fg font-black text-xs bg-accent-custom px-3 py-1 rounded-full">
                        {currentProject?.deliverablesCount} Master Reels
                      </span>
                    </div>
                  </div>

                  {/* Production Gear spec list */}
                  <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-border-custom shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border-custom pb-4 mb-4">
                      <Cpu className="h-4 w-4 text-text-muted" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-text-secondary font-bold">PRODUCTION STACK</h4>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {currentProject?.toolkit.map((tool, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-xs text-text-secondary">
                          <CheckSquare className="h-3.5 w-3.5 text-text-muted flex-shrink-0" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Palette Visualizers */}
                  <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-border-custom shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border-custom pb-4 mb-6">
                      <Palette className="h-4 w-4 text-text-muted" />
                      <h4 className="font-mono text-xs tracking-widest uppercase text-text-secondary font-bold">COLOR GRADING INDEX</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {currentProject?.colorPalette.map((color, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5">
                          <div
                            className="h-10 w-full rounded-lg border border-border-custom shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="flex flex-col text-[10px] font-mono">
                            <span className="text-text-primary text-left truncate font-bold">{color.name}</span>
                            <span className="text-text-muted text-left uppercase">{color.hex}</span>
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
