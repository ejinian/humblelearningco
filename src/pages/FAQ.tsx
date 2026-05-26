import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How do I get started with private tutoring in Los Angeles?",
    a: "Getting started with private tutoring in Los Angeles is simple. Book a free intro call — no commitment, no paperwork. Tell us what's going on with your student, including their grade level, subjects, and learning style, and together we'll decide whether it's the right fit. Most families across Los Angeles have a fully personalized tutoring plan within a day of that first conversation. The first call is completely free.",
  },
  {
    q: "How much does private tutoring cost in Los Angeles?",
    a: "Rates for private tutoring in Los Angeles depend on the subject, session frequency, and the level of support your student needs. We discuss pricing personally on the intro call once we understand your situation — no hidden fees, no enrollment costs, and no surprises. What we agree on together is what you pay. We believe transparent pricing is part of the trust families deserve from a private tutor.",
  },
  {
    q: "What subjects do you tutor?",
    a: "Most subjects a student is likely taking: K–12 math (arithmetic through calculus), algebra, geometry, reading and writing, science, history, SAT/ACT/PSAT prep, homework help, study skills, executive function coaching, and college-level coursework. Subject expertise spans a wide range — if you have a specific subject in mind, just ask. The answer is almost always yes.",
  },
  {
    q: "Do you offer math tutoring in Los Angeles?",
    a: "Yes — math tutoring is one of our most requested services in Los Angeles. We work with students from early arithmetic through AP Calculus, statistics, and college-level math, rebuilding the underlying concept first so the skills genuinely stick. Rather than drilling problems in isolation, we make sure the student understands why the math works before moving on. Most students see a measurable grade improvement within the first several weeks.",
  },
  {
    q: "Do you help with SAT and ACT prep?",
    a: "Yes. Tiana scored a perfect 1600 on the SAT, so SAT and ACT prep is grounded in real test experience — not a third-party curriculum. Every prep plan covers content mastery, timing strategy, process of elimination, and the specific traps each section sets. Most students who commit to structured SAT/ACT prep see meaningful score improvement. We also offer PSAT prep for students beginning the process early.",
  },
  {
    q: "Do you work with students who have ADHD or anxiety?",
    a: "Yes — ADHD-focused tutoring is central to how we teach, not a special accommodation added afterward. Every session is designed with neurodivergent learners in mind: shorter focused intervals, frequent check-ins, flexible pacing, and intentional executive function coaching woven alongside the academic content. Many families who choose HUMBLE Learning Co. specifically mention ADHD, anxiety, or learning differences as the reason they sought out one-on-one private tutoring in Los Angeles instead of a tutoring center.",
  },
  {
    q: "Do you offer online tutoring throughout California?",
    a: "Yes. Online tutoring sessions are available for students throughout California — the same personalized, one-on-one experience as in-person. We use a simple, distraction-free video format that keeps students focused and engaged. For families in Los Angeles or anywhere in California who prefer the flexibility and convenience of online tutoring, this option works just as effectively as meeting in person.",
  },
  {
    q: "What areas do you serve in Los Angeles?",
    a: "In-person tutoring is available across Los Angeles, including Encino, Sherman Oaks, Studio City, Beverly Hills, Santa Monica, Tarzana, Calabasas, Woodland Hills, Brentwood, Pacific Palisades, Pasadena, Glendale, Burbank, and surrounding neighborhoods. Online tutoring extends throughout all of California. If you're unsure whether we serve your area for in-home sessions, just ask — we'll give you a direct answer.",
  },
  {
    q: "How are tutors matched with students?",
    a: "Every student works directly with Tiana — the founder and sole tutor at HUMBLE Learning Co. There's no matching algorithm, no pool of rotating tutors, and no substitutions. You always know exactly who is working with your child, every session. This consistency is one of the things families mention most often when describing why the tutoring worked when other approaches hadn't.",
  },
  {
    q: "What makes HUMBLE Learning Co. different from other tutoring companies?",
    a: "A few things: one consistent private tutor in Los Angeles (not a rotating pool), a fully custom plan for every student, and a clear goal of independence — we're not trying to keep students reliant on tutoring indefinitely. The approach is patient, judgment-free, and built entirely around how your student actually learns. More than 100 five-star Google reviews from Los Angeles families speak to what this looks like in practice.",
  },
  {
    q: "Do you offer in-home tutoring?",
    a: "Yes. In-home tutoring in Los Angeles is available across the San Fernando Valley, Westside, South Bay, and the Pasadena corridor. We come to you — your student works in a familiar, comfortable environment and your family doesn't have to rearrange schedules around a commute. In-home private tutoring is one of the most effective formats for students who thrive in a low-pressure, one-on-one setting.",
  },
  {
    q: "How often should students meet with a tutor?",
    a: "It depends on the student's goals, coursework, and the level of support they need. After learning about your student, we'll recommend a schedule that makes real sense for their situation. Once a week is common for steady, sustainable academic progress. Twice a week or more is better for significant catch-up, intensive SAT/ACT prep, or students navigating a particularly demanding semester. We adjust the cadence as the student grows.",
  },
  {
    q: "Can tutoring help improve confidence and study habits?",
    a: "Yes — and for most students, confidence improves before the grade does. When a student stops dreading a subject and starts showing up ready to engage, grade improvement tends to follow naturally. Building strong study habits, time management skills, and executive function is woven into every plan from the start. Families often mention confidence as the first and most meaningful change they notice.",
  },
  {
    q: "Do you tutor elementary, middle school, high school, and college students?",
    a: "Yes — all grade levels. Kindergarten through elementary, middle school, high school (including AP, honors, and IB courses), college, and adult learners returning to school or transitioning careers. Private tutoring in Los Angeles works best when it's tailored to the individual — and every grade level brings its own needs, which we build every plan around. If you're unsure whether your student fits, just ask.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const trustItems = [
  "Trusted by families across Los Angeles",
  "Personalized 1-on-1 support",
  "In-home and online tutoring",
  "Custom academic plans",
];

