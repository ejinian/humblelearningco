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
    a: "Getting started is simple. Book a free intro call — no commitment, no paperwork. Tell us what's going on with your student, we ask a few questions, and together we decide if it's the right fit. Most families across Los Angeles have a personalized plan within a day of that first conversation.",
  },
  {
    q: "How much does private tutoring cost in Los Angeles?",
    a: "Rates depend on subject, session frequency, and the level of support your student needs. We discuss pricing personally on the intro call once we understand your situation — no hidden fees, no enrollment costs. What we agree on is what you pay.",
  },
  {
    q: "What subjects do you tutor?",
    a: "Most subjects a student is likely taking: K–12 math, algebra, geometry, calculus, reading and writing, science, history, SAT/ACT/PSAT prep, homework help, study skills, executive function, and college-level coursework. If you have a specific subject in mind, just ask — the answer is almost always yes.",
  },
  {
    q: "Do you offer math tutoring in Los Angeles?",
    a: "Yes — math is one of our most requested subjects. We work with students from early arithmetic through AP Calculus and college-level math, rebuilding the concept first so the skills actually stick rather than drilling problems without real understanding.",
  },
  {
    q: "Do you help with SAT and ACT prep?",
    a: "Yes. Tiana scored a perfect 1600 on the SAT, so prep is grounded in real test experience — not just a curriculum. We work on content, timing, strategy, and the specific traps the test sets. Most students see meaningful score improvement with a structured, student-specific plan.",
  },
  {
    q: "Do you work with students who have ADHD or anxiety?",
    a: "Yes, and this is central to how we teach — not a special accommodation bolted on. ADHD-friendly strategies include shorter focus windows, more frequent check-ins, flexible pacing, and building executive function habits alongside academic content. Several families specifically chose HUMBLE Learning Co. for this approach.",
  },
  {
    q: "Do you offer online tutoring throughout California?",
    a: "Yes. Online sessions are available for students anywhere in California — the same personalized, one-on-one format as in-person. We use a simple, distraction-free setup that keeps students focused and engaged throughout the session.",
  },
  {
    q: "What areas do you serve in Los Angeles?",
    a: "In-person tutoring is available across Los Angeles, including Encino, Sherman Oaks, Studio City, Beverly Hills, Santa Monica, Tarzana, Calabasas, Woodland Hills, Brentwood, Pacific Palisades, Pasadena, and surrounding neighborhoods. Online tutoring is available throughout California.",
  },
  {
    q: "How are tutors matched with students?",
    a: "Every student works directly with Tiana — the founder and sole tutor. There's no matching algorithm, no pool of tutors, and no substitutions. You always know exactly who is working with your child, every single session.",
  },
  {
    q: "What makes HUMBLE Learning Co. different from other tutoring companies?",
    a: "A few things: one consistent tutor (not a rotating pool), a custom plan for every student, and a clear goal of independence — we're not trying to keep students on a subscription forever. The approach is patient, judgment-free, and built around how your student actually learns. The reviews say it better than we can.",
  },
  {
    q: "Do you offer in-home tutoring?",
    a: "Yes. In-home sessions are available across Los Angeles — the San Fernando Valley, Westside, South Bay, and the Pasadena corridor. We come to you, so your student is in a familiar environment and logistics stay simple for your family.",
  },
  {
    q: "How often should students meet with a tutor?",
    a: "It depends on their goals, coursework, and the level of support they need. After learning about your student, we'll recommend a schedule that makes sense — whether that's once a week for steady progress or more frequently for test prep or catching up quickly.",
  },
  {
    q: "Can tutoring help improve confidence and study habits?",
    a: "Yes — and for most students, confidence improves before the grade does. When a student stops dreading a subject, the grade tends to follow on its own. Building study habits, organization, and executive function is part of every plan, not an afterthought.",
  },
  {
    q: "Do you tutor elementary, middle school, high school, and college students?",
    a: "Yes — all grade levels. From early readers and elementary students to AP-track high schoolers, college students, and adult learners returning to school or switching careers. If you're not sure whether your student fits, just ask — we'll give you an honest answer.",
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
        "rounded-3xl border bg-card overflow-hidden transition-all duration-200",
        isOpen
          ? "border-accent/40 shadow-[0_8px_32px_hsl(var(--primary)/0.08)]"
          : "border-border/60 shadow-sm hover:border-border hover:shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3
          className={cn(
            "font-serif text-[0.975rem] font-semibold leading-snug transition-colors duration-200 pr-2 md:text-base",
            isOpen ? "text-accent" : "text-primary"
          )}
        >
          {item.q}
        </h3>
        <span
          className={cn(
            "size-7 shrink-0 rounded-full grid place-items-center transition-all duration-300 ring-1",
            isOpen
              ? "bg-accent text-accent-foreground ring-accent/40 rotate-180"
              : "bg-secondary text-primary ring-border/60"
          )}
        >
          <ChevronDown className="size-3.5" />
        </span>
      </button>

      {/* Grid-rows animation — smooth height transition without JS measurement */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-1">
            <div className="h-px w-full bg-border/40 mb-4" />
            <p className="text-sm leading-relaxed text-foreground/70 text-pretty">
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
        <meta property="og:title" content="Private Tutoring FAQ — Los Angeles | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Common questions about private tutoring in Los Angeles — cost, math tutoring, SAT prep, ADHD support, in-home and online sessions, and how to get started with HUMBLE Learning Co."
        />
        <link rel="canonical" href={`${site.url}/faq`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ── Split hero ── */}
      <section className="container py-14 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16 xl:gap-20">

          {/* LEFT — sticky context panel */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-7">

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                Common Questions · Los Angeles
              </p>
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] text-primary text-balance md:text-[2.1rem] lg:text-[2.4rem]">
                Private Tutoring in Los Angeles — Everything Parents Want to Know Before Starting
              </h1>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-foreground/65 text-pretty">
                HUMBLE Learning Co. provides personalized private tutoring in Los
                Angeles for students needing support in math, science, SAT/ACT
                prep, study skills, ADHD-focused learning strategies, homework
                help, and college preparation. We work with students across{" "}
                <Link to="/encino" className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity">Encino</Link>,{" "}
                <Link to="/sherman-oaks" className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity">Sherman Oaks</Link>,{" "}
                <Link to="/beverly-hills" className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity">Beverly Hills</Link>,{" "}
                <Link to="/studio-city" className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity">Studio City</Link>,{" "}
                <Link to="/santa-monica" className="text-accent underline underline-offset-2 hover:opacity-80 transition-opacity">Santa Monica</Link>, and online throughout California.
              </p>
            </div>

            {/* Trust indicators */}
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm text-[0.8rem] font-semibold text-primary"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Testimonials */}
            <div className="space-y-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-border/50 bg-secondary/50 px-5 py-4"
                >
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="size-3 fill-accent text-accent" viewBox="0 0 20 20" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-[0.8rem] leading-relaxed text-foreground/75 italic text-pretty">
                    "{t.body}"
                  </blockquote>
                  <figcaption className="mt-2 text-[0.7rem] font-semibold text-accent uppercase tracking-[0.16em]">
                    — {t.name}, Los Angeles
                  </figcaption>
                </figure>
              ))}
            </div>

            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto lg:w-full xl:w-auto">
              <Link to="/contact">
                Book a Free Intro Call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* RIGHT — accordion */}
          <div className="space-y-3">
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
      <section className="container pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              No commitment required
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Still deciding if tutoring is the right fit?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-pretty leading-relaxed">
              We'll walk through your student's goals, challenges, and learning
              style — no pressure.
            </p>
          </div>
          <Button asChild size="lg" variant="accent" className="shrink-0">
            <Link to="/contact">
              Book a Free Intro Call
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
