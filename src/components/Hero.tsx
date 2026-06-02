import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

const trustIndicators = [
  "1000+ Students Helped",
  "130+ 5-Star Reviews",
  "All Subjects & Grade Levels",
  "Los Angeles & Online Tutoring",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        aria-hidden
      />
      <div
        className="absolute right-0 top-10 hidden h-80 w-80 rounded-full bg-accent/10 blur-3xl lg:block animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 hidden h-64 w-64 rounded-full bg-primary/5 blur-3xl lg:block animate-float-slow [animation-delay:7s]"
        aria-hidden
      />

      <div className="container grid min-h-[calc(100svh-5rem)] gap-11 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)] lg:items-center lg:gap-14 lg:py-20">
        <div className="max-w-[44rem] animate-fade-up text-center lg:text-left">
          <h1 className="font-serif text-[2.2rem] font-black leading-[1.02] text-primary text-balance sm:text-[3.5rem] lg:text-[4.85rem] xl:text-[5.15rem]">
            Personalized Learning.
            <br />
            <span className="text-accent">Proven Results.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-foreground/80 text-pretty md:text-xl lg:mx-0">
            We turn "I can't do this" into "This finally makes sense!"
            <br className="hidden sm:block" />
            Learning made easy, supportive, and stress free.
          </p>

          <p className="mx-auto mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-primary text-balance sm:text-3xl lg:mx-0">
            Catch up. Stay on Track. Get Ahead.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="group h-[3.35rem] rounded-md px-7 text-base font-semibold shadow-[0_16px_34px_hsl(var(--accent)/0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_hsl(var(--accent)/0.32)]"
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-[3.35rem] rounded-md border-primary/25 bg-card/55 px-7 text-base font-semibold shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <Link to="/services">
                See All Subjects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold uppercase tracking-[0.12em] text-primary/80 sm:text-xl lg:mx-0">
            All your learning needs in one place.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-foreground/75 text-pretty sm:text-lg lg:mx-0">
            Trusted by thousands of families to support long-term academic
            success.
          </p>

          <div className="mx-auto mt-9 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mx-0">
            {trustIndicators.map((indicator) => (
              <div
                key={indicator}
                className="group flex min-h-12 items-center gap-3 rounded-md border border-border/70 bg-card/60 px-3.5 py-3 text-left text-sm font-semibold text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-card/90 hover:shadow-md"
              >
                <CheckCircle2 className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem] animate-fade-up [animation-delay:120ms] lg:mx-0 lg:justify-self-end">
          <div
            className="absolute -inset-3 rounded-[1.65rem] border border-accent/20 bg-card/40 shadow-[0_26px_80px_hsl(var(--primary)/0.13)] backdrop-blur-sm sm:-inset-4"
            aria-hidden
          />
          <div className="absolute -left-5 top-10 hidden h-28 w-1 rounded-full bg-accent/70 lg:block" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-secondary shadow-[0_28px_70px_hsl(var(--primary)/0.22)] ring-1 ring-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_84px_hsl(var(--primary)/0.25)] sm:rounded-[1.45rem]">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[52%_44%] transition-transform duration-700 hover:scale-[1.07]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/32 via-primary/0 to-accent/8" />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-border/80 bg-card/95 p-4 shadow-xl shadow-primary/15 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 sm:left-8 sm:right-auto sm:min-w-64">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {site.rating.stars.toFixed(1)}
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-primary">
                  Trusted by 130+ LA families
                </div>
                <div className="text-xs text-muted-foreground">
                  Personalized support from {site.founder}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
