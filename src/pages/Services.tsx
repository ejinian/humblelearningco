import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { subjectLinks } from "@/lib/subjects";
import { site } from "@/lib/site";

const formats = [
  "In-person or online",
  "One-on-one sessions — always",
  "Flexible scheduling around your family",
  "Progress updates after every session",
];

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Tutoring Services — Math, Reading, Science, Test Prep | HUMBLE Learning Co.</title>
        <meta
          name="description"
          content="One tutor, every subject. K–12 math, reading, writing, science, SAT/ACT/PSAT prep, homework help, study skills, and college courses in Los Angeles."
        />
        <meta property="og:title" content="Tutoring Services — Math, Reading, Science, Test Prep | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="One tutor, every subject. K–12 math, reading, writing, science, SAT/ACT/PSAT prep, homework help, study skills, and college courses in Los Angeles."
        />
        <link rel="canonical" href={`${site.url}/services`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What subjects does HUMBLE Learning Co. offer tutoring for?",
              acceptedAnswer: { "@type": "Answer", text: "We cover math (elementary through AP Calculus and college level), reading and writing, science (Biology, Chemistry, Physics, and AP courses), history, SAT/ACT/PSAT prep, AP exam prep, homework help, academic coaching, executive function support, and college essay writing. One tutor covers all of it — families don't need to find a different person for each subject." }
            },
            {
              "@type": "Question",
              name: "Do you offer in-person and online tutoring sessions?",
              acceptedAnswer: { "@type": "Answer", text: "Yes — both. In-person sessions are available across Los Angeles, including in-home visits throughout the San Fernando Valley, Westside, South Bay, and Pasadena corridor. Online sessions are available for students throughout California and run the same way as in-person." }
            },
            {
              "@type": "Question",
              name: "Do you work with students who have ADHD?",
              acceptedAnswer: { "@type": "Answer", text: "Yes — and it's central to how sessions are designed, not an afterthought. Sessions are structured for neurodivergent learners: shorter focused intervals, frequent check-ins, and executive function coaching woven in alongside the academic content. Organization, task initiation, and time management are taught as skills, not just advised." }
            },
            {
              "@type": "Question",
              name: "What grade levels do you tutor?",
              acceptedAnswer: { "@type": "Answer", text: "All grade levels — kindergarten through elementary, middle school, high school (including honors, AP, and IB), college, and adult learners. One of the biggest advantages for families is continuity: students don't need to find a new tutor as coursework gets harder. We grow with students over time." }
            },
          ]
        })}</script>
      </Helmet>

      <section className="container py-16 md:py-20">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="What we help with"
            title="Personalized Tutoring For Every Student."
          />
          <p className="mt-4 text-sm font-medium text-muted-foreground tracking-wide">
            Math &nbsp;·&nbsp; Reading &nbsp;·&nbsp; Writing &nbsp;·&nbsp; Science &nbsp;·&nbsp; Test Prep &nbsp;·&nbsp; Study Skills &nbsp;·&nbsp; Technology
          </p>
        </Reveal>
      </section>

      <section className="container pb-20">
        <ServiceGrid detailed />

        <Reveal className="mt-12 pt-10 border-t border-border/50">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
            In-depth subject guides
          </p>
          <div className="flex flex-wrap gap-3">
            {subjectLinks.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-primary hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-150"
              >
                {s.label}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Flexibility"
              title="Learning That Works Around Your Life."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-3">
              {formats.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <span
                    className="mt-1 size-5 grid place-items-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/30 shrink-0"
                    aria-hidden
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-24 text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="We'll help you figure it out."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="accent">
              <Link to="/contact">
                Book a free intro call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
