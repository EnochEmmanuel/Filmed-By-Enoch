import { Smartphone, Minimize2, Paintbrush, ShieldCheck, Play, Award } from "lucide-react";
import { motion } from "motion/react";
import { GEAR_DECK } from "../data";

export default function Toolkit() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="h-5 w-5 text-white/60" />;
      case "Maximize2":
        return <Minimize2 className="h-5 w-5 text-white/60" />;
      case "Paintbrush":
        return <Paintbrush className="h-5 w-5 text-white/60" />;
      default:
        return <Smartphone className="h-5 w-5 text-white/60" />;
    }
  };

  return (
    <section className="bg-[#050505] border-t border-b border-white/5 px-6 py-24 text-[#F5F5F5] font-sans" id="toolkit-section">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Header Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold mb-2">
              03 / TECHNICAL SETUP
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase leading-tight">
              AGILE HARDWARE <br /> &amp; <span className="italic font-serif text-white/40">GRAPHIC SYSTEMS</span>
            </h2>
            <p className="text-white/50 text-xs sm:text-sm mt-6 leading-relaxed">
              Heavy cameras limit reactivity. Enoch films with streamlined, lightweight mobile assemblies — securing cinematic curves, raw mobility, and faster post-production turnaround times.
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-8" id="toolkit-highlights">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-white/40" />
                </div>
                <span className="text-xs font-mono text-white/60 tracking-wide">FULLY COMPLIANT 4K HDR CAPTURES</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                  <Award className="h-4 w-4 text-white/40" />
                </div>
                <span className="text-xs font-mono text-white/60 tracking-wide">CUSTOM VECTOR TITLE & OVERLAY LAYERS</span>
              </div>
            </div>
          </div>

          {/* Right Bento Grid specifications */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="gear-bento-specifications">
            
            {/* Gear 1: iPhone 12 Pro */}
            <div className="bg-[#111] border border-white/5 rounded-sm p-6 flex flex-col justify-between h-64 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-mono">
                  {getIcon("Smartphone")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase font-semibold">CAP UTILITY</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">iPhone 12 Pro Setup</span>
                <h3 className="text-base font-medium text-white uppercase mt-0.5">Compact Cinematic Unit</h3>
                <p className="text-white/50 text-xs mt-3 leading-relaxed">
                  Harnessing 4K Dolby Vision HDR capture, customized anamorphic lens rigs, and advanced manual exposure lock at 24fps for smooth motion curves.
                </p>
              </div>
            </div>

            {/* Gear 2: Agile stabilizer */}
            <div className="bg-[#111] border border-white/5 rounded-sm p-6 flex flex-col justify-between h-64 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon("Maximize2")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase font-semibold">TRACKING RIG</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Agile Production Rig</span>
                <h3 className="text-base font-medium text-white uppercase mt-0.5">3-Axis Gimbal + Filters</h3>
                <p className="text-white/50 text-xs mt-3 leading-relaxed">
                  DJI stabilizer rigs paired with polarized neutral density filters. Controls harsh environment glare while guaranteeing butter-smooth orbits and slides.
                </p>
              </div>
            </div>

            {/* Gear 3: Adobe Illustrator design */}
            <div className="bg-[#111] border border-white/5 rounded-sm p-6 flex flex-col justify-between h-64 sm:col-span-2 hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-mono">
                  {getIcon("Paintbrush")}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase font-semibold">POST-PRO GEAR</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Adobe Illustrator</span>
                <h3 className="text-base font-medium text-white uppercase mt-0.5">Post-Production Graphics &amp; Overlays</h3>
                <p className="text-white/50 text-xs mt-3 leading-relaxed">
                  Crafting minimalist vector title designs, customized lower third components, secure cinematic crop masks, and elegant visual branding stamps overlays. Designed inside Illustrator vector layers and combined seamlessly over frame assets to lock in complete narrative integrity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
