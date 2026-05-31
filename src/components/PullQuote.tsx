import { Reveal } from "@/components/Reveal";

export function PullQuote() {
  return (
    <section
      aria-label="Featured review"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      <div
        className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-accent/5 blur-[80px]"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span
            className="font-serif text-7xl leading-none text-accent/25 select-none"
            aria-hidden
          >
            ❝
          </span>

          <blockquote className="-mt-4 font-serif text-2xl font-semibold leading-relaxed text-primary-foreground text-balance md:text-3xl lg:text-[2rem] lg:leading-relaxed">
            I couldn't read even a Dr. Seuss book or do simple multiplication
            before I met Tiana. Thank you so much for your help.
          </blockquote>

          <cite className="mt-8 block not-italic">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent/70">
              Justin L. · Google Review · Los Angeles
            </span>
          </cite>

          <div className="mx-auto mt-10 h-px w-12 bg-accent/30" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}
