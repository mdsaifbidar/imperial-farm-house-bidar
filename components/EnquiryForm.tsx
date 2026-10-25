"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import DatePicker from "@/components/DatePicker";
import Stepper from "@/components/Stepper";
import { venue } from "@/lib/content";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [dateTouched, setDateTouched] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!date) {
      setDateTouched(true);
      return;
    }

    const lines = [
      `Enquiry for ${venue.name}`,
      name && `Name: ${name}`,
      date && `Event date: ${date}`,
      guests && `Guest count: ${guests}`,
      phone && `Phone: ${phone}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${venue.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      id="enquire"
      className="relative py-28 md:py-36 px-6 overflow-hidden bg-night"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/bokeh-loop.mp4" type="video/mp4" />
      </video>

      <div className="relative mx-auto max-w-2xl">
        <Reveal className="text-center mb-12">
          <span className="eyebrow text-brass-light">Enquire</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 text-sand leading-[1.05]">
            Check your date
          </h2>
          <p className="mt-4 text-sand-dim">
            Share a few details and we&apos;ll open WhatsApp with your
            message ready to send to {venue.proprietor}.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="sm:col-span-2 bg-charcoal/60 border border-sand/15 rounded-sm px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:outline-none focus:border-brass-light"
            />
            <div>
              <DatePicker
                value={date}
                onChange={(v) => {
                  setDate(v);
                  setDateTouched(false);
                }}
                placeholder="Event date"
              />
              {dateTouched && (
                <p className="mt-1.5 text-xs text-brass-light">Pick a date so we know what to check.</p>
              )}
            </div>
            <Stepper value={guests} onChange={setGuests} placeholder="Guest count" />
            <input
              type="tel"
              required
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="sm:col-span-2 bg-charcoal/60 border border-sand/15 rounded-sm px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:outline-none focus:border-brass-light"
            />
            <textarea
              placeholder="Anything else we should know?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="sm:col-span-2 bg-charcoal/60 border border-sand/15 rounded-sm px-4 py-3 text-sand placeholder:text-sand-dim/60 focus:outline-none focus:border-brass-light resize-none"
            />

            <button
              type="submit"
              data-cursor-hover
              className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-brass px-7 py-3 text-sm tracking-wide text-night hover:bg-brass-light transition-colors"
            >
              Send enquiry on WhatsApp
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-sand-dim">
            Prefer to call?{" "}
            <a href={`tel:+91${venue.phonePrimary}`} className="text-brass-light underline">
              {venue.phonePrimary}
            </a>{" "}
            or{" "}
            <a href={`tel:+91${venue.phoneSecondary}`} className="text-brass-light underline">
              {venue.phoneSecondary}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
