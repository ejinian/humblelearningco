import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { heroPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hairline gold divider near top to give a "bound book" feel */}
      <div className="absolute inset-x-0 top-0 h-px bg-accent/50" aria-hidden />

      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 py-16 md:py-24 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent font-sans font-medium">
            <MapPin className="size-3.5" />
            <span>Los Angeles · in-person & online</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance">
            Personalized tutoring,
            <br />
            <span className="text-accent">built around your student.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-xl text-pretty leading-relaxed">
            {site.tagline} Lessons start by figuring out what's actually getting in the way —
            then rebuilding from there with the patience and structure school can't always offer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Book a free intro call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore subjects</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <StarRating value={site.rating.stars} />
            <span className="text-foreground/80 font-medium">
              {site.rating.stars.toFixed(1)}
            </span>
            <span>·</span>
            <span>
              {site.rating.reviewCount}+ {site.rating.source} reviews
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-border">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          {/* Decorative gold tag */}
          <div className="hidden md:flex absolute -left-6 bottom-10 items-center gap-3 bg-card border border-border rounded-full pl-2 pr-5 py-2 shadow-lg">
            <span className="grid place-items-center size-9 rounded-full bg-accent text-accent-foreground font-serif text-lg font-semibold">
              T
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-primary">{site.founder}</div>
              <div className="text-xs text-muted-foreground">Founder & Lead Tutor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
