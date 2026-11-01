"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying, muted, looping showreel (as on the live site). Playback starts on
 * the client only, is skipped for reduced-motion users, and can always be paused.
 */
export function PromoVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      /* Autoplay can be blocked; the play button remains available. */
    });
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <section aria-label="eComDreamz portfolio showreel" className="bg-white px-[10px]">
      <div className="relative">
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="block aspect-video w-full bg-black object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause showreel" : "Play showreel"}
          className="absolute bottom-3 right-3 flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-black/45 text-white opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100"
        >
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
}
