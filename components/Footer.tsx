import { navLinks, venue } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand-dim py-14 px-6 text-sm border-t border-sand/10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="font-display text-sand text-lg">
            {venue.group} &middot; {venue.name}
          </p>
          <p className="mt-2 max-w-xs">{venue.addressLine}</p>

          <nav className="mt-6 flex flex-wrap gap-5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-brass-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:text-right">
          <p>
            {venue.proprietor} &middot; {venue.phonePrimary} &middot;{" "}
            {venue.phoneSecondary}
          </p>
          <a
            href="#enquire"
            className="mt-4 inline-flex items-center rounded-full border border-sand/20 px-5 py-2 text-xs tracking-wide text-sand hover:bg-sand/10 transition-colors"
          >
            Enquire about a date
          </a>
          <p className="mt-6 text-xs text-sand-dim/60">
            &copy; {new Date().getFullYear()} {venue.group}. {venue.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
