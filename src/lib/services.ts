import {
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
  ListChecks,
  PenLine,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  icon: LucideIcon;
  topics: string[];
}

/**
 * The full service catalogue. Ordered roughly by what parents search for first.
 * The brand voice is "well-rounded and attentive" — never "super tutor".
 */
export const services: Service[] = [
  {
    slug: "math",
    title: "Math, K–12 & College",
    blurb:
      "From multiplication tables to calculus — taught the way it finally clicks.",
    detail:
      "C's become A's. Dread becomes confidence. We find what's missing, then rebuild from there.",
    icon: Calculator,
    topics: [
      "Elementary arithmetic",
      "Pre-Algebra & Algebra I/II",
      "Geometry",
      "Pre-Calculus",
      "Calculus (AB / BC / college)",
      "Statistics",
    ],
  },
  {
    slug: "reading-writing",
    title: "Reading, Writing & Comprehension",
    blurb:
      "For students who freeze on the page — phonics through analytical essays.",
    detail:
      "Decoding, comprehension, structure, voice. Taught at the student's real level — never where the syllabus pretends they should be.",
    icon: BookOpen,
    topics: [
      "Phonics & early reading",
      "Reading comprehension",
      "Essay structure",
      "Grammar & mechanics",
      "Creative writing",
    ],
  },
  {
    slug: "science",
    title: "Science",
    blurb: "Biology, chemistry, physics — concepts that finally connect.",
    detail:
      "We focus on what's actually happening, so the next chapter builds on the last instead of starting from scratch.",
    icon: FlaskConical,
    topics: [
      "Elementary & middle school science",
      "Biology",
      "Chemistry",
      "Physics",
      "Earth & environmental science",
    ],
  },
  {
    slug: "test-prep",
    title: "Test Prep",
    blurb:
      "SAT, ACT, AP, finals — strategy plus the content gaps behind the score.",
    detail:
      "A score is just data. We use it to find weak spots, fix them, then drill the format until test day feels easy.",
    icon: ScrollText,
    topics: [
      "SAT & ACT",
      "AP exam prep",
      "Final exams & midterms",
      "ISEE / SSAT (private school)",
    ],
  },
  {
    slug: "homework-help",
    title: "Homework Help",
    blurb: "Stuck on Thursday night? We're there.",
    detail:
      "Help with tonight's assignment — and the skills to handle tomorrow's on your own.",
    icon: PenLine,
    topics: [
      "Daily homework support",
      "Project planning",
      "Last-minute review before tests",
    ],
  },
  {
    slug: "study-skills",
    title: "Study Skills & Organization",
    blurb:
      "How to take notes, plan ahead, and study before the night before.",
    detail:
      "Especially powerful for students with ADHD or executive-function challenges. Families tell us focus finally clicked.",
    icon: ListChecks,
    topics: [
      "Note-taking systems",
      "Time management & weekly planning",
      "Active study techniques",
      "ADHD-friendly routines",
    ],
  },
  {
    slug: "college-coursework",
    title: "College Coursework",
    blurb: "Calculus, gen-ed sciences, and night-before-the-final help that works.",
    detail:
      "Flexible scheduling around lectures. Focused on understanding the material — not just finishing the problem set.",
    icon: GraduationCap,
    topics: [
      "Calculus I / II / III",
      "College algebra & statistics",
      "Intro biology, chemistry, physics",
      "Writing-intensive courses",
    ],
  },
  {
    slug: "enrichment",
    title: "Enrichment & Beyond-the-Classroom",
    blurb:
      "For students who finished the textbook in October. And adults chasing something new.",
    detail:
      "One client learned to build an AI agent in two hours — for a job interview the next day. We go where curiosity goes.",
    icon: Sparkles,
    topics: [
      "Topics ahead of grade level",
      "Adult learners",
      "Career-prep skills",
    ],
  },
];

export const findService = (slug: string) =>
  services.find((s) => s.slug === slug);
