import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 shadow-sm shadow-primary/5 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-20 items-center justify-between gap-7 md:h-24">
        <Link
          to="/"
          className="flex min-w-0 items-baseline gap-2.5 text-primary transition-opacity hover:opacity-85 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-[1.7rem] font-bold tracking-wide sm:text-[2.15rem] lg:text-[2.35rem]">
            HUMBLE
          </span>
          <span className="whitespace-nowrap font-serif text-[0.95rem] font-extrabold uppercase tracking-[0.2em] text-[#6f4208] sm:text-xl lg:text-[1.35rem]">
            Learning Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "text-base font-semibold transition-colors lg:text-lg",
                  "text-foreground/70 hover:text-primary",
                  isActive && "text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="accent" className="h-12 rounded-md px-6 text-base font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <Link to="/contact">Book a session</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex size-12 items-center justify-center rounded-md text-primary hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav
            className="container flex flex-col gap-1 py-4"
            aria-label="Primary mobile"
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-2 py-3.5 rounded-md text-lg font-semibold transition-colors",
                    "text-foreground/80 hover:bg-secondary hover:text-primary",
                    isActive && "bg-secondary text-primary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              asChild
              variant="accent"
              className="mt-3"
              onClick={() => setOpen(false)}
            >
              <Link to="/contact">Book a session</Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-3 px-2">
              {site.location}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