const testimonials = [
  {
    body: "She did a phenomenal job guiding me and creating a plan that made visible progress in all my classes. I gained so much confidence throughout the way.",
    name: "Garnik S.",
  },
  {
    body: "We were really stressed about our two kids failing their final exams. Then we found Tiana — and honestly, she changed everything.",
    name: "Abo G.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        // Base — subtle glass: near-opaque card over paper grain
        "rounded-3xl border bg-card/97 backdrop-blur-[2px] overflow-hidden",
        "transition-all duration-300 ease-out",
        isOpen
          ? [
              "border-accent/35",
              "shadow-[0_2px_8px_hsl(var(--primary)/0.05),0_12px_40px_hsl(var(--accent)/0.10)]",
            ]
          : [
              "border-border/55",
              "shadow-[0_1px_4px_hsl(var(--primary)/0.05)]",
              "hover:-translate-y-0.5",
              "hover:border-border/80",
              "hover:shadow-[0_4px_20px_hsl(var(--primary)/0.07),0_1px_6px_hsl(var(--primary)/0.04)]",
            ]
      )}
    >
      {/* Touch-friendly trigger — min-height 52px */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.q.slice(0, 20)}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left min-h-[3.25rem]"
      >
        <h3
          className={cn(
            "font-serif text-[0.96rem] font-medium leading-snug tracking-[0.005em] transition-colors duration-300 pr-2 md:text-[1rem]",
            isOpen ? "text-accent" : "text-primary"
          )}
        >
          {item.q}
        </h3>

        {/* Rotating chevron in circle */}
        <span
          className={cn(
            "size-7 shrink-0 rounded-full grid place-items-center ring-1 transition-all duration-300 ease-out",
            isOpen
              ? "bg-accent/15 text-accent ring-accent/30 rotate-180"
              : "bg-secondary text-primary/50 ring-border/50 hover:ring-border"
          )}
          aria-hidden
        >
          <ChevronDown className="size-3.5" />
        </span>
      </button>

      {/* Smooth grid-rows height animation */}
      <div
        id={`faq-answer-${item.q.slice(0, 20)}`}
        className={cn(
          "grid transition-[grid-template-rows] duration-[400ms] ease-out",
          isOpen ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-7 pt-0">
            {/* Warm divider when open */}
            <div className="h-px w-full bg-gradient-to-r from-accent/25 via-border/50 to-transparent mb-5" />
            <p className="text-[0.865rem] leading-[1.75] text-foreground/68 text-pretty tracking-[0.01em]">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <Helmet>
        <title>Private Tutoring FAQ — Los Angeles | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Common questions about private tutoring in Los Angeles — cost, math tutoring, SAT prep, ADHD support, in-home and online sessions, and how to get started with HUMBLE Learning Co."
        />
        <meta
          property="og:title"
          content="Private Tutoring FAQ — Los Angeles | HUMBLE Learning Co."
        />
        <meta
          property="og:description"
          content="Common questions about private tutoring in Los Angeles — cost, math tutoring, SAT prep, ADHD support, in-home and online sessions, and how to get started with HUMBLE Learning Co."
        />
        <link rel="canonical" href={`${site.url}/faq`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── Main split section ── */}
      <section className="container py-14 md:py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-24">

          {/* ── LEFT: sticky context panel ── */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">

            {/* Warm radial glow — purely decorative */}
            <div
              className="pointer-events-none absolute -top-16 -left-12 -z-10 h-80 w-80 rounded-full bg-accent/8 blur-[72px]"
              aria-hidden
            />

            <div className="space-y-7">
              {/* Eyebrow */}
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent font-semibold">
                Common Questions · Los Angeles
              </p>

              {/* H1 */}
              <div className="space-y-6">
                <h1 className="font-serif text-[1.85rem] font-semibold leading-[1.18] text-primary text-balance max-w-[26rem] sm:text-[2.05rem] lg:text-[2.2rem]">
                  Private Tutoring in Los&nbsp;Angeles — Everything Parents Want to Know Before Starting
                </h1>

                {/* Supporting copy — keyword-rich, narrow for readability */}
                <p className="text-[0.875rem] leading-[1.78] text-foreground/60 text-pretty max-w-[36ch] tracking-[0.01em]">
                  HUMBLE Learning Co. provides personalized private tutoring in
                  Los Angeles for students needing support in math, science,
                  SAT/ACT prep, study skills, ADHD-focused learning strategies,
                  homework help, and college preparation. We work with students
                  across{" "}
                  <Link
                    to="/encino"
                    className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    Encino
                  </Link>
                  ,{" "}
                  <Link
                    to="/sherman-oaks"
                    className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    Sherman Oaks
                  </Link>
                  ,{" "}
                  <Link
                    to="/beverly-hills"
                    className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    Beverly Hills
                  </Link>
                  ,{" "}
                  <Link
                    to="/studio-city"
                    className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    Studio City
                  </Link>
                  ,{" "}
                  <Link
                    to="/santa-monica"
                    className="text-accent underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    Santa Monica
                  </Link>
                  , and online throughout California.
                </p>
              </div>

              {/* Trust indicators */}
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-2xl border border-border/55 bg-card/80 px-4 py-3 shadow-[0_1px_4px_hsl(var(--primary)/0.04)] text-[0.78rem] font-semibold text-primary tracking-[0.01em]"
                  >
                    <CheckCircle2 className="size-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Testimonials */}
              <div className="space-y-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="rounded-2xl border border-border/45 bg-secondary/45 px-5 py-4"
                  >
                    {/* Gold stars */}
                    <div className="flex gap-[3px] mb-2.5" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="size-2.5 fill-accent"
                          viewBox="0 0 20 20"
                          aria-hidden
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-[0.8rem] leading-[1.7] text-foreground/72 italic text-pretty">
                      "{t.body}"
                    </blockquote>
                    <figcaption className="mt-2 text-[0.68rem] font-bold text-accent uppercase tracking-[0.18em]">
                      — {t.name}, Los Angeles
                    </figcaption>
                  </figure>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-2.5">
                <Button
                  asChild
                  size="lg"
                  variant="accent"
                  className="group w-full sm:w-auto lg:w-full xl:w-auto transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_hsl(var(--accent)/0.35)]"
                >
                  <Link to="/contact">
                    Book a Free Intro Call
                    <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-[0.72rem] text-muted-foreground pl-1 tracking-[0.01em]">
                  Most families hear back within a few hours.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div className="space-y-3.5">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="container pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          {/* Subtle warm glow inside CTA */}
          <div
            className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-[60px]"
            aria-hidden
          />
          <div className="space-y-2.5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent font-semibold">
              No commitment required
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-[1.12] text-balance">
              Still deciding if tutoring is the right fit?
            </h2>
            <p className="text-primary-foreground/72 max-w-md text-pretty leading-relaxed text-[0.9rem] tracking-[0.01em]">
              We'll walk through your student's goals, challenges, and learning
              style — no pressure.
            </p>
          </div>

          <div className="space-y-2.5 shrink-0">
            <Button
              asChild
              size="lg"
              variant="accent"
              className="group w-full transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_hsl(var(--accent)/0.40)]"
            >
              <Link to="/contact">
                Book a Free Intro Call
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Button>
            <p className="text-[0.7rem] text-primary-foreground/45 text-center tracking-[0.01em]">
              Most families hear back within a few hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
