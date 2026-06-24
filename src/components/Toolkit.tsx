import { Smartphone, Minimize2, Paintbrush, ShieldCheck, Play, Award } from "lucide-react";
import { motion } from "motion/react";
import { GEAR_DECK } from "../data";

export default function Toolkit() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="h-5 w-5 text-text-primary" />;
      case "Maximize2":
        return <Minimize2 className="h-5 w-5 text-text-primary" />;
      case "Paintbrush":
        return <Paintbrush className="h-5 w-5 text-text-primary" />;
      default:
        return <Smartphone className="h-5 w-5 text-text-primary" />;
    }
  };

  return (
    <section className="bg-bg-primary border-t border-b border-border-custom px-6 py-24 text-text-primary font-sans transition-colors duration-300" id="toolkit-section">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Header Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-text-muted font-bold mb-2">
              03 / TECHNICAL SETUP
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary uppercase leading-tight font-display">
              AGILE HARDWARE <br /> &amp; <span className="italic font-serif font-normal text-text-muted">GRAPHIC SYSTEMS</span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm mt-6 leading-relaxed">
              Heavy cameras limit reactivity. Enoch films with streamlined, lightweight mobile assemblies — securing cinematic curves, raw mobility, and faster post-production turnaround times.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-border-custom pt-8" id="toolkit-highlights">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-bg-secondary border border-border-strong flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-text-secondary" />
                </div>
                <span className="text-xs font-mono text-text-secondary font-bold tracking-wide">FULLY COMPLIANT 4K HDR CAPTURES</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-bg-secondary border border-border-strong flex items-center justify-center">
                  <Award className="h-4 w-4 text-text-secondary" />
                </div>
                <span className="text-xs font-mono text-text-secondary font-bold tracking-wide">CUSTOM VECTOR TITLE & OVERLAY LAYERS</span>
              </div>
            </div>
          </div>

          {/* Right Bento Grid specifications */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="gear-bento-specifications">
            
            {/* Gear 1: iPhone 12 Pro */}
            <div className="bg-bg-card border border-border-custom rounded-2xl p-6 flex flex-col justify-between h-64 hover:border-text-primary/20 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-bg-secondary border border-border-strong flex items-center justify-center font-mono">
                  {getIcon("Smartphone")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase font-bold">CAP UTILITY</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">iPhone 12 Pro Setup</span>
                <h3 className="text-base font-black text-text-primary uppercase mt-0.5 font-display">Compact Cinematic Unit</h3>
                <p className="text-text-secondary text-xs mt-3 leading-relaxed">
                  Harnessing 4K Dolby Vision HDR capture, customized anamorphic lens rigs, and advanced manual exposure lock at 24fps for smooth motion curves.
                </p>
              </div>
            </div>

            {/* Gear 2: Agile stabilizer */}
            <div className="bg-bg-card border border-border-custom rounded-2xl p-6 flex flex-col justify-between h-64 hover:border-text-primary/20 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-bg-secondary border border-border-strong flex items-center justify-center">
                  {getIcon("Maximize2")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase font-bold">TRACKING RIG</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Agile Production Rig</span>
                <h3 className="text-base font-black text-text-primary uppercase mt-0.5 font-display">3-Axis Gimbal + Filters</h3>
                <p className="text-text-secondary text-xs mt-3 leading-relaxed">
                  DJI stabilizer rigs paired with polarized neutral density filters. Controls harsh environment glare while guaranteeing butter-smooth orbits and slides.
                </p>
              </div>
            </div>

            {/* Gear 3: Adobe Illustrator design */}
            <div className="bg-bg-card border border-border-custom rounded-2xl p-6 flex flex-col justify-between h-64 sm:col-span-2 hover:border-text-primary/20 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-bg-secondary border border-border-strong flex items-center justify-center font-mono">
                  {getIcon("Paintbrush")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase font-bold">POST-PRO GEAR</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest font-bold">Adobe Illustrator</span>
                <h3 className="text-base font-black text-text-primary uppercase mt-0.5 font-display">Post-Production Graphics &amp; Overlays</h3>
                <p className="text-text-secondary text-xs mt-3 leading-relaxed">
                  Crafting minimalist vector title designs, customized lower third components, secure cinematic crop masks, and elegant visual branding stamps overlays inside vector layers combined seamlessly over frame assets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
