import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-semibold tracking-wide">
              HUMBLE
            </span>
            <span className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#f2c86d]">
              Learning Co.
            </span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 max-w-sm leading-relaxed">
            One-on-one tutoring built around how each student actually learns.
            K-12 through college, in {site.location.split(",")[0]} and online.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-accent font-sans font-medium">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Tiana" },
              { to: "/services", label: "Subjects & Services" },
              { to: "/reviews", label: "Family Reviews" },
              { to: "/contact", label: "Book a Session" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-accent font-sans font-medium">
            Reach Out
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-colors"
              >
                <Mail className="size-4" /> {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-colors"
              >
                <Phone className="size-4" /> {site.contact.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-primary-foreground/85">
              <MapPin className="size-4" /> {site.location}
            </li>
            {site.social.instagram && (
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-colors"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-primary-foreground/60">
          <span>
            © {year} {site.name}. All rights reserved
          </span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
