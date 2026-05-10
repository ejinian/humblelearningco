import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Button } from "@/components/ui/button";

const formats = [
  "One-on-one sessions, never group classes",
  "In-person around Los Angeles or online",
  "Weekly recurring or as-needed support",
  "Parent updates so you know what we worked on",
  "Flexible scheduling around school and activities",
];

export default function Services() {
  return (
    <div>
      <section className="container py-16 md:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Subjects & services"
          title="One tutor, almost every subject your student is taking."
          description="We cover the full arc — early reading and arithmetic through calculus, college coursework, test prep, and the executive-function skills schools rarely teach directly."
        />
      </section>

      <section className="container pb-16">
        <ServiceGrid detailed />
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeading
            eyebrow="How sessions work"
            title="Built to fit a real student's week."
            description="The format is designed to be easy on busy households and steady enough to actually move the needle."
          />

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
        </div>
      </section>

      <section className="container py-20 md:py-24 text-center">
        <SectionHeading
          eyebrow="Not sure where to start?"
          title="Tell us what's going on. We'll point you in the right direction."
          description="Even if you're not sure which subject is the actual problem, the first call is free and we'll figure it out together."
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
      </section>
    </div>
  );
}
