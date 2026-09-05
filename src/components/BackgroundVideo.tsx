"use client";

import { useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    playCountRef.current += 1;
    if (playCountRef.current === 2) {
      video.muted = true;
      setMuted(true);
    }

    video.currentTime = 0;
    video.play();
  };

  return (
    <>
      <video
        ref={videoRef}
        className="fixed inset-0 z-0 h-full w-full object-cover object-top opacity-50"
        src="/videos/popping-bottles-epic.mp4"
        autoPlay
        muted={muted}
        playsInline
        onEnded={handleEnded}
      />

      {/* scrim so text stays legible over the footage */}
      <div className="fixed inset-0 z-10 bg-[#0d0d0d]/55" />

      <button
        onClick={toggleSound}
        className="fixed bottom-8 left-8 z-50 font-mono text-[10px] uppercase tracking-[0.2em] text-[#b5b1a8]"
      >
        {muted ? "sound off" : "sound on"}
      </button>
    </>
  );
}
