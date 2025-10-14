import React, { useEffect, useState, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

/**
 * Robust hero carousel using <img> elements (object-fit: cover)
 * - Uses absolute-positioned <img> so browser handles the rendering
 * - Crossfade via opacity transitions
 * - Respects prefers-reduced-motion
 * - Replace `images` with your real URLs or local imports
 */

const images = [
  "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1503264116251-35a269479413?w=2000&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&h=1200&fit=crop"
];

const INTERVAL_MS = 3000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // autoplay
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      if (!isPaused) setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section
      className="relative h-[500px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Indocrypt 2025 hero"
    >
      {/* Background images (img tags) */}
      <div className="absolute inset-0 ">
        {/* fallback background color while images load */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800"></div>

        {images.map((src, i) => {
          const active = i === index;
          return (
            <img
              key={i}
              src={src}
              alt={`background ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${active ? "opacity-100 scale-100 " : "opacity-0 scale-105"}
              `}
              style={{
                // make sure images are behind overlays but behind the content
                zIndex: 0,
                transformOrigin: "center",
                // optional visual tweaks
                filter: "contrast(0.85) saturate(0.95)"
              }}
              decoding="async"
            />
          );
        })}

        {/* Semi-transparent gradient overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 5,
            background:
              "linear-gradient(90deg, rgba(8,32,63,0.65) 0%, rgba(40,12,66,0.5) 60%)",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Indocrypt 2025</h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-sm">
          India's Premier Conference on Cryptography & Information Security
        </p>

        <div className="flex gap-6 justify-center items-center mb-6 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <MapPin size={18} />
            <span>IIIT Bhubaneswar</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Calendar size={18} />
            <span>December 14 - 17, 2025</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow">
            Register Now
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold border border-white/40 transition-colors backdrop-blur">
            View Schedule
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show background ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white/90 w-8" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
