import Reveal from "@/components/Reveal";
import { venue } from "@/lib/content";

export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.mapsQuery
  )}&output=embed`;

  return (
    <section id="location" className="bg-night py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <Reveal>
          <span className="eyebrow text-brass">Location</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]">
            Find the estate
          </h2>
          <p className="mt-5 text-sand-dim leading-relaxed">
            {venue.name} sits on {venue.addressLine}. Share this address
            directly with your guests, or send them the map link below.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-sand-dim/60">Address</dt>
              <dd className="text-sand mt-1">{venue.addressLine}</dd>
            </div>
            <div>
              <dt className="text-sand-dim/60">Proprietor</dt>
              <dd className="text-sand mt-1">{venue.proprietor}</dd>
            </div>
            <div>
              <dt className="text-sand-dim/60">Contact</dt>
              <dd className="text-sand mt-1">
                {venue.phonePrimary} &middot; {venue.phoneSecondary}
              </dd>
            </div>
          </dl>

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-sand/30 px-6 py-3 text-sm tracking-wide text-sand hover:bg-sand/10 transition-colors"
          >
            Open in Google Maps
            <span aria-hidden>↗</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-sand/10 grayscale-[0.2] contrast-[1.05]">
            <iframe
              src={mapSrc}
              title={`Map showing ${venue.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
