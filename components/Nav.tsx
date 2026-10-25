"use client";

import { useEffect, useState } from "react";
import { navLinks, venue } from "@/lib/content";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`w-full max-w-6xl flex items-center justify-between rounded-full px-5 md:px-7 h-16 transition-all duration-500 ${
          solid
            ? "bg-charcoal/80 backdrop-blur-xl border border-sand/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#top" className="flex flex-col leading-tight">
          <span className="eyebrow text-brass-light">{venue.group}</span>
          <span className="font-display text-base md:text-lg text-sand">
            {venue.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-sand/80 tracking-wide transition-colors hover:text-brass-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#enquire"
          data-cursor-hover
          className="hidden md:inline-flex items-center rounded-full bg-brass px-5 py-2 text-sm tracking-wide text-night hover:bg-brass-light transition-colors"
        >
          Enquire
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-px w-5 bg-sand transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-sand transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[55] bg-night transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-sand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquire"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-brass px-6 py-3 text-sm tracking-wide text-night"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
