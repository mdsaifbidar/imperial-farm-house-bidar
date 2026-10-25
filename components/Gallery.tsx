"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { galleryItems } from "@/lib/content";

const sizeToSpan: Record<string, string> = {
  wide: "sm:col-span-2 aspect-[8/5]",
  tall: "sm:row-span-2 aspect-[4/7] sm:aspect-auto sm:h-full",
  square: "aspect-[4/5]",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close]);

  return (
    <section id="gallery" className="bg-night py-28 md:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal>
            <span className="eyebrow text-brass">Gallery</span>
          </Reveal>
          <SplitReveal
            as="h2"
            type="words"
            className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]"
          >
            A sense of the estate
          </SplitReveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sand-dim">
              Stills from a walkthrough of the estate — the pool, the rooftop
              glass house, and the stay rooms.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[1fr] gap-4 md:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 0.08}
              className={sizeToSpan[item.size] ?? "aspect-[4/5]"}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                data-cursor-hover
                aria-label={`Open photo: ${item.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-sm"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 right-3 text-sand text-sm text-left opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[90] bg-night/95 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-6 right-6 text-sand/70 hover:text-sand text-sm eyebrow"
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
              );
            }}
            className="absolute left-4 md:left-8 text-sand/60 hover:text-sand text-3xl"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].caption}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className="absolute -bottom-10 inset-x-0 text-center text-sand-dim text-sm">
              {galleryItems[activeIndex].caption}
            </p>
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
            }}
            className="absolute right-4 md:right-8 text-sand/60 hover:text-sand text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
