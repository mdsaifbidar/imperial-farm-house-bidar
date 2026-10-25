"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function StatsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numberEls = container.querySelectorAll<HTMLElement>("[data-count-to]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const triggers: ScrollTrigger[] = [];

    numberEls.forEach((el) => {
      const to = Number(el.dataset.countTo);

      if (prefersReducedMotion) {
        el.textContent = String(to);
        return;
      }

      const counter = { val: 0 };
      const tween = gsap.to(counter, {
        val: to,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = String(Math.round(counter.val));
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          <div className="font-display text-4xl md:text-5xl text-sand">
            {stat.prefix}
            <span data-count-to={stat.value}>0</span>
            {stat.suffix}
          </div>
          <div className="mt-2 text-sm text-sand-dim">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
