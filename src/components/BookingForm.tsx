import { useState, useEffect } from "react";
import { Calculator, CheckSquare, Sparkles, Send, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function BookingForm() {
  const [projectType, setProjectType] = useState<"pov" | "lifestyle" | "event">("pov");
  const [reelCount, setReelCount] = useState<number>(3);
  const [useIllustratorOverlay, setUseIllustratorOverlay] = useState<boolean>(false);
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
    <section className="bg-bg-primary border-t border-b border-border-custom px-6 py-24 text-text-primary font-sans transition-colors duration-300" id="booking-section">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-text-muted font-bold mb-2 block">
            04 / STRATEGY &amp; DEPLOYMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary uppercase font-display">
            CALCULATE YOUR <span className="italic font-serif font-normal text-text-muted">CAMPAIGN</span>
          </h2>
          <p className="text-text-muted text-xs sm:text-sm mt-4 uppercase tracking-wide max-w-xl mx-auto font-mono">
            Outline your visual needs dynamically. Our programmatic builder structures customized ballpark metrics instantly. No commitments required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="estimator-panel">
          
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-7 bg-bg-card border border-border-custom rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="flex flex-col gap-6">
              
              {/* Factor 1: Campaign Category */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
                  1. PROJECT FOCUS CATEGORY
                </label>
                <div className="grid grid-cols-3 gap-2 bg-bg-secondary p-1 rounded-full">
                  <button
                    onClick={() => setProjectType("pov")}
                    className={`py-2.5 px-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition cursor-pointer ${
                      projectType === "pov"
                        ? "bg-accent-custom text-accent-fg shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    POV VIDEOS
                  </button>
                  <button
                    onClick={() => setProjectType("lifestyle")}
                    className={`py-2.5 px-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition cursor-pointer ${
                      projectType === "lifestyle"
                        ? "bg-accent-custom text-accent-fg shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    LIFESTYLE
                  </button>
                  <button
                    onClick={() => setProjectType("event")}
                    className={`py-2.5 px-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition cursor-pointer ${
                      projectType === "event"
                        ? "bg-accent-custom text-accent-fg shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    EVENT FILM
                  </button>
                </div>
              </div>

              {/* Factor 2: Asset Volume Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-text-muted">
                  <span>2. NUMBER OF CINEMATIC REELS</span>
                  <span className="text-text-primary font-bold bg-bg-secondary px-3 py-1 rounded-full text-xs border border-border-strong">
                    {reelCount} Deliverables
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={reelCount}
                  onChange={(e) => setReelCount(parseInt(e.target.value))}
                  className="w-full accent-accent-custom cursor-pointer bg-bg-secondary h-2 rounded-full appearance-none"
                  id="estimator-range-slider"
                />
                <div className="flex justify-between text-[9px] font-mono text-text-muted">
                  <span>1 REEL (QUICK FOCUS)</span>
                  <span>12 REELS (COMPLETE SEASON OPS)</span>
                </div>
              </div>

              {/* Factor 3: Add-ons Toggles */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted mb-1">
                  3. STRATEGIC INTEGRATIONS
                </label>

                <div className="flex flex-col gap-2.5">
                  {/* Illustrator graphic overlay */}
                  <label className="flex items-start gap-3 bg-bg-secondary p-4 rounded-2xl border border-border-custom cursor-pointer hover:border-text-primary/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={useIllustratorOverlay}
                      onChange={(e) => setUseIllustratorOverlay(e.target.checked)}
                      className="mt-0.5 accent-accent-custom h-4 w-4 rounded"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-text-primary">Custom Adobe Illustrator Overlays</span>
                      <p className="text-[10px] text-text-muted font-mono mt-0.5 uppercase">Bespoke Vector Art, Title marks &amp; Stickers license</p>
                    </div>
                  </label>

                  {/* Drone stabilizer gear track */}
                  <label className="flex items-start gap-3 bg-bg-secondary p-4 rounded-2xl border border-border-custom cursor-pointer hover:border-text-primary/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={useDroneTrack}
                      onChange={(e) => setUseDroneTrack(e.target.checked)}
                      className="mt-0.5 accent-accent-custom h-4 w-4 rounded"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-text-primary">Advanced 3-Axis Stabilizer Tracks</span>
                      <p className="text-[10px] text-text-muted font-mono mt-0.5 uppercase">Ultra smooth orbits, sweeping crane emulation</p>
                    </div>
                  </label>

                  {/* Priority Delivery */}
                  <label className="flex items-start gap-3 bg-bg-secondary p-4 rounded-2xl border border-border-custom cursor-pointer hover:border-text-primary/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={priorityDelivery}
                      onChange={(e) => setPriorityDelivery(e.target.checked)}
                      className="mt-0.5 accent-accent-custom h-4 w-4 rounded"
                    />
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-text-primary">Priority 48-Hour Assets Wrap ⚡</span>
                      <p className="text-[10px] text-text-muted font-mono mt-0.5 uppercase">Forces rush processing, cuts standard render time in half</p>
                    </div>
                  </label>
                </div>

              </div>

            </div>
          </div>

          {/* Pricing Outcome Panel (Right Column) */}
          <div className="lg:col-span-5 bg-bg-card border border-border-custom rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-sm">
            <div className="w-full flex flex-col items-center gap-6">
              <div className="h-10 w-10 rounded-full bg-bg-secondary border border-border-strong flex items-center justify-center text-text-primary">
                <Calculator className="h-5 w-5 stroke-[2]" />
              </div>

              <div>
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase font-bold">ESTIMATED BALLPARK BUDGET</span>
                <div className="text-2xl sm:text-3xl font-black text-text-primary mt-2 uppercase font-display" id="estimator-final-price">
                  ₦{estimate.min.toLocaleString("en-NG")}<br/>
                  <span className="text-text-muted text-xs font-serif italic align-middle font-normal">to</span><br/>
                  ₦{estimate.max.toLocaleString("en-NG")}
                </div>
                <div className="mt-4 text-[10px] font-mono text-text-muted uppercase tracking-widest">
                  ESTIMATED TIMELINE: <span className="text-text-primary font-bold">{estimate.days} DAYS</span>
                </div>
              </div>

              <div className="w-full border-t border-border-custom pt-6">
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase block mb-3 leading-relaxed font-bold">
                  WHAT IS INCLUDED IN BUDGET:
                </span>
                <div className="flex flex-col gap-2.5 text-left text-xs text-text-secondary max-w-xs mx-auto">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
                    <span>Raw camera files master download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
                    <span>2 rounds of revision pacing updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
                    <span>Lighting setup &amp; customized HDR LUT</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              className="mt-8 w-full group relative flex items-center justify-center gap-2 rounded-full bg-accent-custom text-accent-fg px-6 py-4 font-bold tracking-widest hover:bg-accent-hover transition cursor-pointer text-xs uppercase font-display shadow-md"
              id="estimator-submit-btn"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>LOCK STRATEGY BRIEF</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
