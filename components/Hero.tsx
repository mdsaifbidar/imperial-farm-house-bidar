"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import { venue } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const photo = photoRef.current;
    if (!wrap) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(wrap, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        if (photo) {
          gsap.fromTo(
            photo,
            { scale: 1.15 },
            { scale: 1.02, duration: 14, ease: "power1.out" }
          );
        }
      }

      gsap.set([line1Ref.current, line2Ref.current], { yPercent: 110 });
      gsap.set(
        [eyebrowRef.current, taglineRef.current, ctaRef.current, chipsRef.current],
        { opacity: 0, y: 16 }
      );

      gsap
        .timeline({ delay: prefersReducedMotion ? 0 : 0.5 })
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(line1Ref.current, { yPercent: 0, duration: 0.9, ease: "power4.out" }, "-=0.2")
        .to(line2Ref.current, { yPercent: 0, duration: 0.9, ease: "power4.out" }, "-=0.65")
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.45")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.45")
        .to(chipsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-night">
      <div ref={wrapRef} className="absolute inset-0 -top-[12%] h-[124%]">
        <div ref={photoRef} className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg"
            alt="A manicured lawn and garden estate, sunlit"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/35 to-night/85" />
        <div className="absolute inset-0 bg-night/15" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span ref={eyebrowRef} className="eyebrow text-brass-light mb-6">
          {venue.group} &middot; {venue.established}
        </span>

        <h1 className="font-display text-sand leading-[0.98] tracking-tight text-[clamp(2.75rem,10vw,6.5rem)]">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Imperial
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block italic text-brass-light">
              Farm House
            </span>
          </span>
        </h1>

        <p ref={taglineRef} className="mt-7 max-w-xl text-sand-dim text-base md:text-lg">
          {venue.tagline}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
          <MagneticButton
            href="#enquire"
            data-cursor-hover
            className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 text-sm tracking-wide text-night hover:bg-brass-light transition-colors"
          >
            Check availability
          </MagneticButton>
          <MagneticButton
            href="#gallery"
            data-cursor-hover
            className="inline-flex items-center justify-center rounded-full border border-sand/40 px-8 py-3.5 text-sm tracking-wide text-sand hover:bg-sand/10 transition-colors"
          >
            Explore the estate
          </MagneticButton>
        </div>

        <div
          ref={chipsRef}
          className="mt-14 hidden sm:flex items-center gap-8 text-sand/70"
        >
          <span className="flex items-center gap-2 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
            40+ years hosting
          </span>
          <span className="h-4 w-px bg-sand/20" />
          <span className="flex items-center gap-2 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
            1,000 guest capacity
          </span>
          <span className="h-4 w-px bg-sand/20" />
          <span className="flex items-center gap-2 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
            In-house catering
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-sand/60">
        <span className="eyebrow">Scroll</span>
        <span className="h-10 w-px bg-sand/40 overflow-hidden">
          <span className="block h-full w-full bg-brass-light animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
