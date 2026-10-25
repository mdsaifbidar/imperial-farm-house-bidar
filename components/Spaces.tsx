"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { spaces } from "@/lib/content";

export default function Spaces() {
  return (
    <section id="spaces" className="bg-charcoal py-28 md:py-36 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14 md:mb-16">
          <Reveal>
            <span className="eyebrow text-brass">The Estate</span>
          </Reveal>
          <SplitReveal
            as="h2"
            type="words"
            className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]"
          >
            Three settings, one address
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {spaces.map((space, i) => (
            <Reveal key={space.id} delay={i * 0.1}>
              <div
                data-cursor-hover
                className={`group relative overflow-hidden rounded-sm ${
                  i === 0 ? "md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-brass-light">{space.stat}</span>
                  <h3 className="font-display text-xl md:text-2xl text-sand mt-2">
                    {space.title}
                  </h3>
                  <p className="mt-2 text-sand-dim text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                    {space.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
