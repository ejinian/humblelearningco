import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { founderPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

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
        <link rel="canonical" href="https://humblelearningco.com/about" />
      </Helmet>

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.46fr)] lg:items-center">
          <div>
            <div className="max-w-2xl">
              <p className="font-serif text-2xl font-semibold leading-none text-accent md:text-3xl">
                About
              </p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-primary text-balance md:text-5xl lg:text-6xl">
                Meet the Founder.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                Schools teach one way. Students learn a hundred. I started
                HUMBLE Learning Co. to bridge the gap — one student at a time.
              </p>
            </div>

            <div className="prose-content mt-8 space-y-5 text-foreground/85 leading-relaxed text-pretty max-w-2xl">
              <p>
                I've taught students from kindergarten through college — early
                readers, struggling juniors, AP standouts, adults switching
                careers. Some were close to giving up. Some wanted to race
                ahead. Most were somewhere in between.
              </p>
              <p>
                My approach never changes: find what's missing, rebuild from
                there, and protect their confidence along the way. A C becoming
                an A is great. A student who used to dread homework — and now
                opens the book on their own — is even better.
              </p>
              <p>
                What sets us apart is that we teach lifelong skills. The goal
                is not for students to rely on tutoring forever — it is to
                transform their academic experience, show them what they are
                capable of, and equip them with skills they can carry into
                every subject and every stage of learning.
              </p>
              <p>
                Every session is one-on-one and built around your student. In
                person across {site.location.split(",")[0]}, or online if
                that's easier. Parents and adult learners welcome too.
              </p>
            </div>

            <div className="mt-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
                Academic background
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border/70 bg-card px-4 py-4 shadow-sm">
                  <p className="font-serif text-3xl font-semibold text-primary">1600</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">SAT Score</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Perfect score — I know this test from the inside out.
                  </p>
                </div>
                <div className="rounded-lg border border-border/70 bg-card px-4 py-4 shadow-sm">
                  <p className="font-serif text-3xl font-semibold text-primary">4.6</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">Weighted GPA</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    I know what a demanding course load actually requires.
                  </p>
                </div>
                <div className="rounded-lg border border-border/70 bg-card px-4 py-4 shadow-sm">
                  <p className="font-serif text-xl font-semibold text-primary leading-tight">UCLA · UCB · USC</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">Accepted</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    I've been through the college process — I can guide students through it too.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Book a free intro call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/reviews">Read what families say</Link>
              </Button>
            </div>
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
                className="absolute inset-0 size-full object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20">
          <SectionHeading
            eyebrow="How I teach"
            title="Three things I never compromise on."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="border-border/70">
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              The first call is free
            </p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Let's see if we're the right fit.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Tell me about your student. I'll reply within a day.
            </p>
          </div>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
