"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitRevealProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  type?: "chars" | "words" | "lines";
  trigger?: "load" | "scroll";
  delay?: number;
};

export default function SplitReveal({
  children,
  as: Tag = "h2",
  className,
  type = "words",
  trigger = "scroll",
  delay = 0,
}: SplitRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    let split: SplitText | undefined;
    let tween: gsap.core.Tween | undefined;

    document.fonts.ready.then(() => {
      if (!ref.current) return;

      split = new SplitText(ref.current, {
        type,
        mask: type,
      });

      const targets =
        type === "chars"
          ? split.chars
          : type === "lines"
          ? split.lines
          : split.words;

      gsap.set(targets, { yPercent: 110, opacity: 0 });

      tween = gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        stagger: type === "chars" ? 0.018 : 0.06,
        ease: "power4.out",
        scrollTrigger:
          trigger === "scroll"
            ? { trigger: ref.current, start: "top 85%", once: true }
            : undefined,
      });
    });

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [type, trigger, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
