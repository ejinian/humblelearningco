import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PullQuote() {
  return (
    <section
      aria-label="Featured review"
      className="relative overflow-hidden bg-primary py-24 md:py-32 transition-colors duration-500 hover:bg-[hsl(212_30%_20%)]"
    >
      <div
        className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-accent/5 blur-[80px]"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-[46rem] text-center">
        <Reveal className="duration-[800ms]">
          <span
            className="font-serif text-[7rem] leading-none text-accent/40 select-none"
            aria-hidden
          >
            ❝
          </span>

          <blockquote className="-mt-4 font-serif text-xl font-semibold text-primary-foreground text-balance leading-[1.75] md:text-2xl lg:text-[2rem] lg:leading-[1.75]">
            Tiana is one of the most intelligent young people I have ever met.
            She is patient and caring and most importantly a phenomenal teacher.
            I highly recommend her for any subject for a person of any age.
          </blockquote>

          <cite className="mt-16 block not-italic">
            <span className="block text-base font-semibold uppercase tracking-[0.10em] text-accent md:text-lg">
              David P. &mdash; CEO &amp; Harvard MBA
            </span>
            <span className="mt-2 block text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/40">
              Google Review &middot; Los Angeles
            </span>
          </cite>

          <Link
            to="/reviews"
            className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/40 hover:text-accent transition-colors duration-200"
          >
            Read all 130+ reviews
            <ArrowRight className="size-3" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
