import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Home as HomeIcon,
  Laptop,
  ListChecks,
  Mail,
  MessagesSquare,
  ScrollText,
  Sparkles,
  School,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { featuredReviews } from "@/lib/reviews";
import { heroPhoto } from "@/lib/photos";
import { site } from "@/lib/site";
import { getCombosForNeighborhood } from "@/lib/subjectNeighborhoods";

const beverlyHillsCombos = getCombosForNeighborhood("Beverly Hills");

const pageTitle = "Tutoring in Beverly Hills, CA | HUMBLE Learning Co.";
const metaDescription =
  "Beverly Hills tutoring, one-on-one with Tiana — math, SAT/ACT/ISEE prep, and academic coaching. In-person or online. First call is free.";
const canonicalUrl = `${site.url}/beverly-hills-tutoring`;

const localSchools = [
  "Beverly Hills High School",
  "Horace Mann Middle School",
  "Beverly Vista Middle School",
  "El Rodeo Elementary",
  "Hawthorne Elementary",
];

const subjectsAndServices: {
  title: string;
  body: string;
  icon: typeof Calculator;
  link?: { to: string; label: string };
}[] = [
  {
    title: "Elementary & Middle School",
    body: "Reading, writing, and math foundations for younger students at Horace Mann, Beverly Vista, El Rodeo, and Hawthorne — built early, before small gaps turn into bigger ones.",
    icon: School,
  },
  {
    title: "Algebra, Geometry & Algebra II",
    body: "Beverly Hills High's honors math sequence moves fast. Sessions target the specific concept a student is missing rather than re-teaching everything from the start.",
    icon: Calculator,
    link: { to: "/math-tutor-beverly-hills", label: "Math tutoring in Beverly Hills" },
  },
  {
    title: "Precalculus & Academic Math Support",
    body: "From the jump into Precalculus through AP Calculus AB/BC and AP Statistics, plus ongoing homework help and grade maintenance across a demanding course load.",
    icon: Calculator,
    link: { to: "/math-tutor-los-angeles", label: "Math tutoring across LA" },
  },
  {
    title: "SAT Preparation",
    body: "A diagnostic first, then a plan built around your student's actual score target — informed by Tiana's own perfect 1600.",
    icon: ScrollText,
    link: { to: "/sat-tutor-beverly-hills", label: "SAT tutoring in Beverly Hills" },
  },
  {
    title: "ACT Preparation",
    body: "Full coverage of all four ACT sections, with particular attention to the timing pressure that trips up students who are stronger on content than on pace.",
    icon: ClipboardCheck,
    link: { to: "/sat-prep-los-angeles", label: "SAT & ACT prep across LA" },
  },
  {
    title: "ISEE Preparation",
    body: "Verbal reasoning, quantitative reasoning, reading comprehension, and math — prepared for independent school admissions at whatever level a student is testing into.",
    icon: GraduationCap,
  },
  {
    title: "General Test Preparation",
    body: "Classroom tests, quizzes, finals, midterms, and AP exams — the everyday assessments that make up most of a student's grade.",
    icon: ClipboardCheck,
  },
  {
    title: "Executive-Function & Organizational Support",
    body: "Organization, time management, and study skills coaching for students who understand the material but struggle to manage the workload around it.",
    icon: ListChecks,
    link: { to: "/adhd-tutor-los-angeles", label: "Academic coaching & ADHD support" },
  },
  {
    title: "College Admissions Support",
    body: "Common App personal statements, UC Personal Insight Questions, and school-specific supplements — developed in the student's own voice.",
    icon: GraduationCap,
    link: { to: "/college-essay-tutoring-los-angeles", label: "College essay tutoring" },
  },
];

