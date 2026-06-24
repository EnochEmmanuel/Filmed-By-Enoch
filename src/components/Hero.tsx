import { Play, Sparkles, Film, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onPlayShowreel: (videoUrl: string, title: string) => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export default function Hero({ onPlayShowreel, onNavigateToProjects, onNavigateToContact }: HeroProps) {
  const masterShowreelUrl = "https://assets.mixkit.co/videos/preview/mixkit-filmmaker-with-gimbal-stabilizer-shooting-a-scene-34351-large.mp4";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg-primary flex items-center justify-center text-text-primary transition-colors duration-300" id="site-hero">
      {/* 1. Muted Cinematic Loop video background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" id="hero-background-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-[0.12] dark:opacity-20 scale-[1.02] filter blur-[0.2px] transition-opacity"
          src={masterShowreelUrl}
        />
        {/* Cinematic shadows and gradients overlay (Vignette) */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,var(--bg-primary)_100%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/70" />
      </div>

      {/* 2. Key-Art Title & Tagline Layer */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center" id="hero-content">
        {/* Small Elegant Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 rounded-full border border-border-strong bg-bg-card/60 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3 w-3 text-text-muted animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase font-mono">
            Agile Mobile Videographer • Visual Storyteller
          </span>
        </motion.div>

        {/* Master Elegant Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-4"
        >
          <span className="text-text-muted text-[10px] tracking-[0.4em] uppercase font-mono mb-4">FILMED BY ENOCH • EST. 2024</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-text-primary uppercase select-none leading-[1.05] max-w-4xl text-center font-display">
            MOTION IN EVERY <span className="italic font-serif font-normal text-text-muted">FRAME</span>,<br/>
            STORY IN EVERY <span className="text-text-muted">SECOND</span>.
          </h1>
        </motion.div>

        {/* Cinematic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-sm text-xs sm:text-sm uppercase tracking-widest text-text-muted leading-relaxed font-mono"
          id="hero-tagline"
        >
          Innovative Visual Storytelling &amp; Mobile Videography for the Digital-First Era.
        </motion.p>

        {/* 3. CTA Action Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
          id="hero-ctas"
        >
          <button
            onClick={() => onPlayShowreel(masterShowreelUrl, "Enoch Master Reel (Cinematic Workflow)")}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 rounded-full bg-accent-custom text-accent-fg px-8 py-3.5 text-xs uppercase tracking-widest font-bold transition-all hover:bg-accent-hover hover:scale-102 active:scale-98 cursor-pointer shadow-md font-display"
            id="hero-primary-cta"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>PLAY DEMO REEL</span>
          </button>

          <button
            onClick={onNavigateToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-border-strong bg-bg-card hover:bg-bg-secondary text-text-secondary hover:text-text-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold transition-all hover:scale-102 active:scale-98 cursor-pointer shadow-sm font-display"
            id="hero-secondary-cta"
          >
            <Film className="h-3.5 w-3.5" />
            <span>VIEW CAMPAIGNS</span>
          </button>
        </motion.div>
      </div>

      {/* Technical Spec Dashboard Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-8 left-0 right-0 hidden sm:flex items-center justify-between px-10 z-10"
        id="hero-technical-footer"
      >
        <div className="flex items-center gap-4 text-[10px] text-text-muted font-mono tracking-widest uppercase">
          <div className="flex items-center gap-1.5">
            <span className="h-1 bg-text-muted w-1.5 rounded-full" />
            <span>SOURCE: 4K COMPLIANT</span>
          </div>
          <span>•</span>
          <div>AGILE MOBILE CONFIG</div>
        </div>

        <button
          onClick={onNavigateToProjects}
          className="flex flex-col items-center gap-1.5 text-text-muted hover:text-text-primary transition group cursor-pointer"
          id="scroll-prompt-btn"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase font-bold">SCROLL TO IMMERSE</span>
          <ArrowDown className="h-3.5 w-3.5 text-text-muted group-hover:translate-y-1 transition duration-300" />
        </button>

        <div className="text-[10px] text-text-muted font-mono tracking-widest uppercase">
          RAW FRAMES &amp; STRATEGY
        </div>
      </motion.div>
    </section>
  );
}
