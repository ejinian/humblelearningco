import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Service area",
    value: site.location + " · in-person & online",
    href: undefined as string | undefined,
  },
];

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Book a Free Intro Call | HUMBLE Learning Co. — LA Tutor</title>
        <meta
          name="description"
          content="Schedule your free 15-minute intro call with HUMBLE Learning Co. Tell us about your student — we reply within a day. In-person across LA or online."
        />
        <meta property="og:title" content="Book a Free Intro Call | HUMBLE Learning Co." />
        <meta
          property="og:description"
          content="Schedule your free 15-minute intro call with HUMBLE Learning Co. Tell us about your student — we reply within a day. In-person across LA or online."
        />
        <link rel="canonical" href={`${site.url}/contact`} />
      </Helmet>

      <section className="container py-12 md:py-20">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="Get in touch"
            title="Tell us about your student."
            description="What they're working on. What's been hard. That's enough to start."
          />
        </Reveal>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {channels.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 size-9 rounded-md bg-accent/15 ring-1 ring-accent/30 grid place-items-center text-accent shrink-0">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">
                        {c.label}
                      </div>
                      <div className="text-base text-primary font-medium mt-0.5">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="block group rounded-lg p-3 -m-3 hover:bg-secondary transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="p-3 -m-3">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-sm text-foreground/85 leading-relaxed text-pretty">
              <p className="font-medium text-primary mb-1">
                The first call is free.
              </p>
              <p className="text-muted-foreground">
                Fifteen minutes, no obligation. If we're not the right fit,
                we'll point you to someone who is.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
