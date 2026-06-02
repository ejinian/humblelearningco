import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What happens during the free intro call?",
    a: "We ask about your student's situation — what subjects they're struggling with, how they learn, and what kind of support would help most. From there, we build a plan and schedule the first session if it feels like the right fit.",
  },
  {
    q: "How much does tutoring cost?",
    a: "Rates depend on the subject, session frequency, and level of support needed. We talk through pricing on the intro call once we understand your situation — no hidden fees, no enrollment costs, no surprises.",
  },
  {
    q: "What subjects do you tutor?",
    a: "We provide support across virtually every subject students are likely to encounter, including math, reading and writing, science, history, SAT/ACT/PSAT prep, academic coaching, executive function support, and college-level coursework.\n\nOne of the biggest advantages for families is continuity. Rather than finding a new tutor every time coursework becomes more advanced, students can continue working with us as they progress through school. From elementary foundations to honors, AP, and college-level classes, we grow with our students and provide consistent support throughout their educational journey.",
  },
  {
    q: "Do you offer math tutoring?",
    a: "Yes — it's one of our most requested subjects in Los Angeles. We work with students from early arithmetic through AP Calculus and college-level math, rebuilding the underlying concept first so the skills genuinely stick.",
  },
  {
    q: "Do you help with SAT and ACT prep?",
    a: "Yes. Tiana scored a perfect 1600 on the SAT, so prep is grounded in real test experience — not a third-party curriculum. Every plan covers content mastery, timing strategy, and the specific traps each section sets. We also offer PSAT prep.",
  },
  {
    q: "Do you work with students who have ADHD or anxiety?",
    a: "Yes — and this is central to how we teach, not an afterthought. Sessions are designed with neurodivergent learners in mind: shorter focused intervals, frequent check-ins, flexible pacing, and executive function coaching woven in alongside the academic content.",
  },
  {
    q: "Do you offer online tutoring?",
    a: "Yes. Online sessions are available for students throughout California — the same one-on-one experience as in-person, using a simple, distraction-free video format.",
  },
  {
    q: "What areas do you serve?",
    a: "In-person sessions are available across Los Angeles — including Encino, Sherman Oaks, Studio City, Beverly Hills, Santa Monica, Tarzana, Calabasas, Woodland Hills, Brentwood, Pasadena, Glendale, Burbank, and surrounding neighborhoods. Online tutoring extends throughout California.",
  },
  {
    q: "Is there always one consistent tutor?",
    a: "Yes. Every student works directly with Tiana — the founder and sole tutor at HUMBLE Learning Co. No matching algorithm, no rotating pool, no substitutions. You always know exactly who is working with your student.",
  },
  {
    q: "What makes this different from a tutoring center?",
    a: "One consistent tutor who knows your student. A fully custom plan — not a program. Sessions built around how your student actually learns, not a fixed curriculum. And a clear goal of independence, not indefinite reliance on tutoring.",
  },
  {
    q: "Do you offer in-home tutoring?",
    a: "Yes. In-home sessions are available across the San Fernando Valley, Westside, South Bay, and the Pasadena corridor. Your student works in a familiar environment, and your family doesn't have to rearrange schedules around a commute.",
  },
  {
    q: "How often should we meet?",
    a: "Once a week is common for steady, sustainable progress. Twice a week or more works better for significant catch-up, intensive test prep, or a particularly demanding semester. We recommend a schedule after learning about your student — and adjust as they improve.",
  },
  {
    q: "Can tutoring improve confidence, not just grades?",
    a: "Yes — and for most students, confidence improves before the grade does. When a student stops dreading a subject and starts showing up ready to engage, grades tend to follow. Families often mention confidence as the first change they notice.",
  },
  {
    q: "What grade levels do you work with?",
    a: "All of them — kindergarten through elementary, middle school, high school (including AP, honors, and IB courses), college, and adult learners. Every plan is built around that individual student's level and needs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

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
        "rounded-3xl border bg-card/97 backdrop-blur-[2px] overflow-hidden",
        "transition-all duration-300 ease-out",
        isOpen
          ? ["border-accent/35", "shadow-[0_2px_8px_hsl(var(--primary)/0.05),0_12px_40px_hsl(var(--accent)/0.10)]"]
          : [
              "border-border/55",
              "shadow-[0_1px_4px_hsl(var(--primary)/0.05)]",
              "hover:-translate-y-0.5",
              "hover:border-border/80",
              "hover:shadow-[0_4px_20px_hsl(var(--primary)/0.07)]",
            ]
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.q.slice(0, 24)}`}
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
        <span
          className={cn(
            "size-7 shrink-0 rounded-full grid place-items-center ring-1 transition-all duration-300 ease-out",
            isOpen
              ? "bg-accent/15 text-accent ring-accent/30 rotate-180"
              : "bg-secondary text-primary/50 ring-border/50"
          )}
          aria-hidden
        >
          <ChevronDown className="size-3.5" />
        </span>
      </button>

      <div
        id={`faq-${item.q.slice(0, 24)}`}
        className={cn(
          "grid transition-[grid-template-rows] duration-[400ms] ease-out",
          isOpen ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-7 pt-0">
            <div className="h-px w-full bg-gradient-to-r from-accent/25 via-border/50 to-transparent mb-5" />
            <div className="space-y-3">
              {item.a.split("\n\n").map((para, i) => (
                <p key={i} className="text-[0.865rem] leading-[1.75] text-foreground/68 text-pretty tracking-[0.01em]">
                  {para}
                </p>
              ))}
            </div>
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
          content="Common questions about private tutoring in Los Angeles — cost, subjects, SAT prep, ADHD support, in-home and online sessions, and how to get started."
        />
        <meta property="og:title" content="Private Tutoring FAQ — Los Angeles | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Common questions about private tutoring in Los Angeles — cost, subjects, SAT prep, ADHD support, in-home and online sessions, and how to get started."
        />
        <link rel="canonical" href={`${site.url}/faq`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Header — centered */}
      <section className="container pt-16 pb-12 md:pt-20 md:pb-14 text-center">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-5 flex items-center justify-center gap-2.5 text-sm">
          <StarRating value={site.rating.stars} size={18} />
          <span className="font-semibold text-primary">{site.rating.stars.toFixed(1)} Rating</span>
          <span className="text-muted-foreground/50 select-none">•</span>
          <span className="text-muted-foreground font-medium">{site.rating.reviewCount}+ Reviews</span>
        </div>
      </section>

      {/* FAQ accordion — centered */}
      <section className="container pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA — centered */}
      <section className="container pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
            Still Have Questions?
          </h2>
          <Button asChild size="lg" variant="accent">
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
