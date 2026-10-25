"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const content = items.join("   ✦   ") + "   ✦   ";

  return (
    <div className="bg-charcoal py-5 overflow-hidden border-y border-sand/10">
      <div ref={trackRef} className="flex w-max whitespace-nowrap will-change-transform">
        <span className="eyebrow text-sand-dim px-4">{content}</span>
        <span className="eyebrow text-sand-dim px-4">{content}</span>
      </div>
    </div>
  );
}
