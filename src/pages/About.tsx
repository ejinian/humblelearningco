import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Patience first.",
    body: "Almost every review uses the word 'patient.' That's the baseline — students learn faster when they don't feel rushed or judged.",
  },
  {
    icon: Target,
    title: "Plans, not generic worksheets.",
    body: "Every student gets a small, custom plan. We adjust it as we go — including for ADHD, executive-function challenges, and gaps from earlier years.",
  },
  {
    icon: Lightbulb,
    title: "Understanding, then practice.",
    body: "We rebuild the underlying ideas first so the practice actually sticks. The grade is a side effect of that, not the goal.",
  },
];

export default function About() {
  const aboutPhoto = photos[1] ?? photos[0];

  return (
    <div>
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              as="h1"
              eyebrow="About"
              title={`Hi, I'm ${site.founder}.`}
              description="I started HUMBLE Learning Co. because the way students are taught in school doesn't always match the way they actually learn — and I wanted to change that, one session at a time."
            />

            <div className="prose-content mt-8 space-y-5 text-foreground/85 leading-relaxed text-pretty max-w-2xl">
              <p>
                Over the last few years I've worked with students from elementary
                school through college, in subjects ranging from early reading
                and arithmetic all the way to calculus, chemistry, and AP-level
                coursework. Some of my students were close to giving up; some
                were curious and wanted to push further than school was letting
                them. Most were somewhere in between.
              </p>
              <p>
                What's stayed consistent is the approach: figure out what's
                actually missing, rebuild it from there, and protect the
                student's confidence the whole way. A C becoming an A is a great
                story — the bigger one is the student who used to dread homework
                and now sits down with it on their own.
              </p>
              <p>
                Sessions are one-on-one and built around your student. We meet
                in person around {site.location.split(",")[0]}, or online if
                that's easier. I work with parents and adult learners directly
                too.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <Link to="/contact">
                  Book a free intro call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/reviews">Read what families say</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border shadow-xl shadow-primary/15">
              <img
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container py-20">
          <SectionHeading
            eyebrow="How I teach"
            title="Three things I won't compromise on."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="border-border/70">
                  <CardContent className="p-6 space-y-3">
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-center shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              The first call is free
            </p>
            <h3 className="mt-2 font-serif text-3xl md:text-4xl font-semibold leading-tight text-balance">
              Let's figure out if we're the right fit.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Tell me a bit about your student and what you're hoping to get out
              of tutoring. I'll get back to you within a day.
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
