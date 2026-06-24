import { useState } from "react";
import { MessageSquare, Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  projectScope: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "kinetix",
    quote: "Enoch completely understood our brand cadence. We raw-shipped our product samples to him and within 48 hours we received five high-retention cinematic reels that boosted our conversion by 28%. The vector graphic overlays are incredibly clean.",
    author: "Sophia Lindqvist",
    title: "Creative Director",
    company: "Kinetix Apparel",
    projectScope: "Lifestyle Campaign"
  },
  {
    id: "vanguard",
    quote: "His ability to navigate crowds and capture high-fidelity moments with an agile mobile rig is unmatched. The cinematic edit of our summer launch film felt deeply polished yet raw and authentic.",
    author: "Marcus Brody",
    title: "Marketing Lead",
    company: "Vanguard Athletics",
    projectScope: "Cinematic Event Production"
  },
  {
    id: "aether",
    quote: "The custom Illustrator overlays added a layer of luxury we didn't know we needed. Working with Enoch was fast, strategic, and entirely frictionless.",
    author: "Helena Rostova",
    title: "Founder",
    company: "Aether Cosmetics",
    projectScope: "TikTok POV Production"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="bg-[#050505] px-6 py-24 text-[#F5F5F5] border-b border-white/5 font-sans relative overflow-hidden" id="testimonials-section">
      {/* Absolute faint quotes background element */}
      <div className="absolute right-10 bottom-6 select-none opacity-[0.02] pointer-events-none hidden lg:block">
        <Quote className="h-96 w-96 font-serif scale-[-1]" />
      </div>

      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold mb-2 block">
            06 / CLIENT RESONANCE
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
            VERIFIED <span className="italic font-serif text-white/40">FEEDBACK</span>
          </h2>
          <p className="text-white/40 text-xs sm:text-sm mt-4 uppercase tracking-wide max-w-xl mx-auto">
            Quotes and retrospective reviews from creative founders and brand managers who partnered with Enoch.
          </p>
        </div>

        {/* Dynamic Interactive Slider Frame */}
        <div className="relative bg-[#111] border border-white/5 rounded-sm p-8 sm:p-12 md:p-16 min-h-[350px] flex flex-col justify-between" id="testimonials-carousel">
          
          {/* Slider Content with cross-fade animation */}
          <div className="relative">
            <Quote className="h-8 w-8 text-white/10 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                {/* Five star rating accent */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-white/40 text-transparent" />
                  ))}
                  <span className="text-[9px] font-mono tracking-widest text-[#F5F5F5]/40 ml-2 uppercase font-semibold">
                    PROJECT EXCELLENT RECORD
                  </span>
                </div>

                {/* Big Quote */}
                <p className="text-lg sm:text-2xl font-light leading-relaxed text-white font-serif italic">
                  "{current.quote}"
                </p>

                {/* Client info and project label */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                      {current.author}
                    </h4>
                    <p className="text-xs text-white/40 font-sans mt-0.5">
                      {current.title} — <span className="text-white/60 font-medium">{current.company}</span>
                    </p>
                  </div>

                  <div>
                    <span className="inline-block rounded-sm bg-white/5 border border-white/10 px-3 py-1 text-[9px] font-mono tracking-widest text-white/50 font-semibold uppercase">
                      {current.projectScope}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
            {/* Status indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx ? "w-8 bg-white" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`testimonial-dot-${idx}`}
                />
              ))}
            </div>

            {/* Slider Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition cursor-pointer"
                id="testimonial-prev-ctr"
                aria-label="Previous feedback"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition cursor-pointer"
                id="testimonial-next-ctr"
                aria-label="Next feedback"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Testimonials mini overview metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" id="testimonial-stats-row">
          <div className="bg-[#111] border border-white/5 p-5 text-center rounded-sm">
            <span className="text-[9px] font-mono text-white/40 block uppercase tracking-widest">Global Reach</span>
            <span className="text-2xl font-light text-white block mt-1 uppercase">100% REMOTE</span>
          </div>
          <div className="bg-[#111] border border-white/5 p-5 text-center rounded-sm">
            <span className="text-[9px] font-mono text-white/40 block uppercase tracking-widest">Average Turnaround</span>
            <span className="text-2xl font-light text-white block mt-1 uppercase">48 HOURS</span>
          </div>
          <div className="bg-[#111] border border-white/5 p-5 text-center rounded-sm">
            <span className="text-[9px] font-mono text-white/40 block uppercase tracking-widest">Completed Campaigns</span>
            <span className="text-2xl font-light text-white block mt-1 uppercase">40+ BRANDS</span>
          </div>
          <div className="bg-[#111] border border-white/5 p-5 text-center rounded-sm">
            <span className="text-[9px] font-mono text-white/40 block uppercase tracking-widest">Client Return Rate</span>
            <span className="text-2xl font-light text-white block mt-1 uppercase">94% LOYALTY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
