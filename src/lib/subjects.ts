export interface SubjectData {
  slug: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  whyItems: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedNeighborhoods: { name: string; slug: string }[];
  relatedSubjects: { label: string; slug: string }[];
}

const commonNeighborhoods: { name: string; slug: string }[] = [
  { name: "Encino", slug: "encino-tutoring" },
  { name: "Sherman Oaks", slug: "sherman-oaks-tutoring" },
  { name: "Tarzana", slug: "tarzana-tutoring" },
  { name: "Studio City", slug: "studio-city-tutoring" },
  { name: "Beverly Hills", slug: "beverly-hills-tutoring" },
  { name: "Santa Monica", slug: "santa-monica-tutoring" },
  { name: "Brentwood", slug: "brentwood-tutoring" },
  { name: "Pasadena", slug: "pasadena-tutoring" },
  { name: "Woodland Hills", slug: "woodland-hills-tutoring" },
  { name: "Manhattan Beach", slug: "manhattan-beach-tutoring" },
];

export const subjects: SubjectData[] = [
  {
    slug: "math-tutor-los-angeles",
    eyebrow: "Los Angeles · K–12 & College",
    headline: "Math Tutoring in",
    headlineAccent: "Los Angeles.",
    tagline:
      "From arithmetic to AP Calculus — building the understanding behind the math, not just the steps.",
    body: "Math gaps compound faster than in any other subject. A concept missed in 6th grade shows up in Algebra. An Algebra gap follows a student into Geometry, Pre-Calculus, and beyond. Tiana works with students at every level — rebuilding number sense for elementary students, filling the specific gaps holding a high schooler back, and supporting college students who never felt solid on the fundamentals. One consistent tutor who knows exactly where your student lost the thread.",
    metaTitle: "Math Tutor in Los Angeles | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Los Angeles for K–12 and college students. Arithmetic through AP Calculus — one-on-one with Tiana. Free intro call.",
    whyItems: [
      {
        title: "Every level, one tutor",
        body: "Elementary math, pre-algebra, algebra, geometry, pre-calculus, calculus, AP Calculus AB/BC, AP Statistics, and college math — no level-out, no handoff to someone else.",
      },
      {
        title: "Find the gap first",
        body: "Most students who struggle in math aren't behind on the current chapter — they're missing something from two years ago. The first sessions locate the actual break point before moving forward.",
      },
      {
        title: "Stick with it",
        body: "Math confidence rarely comes from one breakthrough session. It comes from consistent work with someone who remembers what you struggled with last week and builds on what's actually stuck.",
      },
    ],
    faqs: [
      {
        q: "What math levels do you tutor?",
        a: "All of them — from early arithmetic and multiplication tables through pre-algebra, algebra I and II, geometry, pre-calculus, calculus, AP Calculus AB/BC, AP Statistics, and college-level math. Every plan starts with understanding exactly where your student is, not where the syllabus says they should be.",
      },
      {
        q: "My student is behind in math — is it too late to catch up?",
        a: "Almost never. Most students who feel 'behind' in math are actually missing one or two specific concepts that everything else depends on. Once those are rebuilt, the catch-up tends to move faster than families expect. We identify the actual break point in the first session or two.",
      },
      {
        q: "Do you help with AP Calculus and AP Statistics?",
        a: "Yes. Both AP Calculus AB and BC, and AP Statistics. Sessions cover concept mastery and AP exam strategy — multiple choice, free response, and how to show work for full credit even when the answer isn't exact.",
      },
      {
        q: "Do you offer online math tutoring in California?",
        a: "Yes. Online math sessions are available throughout California. The format works well for math — we use shared whiteboards and document cameras so your student can show work in real time, exactly as they would in-person.",
      },
      {
        q: "How is one-on-one math tutoring different from a tutoring center?",
        a: "A center matches your student with whoever is available. One-on-one tutoring with a consistent tutor means every session builds on the last. Tiana remembers what your student struggled with two weeks ago, what clicked, and what still needs reinforcement — that continuity is where real progress happens.",
      },
    ],
    relatedNeighborhoods: commonNeighborhoods,
    relatedSubjects: [
      { label: "SAT & ACT Prep", slug: "sat-prep-los-angeles" },
      { label: "Reading & Writing", slug: "reading-tutor-los-angeles" },
      { label: "ADHD & Academic Coaching", slug: "adhd-tutor-los-angeles" },
    ],
  },
  {
    slug: "sat-prep-los-angeles",
    eyebrow: "Los Angeles · SAT · ACT · PSAT · AP Exams",
    headline: "SAT & ACT Prep",
    headlineAccent: "in Los Angeles.",
    tagline:
      "Tiana scored a perfect 1600 on the SAT. Prep built from real test experience — not a generic curriculum.",
    body: "Most SAT prep programs teach the same curriculum to every student. Tiana starts with a diagnostic to identify exactly what your student is missing, where they're losing time, and which patterns on each section are costing the most points. Every session has a purpose. The goal isn't just a higher score — it's knowing why every answer is right or wrong so there are no surprises on test day.",
    metaTitle: "SAT & ACT Prep Tutoring in Los Angeles | HUMBLE Learning Co.",
    metaDescription:
      "SAT & ACT prep tutoring in Los Angeles. Tiana scored a perfect 1600 on the SAT. One-on-one, personalized prep — not a curriculum. Free intro call.",
    whyItems: [
      {
        title: "A perfect 1600, built in",
        body: "Tiana scored a perfect 1600 on the SAT. Prep draws on what actually distinguishes top scorers — timing strategy, trap-answer patterns, and the specific reasoning the test rewards.",
      },
      {
        title: "Diagnostic before prescription",
        body: "No plan is built before seeing your student's real starting point. A practice test or diagnostic assessment comes first so every session addresses what's actually holding your student back.",
      },
      {
        title: "SAT, ACT, and PSAT",
        body: "Coverage across all three standardized tests, plus AP exam prep for specific subjects. If your student is deciding between the SAT and ACT, Tiana can help determine which test format is the better fit.",
      },
    ],
    faqs: [
      {
        q: "How is this different from Kaplan or Princeton Review?",
        a: "Big test-prep programs teach the same curriculum regardless of a student's baseline. Tiana builds a plan around your student's actual diagnostic results — the specific question types, timing issues, and content gaps that are unique to them. Every session is different because every student is different.",
      },
      {
        q: "When should we start SAT prep?",
        a: "For the SAT, most students benefit from starting 3–6 months before their target test date. For the PSAT (taken in October of 10th or 11th grade), a summer ramp-up works well. Starting earlier is rarely a mistake — it allows more time for genuine content mastery rather than last-minute cramming.",
      },
      {
        q: "Do you offer ACT prep as well?",
        a: "Yes. ACT prep covers all four sections — English, Math, Reading, and Science — with a focus on the timing demands that make the ACT harder for many students than the SAT. If your student hasn't decided which test to take, Tiana can help evaluate which format is the better fit based on their academic strengths.",
      },
      {
        q: "How many sessions does it typically take to improve a score?",
        a: "Most students see meaningful score improvement with 8–12 focused sessions, though this depends on starting point, target score, and how consistently they practice between sessions. Students who do practice work between sessions improve significantly faster than those who only work during sessions.",
      },
      {
        q: "Do you also prep for AP exams?",
        a: "Yes. AP exam prep is available for any AP subject Tiana tutors — including AP Calculus AB/BC, AP Statistics, AP English Language, AP English Literature, AP Biology, AP Chemistry, AP Physics, AP US History, and others. Sessions cover content gaps, exam format, and free-response strategy.",
      },
    ],
    relatedNeighborhoods: commonNeighborhoods,
    relatedSubjects: [
      { label: "Math Tutoring", slug: "math-tutor-los-angeles" },
      { label: "Reading & Writing", slug: "reading-tutor-los-angeles" },
      { label: "College Essay Help", slug: "college-essay-tutoring-los-angeles" },
    ],
  },
  {
    slug: "adhd-tutor-los-angeles",
    eyebrow: "Los Angeles · ADHD-Friendly · Executive Function",
    headline: "ADHD Tutoring &",
    headlineAccent: "Academic Coaching.",
    tagline:
      "Built for students who learn differently — not a standard session relabeled.",
    body: "Students with ADHD often aren't behind because they don't understand the material. They're behind because the way most tutoring works doesn't work for them. Tiana structures sessions around how neurodivergent learners actually focus and retain: shorter intervals, frequent anchoring, explicit strategy instruction alongside the academic content. Executive function coaching — organization, time management, task initiation — is woven in, not treated as a separate add-on.",
    metaTitle:
      "ADHD Tutoring & Academic Coaching in Los Angeles | HUMBLE Learning Co.",
    metaDescription:
      "ADHD-friendly tutoring and executive function coaching in Los Angeles. One-on-one with Tiana — built around how neurodivergent students actually learn. Free intro call.",
    whyItems: [
      {
        title: "Sessions designed for ADHD brains",
        body: "Shorter focused intervals, frequent check-ins, and explicit pacing keep engagement up. Sessions aren't one-size-fits-all — they're built around how your student actually works best on a given day.",
      },
      {
        title: "Executive function alongside academics",
        body: "Organization, task initiation, time management, and study strategy are taught as skills — woven into every session, not addressed in a separate 'coaching' track that never connects to the homework.",
      },
      {
        title: "Consistency matters most",
        body: "ADHD students benefit more than most from working with the same person over time. Tiana learns your student's patterns — what derails them, what they need to hear, and when to push vs. when to step back.",
      },
    ],
    faqs: [
      {
        q: "Do you diagnose ADHD or learning differences?",
        a: "No — diagnosis requires a licensed evaluator or clinician. What we provide is academic support designed with ADHD in mind: sessions structured for neurodivergent learners, executive function coaching, and a consistent one-on-one relationship built on understanding how your student actually learns. If you're seeking a formal evaluation, we're happy to discuss the process on the intro call.",
      },
      {
        q: "What is executive function coaching?",
        a: "Executive function refers to the cognitive skills that help us plan, start, organize, and follow through on tasks. For students who struggle here — often those with ADHD, anxiety, or just very demanding schedules — coaching builds explicit strategies around time management, homework organization, breaking large projects into steps, and accountability. It's taught as a skill, not just advised.",
      },
      {
        q: "My student shuts down during homework — can you help?",
        a: "Yes, and this is one of the most common situations families describe. Shutdown often comes from a combination of task overwhelm, unclear starting points, and past experiences of failing even after trying. Sessions address all three — building clarity on where to start, reducing the weight of the task, and rebuilding confidence through small consistent wins.",
      },
      {
        q: "Do you work with students who have anxiety alongside ADHD?",
        a: "Yes. Anxiety and ADHD frequently co-occur, and the combination often shows up as avoidance, perfectionistic freezing, or extreme stress before tests and deadlines. Sessions are paced to reduce that pressure while still building the skills and confidence that lower anxiety over time.",
      },
      {
        q: "Do you work with high schoolers who have ADHD?",
        a: "Yes — and the high school years are often when ADHD becomes most disruptive, because the volume of work increases while support structures from elementary school drop away. Sessions for high schoolers typically combine academic subject help with explicit executive function coaching to build sustainable habits for the demands ahead.",
      },
    ],
    relatedNeighborhoods: commonNeighborhoods,
    relatedSubjects: [
      { label: "Math Tutoring", slug: "math-tutor-los-angeles" },
      { label: "Reading & Writing", slug: "reading-tutor-los-angeles" },
      { label: "SAT & ACT Prep", slug: "sat-prep-los-angeles" },
    ],
  },
  {
    slug: "reading-tutor-los-angeles",
    eyebrow: "Los Angeles · Phonics · Comprehension · Writing",
    headline: "Reading Tutor",
    headlineAccent: "in Los Angeles.",
    tagline:
      "From learning to read to reading to learn — meeting students exactly where they are.",
    body: "Reading is the skill that underlies every other subject. A student who struggles to decode words in 2nd grade will hit that same wall in 6th grade science, high school history, and college English. Tiana works with early readers on phonics and fluency, and with older students on comprehension strategies, close reading, annotation, and academic writing. The goal is independence — a student who can sit down with any text and know what to do with it.",
    metaTitle: "Reading Tutor in Los Angeles | HUMBLE Learning Co.",
    metaDescription:
      "Private reading tutoring in Los Angeles — phonics, comprehension, and writing for K–12 students. One-on-one with Tiana. Free intro call.",
    whyItems: [
      {
        title: "Early readers: phonics and fluency",
        body: "For kindergarten through 3rd grade students, sessions focus on phonics, decoding, sight words, and building reading fluency. Strong early foundations prevent the gaps that compound in later grades.",
      },
      {
        title: "Older students: comprehension and writing",
        body: "Middle and high schoolers work on reading comprehension strategies, annotation, inference, author's purpose, and academic writing — the skills tested on every standardized exam and required in every content area.",
      },
      {
        title: "Reading and writing as one skill",
        body: "Strong readers become stronger writers. Sessions often move between both — reading closely, then writing in response — because that integration is what school and standardized tests actually require.",
      },
    ],
    faqs: [
      {
        q: "Do you offer phonics tutoring for young readers?",
        a: "Yes. For early elementary students, sessions focus on phonics patterns, decoding strategies, sight word fluency, and reading aloud with expression and pace. We follow research-backed phonics sequences and adjust to how your student is progressing, not how the calendar says they should be.",
      },
      {
        q: "My middle schooler reads slowly — can that improve?",
        a: "Yes. Reading rate in middle school often lags because students never fully automated decoding in early grades — meaning they're still using conscious effort to read words rather than reading automatically. Targeted work on fluency and vocabulary typically accelerates reading rate alongside comprehension.",
      },
      {
        q: "Do you help with reading comprehension for standardized tests?",
        a: "Yes — reading comprehension is heavily tested on the SAT, ACT, PSAT, AP exams, and state assessments. Sessions teach strategies for reading under timed conditions, answering inference questions, identifying the author's purpose, and eliminating wrong answers systematically. These skills transfer across tests and subjects.",
      },
      {
        q: "Do you also help with writing?",
        a: "Yes. Reading and writing are connected in every session. Tiana works on essay structure, grammar, sentence clarity, academic voice, and the revision process. For high schoolers and college students, sessions often focus on thesis development, evidence integration, and argumentative writing.",
      },
      {
        q: "What if my student hates reading?",
        a: "That's usually not about reading itself — it's about a history of struggling with it. When decoding is hard or slow, reading feels like work rather than meaning-making. As fluency and comprehension improve, most students' relationship with reading shifts. The goal is never to force a love of reading, but to remove the friction that makes it aversive.",
      },
    ],
    relatedNeighborhoods: commonNeighborhoods,
    relatedSubjects: [
      { label: "Math Tutoring", slug: "math-tutor-los-angeles" },
      { label: "ADHD & Academic Coaching", slug: "adhd-tutor-los-angeles" },
      { label: "College Essay Help", slug: "college-essay-tutoring-los-angeles" },
    ],
  },
  {
    slug: "college-essay-tutoring-los-angeles",
    eyebrow: "Los Angeles · Common App · UC Essays · Supplements",
    headline: "College Essay",
    headlineAccent: "Tutoring.",
    tagline:
      "A college essay isn't just writing. It's finding the moment that says something real — and learning to tell it clearly.",
    body: "The Common App personal statement is one of the only parts of a college application a student fully controls. Most students either try to write what they think admissions wants to hear, or they hand the essay off entirely. Neither works. Tiana works with students to find the story worth telling, develop a draft that sounds like them — not like every other applicant — and edit it to the standard selective colleges actually hold. Supplemental essays for every school on the list are included.",
    metaTitle:
      "College Essay Tutoring in Los Angeles | HUMBLE Learning Co.",
    metaDescription:
      "College essay tutoring in Los Angeles — Common App personal statement, UC Personal Insight Questions, and supplements. One-on-one with Tiana. Free intro call.",
    whyItems: [
      {
        title: "The personal statement",
        body: "Most college essays read like a résumé with feelings. Tiana helps students find the specific, concrete story that reveals character — and teaches them to write it in their own voice, not an imitation of what they think admissions wants.",
      },
      {
        title: "Supplements for every school",
        body: "Supplemental essays for every school on the list — Why this school, Why this major, additional short answers. Supplements often matter as much as the personal statement and get far less attention.",
      },
      {
        title: "UC Personal Insight Questions",
        body: "The UC system requires four PIQs out of eight prompts. Sessions help students select the strongest prompts, develop distinctive answers, and stay within the 350-word limit without losing depth.",
      },
    ],
    faqs: [
      {
        q: "When should we start college essay prep?",
        a: "For a fall application (Early Decision, Early Action, or Regular Decision), starting in June or July of the summer before senior year is ideal. That timeline allows a first draft by August, revision through September, and a polished essay well before October deadlines. Starting later is workable but compresses the revision process, which is where essays actually improve.",
      },
      {
        q: "Do you help with the Common App personal statement and supplements?",
        a: "Yes — both, and in sequence. Most students should finalize the personal statement before writing supplements, because the personal statement sets the narrative frame the supplements build around. Tiana works through the full application essay set, not just one piece.",
      },
      {
        q: "My student is a strong writer — do they still need help?",
        a: "Often yes, for a different reason. Strong writers sometimes produce essays that are technically polished but impersonal — they've optimized for correctness and lost the specific detail that makes an essay memorable. Tiana works with strong writers to ensure the essay sounds human, specific, and genuinely theirs.",
      },
      {
        q: "Do you help with UC Personal Insight Questions?",
        a: "Yes. The UC PIQs are a distinct format — shorter than the Common App essay, with different prompts, and evaluated differently. Sessions help students choose the right four prompts, avoid the common mistake of answering what the prompt asks instead of what makes a compelling answer, and write within the 350-word constraint without generic filler.",
      },
      {
        q: "What's the difference between editing and what you do?",
        a: "Editing fixes grammar and phrasing. What Tiana does starts earlier — helping students find the right topic, develop the angle, structure the narrative, and then revise through multiple drafts. By the time grammar is on the table, the essay already has something real to say.",
      },
    ],
    relatedNeighborhoods: commonNeighborhoods,
    relatedSubjects: [
      { label: "SAT & ACT Prep", slug: "sat-prep-los-angeles" },
      { label: "Reading & Writing", slug: "reading-tutor-los-angeles" },
      { label: "Math Tutoring", slug: "math-tutor-los-angeles" },
    ],
  },
];

export function getSubject(slug: string): SubjectData | undefined {
  return subjects.find((s) => s.slug === slug);
}
