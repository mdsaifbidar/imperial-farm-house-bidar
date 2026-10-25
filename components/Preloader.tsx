"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { venue } from "@/lib/content";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // One-time check on mount, not a reactive subscription — safe to
      // resolve synchronously; deferring would only flash the overlay.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setDone(true);
      },
    });

    tl.set(wordmarkRef.current, { opacity: 0, y: 14 })
      .set(lineRef.current, { scaleX: 0 })
      .to(wordmarkRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1)
      .to(lineRef.current, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 0.3)
      .to(
        counter,
        {
          val: 100,
          duration: 1.1,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) numRef.current.textContent = String(Math.round(counter.val));
          },
        },
        0.3
      )
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-night flex flex-col items-center justify-center"
    >
      <div ref={wordmarkRef} className="text-center">
        <span className="eyebrow text-brass-light">{venue.group}</span>
        <div className="font-display text-sand text-3xl md:text-4xl mt-3">
          {venue.name}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span ref={lineRef} className="h-px w-16 bg-brass-light origin-left" />
        <span ref={numRef} className="eyebrow text-sand-dim tabular-nums">
          0
        </span>
        <span className="eyebrow text-sand-dim">%</span>
      </div>
    </div>
  );
}
