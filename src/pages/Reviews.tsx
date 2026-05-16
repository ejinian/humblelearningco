import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export default function Reviews() {
  return (
    <div>
      <Helmet>
        <title>100+ Five-Star Google Reviews | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Read what Los Angeles families say about HUMBLE Learning Co. — 100+ five-star Google reviews from students and parents across LA."
        />
        <meta property="og:title" content="100+ Five-Star Google Reviews | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Read what Los Angeles families say about HUMBLE Learning Co. — 100+ five-star Google reviews from students and parents across LA."
        />
        <link rel="canonical" href="https://humblelearningco.com/reviews" />
      </Helmet>

      <section className="container py-16 md:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Family reviews"
          title="In their own words."
          description="Every review below is verbatim from Google — students and parents we've actually worked with."
        />

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="inline-flex items-center gap-2">
            <StarRating value={site.rating.stars} />
            <span className="font-medium text-foreground">
              {site.rating.stars.toFixed(1)}
            </span>
            <span>·</span>
            <span>
              {reviews.length} reviews on {site.rating.source}
            </span>
          </div>
          {site.social.google && (
            <a
              href={site.social.google}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 prose-link text-primary"
            >
              View on Google
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Want to be the next one?
            </p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Let's talk about your student.
            </h3>
            <p className="mt-3 text-primary-foreground/80 max-w-xl text-pretty leading-relaxed">
              Free first call. Zero commitment.
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