const faqs = [
  {
    q: "Do you offer private tutoring in Beverly Hills?",
    a: "Yes. HUMBLE Learning Co. works with Beverly Hills families in-person and online — one-on-one sessions built around your student's actual course load, not a fixed curriculum. We don't operate an office or storefront in Beverly Hills; sessions happen in your home or over video call, wherever works best for your family.",
  },
  {
    q: "What subjects do you tutor?",
    a: "Math from elementary through AP Calculus and AP Statistics, SAT and ACT prep, ISEE preparation, general test prep for classroom exams and finals, executive-function and organizational coaching, and college admissions support including essays. One tutor covers the full range, so you're not coordinating multiple people for multiple subjects.",
  },
  {
    q: "Do you provide SAT and ACT tutoring?",
    a: "Yes. Every plan starts with a diagnostic to find out where your student actually stands, then targets the specific question types and timing issues costing the most points. Tiana scored a perfect 1600 on the SAT and builds sessions around what real test experience shows actually moves a score.",
  },
  {
    q: "Do you provide ISEE preparation?",
    a: "Yes. ISEE prep covers verbal reasoning, quantitative reasoning, reading comprehension, and math, tailored to the level your student is testing into for independent school admissions. Sessions focus on the specific sections where a student is losing points rather than reviewing everything equally.",
  },
  {
    q: "Do you offer in-person tutoring?",
    a: "Yes, in-home sessions are available throughout Beverly Hills and the surrounding Westside. Your student works in a familiar environment on a schedule that fits your family — no drop-off, no waiting room.",
  },
  {
    q: "Do you offer online tutoring?",
    a: "Yes. Online sessions use a shared whiteboard so your student can work through problems in real time, exactly as they would in person. Many Beverly Hills families mix formats — in-home during the week, online when travel schedules or activities make that easier.",
  },
  {
    q: "How do I get started?",
    a: "The first step is a free intro call — a short, no-commitment conversation about where your student is and what kind of support would actually help. From there, Tiana builds a plan around your student's specific courses, goals, and schedule.",
  },
];

