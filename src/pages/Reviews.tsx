import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.stars.toFixed(1),
    reviewCount: String(site.rating.reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Reviews() {
  return (
    <div>
      <Helmet>
        <title>130+ Five-Star Reviews — Los Angeles Tutor | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Read what students and families across Los Angeles say about HUMBLE Learning Co. — 130+ five-star Google reviews from real sessions."
        />
        <meta property="og:title" content="130+ Five-Star Reviews — Los Angeles Tutor | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Read what students and families across Los Angeles say about HUMBLE Learning Co. — 130+ five-star Google reviews from real sessions."
        />
        <link rel="canonical" href={`${site.url}/reviews`} />
        <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
      </Helmet>

      <section className="container py-16 md:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Reviews"
          title="Five Stars, In Their Own Words."
        />

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="inline-flex items-center gap-2.5">
            <StarRating value={site.rating.stars} size={18} />
            <span className="font-semibold text-primary">
              {site.rating.stars.toFixed(1)} Rating
            </span>
            <span className="text-border/80 select-none">·</span>
            <span className="font-medium text-muted-foreground">
              {site.rating.reviewCount}+ Google Reviews
            </span>
          </div>
          {site.social.google && (
            <a
              href={site.social.google}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 prose-link text-primary font-medium"
            >
              View on Google
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>

        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty">
          Every review below comes directly from Google and reflects the
          experiences of real students, parents, and families we&rsquo;ve
          worked with.
        </p>
      </section>

      <section className="container pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={Math.min(i % 9, 8) * 60} className="h-full">
              <ReviewCard review={review} />
            </Reveal>
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
