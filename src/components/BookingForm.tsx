import { useState, useEffect } from "react";
import { Calculator, CheckSquare, Sparkles, Send, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function BookingForm() {
  const [projectType, setProjectType] = useState<"pov" | "lifestyle" | "event">("pov");
  const [reelCount, setReelCount] = useState<number>(3);
  const [useIllustratorOverlay, setUseIllustratorOverlay] = useState<boolean>(true);
  const [useDroneTrack, setUseDroneTrack] = useState<boolean>(false);
  const [priorityDelivery, setPriorityDelivery] = useState<boolean>(false);
  
  const [estimate, setEstimate] = useState<{ min: number; max: number; days: number }>({ min: 0, max: 0, days: 0 });

  useEffect(() => {
    // Elegant pricing model calculation in Nigerian Naira (₦)
    // Structured to stay beautifully scaled between ₦100,000 and ₦2,000,000
    let basePricePerReel = 100000; // default standard POV model price
    let standardDays = 5;

    if (projectType === "lifestyle") {
      basePricePerReel = 150000;
      standardDays = 7;
    } else if (projectType === "event") {
      basePricePerReel = 220000;
      standardDays = 10;
    }

    let rawMin = basePricePerReel * reelCount;
    
    // Addons
    if (useIllustratorOverlay) {
      rawMin += 50000; // Graphic asset license packages
    }
    if (useDroneTrack) {
      rawMin += 75000; // Crane lens & stabilizer setups
    }

    let multiplier = 1.25;
    let computedMin = rawMin;
    let computedMax = Math.round(rawMin * multiplier);
    let computedDays = standardDays + Math.floor(reelCount / 2);

    if (priorityDelivery) {
      computedMin = Math.round(computedMin * 1.3);
      computedMax = Math.round(computedMax * 1.3);
      computedDays = Math.max(2, Math.round(computedDays * 0.5));
    }

    // Strictly enforce the boundaries: lowest price of ₦100,000 and highest payment of ₦2,000,000
    computedMin = Math.max(100000, Math.min(1800000, computedMin));
    computedMax = Math.max(120000, Math.min(2000000, computedMax));

    // Ensure range consistency (min is always less than max)
    if (computedMin >= computedMax) {
      computedMin = Math.round(computedMax * 0.85);
    }

    setEstimate({ min: computedMin, max: computedMax, days: computedDays });
  }, [projectType, reelCount, useIllustratorOverlay, useDroneTrack, priorityDelivery]);

  const handleBookNow = () => {
    const typeLabel = projectType === "pov" ? "TikTok/Short POV Production" : projectType === "lifestyle" ? "Lifestyle Brand Shoot" : "Cinematic Event Coverage";
    const addOnList = [];
    if (useIllustratorOverlay) addOnList.push("Illustrator Design Overlays");
    if (useDroneTrack) addOnList.push("AGILE stabilized tracks");
    if (priorityDelivery) addOnList.push("Priority 48H distribution");

    const message = `Yo Enoch! I calculated an estimate with your Strategy Builder:
- Project: ${typeLabel}
- Deliverables: ${reelCount} cinematic asset(s)
- Add-ons: ${addOnList.length > 0 ? addOnList.join(", ") : "None"}
- Estimated range: ₦${estimate.min.toLocaleString("en-NG")} - ₦${estimate.max.toLocaleString("en-NG")}
- ETA: ${estimate.days} days

Let's organize a brief strategy session to lock this in!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2438159873014?text=${encodedText}`;
    
    try {
      const w = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!w) {
        // Fallback if blocked
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      console.warn("Direct window.open blocked by sandbox, attempting anchor click fallback:", e);
      try {
        const link = document.createElement("a");
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error("All window open mechanisms blocked:", err);
        window.location.href = whatsappUrl;
      }
    }
  };

  return (
    <section className="bg-[#050505] border-t border-b border-white/5 px-6 py-24 text-[#F5F5F5] font-sans" id="booking-section">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold mb-2 block">
            04 / STRATEGY &amp; DEPLOYMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
            CALCULATE YOUR <span className="italic font-serif text-white/40">CAMPAIGN</span>
          </h2>
          <p className="text-white/40 text-xs sm:text-sm mt-4 uppercase tracking-wide max-w-xl mx-auto">
            Outline your visual needs dynamically. Our programmatic builder structures customized ballpark metrics instantly. No commitments required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="estimator-panel">
          
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-7 bg-[#111] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              
              {/* Factor 1: Campaign Category */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-white/40 font-bold">
                  1. PROJECT FOCUS CATEGORY
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setProjectType("pov")}
                    className={`py-3 px-2 rounded-sm text-[10px] font-mono tracking-widest uppercase border transition cursor-pointer ${
                      projectType === "pov"
                        ? "bg-white/10 text-white border-white/20 font-bold"
                        : "bg-white/5 text-white/40 border-transparent hover:text-white"
                    }`}
                  >
                    POV VIDEOS
                  </button>
                  <button
                    onClick={() => setProjectType("lifestyle")}
                    className={`py-3 px-2 rounded-sm text-[10px] font-mono tracking-widest uppercase border transition cursor-pointer ${
                      projectType === "lifestyle"
                        ? "bg-white/10 text-white border-white/20 font-bold"
                        : "bg-white/5 text-white/40 border-transparent hover:text-white"
                    }`}
                  >
                    LIFESTYLE
                  </button>
                  <button
                    onClick={() => setProjectType("event")}
                    className={`py-3 px-2 rounded-sm text-[10px] font-mono tracking-widest uppercase border transition cursor-pointer ${
                      projectType === "event"
                        ? "bg-white/10 text-white border-white/20 font-bold"
                        : "bg-white/5 text-white/40 border-transparent hover:text-white"
                    }`}
                  >
                    EVENT FILM
                  </button>
                </div>
              </div>

              {/* Factor 2: Asset Volume Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-white/40 font-bold">
                  <span>2. NUMBER OF CINEMATIC REELS</span>
                  <span className="text-white font-medium bg-white/5 px-2.5 py-0.5 rounded-sm border border-white/10 text-xs">
                    {reelCount} Deliverables
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={reelCount}
                  onChange={(e) => setReelCount(parseInt(e.target.value))}
                  className="w-full accent-white cursor-pointer bg-white/10 h-1 rounded-sm"
                  id="estimator-range-slider"
                />
                <div className="flex justify-between text-[9px] font-mono text-white/30">
                  <span>1 REEL (QUICK FOCUS)</span>
                  <span>12 REELS (COMPLETE SEASON OPS)</span>
                </div>
              </div>

              {/* Factor 3: Add-ons Toggles */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-mono tracking-widest text-white/40 font-bold mb-1">
                  3. STRATEGIC INTEGRATIONS
                </label>

                <div className="flex flex-col gap-2.5">
                  {/* Illustrator graphic overlay */}
                  <label className="flex items-start gap-3 bg-[#0d0d0d] p-3 rounded-sm border border-white/5 cursor-pointer hover:bg-white/5">
                    <input
                      type="checkbox"
                      checked={useIllustratorOverlay}
                      onChange={(e) => setUseIllustratorOverlay(e.target.checked)}
                      className="mt-0.5 accent-white"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-white/80">Custom Adobe Illustrator Overlays</span>
                      <p className="text-[10px] text-white/30 font-mono mt-0.5 uppercase">Bespoke Vector Art, Title marks &amp; Stickers license</p>
                    </div>
                  </label>

                  {/* Drone stabilizer gear track */}
                  <label className="flex items-start gap-3 bg-[#0d0d0d] p-3 rounded-sm border border-white/5 cursor-pointer hover:bg-white/5">
                    <input
                      type="checkbox"
                      checked={useDroneTrack}
                      onChange={(e) => setUseDroneTrack(e.target.checked)}
                      className="mt-0.5 accent-white"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-white/80">Advanced 3-Axis Stabilizer Tracks</span>
                      <p className="text-[10px] text-white/30 font-mono mt-0.5 uppercase">Ultra smooth orbits, sweeping crane emulation</p>
                    </div>
                  </label>

                  {/* Priority Delivery */}
                  <label className="flex items-start gap-3 bg-[#0d0d0d] p-3 rounded-sm border border-white/5 cursor-pointer hover:bg-white/5">
                    <input
                      type="checkbox"
                      checked={priorityDelivery}
                      onChange={(e) => setPriorityDelivery(e.target.checked)}
                      className="mt-0.5 accent-white"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-white/80">Priority 48-Hour Assets Wrap ⚡</span>
                      <p className="text-[10px] text-white/30 font-mono mt-0.5 uppercase">Forces rush processing, cuts standard render time in half</p>
                    </div>
                  </label>
                </div>

              </div>

            </div>
          </div>

          {/* Pricing Outcome Panel (Right Column) */}
          <div className="lg:col-span-5 bg-[#111] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-between items-center text-center">
            <div className="w-full flex flex-col items-center gap-6">
              <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                <Calculator className="h-5 w-5 stroke-[1.5]" />
              </div>

              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#F5F5F5]/40 uppercase font-semibold">ESTIMATED BALLPARK BUDGET</span>
                <div className="text-2xl sm:text-3xl font-light text-white mt-2 uppercase" id="estimator-final-price font-sans">
                  ₦{estimate.min.toLocaleString("en-NG")} <span className="text-white/30 text-sm font-serif italic align-middle font-normal">to</span> ₦{estimate.max.toLocaleString("en-NG")}
                </div>
                <div className="mt-3 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  ESTIMATED TIMELINE: <span className="text-white font-bold">{estimate.days} DAYS</span>
                </div>
              </div>

              <div className="w-full border-t border-white/5 pt-6">
                <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase block mb-3 leading-relaxed font-bold">
                  WHAT IS INCLUDED IN BUDGET:
                </span>
                <div className="flex flex-col gap-2.5 text-left text-xs text-white/50 max-w-xs mx-auto">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span>Raw camera files master download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span>2 rounds of revision pacing updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span>Lighting setup &amp; customized HDR LUT</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              className="mt-8 w-full group relative flex items-center justify-center gap-2 rounded-sm bg-white text-black px-6 py-4 font-semibold tracking-widest hover:bg-[#E0E0E0] transition cursor-pointer text-xs uppercase"
              id="estimator-submit-btn"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>LOCK STRATEGY BRIEF</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
