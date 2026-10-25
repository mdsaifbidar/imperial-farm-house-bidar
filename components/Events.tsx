import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import { eventTypes } from "@/lib/content";

export default function Events() {
  return (
    <section
      id="celebrations"
      className="relative py-28 md:py-36 px-6 overflow-hidden bg-charcoal vignette"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/events-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl mb-14 md:mb-16">
          <Reveal>
            <span className="eyebrow text-brass-light">Celebrations</span>
          </Reveal>
          <SplitReveal
            as="h2"
            type="words"
            className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]"
          >
            Hosted here, year round
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {eventTypes.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.1}>
              <div className="border-t border-sand/20 pt-6">
                <span className="font-display text-sand-dim text-sm">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-sand mt-3">
                  {event.title}
                </h3>
                <p className="mt-3 text-sand-dim text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
