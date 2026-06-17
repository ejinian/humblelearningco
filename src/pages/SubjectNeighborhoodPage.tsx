import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessagesSquare,
  Sparkles,
  Calendar,
  School,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NotFound from "@/pages/NotFound";

import { getSubjectNeighborhood } from "@/lib/subjectNeighborhoods";
import { featuredReviews } from "@/lib/reviews";
import { heroPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Free intro call",
    body: "Tell us what's going on. We listen, ask questions, and get a feel for where your student stands.",
  },
  {
    icon: Sparkles,
    title: "2. A plan that fits",
    body: "A custom plan — subjects, pace, and how often we meet. No templates, no fluff.",
  },
  {
    icon: Calendar,
    title: "3. Sessions begin",
    body: "We close the gaps holding your student back, then build forward — adjusting as they grow.",
  },
];

export default function SubjectNeighborhoodPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const page = getSubjectNeighborhood(slug);

  if (!page) return <NotFound />;

  const canonicalUrl = `${site.url}/${page.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        description: page.metaDescription,
        url: canonicalUrl,
        telephone: site.contact.phone,
        email: site.contact.email,
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: page.neighborhood,
          addressRegion: "CA",
          addressCountry: "US",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(site.rating.stars),
          reviewCount: String(site.rating.reviewCount),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-paper">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          aria-hidden
        />
        <div
          className="absolute right-0 top-10 hidden h-80 w-80 rounded-full bg-accent/10 blur-3xl lg:block"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 hidden h-64 w-64 rounded-full bg-primary/5 blur-3xl lg:block"
          aria-hidden
        />

        <div className="container grid min-h-[calc(100svh-5rem)] gap-11 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)] lg:items-center lg:gap-14 lg:py-20">
          <div className="max-w-[44rem] animate-fade-up text-center lg:text-left">
            <p className="mx-auto text-xs uppercase tracking-[0.22em] text-accent font-medium lg:mx-0">
              {page.eyebrow}
            </p>

            <h1 className="mt-3 font-serif text-[2.85rem] font-black leading-[1.02] text-primary text-balance sm:text-6xl lg:text-[4.85rem] xl:text-[5.15rem]">
              {page.headline}{" "}
              <span className="text-accent">{page.headlineAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-foreground/80 text-pretty md:text-xl lg:mx-0">
              {page.tagline}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 text-pretty lg:mx-0">
              {page.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="accent"
                className="group h-[3.35rem] rounded-md px-7 text-base font-semibold shadow-[0_16px_34px_hsl(var(--accent)/0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_hsl(var(--accent)/0.32)]"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[3.35rem] rounded-md border-primary/25 bg-card/55 px-7 text-base font-semibold shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <a href={`mailto:${site.contact.email}`}>
                  <Mail className="size-4" />
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mx-0">
              {[
                `Serving ${page.neighborhood}`,
                `${site.rating.reviewCount}+ Five-Star Reviews`,
                "In-Person & Online",
                `One-on-One with ${site.founder}`,
              ].map((indicator) => (
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

          {/* Right — photo */}
          <div className="relative mx-auto w-full max-w-[31rem] animate-fade-up [animation-delay:120ms] lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-3 rounded-[1.65rem] border border-accent/20 bg-card/40 shadow-[0_26px_80px_hsl(var(--primary)/0.13)] backdrop-blur-sm sm:-inset-4"
              aria-hidden
            />
            <div className="absolute -left-5 top-10 hidden h-28 w-1 rounded-full bg-accent/70 lg:block" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-secondary shadow-[0_28px_70px_hsl(var(--primary)/0.22)] ring-1 ring-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_84px_hsl(var(--primary)/0.25)] sm:rounded-[1.45rem]">
              <img
                src={heroPhoto.src}
                alt={`${page.subject} tutor in ${page.neighborhood} — ${heroPhoto.alt}`}
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
                    {site.rating.reviewCount}+ five-star reviews
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

      {/* Local schools signal */}
      {page.schools.length > 0 && (
        <section className="border-y border-border/50 bg-secondary/40">
          <div className="container py-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-medium shrink-0">
                  <School className="size-3.5" />
                  Local schools we work with
                </div>
                {page.schools.map((school) => (
                  <span
                    key={school}
                    className="text-sm font-medium text-primary/75"
                  >
                    {school}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Breadcrumb links back to neighborhood + subject pages */}
      <section className="container pt-14 pb-2">
        <Reveal>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              to={`/${page.neighborhoodSlug}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowRight className="size-3 rotate-180" />
              All tutoring in {page.neighborhood}
            </Link>
            {page.subjectSlug && (
              <Link
                to={`/${page.subjectSlug}`}
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
              >
                <ArrowRight className="size-3 rotate-180" />
                {page.subject} tutoring across LA
              </Link>
            )}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="bg-secondary/60 border-y border-border/60 mt-14">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Three steps. No pressure."
              description="Tell us where your student is stuck and we'll map out support that builds confidence, stronger habits, and real academic skills."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 130}>
                  <Card className="border-border/70 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.07)] motion-reduce:transition-none">
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
          <Reveal className="mt-10 flex justify-center">
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
      <section className="container py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What Students & Families Are Saying."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.slice(0, 3).map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={i * 80} className="h-full">
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/25 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Link to="/reviews">
              View All {site.rating.reviewCount}+ Reviews
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* FAQs */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title={`${page.subject} Tutoring in ${page.neighborhood} — FAQs`}
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {page.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-xl border border-border/70 bg-card p-6 md:p-7 shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-primary leading-snug">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 text-pretty">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + related pages */}
      <section className="container py-20 md:py-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Ready when you are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              The first call is always free.
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-pretty leading-relaxed">
              No commitment — just a conversation about where your student is
              and where they want to be.
            </p>
          </div>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Related combo pages */}
        {page.relatedCombos.length > 0 && (
          <Reveal className="mt-12">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
              Also available
            </p>
            <div className="flex flex-wrap gap-3">
              {page.relatedCombos.map((c) => (
                <Button
                  key={c.slug}
                  asChild
                  variant="outline"
                  className="border-primary/25 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Link to={`/${c.slug}`}>
                    {c.label}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              ))}
            </div>
          </Reveal>
        )}
      </section>
    </div>
  );
}
