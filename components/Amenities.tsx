import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { amenities } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-charcoal py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <span className="eyebrow text-brass">Amenities &amp; specifications</span>
          <SplitReveal
            as="h2"
            type="words"
            className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]"
          >
            Everything a celebration needs
          </SplitReveal>
          <p className="mt-4 text-sand-dim">
            Pulled from a walkthrough of the estate — pricing and anything
            still marked below should be confirmed with the proprietor
            before publishing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-sm border border-sand/10 bg-night/40 p-6 hover:border-brass/40 transition-colors">
                <span className="eyebrow text-sand-dim">{item.label}</span>
                <p className="mt-3 font-display text-lg text-sand">
                  {item.value}
                </p>
                {item.note && (
                  <p className="mt-2 text-xs text-sand-dim/70">{item.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
