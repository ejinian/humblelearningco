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
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-baseline gap-1.5 text-primary"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-wide">
            HUMBLE
          </span>
          <span className="font-serif text-sm text-accent uppercase tracking-[0.2em]">
            Learning Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
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
          <Button asChild variant="accent" size="sm">
            <Link to="/contact">Book a session</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center size-10 rounded-md text-primary hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
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
                    "px-2 py-3 rounded-md text-base font-medium transition-colors",
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