const formats = [
  {
    icon: HomeIcon,
    title: "In-person, at your home",
    body: "Tiana travels to Beverly Hills and nearby Westside homes for in-person sessions. No commute for your student, no shared classroom, no waiting room — just focused, one-on-one time.",
  },
  {
    icon: Laptop,
    title: "Online, anywhere in California",
    body: "Video sessions with a shared whiteboard so your student can show their work in real time. A good option for busy schedules, travel, or families who simply prefer the flexibility.",
  },
];

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Free intro call",
    body: "Tell us what's going on. We listen, ask questions, and get a feel for where your student stands.",
  },
  {
    icon: Sparkles,
    title: "2. A plan that fits",
    body: "A custom plan — subjects, pace, and how often we meet. No templates, no fluff.",
  },
  {
    icon: Calendar,
    title: "3. Sessions begin",
    body: "We close the gaps holding your student back, then build forward — adjusting as they grow.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      description:
        "One-on-one tutoring for K–12 and college students in Beverly Hills and the surrounding Westside. Math, SAT/ACT/ISEE prep, and academic coaching — no Beverly Hills office; in-home or online.",
      url: canonicalUrl,
      telephone: site.contact.phone,
      email: site.contact.email,
      priceRange: "$$",
      areaServed: ["Beverly Hills", "Bel Air", "Holmby Hills", "West Hollywood", "Westwood", "Brentwood"].map(
        (name) => ({ "@type": "City", name, addressRegion: "CA", addressCountry: "US" }),
      ),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(site.rating.stars),
        reviewCount: String(site.rating.reviewCount),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Beverly Hills Tutoring", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function BeverlyHillsTutoring() {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-paper">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          aria-hidden
        />
        <div
          className="absolute right-0 top-10 hidden h-80 w-80 rounded-full bg-accent/10 blur-3xl lg:block"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 hidden h-64 w-64 rounded-full bg-primary/5 blur-3xl lg:block"
          aria-hidden
        />

        <div className="container grid min-h-[calc(100svh-5rem)] gap-11 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)] lg:items-center lg:gap-14 lg:py-20">
          <div className="max-w-[44rem] animate-fade-up text-center lg:text-left">
            <p className="mx-auto text-xs uppercase tracking-[0.22em] text-accent font-medium lg:mx-0">
              Beverly Hills · Westside Los Angeles · In-person &amp; online
            </p>

            <h1 className="mt-3 font-serif text-[2.6rem] font-black leading-[1.04] text-primary text-balance sm:text-5xl lg:text-[4.1rem] xl:text-[4.4rem]">
              Private Tutoring in{" "}
              <span className="text-accent">Beverly Hills, CA.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-foreground/80 text-pretty md:text-xl lg:mx-0">
              One-on-one academic support for Beverly Hills students, from
              elementary math to AP Calculus, SAT and ISEE prep, and college
              essays — with one tutor who stays with your student the whole way.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 text-pretty lg:mx-0">
              Beverly Hills schools set a high bar, and the pressure to keep
              up starts early. HUMBLE Learning Co. works one-on-one with
              students to build real understanding — not just a better grade
              on the next test, but the kind of confidence that holds up under
              pressure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="accent"
                className="group h-[3.35rem] rounded-md px-7 text-base font-semibold shadow-[0_16px_34px_hsl(var(--accent)/0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_hsl(var(--accent)/0.32)]"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[3.35rem] rounded-md border-primary/25 bg-card/55 px-7 text-base font-semibold shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <a href={`mailto:${site.contact.email}`}>
                  <Mail className="size-4" />
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mx-0">
              {[
                "Perfect 1600 SAT Score",
                `${site.rating.reviewCount}+ Five-Star Reviews`,
                "Math, Test Prep & ISEE",
                "Serving Beverly Hills & the Westside",
              ].map((indicator) => (
                <div
                  key={indicator}
                  className="group flex min-h-12 items-center gap-3 rounded-md border border-border/70 bg-card/60 px-3.5 py-3 text-left text-sm font-semibold text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:bg-card/90 hover:shadow-md"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative mx-auto w-full max-w-[31rem] animate-fade-up [animation-delay:120ms] lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-3 rounded-[1.65rem] border border-accent/20 bg-card/40 shadow-[0_26px_80px_hsl(var(--primary)/0.13)] backdrop-blur-sm sm:-inset-4"
              aria-hidden
            />
            <div className="absolute -left-5 top-10 hidden h-28 w-1 rounded-full bg-accent/70 lg:block" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-secondary shadow-[0_28px_70px_hsl(var(--primary)/0.22)] ring-1 ring-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_84px_hsl(var(--primary)/0.25)] sm:rounded-[1.45rem]">
              <img
                src={heroPhoto.src}
                alt="Tiana, founder of HUMBLE Learning Co., tutoring a student one-on-one — private tutoring for Beverly Hills families."
                className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[52%_44%] transition-transform duration-700 hover:scale-[1.07]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/32 via-primary/0 to-accent/8" />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-border/80 bg-card/95 p-4 shadow-xl shadow-primary/15 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 sm:left-8 sm:right-auto sm:min-w-64">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {site.rating.stars.toFixed(1)}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-primary">
                    Trusted by Beverly Hills families
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Personalized support from {site.founder}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local schools signal */}
      <section className="border-y border-border/50 bg-secondary/40">
        <div className="container py-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-medium shrink-0">
                <School className="size-3.5" />
                Local schools we work with
              </div>
              {localSchools.map((school) => (
                <span key={school} className="text-sm font-medium text-primary/75">
                  {school}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="container pt-8 pb-0">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-primary font-medium">Beverly Hills Tutoring</span>
          </nav>
        </Reveal>
      </section>

      {/* Intro — Private Tutoring in Beverly Hills */}
      <section className="container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Private tutoring, built around your student"
                title="Support for the pressure Beverly Hills students actually face."
              />
            </Reveal>
            <Reveal delay={80} className="mt-5 space-y-4 max-w-2xl">
              <p className="text-base leading-relaxed text-foreground/80 text-pretty">
                HUMBLE Learning Co. provides personalized, one-on-one tutoring
                for students in Beverly Hills and the surrounding Westside —
                elementary through college. Every session is built around one
                student: their current level, the gaps in their understanding,
                the schoolwork in front of them right now, and the goals they
                and their family actually care about.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 text-pretty">
                Beverly Hills families are used to high expectations, and the
                schools here match that intensity. What tends to help most
                isn't more hours of work — it's the right tutor working on the
                right thing, consistently, with someone who remembers what
                happened in last week's session and builds on it.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 text-pretty">
                Every student works directly with Tiana, the founder — no
                rotating staff, no substitutes, and no hand-offs between
                subjects.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Card className="border-border/70 shadow-sm">
              <CardContent className="p-7 space-y-5">
                <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  At a glance
                </p>
                <ul className="space-y-3">
                  {[
                    "One-on-one sessions — never group classes",
                    "In-home throughout Beverly Hills & the Westside, or online",
                    "Elementary through college coursework",
                    "Test prep: SAT, ACT, ISEE, PSAT & AP exams",
                    "No storefront — Tiana comes to you, or meets online",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/contact">
                    Book a free intro call
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Subjects & Services */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Subjects & services"
              title="Everything a Beverly Hills student is taking, in one place."
              description="From elementary foundations to college admissions — the full range of academic support, with one tutor covering all of it."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjectsAndServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <Card className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_14px_38px_hsl(var(--primary)/0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <CardContent className="p-6 flex flex-col gap-3 h-full">
                      <div className="size-11 rounded-md bg-accent/15 text-accent grid place-items-center ring-1 ring-accent/30 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {item.body}
                      </p>
                      {item.link && (
                        <div className="mt-auto pt-2">
                          <Link
                            to={item.link.to}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                          >
                            {item.link.label}
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Test Prep in Beverly Hills */}
      <section className="container py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Test prep in Beverly Hills"
              title="SAT, ACT & ISEE prep built around a real diagnostic."
            />
            <p className="mt-5 text-base leading-relaxed text-foreground/80 text-pretty">
              Standardized tests mean different things to different Beverly
              Hills families — a competitive SAT or ACT score for a public or
              charter high school application, an ISEE score for admission to
              an independent school. Either way, prep starts with a
              diagnostic — a practice test or assessment that shows exactly
              where a student is losing points — before a single study plan
              is written.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
              From there, sessions target the specific question types,
              timing issues, and content gaps that are actually costing
              points, rather than reviewing everything evenly. Tiana scored a
              perfect 1600 on the SAT, and draws on that experience for
              timing strategy and the patterns that separate a good score
              from a great one.
            </p>
            <Button asChild variant="link" className="mt-2 px-0">
              <Link to="/sat-tutor-beverly-hills">
                Full guide to SAT tutoring in Beverly Hills
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={100} className="space-y-4">
            {[
              {
                title: "SAT & ACT",
                body: "Diagnostic first, then a plan built around your student's actual score target — informed by their college list, not a generic benchmark.",
              },
              {
                title: "ISEE",
                body: "Verbal reasoning, quantitative reasoning, reading comprehension, and math — prepared for the level a student is testing into for independent school admissions.",
              },
              {
                title: "PSAT & AP exams",
                body: "PSAT prep ahead of the October test date, plus AP exam strategy for whichever subjects a student is taking that year.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/70">
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Math Tutoring in Beverly Hills */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Math tutoring in Beverly Hills"
                title="Algebra through Precalculus — understanding first, grades follow."
              />
              <p className="mt-5 text-base leading-relaxed text-foreground/80 text-pretty">
                Math is cumulative in a way most other subjects aren't. A gap
                from Algebra shows up again in Geometry, resurfaces in
                Algebra II, and becomes a real problem by Precalculus.
                Sessions start by locating exactly where a student's
                understanding broke down — not the most recent homework
                assignment, but the actual concept everything since has been
                built on shakily.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                Beverly Hills High's honors and AP math sequence moves fast,
                and a single missed unit can compound quickly. We work with
                students at every stage — rebuilding foundations for middle
                schoolers before the gap follows them into high school, and
                closing specific gaps for students already in Precalculus or
                AP Calculus.
              </p>
              <Button asChild variant="link" className="mt-2 px-0">
                <Link to="/math-tutor-beverly-hills">
                  Full guide to math tutoring in Beverly Hills
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={100} className="grid grid-cols-2 gap-3">
              {["Algebra", "Geometry", "Algebra II", "Precalculus", "AP Calculus AB/BC", "AP Statistics"].map(
                (topic) => (
                  <div
                    key={topic}
                    className="rounded-md border border-border/70 bg-card px-4 py-3.5 text-center text-sm font-semibold text-primary shadow-sm"
                  >
                    {topic}
                  </div>
                ),
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Personalized One-on-One Tutoring */}
      <section className="container py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why one-on-one"
            title="Personalized tutoring, not a program applied to your student."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Adapted to where they are",
              body: "Group tutoring and learning centers teach to the middle of a room. One-on-one sessions start with your student's actual level — not the grade they're supposed to be at — and move from there.",
            },
            {
              title: "Built around their schoolwork",
              body: "Sessions track what your student is actually assigned that week, so tutoring reinforces the class they're in instead of running on a separate, disconnected track.",
            },
            {
              title: "Paced for the student, not the clock",
              body: "Some concepts need ten minutes. Others need three sessions. Without a room full of other students to keep pace with, time goes where your student actually needs it.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Card className="border-border/70 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_hsl(var(--primary)/0.09)] motion-reduce:transition-none">
                <CardContent className="p-7 space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About HUMBLE Learning Co. */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="About HUMBLE Learning Co."
                title="One tutor. A real track record."
              />
              <p className="mt-5 text-base leading-relaxed text-foreground/80 text-pretty">
                HUMBLE Learning Co. is a private tutoring and academic-support
                company serving students throughout Los Angeles, including
                Beverly Hills and the surrounding Westside.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                Tiana is a current UCLA student who scored a perfect 1600 on
                the SAT and holds a 4.6 weighted GPA. She has more than six
                years of private tutoring experience and has worked with over
                1,000 students across nearly every subject and grade level —
                from elementary reading to college coursework.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent">
                  <Link to="/about">
                    Meet Tiana
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/reviews">Read family reviews</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1600", label: "Perfect SAT Score" },
                  { value: "4.6", label: "Weighted GPA" },
                  { value: "6+", label: "Years Tutoring" },
                  { value: "1,000+", label: "Students Helped" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/70 bg-card p-5 text-center shadow-sm"
                  >
                    <p className="font-serif text-3xl font-semibold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-foreground/65 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beverly Hills Service Area */}
      <section className="container py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Beverly Hills service area"
            title="Where we work with Beverly Hills families."
          />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80 text-pretty">
            HUMBLE Learning Co. doesn't have a storefront or office in
            Beverly Hills — this is a mobile and online tutoring service,
            not a physical location. Tiana travels directly to Beverly
            Hills homes for in-person sessions, and works with students
            throughout Beverly Hills and nearby West Los Angeles
            communities where scheduling allows, including{" "}
            <Link to="/bel-air-tutoring" className="text-accent hover:text-accent/80 underline underline-offset-2">
              Bel Air
            </Link>
            ,{" "}
            <Link to="/holmby-hills-tutoring" className="text-accent hover:text-accent/80 underline underline-offset-2">
              Holmby Hills
            </Link>
            ,{" "}
            <Link to="/west-hollywood-tutoring" className="text-accent hover:text-accent/80 underline underline-offset-2">
              West Hollywood
            </Link>
            ,{" "}
            <Link to="/westwood-tutoring" className="text-accent hover:text-accent/80 underline underline-offset-2">
              Westwood
            </Link>
            , and{" "}
            <Link to="/brentwood-tutoring" className="text-accent hover:text-accent/80 underline underline-offset-2">
              Brentwood
            </Link>
            . Families outside easy driving distance are welcome to work with
            Tiana entirely online.
          </p>
        </Reveal>
      </section>

      {/* Online + In-Person Tutoring */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Formats"
              title="Online and in-person tutoring — whatever fits your family."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 max-w-3xl mx-auto">
            {formats.map((format, i) => {
              const Icon = format.icon;
              return (
                <Reveal key={format.title} delay={i * 100}>
                  <Card className="border-border/70 h-full">
                    <CardContent className="p-7 space-y-4">
                      <div className="size-11 rounded-md bg-primary text-primary-foreground grid place-items-center">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-primary">
                        {format.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                        {format.body}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. No pressure."
            description="Tell us where your student is stuck and we'll map out support that builds confidence, stronger habits, and real academic skills."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 130}>
                <Card className="border-border/70 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_hsl(var(--primary)/0.07)] motion-reduce:transition-none">
                  <CardContent className="p-7 space-y-4">
                    <div className="size-11 rounded-md bg-primary text-primary-foreground grid place-items-center">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {step.body}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="Reviews" title="What Students & Families Are Saying." />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.slice(0, 3).map((review, i) => (
              <Reveal key={`${review.name}-${i}`} delay={i * 80} className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/25 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Link to="/reviews">
                View All {site.rating.reviewCount}+ Reviews
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Common questions"
            title="Tutoring in Beverly Hills — FAQs"
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 70}>
              <div className="rounded-xl border border-border/70 bg-card p-6 md:p-7 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-primary leading-snug">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 text-pretty">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA + deep-dive links */}
      <section className="container pb-20 md:pb-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Ready when you are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Let's talk about your student in Beverly Hills.
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-pretty leading-relaxed">
              The first call is free. No commitment — just a conversation
              about where your student is and where they want to be.
            </p>
          </div>
          <Button asChild size="lg" variant="accent">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {beverlyHillsCombos.length > 0 && (
          <Reveal className="mt-12">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-5">
              Go deeper on a specific need
            </p>
            <div className="flex flex-wrap gap-3">
              {beverlyHillsCombos.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-primary hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-150"
                >
                  {c.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </section>
    </div>
  );
}
