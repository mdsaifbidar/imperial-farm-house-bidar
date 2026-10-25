"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "@/components/SplitReveal";
import { cinematicClip } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicBreak() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tween = gsap.fromTo(
      video,
      { scale: 1.15 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative h-[70vh] min-h-[420px] overflow-hidden bg-night"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={cinematicClip.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-night/55" />
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <SplitReveal
          as="p"
          type="words"
          className="font-display italic text-sand text-2xl md:text-4xl text-center max-w-3xl leading-snug"
        >
          {cinematicClip.line}
        </SplitReveal>
      </div>
    </section>
  );
}
