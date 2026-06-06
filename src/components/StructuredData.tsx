import { Helmet } from "react-helmet-async";
import { site } from "@/lib/site";

export function StructuredData() {
  const personSchema = {
    "@type": "Person",
    "@id": `${site.url}/#tiana`,
    name: "Tiana",
    jobTitle: "Founder & Private Tutor",
    worksFor: { "@id": `${site.url}/#business` },
    url: `${site.url}/about`,
    knowsAbout: [
      "Mathematics",
      "SAT Preparation",
      "ACT Preparation",
      "Reading Comprehension",
      "Essay Writing",
      "College Essay Tutoring",
      "ADHD Academic Support",
      "Executive Function Coaching",
      "AP Calculus",
      "AP Statistics",
      "Chemistry",
      "Biology",
      "Physics",
      "Academic Coaching",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      "name": "Perfect 1600 SAT Score",
    },
    sameAs: [site.social.instagram].filter(Boolean),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        alternateName: "HUMBLE Tutoring",
        url: site.url,
        telephone: site.contact.phone,
        email: site.contact.email,
        image: `${site.url}/photos/tutoring-01.png`,
        description:
          "One-on-one tutoring for K–12 and college students in Los Angeles. Math, reading, writing, science, SAT/ACT prep, study skills, and ADHD-friendly support.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
        areaServed: [
          "Los Angeles",
          "Encino",
          "Tarzana",
          "Sherman Oaks",
          "Studio City",
          "Valley Village",
          "Beverly Hills",
          "Bel Air",
          "Woodland Hills",
          "Calabasas",
        ].map((name) => ({ "@type": "City", name })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.stars.toFixed(1),
          reviewCount: site.rating.reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
        founder: { "@id": `${site.url}/#tiana` },
        employee: { "@id": `${site.url}/#tiana` },
        sameAs: [
          site.social.instagram,
          site.social.google,
        ].filter(Boolean),
        serviceType: [
          "Math tutoring",
          "Reading tutoring",
          "Writing tutoring",
          "Science tutoring",
          "SAT prep",
          "ACT prep",
          "PSAT prep",
          "Homework help",
          "Study skills coaching",
          "ADHD tutoring",
          "College coursework tutoring",
        ],
      },
      personSchema,
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
