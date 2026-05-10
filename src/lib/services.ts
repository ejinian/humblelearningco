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
      "From multiplication tables to single-variable calculus — taught the way it finally clicks.",
    detail:
      "Reviews mention students bringing C's up to A's and passing geometry exams with their highest grade ever. Lessons start by figuring out what's actually missing, then rebuild from there.",
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
      "Phonics, fluency, essays, and analytical writing — for students who freeze on the page.",
    detail:
      "We work on decoding, comprehension, structure, and voice — at whichever level the student is actually at, without making them feel behind.",
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
    blurb: "Biology, chemistry, and physics, broken down into pieces that connect.",
    detail:
      "We focus on the underlying ideas — what's actually happening, why the equation looks like that — so the next chapter doesn't feel brand new.",
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
      "SAT, ACT, AP, finals, and chapter tests — strategy plus the content gaps behind the score.",
    detail:
      "A test score is just data. We use it to find the underlying weak spots, fix them, and then drill the format until it's second nature.",
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
    blurb: "Same-week support when an assignment is due Friday and nothing is making sense.",
    detail:
      "Drop-in help for the assignment in front of you — but with the goal of leaving you able to do the next one without us.",
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
      "How to take notes, plan a week, and study before the night before. The skills school assumes you already have.",
    detail:
      "Particularly helpful for students with ADHD or executive-function challenges — reviews specifically call out adjustments that made focus possible.",
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
    blurb: "Calculus, gen-ed sciences, and the late-night-before-the-final kind of help.",
    detail:
      "College students are welcome too — flexible scheduling around lectures and a focus on understanding, not just finishing the problem set.",
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
      "For curious students who finished the textbook in October. Or adults learning something new.",
    detail:
      "One review describes learning to build an AI agent in two hours for a job interview. We meet students wherever their curiosity is.",
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
