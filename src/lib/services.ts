import {
  BookOpen,
  Calculator,
  FlaskConical,
  ListChecks,
  Laptop,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  icon: LucideIcon;
  topics: string[];
  /** Subject landing page slug — defined for services that have a dedicated page. */
  subjectSlug?: string;
}

/**
 * The full service catalogue. Ordered roughly by what parents search for first.
 * The brand voice is "well-rounded and attentive" — never "super tutor".
 */
export const services: Service[] = [
  {
    slug: "math",
    title: "Math",
    blurb: "Every level, every grade — taught the way it finally clicks.",
    detail: "",
    icon: Calculator,
    subjectSlug: "math-tutor-los-angeles",
    topics: [
      "Elementary Math",
      "Pre-Algebra",
      "Algebra",
      "Geometry",
      "Pre-Calculus",
      "Calculus",
      "Honors Math",
      "AP Calculus",
      "AP Statistics",
      "College Math",
    ],
  },
  {
    slug: "reading-writing",
    title: "Reading & Writing",
    blurb: "Build confidence in reading, writing, and communication.",
    detail: "",
    icon: BookOpen,
    subjectSlug: "reading-tutor-los-angeles",
    topics: [
      "Phonics",
      "Reading Comprehension",
      "Grammar",
      "Essay Writing",
      "Honors English",
      "AP Language",
      "AP Literature",
      "College Writing",
    ],
  },
  {
    slug: "science",
    title: "Science",
    blurb: "Understand concepts instead of memorizing them.",
    detail: "",
    icon: FlaskConical,
    topics: [
      "General Science",
      "Biology",
      "Chemistry",
      "Physics",
      "Honors Science",
      "AP Biology",
      "AP Chemistry",
      "AP Physics",
      "College Science",
    ],
  },
  {
    slug: "test-prep",
    title: "Test Prep",
    blurb: "Strategy and content together — for every test that matters.",
    detail: "",
    icon: ScrollText,
    subjectSlug: "sat-prep-los-angeles",
    topics: [
      "Classroom Tests",
      "Quizzes",
      "Finals & Midterms",
      "SAT & ACT",
      "AP Exams",
    ],
  },
  {
    slug: "academic-coaching",
    title: "Academic Coaching",
    blurb: "Organization, focus, and accountability that carry across every subject.",
    detail: "",
    icon: ListChecks,
    subjectSlug: "adhd-tutor-los-angeles",
    topics: [
      "Organization",
      "Time Management",
      "Study Skills",
      "Executive Function",
      "ADHD Support",
      "Accountability",
    ],
  },
  {
    slug: "technology",
    title: "Technology & Digital Skills",
    blurb: "Navigate school platforms, digital tools, and AI with confidence.",
    detail: "",
    icon: Laptop,
    topics: [
      "Google Docs & Slides",
      "School Platforms",
      "Presentations",
      "Research",
      "AI Tools",
    ],
  },
];

export const findService = (slug: string) =>
  services.find((s) => s.slug === slug);
