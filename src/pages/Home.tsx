import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MessagesSquare, Sparkles } from "lucide-react";

import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoStrip } from "@/components/PhotoStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { featuredReviews } from "@/lib/reviews";
import { services } from "@/lib/services";

const stepItems = [
  {
    icon: MessagesSquare,
    title: "1. Free intro call",
    body: "Tell us what's going on. We listen, ask questions, and get a feel for where your student stands.",
  },
  {
    icon: Sparkles,
    title: "2. A plan that fits",
    body: "A custom plan — subjects, pace, format, and how often we meet. No templates, no fluff.",
  },
  {
    icon: Calendar,
    title: "3. Sessions begin",
    body: "We close the gaps holding your student back, then build forward — adjusting as they grow.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services preview */}
      <section className="container py-20 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="What we cover"
            title="Every Subject. Every Age. Any Learning Style."
            description="From learning concepts, to homework help, tech help, PSAT, SAT, and ACT prep, plus building study skills and organizational skills, we prepare you with real world skills."
          />
          <Button asChild variant="link" className="px-0">
            <Link to="/services">
              See all subjects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <ServiceGrid items={services.slice(0, 7)} />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. No pressure."
            description="Tell us where your student feels stuck, and we will map out support that builds confidence, structure, stronger habits, and the skills to feel back in control."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stepItems.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="border-border/70">
                  <CardContent className="p-6 space-y-3">
                    <div className="size-11 rounded-md bg-primary text-primary-foreground grid place-items-center">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {step.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Start with a free intro call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-20 md:py-24">
        <SectionHeading
          eyebrow="What families say"
          title="Five stars, in their own words."
          description="Real reviews from real families on Google — not a single one paraphrased."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/reviews">
              Read all reviews
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Photo strip + final CTA */}
      <section className="container pb-24">
        <SectionHeading
          eyebrow="Inside the sessions"
          title="Real Students. Real Results."
          align="center"
          className="mx-auto"
        />

        <div className="mt-10">
          <PhotoStrip count={6} />
        </div>

        <div className="mt-16 rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Ready when you are
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Tell us what your student is working on.
            </h3>
            <p className="text-xl font-semibold text-primary-foreground/90 max-w-xl text-pretty leading-relaxed md:text-2xl">
              FREE Consultation. Get Started Today.
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
