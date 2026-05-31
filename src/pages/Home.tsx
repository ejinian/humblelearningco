import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MessagesSquare, Sparkles } from "lucide-react";

import { Hero } from "@/components/Hero";
import { StructuredData } from "@/components/StructuredData";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoStrip } from "@/components/PhotoStrip";
import { StatsStrip } from "@/components/StatsStrip";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { featuredReviews } from "@/lib/reviews";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

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
      <Helmet>
        <title>Top-Rated Tutoring in Los Angeles | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="One-on-one tutoring for K–12 and college students in Los Angeles. Math, reading, science, test prep, ADHD-friendly — Encino, Tarzana, Sherman Oaks & beyond. First call free."
        />
        <meta property="og:title" content="Top-Rated Tutoring in Los Angeles | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="One-on-one tutoring for K–12 and college students in Los Angeles. Math, reading, science, test prep, ADHD-friendly — Encino, Tarzana, Sherman Oaks & beyond. First call free."
        />
        <link rel="canonical" href={`${site.url}/`} />
      </Helmet>
      <StructuredData />

      <Hero />
      <StatsStrip />

      {/* Services preview */}
      <section className="container py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading
              eyebrow="What we cover"
              title="One tutor. Every Subject. Any Age."
            />
            <Button asChild variant="link" className="px-0">
              <Link to="/services">
                See all subjects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <ServiceGrid items={services.slice(0, 7)} />
        </Reveal>
      </section>

      <PullQuote />

      {/* How it works */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-24 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Three steps. No pressure."
              description="Tell us where your student feels stuck, and we will map out support that builds confidence, structure, stronger habits, and the skills to feel back in control."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {stepItems.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 130}>
                  <Card className="border-border/70 h-full">
                    <CardContent className="p-7 space-y-4">
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
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 flex justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Start with a free intro call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-24 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What families say"
            title="Five stars, in their own words."
            description="Real reviews from real families on Google — not a single one paraphrased."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={i * 80}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/reviews">
              Read all reviews
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* Photo strip + final CTA */}
      <section className="container pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Inside the sessions"
            title="Real Students. Real Results."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <PhotoStrip count={6} />
        </Reveal>

        <Reveal delay={200} className="mt-16">
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 grid grid-cols-[1fr_auto] items-center gap-6">
            <h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug text-primary-foreground">
              Tell me what's going on.
              <br />
              We'll take care of the rest.
            </h3>
            <Button asChild size="lg" variant="accent" className="shrink-0">
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
