import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { founderPhoto } from "@/lib/photos";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
const values = [
  {
    icon: HeartHandshake,
    title: "Patience first.",
    body: "Students learn faster when they don't feel rushed — or judged. It's the word families use most when they describe us.",
  },
  {
    icon: Target,
    title: "Plans, not worksheets.",
    body: "Every student gets a custom plan, adjusted as we go. ADHD, executive-function gaps, missing fundamentals — all handled.",
  },
  {
    icon: Lightbulb,
    title: "Understanding before practice.",
    body: "We rebuild the idea first; the practice sticks after. The grade follows on its own — it's never the goal.",
  },
];

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Tiana — Founder & Tutor | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Meet Tiana, founder of HUMBLE Learning Co. Patient, personalized one-on-one tutoring for every learning style — Los Angeles, in-person and online."
        />
        <meta property="og:title" content="About Tiana — Founder & Tutor | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Meet Tiana, founder of HUMBLE Learning Co. Patient, personalized one-on-one tutoring for every learning style — Los Angeles, in-person and online."
        />
        <link rel="canonical" href={`${site.url}/about`} />
      </Helmet>

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.46fr)] lg:items-start">
          <div>
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                  About Tiana
                </p>
                <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-primary text-balance md:text-5xl lg:text-6xl">
                  Meet the Founder.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                  I started HUMBLE Learning Co. because I kept seeing the same
                  thing across Los Angeles: students who were more capable than
                  they believed. I wanted to change that.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-8 max-w-2xl">
              <p className="font-serif text-2xl font-semibold text-primary leading-snug text-pretty md:text-3xl">
                Every student walks in thinking they're the problem.
                In six years, I've never found that to be true.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-6 max-w-2xl">
              <p className="text-foreground/80 leading-relaxed text-pretty">
                My approach never changes: find what's missing, rebuild from
                there, protect their confidence — whether it's math, reading,
                SAT prep, or breaking through a wall of self-doubt. A student
                who used to dread homework and now opens the book on their own
                — that's the moment I work toward.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-8 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex-1 h-px bg-border/40" aria-hidden />
                <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">The Proof</p>
                <span className="flex-1 h-px bg-border/40" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {(
                  [
                    { value: "1600",   label: "SAT — Perfect Score" },
                    { value: "4.6",    label: "GPA — Academic Excellence" },
                    { value: "6+",     label: "Years — Real Experience" },
                    { value: "1,000+", label: "Students — Lives Impacted" },
                  ] as const
                ).map((stat, i) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "group",
                      i < 3 && "sm:border-r sm:border-border/40 sm:pr-5",
                      i > 0 && "sm:pl-5",
                    )}
                  >
                    <p className="font-serif text-4xl font-semibold text-primary leading-none transition-colors duration-300 group-hover:text-accent motion-reduce:transition-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-border/30">
                <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                  University Admissions
                </p>
                <p className="mt-2 text-sm font-medium text-foreground/70">
                  UCLA &bull; UC Berkeley &bull; USC &bull; UC San Diego &bull; UC Irvine &bull; and more
                </p>
              </div>
            </Reveal>

            <Reveal delay={280} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Book a free intro call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/reviews">Read what families say</Link>
              </Button>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-3 rounded-[1.35rem] border border-accent/20 bg-card/50 shadow-[0_24px_70px_hsl(var(--primary)/0.12)]"
              aria-hidden
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-secondary shadow-xl shadow-primary/15 ring-1 ring-primary/10">
              <img
                src={founderPhoto.src}
                alt={founderPhoto.alt}
                className="absolute inset-0 size-full object-cover object-[50%_35%] transition-transform duration-700 hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How I teach"
              title="Three things I never compromise on."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 130}>
                  <Card className="border-border/70 h-full">
                    <CardContent className="p-6 space-y-3">
                      <div className="size-11 rounded-md bg-accent/15 text-accent grid place-items-center ring-1 ring-accent/30">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold">
                        {v.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                        {v.body}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <Reveal>
          <div className="rounded-2xl bg-card border border-border p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                The first call is free
              </p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
                Let's see if we're the right fit.
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl text-pretty leading-relaxed">
                Tell me what's going on. We'll take care of the rest.
              </p>
            </div>
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
