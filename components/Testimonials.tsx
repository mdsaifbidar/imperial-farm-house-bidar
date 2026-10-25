"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-night py-24 md:py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow text-brass">In their words</span>
        </Reveal>

        <div className="relative mt-10 min-h-[11rem] md:min-h-[9rem]">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== active}
            >
              <p className="font-display text-xl md:text-2xl text-sand leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 text-sm text-sand-dim">
                {t.name} &middot; {t.detail}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-brass-light" : "w-1.5 bg-sand/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
