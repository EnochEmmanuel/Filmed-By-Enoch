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
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center text-[#F5F5F5]" id="site-hero">
      {/* 1. Muted Cinematic Loop video background */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" id="hero-background-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20 scale-[1.02] filter blur-[0.2px]"
          src={masterShowreelUrl}
        />
        {/* Cinematic shadows and gradients overlay (Vignette) */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.95)_100%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-black/90" />
      </div>

      {/* 2. Key-Art Title & Tagline Layer */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center" id="hero-content">
        {/* Small Elegant Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3 w-3 text-white/60 animate-pulse" />
          <span className="text-[10px] font-semibold tracking-widest text-[#F5F5F5]/60 uppercase font-mono">
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
          <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-mono mb-4">FILMED BY ENOCH • EST. 2024</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white uppercase select-none leading-[1.05] max-w-4xl text-center">
            MOTION IN EVERY <span className="italic font-serif text-white/40">FRAME</span>,<br/>
            STORY IN EVERY <span className="text-white/40">SECOND</span>.
          </h1>
        </motion.div>

        {/* Cinematic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-sm text-xs sm:text-sm uppercase tracking-widest text-white/40 leading-relaxed font-sans"
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
            className="w-full sm:w-auto overflow-hidden group relative flex items-center justify-center gap-3 rounded-md bg-white text-black px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all hover:scale-102 shadow-lg hover:bg-[#E0E0E0] active:scale-98 cursor-pointer"
            id="hero-primary-cta"
          >
            <Play className="h-3 w-3 fill-black text-black" />
            <span>PLAY DEMO REEL</span>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350" />
          </button>

          <button
            onClick={onNavigateToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all hover:scale-102 active:scale-98 cursor-pointer"
            id="hero-secondary-cta"
          >
            <Film className="h-3.5 w-3.5 text-white/50" />
            <span>VIEW CAMPAIGNS</span>
          </button>
        </motion.div>
      </div>

      {/* Technical Spec Dashboard Anchor (Figma themed footer) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-8 left-0 right-0 hidden sm:flex items-center justify-between px-10 z-10"
        id="hero-technical-footer"
      >
        <div className="flex items-center gap-4 text-[10px] text-white/30 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-1.5">
            <span className="h-1 bg-white/40 w-1.5 rounded-full" />
            <span>SOURCE: 4K COMPLIANT</span>
          </div>
          <span>•</span>
          <div>AGILE MOBILE CONFIG</div>
        </div>

        <button
          onClick={onNavigateToProjects}
          className="flex flex-col items-center gap-1.5 text-white/30 hover:text-white transition group cursor-pointer"
          id="scroll-prompt-btn"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase font-semibold">SCROLL TO IMMERSE</span>
          <ArrowDown className="h-3.5 w-3.5 text-white/30 group-hover:translate-y-1 transition duration-300" />
        </button>

        <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
          RAW FRAMES &amp; STRATEGY
        </div>
      </motion.div>
    </section>
  );
}
