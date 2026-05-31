import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const formats = [
  "One-on-one. Never group classes.",
  "In person across LA, or online.",
  "Weekly recurring or drop-in as needed.",
  "Parent updates after every session.",
  "Flexible around school and activities.",
];

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Tutoring Services — Math, Reading, Science, Test Prep | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="One tutor, every subject. K–12 math, reading, writing, science, SAT/ACT/PSAT prep, homework help, study skills, and college courses in Los Angeles."
        />
        <meta property="og:title" content="Tutoring Services — Math, Reading, Science, Test Prep | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="One tutor, every subject. K–12 math, reading, writing, science, SAT/ACT/PSAT prep, homework help, study skills, and college courses in Los Angeles."
        />
        <link rel="canonical" href={`${site.url}/services`} />
      </Helmet>

      <section className="container py-16 md:py-20">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="Subjects & services"
            title="One tutor. Every Subject. Any Age."
          />
        </Reveal>
      </section>

      <section className="container pb-20">
        <Reveal>
          <ServiceGrid detailed />
        </Reveal>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="How sessions work"
              title="Built for the way real weeks run."
              description="Flexible enough for busy households. Steady enough to make real progress."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-3">
              {formats.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <span
                    className="mt-1 size-5 grid place-items-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/30 shrink-0"
                    aria-hidden
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-24 text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="We'll help you figure it out."
            description="Even if you can't name the problem, we can. The first call is free."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Book a free intro call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
