import React, { useRef, useState, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  aspectRatio?: "portrait" | "landscape";
}

export default function VideoPlayer({
  isOpen,
  onClose,
  videoUrl,
  title,
  aspectRatio = "landscape"
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.log("Auto-play blocked, showing play indicator instead.", err);
          setIsPlaying(false);
        });
      }
    }
  }, [isOpen, videoUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    setIsLoading(false);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
    setCurrentTime(pos * duration);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
        id="cinema-player-container"
      >
        {/* Transparent background click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.98, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.98, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          className={`relative z-10 w-full overflow-hidden rounded-sm bg-[#111] border border-white/10 shadow-2xl ${
            aspectRatio === "portrait" ? "max-w-md aspect-[9/16]" : "max-w-4xl aspect-video"
          }`}
          id="cinema-content-frame"
        >
          {/* Video Title Header */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent p-4 text-white">
            <div className="flex flex-col text-left">
              <span className="text-[9px] tracking-widest text-white/30 font-mono">CINEMATIC PREVIEW</span>
              <h4 className="text-xs font-semibold tracking-wide font-sans text-white/80">{title}</h4>
            </div>
            <button
              onClick={onClose}
              className="rounded-sm p-1.5 bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 cursor-pointer"
              aria-label="Close video player"
              id="player-close-btn"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Loader */}
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505]">
              <RefreshCw className="h-6 w-6 text-white/40 animate-spin mb-2" />
              <p className="text-white/40 text-[9px] font-mono tracking-widest uppercase">STREAMING ACTIVE...</p>
            </div>
          )}

          {/* HTML5 Video */}
          <video
            ref={videoRef}
            src={videoUrl}
            className="h-full w-full object-cover"
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
            playsInline
            id="story-player-video"
          />

          {/* Controls Bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 flex flex-col gap-3">
            {/* Direct Slider Progress */}
            <div
              onClick={handleProgressClick}
              className="h-1 w-full bg-white/10 rounded-sm cursor-pointer overflow-hidden relative group"
              id="progress-track"
            >
              <div
                className="h-full bg-white/70 rounded-sm transition-all duration-75 relative"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Icons row */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-1 hover:text-[#E0E0E0] transition"
                  id="play-pause-toggle-btn"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white text-white" />}
                </button>

                <div className="flex items-center gap-2">
                  <button onClick={toggleMute} className="p-1 hover:text-[#E0E0E0] transition" id="mute-toggle-btn">
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>

                <div className="text-[10px] font-mono text-white/40">
                  {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, "0")}
                  <span className="mx-1">/</span>
                  {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}
                </div>
              </div>

              {/* Taglet to state it's high quality mobile capture */}
              <div className="hidden sm:flex items-center gap-1.5 rounded-sm bg-white/5 px-2.5 py-0.5 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                <span className="text-[9px] font-mono text-white/40 tracking-wider font-semibold">12-PRO SOURCE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
