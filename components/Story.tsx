"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import StatsStrip from "@/components/StatsStrip";
import { venue } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const img = wrap.querySelector("img");
    const tween = gsap.fromTo(
      img,
      { scale: 1.18, yPercent: -6 },
      {
        scale: 1,
        yPercent: 6,
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
    <section className="bg-night py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div
          ref={imgWrapRef}
          className="relative aspect-[4/5] overflow-hidden rounded-sm order-1 lg:order-none"
        >
          <Image
            src="/assets/gallery/floral-aisle.jpg"
            alt="Floral detail along the aisle at Imperial Farm House"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
        </div>

        <div>
          <Reveal>
            <span className="eyebrow text-brass">Since 1985</span>
          </Reveal>
          <SplitReveal
            as="h2"
            type="words"
            className="font-display text-3xl md:text-5xl mt-4 leading-[1.05] text-sand"
          >
            Four decades of hosting Bidar&apos;s most celebrated gatherings
          </SplitReveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sand-dim leading-relaxed max-w-md">
              {venue.group} has run {venue.name} as a private garden estate
              for weddings, receptions and family celebrations since 1985.
              Under the stewardship of {venue.proprietor}, the estate pairs
              open lawns and an air-conditioned banquet hall with in-house
              catering and decor — on {venue.addressLine}.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <StatsStrip />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
