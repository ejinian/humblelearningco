import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQGroup {
  heading: string;
  items: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    heading: "Getting started",
    items: [
      {
        q: "How do I get started?",
        a: "Book a free intro call — no commitment, no paperwork. You tell me what's going on with your student, I ask a few questions, and we figure out together whether it's a good fit. Most families get a custom plan within a day of that call.",
      },
      {
        q: "How much does tutoring cost in Los Angeles?",
        a: "Rates depend on session frequency, subject, and how much support your student needs. I discuss pricing on the intro call once I understand the situation. There are no hidden fees — what we agree on is what you pay.",
      },
      {
        q: "Is the first call really free?",
        a: "Yes, completely. No credit card, no obligation. It's just a conversation so we can both make sure it's the right fit before committing to anything.",
      },
    ],
  },
  {
    heading: "Sessions",
    items: [
      {
        q: "Are sessions in-person or online?",
        a: "Both. In-person sessions are available across Los Angeles — the San Fernando Valley, Westside, South Bay, Pasadena corridor, and surrounding areas. Online sessions are available anywhere. We figure out what works best for your schedule on the intro call.",
      },
      {
        q: "How long are sessions?",
        a: "Every session is fully customized to the student's pace, workload, and goals. Sessions can last as long as needed to ensure students feel confident, comfortable, and fully understand the material.",
      },
      {
        q: "How often should my child meet with a tutor?",
        a: "How often a student should meet with a tutor depends on their goals, coursework, learning pace, and the level of support they need. After learning about the student's needs, we'll recommend a personalized plan and schedule that best supports their success.",
      },
      {
        q: "Will my child always work with the same tutor?",
        a: "Yes. Every session is one-on-one with me, Tiana — the founder. There's no matching to a pool of tutors, no substitutions. Consistency matters for student confidence and progress.",
      },
    ],
  },
  {
    heading: "Students & subjects",
    items: [
      {
        q: "What grade levels do you work with?",
        a: "Kindergarten through college. I've worked with early readers, struggling middle schoolers, AP-track juniors, college students, and adult learners switching careers. If you're not sure whether your student fits, just ask — the answer is almost always yes.",
      },
      {
        q: "Do you tutor students with ADHD or learning differences?",
        a: "Yes. An ADHD-friendly approach is central to how I teach — not an accommodation I bolt on. That means shorter bursts of focus, more check-ins, flexible pacing, and building habits alongside content. Several families specifically sought us out for this.",
      },
      {
        q: "What subjects do you cover?",
        a: "Most subjects a student is likely taking: K–12 math (through calculus), college math, reading and writing, science, history, SAT/ACT/PSAT prep, homework support, study skills, and college-level coursework. If you have a specific subject in mind, ask and I'll tell you honestly whether I'm the right fit.",
      },
      {
        q: "Do you offer SAT or ACT prep?",
        a: "Yes. I scored a 1600 (perfect) on the SAT, so I know the test from the inside out — not just the content but the timing, the traps, and the strategy. Prep is tailored to the student's baseline score, target school, and how much time they have before test day.",
      },
      {
        q: "My child is already doing well — can you help them go further?",
        a: "Absolutely. Enrichment and acceleration are a regular part of what we do. Some students come in at grade level and want to get ahead; others are top performers who want to challenge themselves beyond what class offers. Both are welcome.",
      },
    ],
  },
  {
    heading: "Results & approach",
    items: [
      {
        q: "How quickly will I see results?",
        a: "Most students and parents notice a shift in confidence within the first two or three sessions — the student stops dreading the subject. Grade improvements typically follow within four to six weeks, depending on how far behind they started. I don't promise overnight fixes, but I do promise a plan that keeps moving forward.",
      },
      {
        q: "What makes HUMBLE Learning Co. different from a tutoring marketplace?",
        a: "You get one consistent tutor — me — not whoever happens to be available. I build a custom plan around your student instead of working through a generic curriculum. And the goal is always independence: I'm trying to make myself unnecessary, not keep a student on a subscription forever.",
      },
      {
        q: "Do you work with parents and adult learners too?",
        a: "Yes. Parents who want to better support their child's learning are welcome. Adults returning to school, switching careers, or brushing up on skills they haven't used in years — also welcome. The same patient, no-judgment approach applies.",
      },
    ],
  },
];

// Build FAQ JSON-LD for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <div>
      <Helmet>
        <title>Tutoring FAQ — Los Angeles | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="Answers to the most common questions about tutoring in Los Angeles — cost, subjects, ADHD support, in-person vs online, and how to get started with HUMBLE Learning Co."
        />
        <meta property="og:title" content="Tutoring FAQ — Los Angeles | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Answers to the most common questions about tutoring in Los Angeles — cost, subjects, ADHD support, in-person vs online, and how to get started with HUMBLE Learning Co."
        />
        <link rel="canonical" href={`${site.url}/faq`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <SectionHeading
            as="h1"
            eyebrow="Common questions"
            title="Everything families ask before getting started."
            description="If something isn't covered here, just reach out — the first call is free and there's no pressure."
          />
        </div>

        {/* FAQ groups */}
        <div className="mt-14 space-y-14 max-w-3xl">
          {faqGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-6">
                {group.heading}
              </p>
              <div className="space-y-0 divide-y divide-border/60 rounded-xl border border-border/70 bg-card shadow-sm overflow-hidden">
                {group.items.map((item) => (
                  <div key={item.q} className="px-6 py-5">
                    <h2 className="font-serif text-lg font-semibold text-primary leading-snug">
                      {item.q}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-pretty">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Still have questions?
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              The fastest answer is a free call.
            </h3>
            <p className="text-primary-foreground/80 max-w-xl text-pretty leading-relaxed">
              Tell me about your student. I'll reply within a day.
            </p>
          </div>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Book a free intro call
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
