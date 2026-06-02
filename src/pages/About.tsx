import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { founderPhoto } from "@/lib/photos";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface ProofStat {
  end: number;
  decimals?: number;
  suffix?: string;
  comma?: boolean;
  label: string;
}

function AnimatedProofStat({ end, decimals = 0, suffix = "", comma = false }: Omit<ProofStat, "label">) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const count = useCountUp(end, decimals, inView);
  const formatted = comma
    ? Math.round(count).toLocaleString()
    : decimals > 0
    ? count.toFixed(decimals)
    : String(Math.round(count));
  return <span ref={ref}>{formatted}{suffix}</span>;
}

const proofStats: ProofStat[] = [
  { end: 1600,                    label: "Perfect SAT Score" },
  { end: 4.6,   decimals: 1,      label: "Weighted GPA" },
  { end: 6,     suffix: "+",      label: "Years Tutoring" },
  { end: 1000,  suffix: "+", comma: true, label: "Students Helped" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Patience first.",
    body: "Every student has a moment where they're about to give up. I've learned to recognize it — and hold the space until it passes. That's when real learning begins.",
  },
  {
    icon: Target,
    title: "Plans, not worksheets.",
    body: "There's no program, no one-size approach. Every session is built around how your child specifically thinks — where the gap started, and what it takes to close it.",
  },
  {
    icon: Lightbulb,
    title: "Understanding before practice.",
    body: "When a student truly understands something, confidence builds itself. The grade follows — it always does. We don't chase scores. We chase the 'oh, I get it' moment.",
  },
];

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About Tiana — Founder & Tutor | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Meet Tiana, founder of HUMBLE Learning Co. One-on-one tutoring in Los Angeles for students who are capable of far more than they believe. First call free."
        />
        <meta property="og:title" content="About Tiana — Founder & Tutor | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Meet Tiana, founder of HUMBLE Learning Co. One-on-one tutoring in Los Angeles for students who are capable of far more than they believe. First call free."
        />
        <link rel="canonical" href={`${site.url}/about`} />
      </Helmet>

      <section className="container pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_260px] md:gap-10 md:items-start lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] lg:gap-14">

          {/* Text column */}
          <div>
            <Reveal>
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
                  <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                    About Tiana
                  </p>
                </div>
                <h1 className="mt-3 font-serif text-3xl font-semibold leading-[1.05] text-primary text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                  Meet the Founder.
                </h1>
              </div>
            </Reveal>

            <Reveal delay={60} className="mt-5 max-w-2xl">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Hi everyone, I&rsquo;m Tiana Humble, founder of HUMBLE
                Learning Co.{" "}
                <span className="font-semibold text-accent">I&rsquo;m so glad you&rsquo;re here.</span>
              </p>
            </Reveal>

            <Reveal delay={110} className="mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                I started HUMBLE Learning Co. with one mission&mdash;making
                quality learning more efficient, accessible, and stress-free.
              </p>
            </Reveal>

            <Reveal delay={170} className="mt-6 max-w-2xl">
              <div className="rounded-xl border border-accent/25 bg-accent/10 px-5 py-4 sm:px-6 sm:py-5">
                <p className="font-serif text-xl font-semibold text-primary leading-snug text-balance sm:text-2xl md:text-3xl">
                  Every student is capable of far more than they realize.
                  You know it. I&rsquo;ve seen it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={210} className="mt-5 max-w-2xl">
              <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                It&rsquo;s not that they can&rsquo;t do it. It&rsquo;s that
                they don&rsquo;t have the right support, the right
                environment, or an approach that works for them&mdash;that
                isn&rsquo;t one size fits all.
              </p>
            </Reveal>

            <Reveal delay={250} className="mt-7 max-w-2xl">
              <p className="font-serif text-lg font-semibold text-primary sm:text-xl md:text-2xl">
                That&rsquo;s what we&rsquo;re here for.
              </p>
            </Reveal>

            <Reveal className="mt-14 max-w-2xl md:mt-20">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
                <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                  What Sets Us Apart
                </p>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-pretty">
                We bring all your academic and personal needs to one
                place&mdash;from learning and mastering concepts to homework
                help, test prep, study skills, organization, building structure
                and even just having someone there to hold you accountable and
                answer everything.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-8 max-w-2xl md:mt-10">
              <p className="font-serif text-xl font-semibold text-primary leading-snug sm:text-2xl md:text-3xl">
                Tutoring and Mentoring, Designed Around You.
              </p>
              <p className="mt-6 text-foreground/80 leading-relaxed">
                We aren&rsquo;t here to create dependence.
              </p>
              <p className="mt-1 text-foreground/80 leading-relaxed">
                We&rsquo;re here to build:
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-4 max-w-2xl">
              <div className="border-l-2 border-accent/50 pl-5 space-y-2">
                <p className="font-serif text-xl font-semibold text-primary sm:text-2xl">Confidence.</p>
                <p className="font-serif text-xl font-semibold text-primary sm:text-2xl">Independence.</p>
                <p className="font-serif text-xl font-semibold text-primary sm:text-2xl">Skills that last a lifetime.</p>
              </div>
            </Reveal>

            <Reveal className="mt-12 max-w-2xl md:mt-16">
              <div className="border-t border-border/50" />
            </Reveal>

            <Reveal className="mt-8 max-w-2xl md:mt-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
                <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                  Why HUMBLE
                </p>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-pretty">
                After taking every course, every test, and working with
                thousands of students of different ages, subjects, and learning
                styles, I&rsquo;ve mastered the ins and outs of the education
                system.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-7 max-w-2xl md:mt-9">
              <p className="font-serif text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
                Academics isn&rsquo;t just about learning.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                There&rsquo;s a mental side that&rsquo;s overlooked every time.
              </p>
              <p className="mt-3 text-foreground/80 leading-relaxed text-pretty">
                Students are overwhelmed, stressed, unmotivated,
                procrastinating&mdash;or maybe even just &hellip; changed. They
                no longer want to do it.
              </p>
            </Reveal>

            <Reveal className="mt-12 max-w-2xl md:mt-16">
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-border/40" />
                <span className="size-1.5 rounded-full bg-accent/50 shrink-0" aria-hidden />
                <div className="flex-1 border-t border-border/40" />
              </div>
            </Reveal>

            <Reveal className="mt-8 max-w-2xl md:mt-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
                <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                  Our Approach
                </p>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-pretty">
                You don&rsquo;t have to know everything about your child or
                yourself. Tell me what you know. I&rsquo;ll build a plan from
                there and take care of the rest, keeping you informed the entire
                time.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-7 max-w-2xl md:mt-9">
              <p className="font-serif text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
                Catch Up. Stay on Track. Get Ahead.
              </p>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                We cover everything.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-12 max-w-2xl md:mt-14">
              <div className="pt-8 border-t border-border/50 space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  This is support that genuinely cares about you and your needs.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I&rsquo;m honored to be a part of your journey, and I&rsquo;m
                  here every step of the way,
                </p>
                <p className="mt-4 font-serif text-lg font-semibold text-primary sm:text-xl">
                  With You and For You.
                </p>
                <p className="font-serif text-xl font-bold text-primary sm:text-2xl">
                  Welcome to HUMBLE Learning Co.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240} className="mt-14 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold mb-5">The Proof</p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4 sm:gap-x-0">
                {proofStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "group",
                      i < 3 && "sm:border-r sm:border-border/40 sm:pr-6",
                      i > 0 && "sm:pl-6",
                    )}
                  >
                    <p className="font-serif text-3xl tabular-nums font-semibold text-primary leading-none transition-colors duration-300 group-hover:text-accent motion-reduce:transition-none sm:text-4xl">
                      <AnimatedProofStat
                        end={stat.end}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        comma={stat.comma}
                      />
                    </p>
                    <p className="mt-2 text-sm font-medium text-foreground/70 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                  University Admissions
                </p>
                <p className="mt-2 text-sm font-medium text-foreground/80 leading-relaxed">
                  UCLA &bull; UC Berkeley &bull; USC &bull; UC San Diego &bull; UC Irvine &bull; and more
                </p>
              </div>
            </Reveal>

            <Reveal delay={360} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
                <Link to="/contact">
                  Book a free intro call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/reviews">Read what families say</Link>
              </Button>
            </Reveal>
          </div>

          {/* Photo — desktop: sticky right column, mobile: above text */}
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-xs md:max-w-none md:mx-0 md:sticky md:top-24 self-start order-first md:order-none">
            <div
              className="absolute -inset-3 rounded-[1.35rem] border border-accent/20 bg-card/50 shadow-[0_24px_70px_hsl(var(--primary)/0.12)]"
              aria-hidden
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-secondary shadow-xl shadow-primary/15 ring-1 ring-primary/10">
              <img
                src={founderPhoto.src}
                alt={founderPhoto.alt}
                className="absolute inset-0 size-full object-cover object-[50%_35%] transition-transform duration-700 hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-14 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="What I believe"
              title="Three things I never compromise on."
              align="center"
              className="mx-auto"
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 130}>
                  <Card className="border-border/70 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_hsl(var(--primary)/0.09)] motion-reduce:transition-none">
                    <CardContent className="p-6 space-y-3 md:p-7">
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <Reveal>
          <div className="rounded-2xl bg-card border border-border p-8 md:p-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-center shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-accent font-semibold">
                Free consultation
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-balance sm:text-3xl md:text-4xl">
                Let&rsquo;s see if we&rsquo;re the right fit.
              </h3>
              <p className="mt-3 text-muted-foreground max-w-xl text-pretty leading-relaxed">
                Tell me what&rsquo;s going on. We&rsquo;ll take care of the rest.
              </p>
            </div>
            <Button asChild size="lg" variant="accent" className="w-full md:w-auto">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
