export interface SubjectNeighborhoodData {
  slug: string;
  subject: string;
  subjectSlug: string | null;
  neighborhood: string;
  neighborhoodSlug: string;
  region: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  schools: string[];
  faqs: { q: string; a: string }[];
  relatedCombos: { label: string; slug: string }[];
}

export const subjectNeighborhoods: SubjectNeighborhoodData[] = [
  // ── MATH PAGES ───────────────────────────────────────────────────────────

  {
    slug: "math-tutor-beverly-hills",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Beverly Hills",
    neighborhoodSlug: "beverly-hills-tutoring",
    region: "Westside",
    eyebrow: "Beverly Hills · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Beverly Hills.",
    tagline:
      "Beverly Hills High students don't have room for math gaps. We close them — for good.",
    body: "Math is the subject that determines a student's academic track at Beverly Hills High School. The honors and AP sequences are rigorous, and students who fall behind one semester often spend the next two catching up. Tiana works with BH students at every level — rebuilding algebra foundations for middle schoolers before the gap follows them into high school, and closing specific calculus gaps for juniors who need strong grades for their college list. One consistent tutor who knows the school's expectations and builds students to meet them.",
    metaTitle: "Math Tutor in Beverly Hills | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Beverly Hills — one-on-one for Beverly Hills High students and beyond. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Beverly Hills High School",
      "Horace Mann Middle School",
      "Beverly Vista Middle School",
      "El Rodeo Elementary",
    ],
    faqs: [
      {
        q: "Do you work with Beverly Hills High School students specifically?",
        a: "Yes — regularly. Beverly Hills High has a demanding math sequence including honors Algebra, honors Geometry, Precalculus, AP Calculus AB/BC, and AP Statistics. We build plans around the specific pacing and expectations of BH High's curriculum so students aren't just catching up to their class — they're actually ahead of it.",
      },
      {
        q: "My Beverly Hills student is already in honors math but struggling — is that common?",
        a: "Very. Honors math at BHHS moves fast, and a single missed concept can cascade across the rest of the year. Most students who come to us from honors programs aren't missing a lot — they're missing one specific thing that everything else depends on. We find it quickly and fix it before it compounds further.",
      },
      {
        q: "Do you offer in-home tutoring in Beverly Hills?",
        a: "Yes. In-home sessions are available throughout Beverly Hills and the surrounding Westside. Your student works in a familiar environment without a commute. Online sessions are also available for scheduling flexibility.",
      },
      {
        q: "What's the difference between what you do and a tutoring center in Beverly Hills?",
        a: "Tutoring centers assign whoever is available. Every student at HUMBLE works directly with Tiana — the founder and only tutor. That consistency means she knows exactly what your Beverly Hills student struggled with two weeks ago, what clicked, and what needs reinforcement. That level of continuity is where real math progress happens.",
      },
    ],
    relatedCombos: [
      { label: "SAT Tutor — Beverly Hills", slug: "sat-tutor-beverly-hills" },
      { label: "Private Tutor — Beverly Hills", slug: "private-tutor-beverly-hills" },
      { label: "Math Tutor — Santa Monica", slug: "math-tutor-santa-monica" },
      { label: "Math Tutor — Brentwood", slug: "math-tutor-brentwood" },
    ],
  },

  {
    slug: "math-tutor-santa-monica",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Santa Monica",
    neighborhoodSlug: "santa-monica-tutoring",
    region: "Westside",
    eyebrow: "Santa Monica · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Santa Monica.",
    tagline:
      "From John Adams to SaMoHi to Crossroads — math support built for Santa Monica's demanding academic environment.",
    body: "Santa Monica students move through one of the most academically competitive environments on the Westside. At Crossroads, the math curriculum accelerates quickly — students who miss one unit often find the next three harder than they should be. At SaMoHi, the honors track is strong but large class sizes mean struggling students rarely get the individual attention they need. At John Adams, the middle school to high school math transition is where a lot of students lose their footing. Tiana works one-on-one with each student to find the specific gap and close it — not with drills, but with the understanding that makes the next topic feel manageable.",
    metaTitle: "Math Tutor in Santa Monica | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Santa Monica — one-on-one for SaMoHi, Crossroads, and local families. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Santa Monica High School",
      "Crossroads School",
      "John Adams Middle School",
      "Lincoln Middle School",
      "Saint Monica Catholic High School",
    ],
    faqs: [
      {
        q: "Do you tutor students from Crossroads School?",
        a: "Yes. Crossroads has an accelerated, discussion-heavy curriculum that moves at a pace most students find challenging at some point. Tiana works with Crossroads students to keep up with that pace — and to build the kind of mathematical fluency Crossroads expects, not just procedural steps.",
      },
      {
        q: "My student is at Santa Monica High — they're in the regular track but want to move to honors. Is that possible?",
        a: "Yes, and this is a common situation. Moving up a track requires closing the gap between where the regular curriculum is and what honors expects. Tiana has worked with students making exactly this transition — building the skills and confidence to succeed in the higher track before the new year starts.",
      },
      {
        q: "Do you offer online math tutoring for Santa Monica students?",
        a: "Yes. Online sessions are available for Santa Monica students and all California families. The online format works well for math — we use shared whiteboards so students can show their work in real time, exactly as they would in person.",
      },
      {
        q: "How quickly can a struggling math student turn things around?",
        a: "It depends on where the gap is and how long it's been there. Students who are behind due to one or two specific missed concepts often improve noticeably within 4–6 sessions once those concepts are rebuilt. Students who have accumulated gaps over years take longer — but progress is consistent as long as sessions are regular.",
      },
    ],
    relatedCombos: [
      { label: "SAT Tutor — Santa Monica", slug: "sat-tutor-santa-monica" },
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
      { label: "Math Tutor — Brentwood", slug: "math-tutor-brentwood" },
      { label: "Private Tutor — Manhattan Beach", slug: "private-tutor-manhattan-beach" },
    ],
  },

  {
    slug: "math-tutor-manhattan-beach",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Manhattan Beach",
    neighborhoodSlug: "manhattan-beach-tutoring",
    region: "South Bay",
    eyebrow: "Manhattan Beach · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Manhattan Beach.",
    tagline:
      "Mira Costa students don't just need help getting through math — they need help actually understanding it.",
    body: "Mira Costa High School runs one of the strongest math programs in the South Bay. The honors and AP sequences are rigorous, the pace is fast, and the expectation that students keep up is real. Manhattan Beach families are highly invested in academic outcomes — and they notice quickly when a student starts to slip. Tiana works with Mira Costa and Manhattan Beach Middle students to close the gap before it affects placement decisions, GPA, or college options. Sessions go beyond the formula — students learn to reason through math, not just follow steps they'll forget by the next test.",
    metaTitle: "Math Tutor in Manhattan Beach | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Manhattan Beach — one-on-one for Mira Costa High students and families. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Mira Costa High School",
      "Manhattan Beach Middle School",
      "Meadows Elementary",
    ],
    faqs: [
      {
        q: "Do you work with Mira Costa High School students?",
        a: "Yes. Mira Costa has a rigorous math program — honors Algebra, honors Geometry, Precalculus, AP Calculus AB/BC, and AP Statistics. We build sessions around the specific units and pacing of Mira Costa's curriculum, not generic lesson plans.",
      },
      {
        q: "My student gets decent grades but doesn't really understand the math. Should I be concerned?",
        a: "Yes — and this is one of the most common situations we see. Students who learn to pass tests without understanding the underlying concepts hit a wall, usually in Algebra 2 or Precalculus. The earlier that underlying understanding is built, the less disruptive the eventual wall is. Strong grades now on weak foundations is a risk worth addressing.",
      },
      {
        q: "Do you offer in-home tutoring in Manhattan Beach?",
        a: "Yes. In-home sessions are available throughout Manhattan Beach and the surrounding South Bay. Online sessions are also available for families who prefer flexibility.",
      },
      {
        q: "We have a 6th grader at Manhattan Beach Middle — is it too early to start tutoring?",
        a: "Not at all. 6th through 8th grade is when the mathematical foundations that carry students through high school are built — or aren't. A student who solidifies fractions, ratios, proportional reasoning, and early algebra in middle school enters high school math at a genuine advantage. Starting now is far easier than catching up in 10th grade.",
      },
    ],
    relatedCombos: [
      { label: "Private Tutor — Manhattan Beach", slug: "private-tutor-manhattan-beach" },
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
      { label: "Math Tutor — Calabasas", slug: "math-tutor-calabasas" },
    ],
  },

  {
    slug: "math-tutor-brentwood",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Brentwood",
    neighborhoodSlug: "brentwood-tutoring",
    region: "Westside",
    eyebrow: "Brentwood · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Brentwood.",
    tagline:
      "Brentwood School, Paul Revere, Pali High — math support built for Westside academic pressure.",
    body: "Brentwood is surrounded by some of the most academically demanding schools in Los Angeles — Brentwood School's accelerated curriculum, Paul Revere Middle's competitive environment, and Palisades Charter High for students in the neighborhood. Math is the subject where the accelerated pace hits hardest. A concept not mastered in one unit is a liability in every unit that follows. Tiana works one-on-one with Brentwood students to build the actual understanding behind the math — so that when the curriculum speeds up or adds complexity, the foundation holds.",
    metaTitle: "Math Tutor in Brentwood | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Brentwood, LA — one-on-one for Brentwood School, Paul Revere, and Westside families. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Brentwood School",
      "Paul Revere Middle School",
      "Kenter Canyon Elementary",
      "Palisades Charter High School",
    ],
    faqs: [
      {
        q: "Do you tutor students from Brentwood School?",
        a: "Yes. Brentwood School runs an accelerated curriculum — math moves faster than in most public schools, and expectations are high. Tiana works with Brentwood School students to stay ahead of that pace and to build the conceptual depth the school's assessments actually test.",
      },
      {
        q: "My student is at Paul Revere and heading to high school — what should we work on now?",
        a: "The Paul Revere to high school math transition is a significant jump. Strong students often discover in 9th grade that their middle school math was less solid than their grades suggested. We work with 8th graders to pressure-test what they actually understand — fractions, equations, proportional reasoning — and close those gaps before the first honors class.",
      },
      {
        q: "Do you cover college-level math for students at UCLA or USC?",
        a: "Yes. Online sessions are available for college students throughout California, including those at UCLA and USC. College calculus, statistics, and linear algebra are all covered.",
      },
      {
        q: "How is one-on-one math tutoring different from Brentwood School's extra help?",
        a: "School-based extra help is general — it serves every student who shows up, addresses the most recent topic, and can't follow a specific student's individual gap over time. One-on-one tutoring with Tiana does all three: it's built around exactly what your student is missing, follows them from session to session, and adjusts as they improve.",
      },
    ],
    relatedCombos: [
      { label: "Private Tutor — Brentwood", slug: "private-tutor-brentwood" },
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
      { label: "Math Tutor — Pacific Palisades", slug: "math-tutor-pacific-palisades" },
      { label: "SAT Tutor — Santa Monica", slug: "sat-tutor-santa-monica" },
    ],
  },

  {
    slug: "math-tutor-calabasas",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Calabasas",
    neighborhoodSlug: "calabasas-tutoring",
    region: "Conejo Valley / West Valley",
    eyebrow: "Calabasas · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Calabasas.",
    tagline:
      "Calabasas High and Viewpoint students face real math pressure. We build the skills to handle it.",
    body: "Calabasas families expect academic results — and the schools match that expectation. Calabasas High School's honors and AP math sequences are rigorous, and Viewpoint School runs an accelerated private school curriculum that leaves little room to fall behind. A.E. Wright Middle is where many students first encounter the transition from arithmetic to algebraic thinking — the moment where math either clicks or starts to feel overwhelming. Tiana works with students at every stage of that journey, identifying where the understanding broke down and rebuilding from there rather than covering the same material in the same way.",
    metaTitle: "Math Tutor in Calabasas | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Calabasas — one-on-one for Calabasas High, Viewpoint, and A.E. Wright students. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Calabasas High School",
      "Viewpoint School",
      "A.E. Wright Middle School",
      "Chaparral Elementary",
    ],
    faqs: [
      {
        q: "Do you tutor Viewpoint School students?",
        a: "Yes. Viewpoint's math curriculum is accelerated relative to public school standards — students encounter concepts earlier and at greater depth. Tiana builds sessions around the specific pacing and expectations of Viewpoint's program, not a generic lesson sequence.",
      },
      {
        q: "My Calabasas High student is strong but struggling with AP Calculus — is that normal?",
        a: "Very common. AP Calculus is the point where students who got through Precalculus on procedure alone hit a wall — calculus requires genuine conceptual understanding that procedural shortcuts can't fake. Sessions with Tiana focus on building that conceptual foundation first, which makes the procedural steps actually stick.",
      },
      {
        q: "My 6th grader just started at A.E. Wright — should we start tutoring now?",
        a: "Middle school is an excellent time to start. The transition to algebraic thinking at A.E. Wright is where math habits are formed — students who build genuine understanding in 6th and 7th grade enter Calabasas High's honors sequences with a real advantage.",
      },
      {
        q: "Do you offer in-home tutoring in Calabasas?",
        a: "Yes. In-home sessions are available throughout Calabasas and the surrounding Conejo Valley. Online sessions are also available for families with flexible scheduling needs.",
      },
    ],
    relatedCombos: [
      { label: "Private Tutor — Calabasas", slug: "private-tutor-calabasas" },
      { label: "Math Tutor — Manhattan Beach", slug: "math-tutor-manhattan-beach" },
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
    ],
  },

  {
    slug: "math-tutor-pacific-palisades",
    subject: "Math",
    subjectSlug: "math-tutor-los-angeles",
    neighborhood: "Pacific Palisades",
    neighborhoodSlug: "pacific-palisades-tutoring",
    region: "Westside",
    eyebrow: "Pacific Palisades · Math · K–12 & College",
    headline: "Math Tutor in",
    headlineAccent: "Pacific Palisades.",
    tagline:
      "Pali High is one of the strongest public schools in LA. Math support to match.",
    body: "Palisades Charter High School consistently ranks among the top public high schools in California. Its honors and AP math program is genuinely rigorous — the students who succeed there are working hard, and the ones who struggle are often not far behind. Many Palisades students are strong academically overall but hit a specific wall in math: usually the transition from Algebra II to Precalculus, or the conceptual leap into AP Calculus. Tiana works one-on-one to identify exactly where that wall is and break through it — not by drilling formulas, but by building the understanding that makes the next topic feel logical rather than arbitrary.",
    metaTitle: "Math Tutor in Pacific Palisades | HUMBLE Learning Co.",
    metaDescription:
      "Private math tutoring in Pacific Palisades — one-on-one for Pali High, Marquez, and Westside families. Arithmetic through AP Calculus. Free intro call.",
    schools: [
      "Palisades Charter High School",
      "Marquez Charter School",
      "Palisades Elementary",
    ],
    faqs: [
      {
        q: "Do you work with Palisades Charter High School students?",
        a: "Yes — regularly. Pali High's math program is competitive, and its AP courses are genuinely demanding. Tiana builds sessions around Pali's specific pacing so students aren't just keeping up — they're building the understanding to move through the AP curriculum with confidence.",
      },
      {
        q: "My Pali High student does well in other subjects but math is a problem. Why?",
        a: "This is one of the most common patterns. Math is cumulative in a way other subjects aren't — a gap from two years ago resurfaces in every subsequent course. Strong students in history or English sometimes hit math walls because a specific foundational concept was never solidified. We locate that gap in the first session or two.",
      },
      {
        q: "Do you also help students at Marquez Charter?",
        a: "Yes. Marquez is a rigorous elementary school, and students who build strong math foundations there enter Paul Revere or Pali High's middle school program at an advantage. We work with elementary students on number sense, fractions, multiplication fluency, and early problem-solving skills.",
      },
      {
        q: "How do I know if my student needs tutoring or just more practice?",
        a: "If your student is doing the practice and still not getting consistent results — or avoiding it altogether — that's usually a sign the underlying concept isn't there yet. More practice on a shaky foundation rarely works. The free intro call is a good place to get an honest read on the situation.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Brentwood", slug: "math-tutor-brentwood" },
      { label: "Math Tutor — Santa Monica", slug: "math-tutor-santa-monica" },
      { label: "Private Tutor — Brentwood", slug: "private-tutor-brentwood" },
    ],
  },

  // ── SAT PAGES ────────────────────────────────────────────────────────────

  {
    slug: "sat-tutor-beverly-hills",
    subject: "SAT & ACT Prep",
    subjectSlug: "sat-prep-los-angeles",
    neighborhood: "Beverly Hills",
    neighborhoodSlug: "beverly-hills-tutoring",
    region: "Westside",
    eyebrow: "Beverly Hills · SAT · ACT · PSAT",
    headline: "SAT Tutor in",
    headlineAccent: "Beverly Hills.",
    tagline:
      "Beverly Hills students aren't competing against the national average. They're competing with each other.",
    body: "Beverly Hills High School sends students to some of the most selective universities in the country. That means a 1300 SAT score — fine in many contexts — doesn't move the needle on a BH High college list. Families here need scores in the 1450–1580 range to stay competitive at the schools their students are applying to. Tiana scored a perfect 1600 and brings that experience to every student: a diagnostic first, a plan built around your student's specific gaps, and sessions that build real reasoning skills rather than test-taking tricks. No generic curriculum — a real plan for a real score target.",
    metaTitle: "SAT Tutor in Beverly Hills | HUMBLE Learning Co.",
    metaDescription:
      "SAT tutoring in Beverly Hills — one-on-one prep for Beverly Hills High students. Tiana scored a perfect 1600. Free intro call.",
    schools: [
      "Beverly Hills High School",
      "Horace Mann Middle School",
      "Beverly Vista Middle School",
    ],
    faqs: [
      {
        q: "What SAT scores are competitive for students applying from Beverly Hills High?",
        a: "For the most selective schools on a typical BH High college list — USC, UCLA, Boston University, and other highly ranked universities — scores in the 1450–1550 range are competitive. For Ivy-level schools, 1520+ is where applications become genuinely competitive. We start with your student's college list and work backward to a real score target.",
      },
      {
        q: "My Beverly Hills student has a strong GPA but a disappointing SAT score — is that fixable?",
        a: "Almost always. A strong GPA with a lower SAT score usually means the student understands the material but hasn't learned how the SAT tests it — different question formats, specific traps, and time pressure the classroom doesn't prepare for. That gap is very closeable with targeted prep. It's one of the most rewarding situations to work with.",
      },
      {
        q: "How many sessions does it take to improve a Beverly Hills student's SAT score?",
        a: "Most students see meaningful improvement in 8–12 focused sessions. Students starting with a strong academic baseline — which most BH High students have — often progress faster because the content isn't the issue, the test format is. Students who start earlier and practice between sessions improve the most.",
      },
      {
        q: "Do you also offer PSAT prep for Beverly Hills students?",
        a: "Yes. The PSAT is worth prepping for — it's the qualifying exam for National Merit recognition, and for BH High students on selective college lists, a high PSAT score provides meaningful context in applications. We offer dedicated PSAT prep separate from SAT prep, timed around the October test date.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
      { label: "Private Tutor — Beverly Hills", slug: "private-tutor-beverly-hills" },
      { label: "SAT Tutor — Santa Monica", slug: "sat-tutor-santa-monica" },
    ],
  },

  {
    slug: "sat-tutor-santa-monica",
    subject: "SAT & ACT Prep",
    subjectSlug: "sat-prep-los-angeles",
    neighborhood: "Santa Monica",
    neighborhoodSlug: "santa-monica-tutoring",
    region: "Westside",
    eyebrow: "Santa Monica · SAT · ACT · PSAT",
    headline: "SAT Tutor in",
    headlineAccent: "Santa Monica.",
    tagline:
      "SaMoHi and Crossroads students both need strong scores — for very different college lists.",
    body: "Santa Monica produces two distinct student profiles when it comes to SAT prep: SaMoHi's strong public school students competing for UC admission and selective private universities, and Crossroads students targeting top-tier schools where the SAT is one of many high-pressure factors. Both need real preparation — just built differently. Tiana starts with a diagnostic to understand your student's actual starting point, identifies the specific math and reading/writing sections costing the most points, and builds a plan around the score target that makes sense for your student's college list. No canned curriculum; a real plan.",
    metaTitle: "SAT Tutor in Santa Monica | HUMBLE Learning Co.",
    metaDescription:
      "SAT tutoring in Santa Monica — one-on-one for SaMoHi, Crossroads, and Westside families. Tiana scored a perfect 1600. Free intro call.",
    schools: [
      "Santa Monica High School",
      "Crossroads School",
      "Saint Monica Catholic High School",
    ],
    faqs: [
      {
        q: "My student goes to Crossroads — is the SAT still important?",
        a: "Yes, though the weight varies by school. For students applying to highly selective schools, Crossroads applicants are expected to have strong scores alongside their strong profiles. A score significantly below a school's median can raise questions; a score at or above it removes doubt. Tiana works with Crossroads students to make the SAT a strength, not an asterisk.",
      },
      {
        q: "When should a Santa Monica High student start SAT prep?",
        a: "For the fall of junior year test, starting the previous spring or summer is ideal. That gives time for real content mastery rather than last-minute cramming. PSAT prep in 10th grade is also worth doing — the PSAT is a genuine diagnostic for where SAT prep should focus.",
      },
      {
        q: "SAT or ACT — which is better for a Santa Monica student?",
        a: "It depends on the student. The SAT rewards careful reading and mathematical reasoning. The ACT is faster-paced with a science section. Tiana can help your student take both a diagnostic SAT and ACT practice test and determine which format plays to their strengths before committing to one.",
      },
      {
        q: "Can tutoring really raise a score significantly, or is the SAT mostly aptitude?",
        a: "Significantly, yes. The SAT tests specific skills in specific formats — and those formats can be learned. Most students leave points on the table not because they lack the knowledge, but because they haven't learned how the test asks for it. Consistent, targeted prep almost always produces meaningful score gains.",
      },
    ],
    relatedCombos: [
      { label: "SAT Tutor — Beverly Hills", slug: "sat-tutor-beverly-hills" },
      { label: "Math Tutor — Santa Monica", slug: "math-tutor-santa-monica" },
      { label: "Private Tutor — Brentwood", slug: "private-tutor-brentwood" },
    ],
  },

  // ── PRIVATE TUTOR PAGES ──────────────────────────────────────────────────

  {
    slug: "private-tutor-beverly-hills",
    subject: "Private Tutoring",
    subjectSlug: null,
    neighborhood: "Beverly Hills",
    neighborhoodSlug: "beverly-hills-tutoring",
    region: "Westside",
    eyebrow: "Beverly Hills · All Subjects · K–12 & College",
    headline: "Private Tutor in",
    headlineAccent: "Beverly Hills.",
    tagline:
      "One tutor. Every subject. Built for the expectations Beverly Hills families actually have.",
    body: "Beverly Hills families don't want to manage five different tutors for five different subjects — and they shouldn't have to. HUMBLE Learning Co. provides one consistent tutor across everything a Beverly Hills High student is taking: honors math, AP English, AP History, SAT prep, college essays, and everything in between. Tiana works with students from BH High's rigorous curriculum, Horace Mann's demanding middle school program, and Beverly Vista — the full continuum — without hand-offs, without substitutes, and without a student having to re-explain their situation to a different person every month.",
    metaTitle: "Private Tutor in Beverly Hills | HUMBLE Learning Co.",
    metaDescription:
      "Private tutoring in Beverly Hills — one tutor for every subject. Math, SAT prep, AP courses, college essays. One-on-one with Tiana. Free intro call.",
    schools: [
      "Beverly Hills High School",
      "Horace Mann Middle School",
      "Beverly Vista Middle School",
      "El Rodeo Elementary",
      "Hawthorne Elementary",
    ],
    faqs: [
      {
        q: "What subjects do you cover for Beverly Hills High students?",
        a: "All of them — honors math through AP Calculus, AP English Language and Literature, AP US History and AP World History, AP Biology, AP Chemistry, AP Physics, SAT and ACT prep, college essay writing, and study skills coaching. Beverly Hills High students often carry demanding course loads across multiple AP subjects; we cover the full range without requiring a different tutor for each.",
      },
      {
        q: "We're looking for ongoing support throughout the school year — is that how you work?",
        a: "Yes. Most of our Beverly Hills families schedule weekly or twice-weekly sessions that run for the full academic year. That consistency is what produces real progress — Tiana knows your student's course load, tests, and deadlines, and plans sessions around them rather than treating each one as a standalone lesson.",
      },
      {
        q: "Can you help with college essays as well as academic subjects?",
        a: "Yes. College essay support — Common App personal statement, UC Personal Insight Questions, and school-specific supplements — is included as part of what we do for 11th and 12th graders. Tiana works with students to develop essays that sound genuinely like them, not like every other applicant from a competitive school.",
      },
      {
        q: "Do you offer in-home tutoring at our Beverly Hills home?",
        a: "Yes. In-home sessions are available throughout Beverly Hills. Many families prefer the convenience of having a tutor come to them, especially for students with demanding after-school schedules.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Beverly Hills", slug: "math-tutor-beverly-hills" },
      { label: "SAT Tutor — Beverly Hills", slug: "sat-tutor-beverly-hills" },
      { label: "Private Tutor — Brentwood", slug: "private-tutor-brentwood" },
      { label: "Private Tutor — Calabasas", slug: "private-tutor-calabasas" },
    ],
  },

  {
    slug: "private-tutor-brentwood",
    subject: "Private Tutoring",
    subjectSlug: null,
    neighborhood: "Brentwood",
    neighborhoodSlug: "brentwood-tutoring",
    region: "Westside",
    eyebrow: "Brentwood · All Subjects · K–12 & College",
    headline: "Private Tutor in",
    headlineAccent: "Brentwood.",
    tagline:
      "Brentwood School, Paul Revere, Pali High — one tutor who knows every subject your student is taking.",
    body: "Brentwood students attend some of the most academically demanding schools in Los Angeles. Whether it's Brentwood School's accelerated private curriculum, the competitive environment at Paul Revere Middle, or the rigorous AP program at Palisades Charter High, the academic pressure is real and it spans every subject. Tiana works across all of it: math through AP Calculus, English and essay writing, science through AP Biology and Chemistry, SAT prep, and the executive function coaching that helps students manage a demanding course load without burning out. One tutor, one consistent relationship, every subject.",
    metaTitle: "Private Tutor in Brentwood | HUMBLE Learning Co.",
    metaDescription:
      "Private tutoring in Brentwood, LA — one tutor for every subject. Math, AP courses, SAT prep, college essays. One-on-one with Tiana. Free intro call.",
    schools: [
      "Brentwood School",
      "Paul Revere Middle School",
      "Palisades Charter High School",
      "Kenter Canyon Elementary",
    ],
    faqs: [
      {
        q: "My student goes to Brentwood School and is struggling in multiple subjects — can you help with all of them?",
        a: "Yes. Most families who come to us from Brentwood School need support across subjects — math, writing, and often study skills and executive function. Tiana covers the full range, building a session plan that addresses each area and adjusts as grades improve and priorities shift.",
      },
      {
        q: "What does ongoing tutoring look like for a Brentwood student?",
        a: "Most Brentwood families schedule weekly sessions that run through the full school year. Tiana tracks your student's course schedule, upcoming tests, and deadlines so sessions are always relevant — not just reviewing the last chapter, but preparing for what's actually coming up.",
      },
      {
        q: "Can you help a Brentwood student prepare for college admission?",
        a: "Yes — and this is one of the most common requests from Brentwood families. College preparation includes SAT/ACT prep, AP exam strategy, grade maintenance across demanding courses, and college essay work for Common App and supplements. We approach college prep as a multi-year process, not a last-minute sprint.",
      },
      {
        q: "My Kenter Canyon student is in 5th grade — is it too early to start?",
        a: "Not at all. Elementary school is when the foundational skills in reading, writing, and math are built. Strong foundations at Kenter mean a smooth transition into Paul Revere and, eventually, high school. Starting early is always easier than catching up later.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Brentwood", slug: "math-tutor-brentwood" },
      { label: "SAT Tutor — Santa Monica", slug: "sat-tutor-santa-monica" },
      { label: "Private Tutor — Beverly Hills", slug: "private-tutor-beverly-hills" },
      { label: "Math Tutor — Pacific Palisades", slug: "math-tutor-pacific-palisades" },
    ],
  },

  {
    slug: "private-tutor-calabasas",
    subject: "Private Tutoring",
    subjectSlug: null,
    neighborhood: "Calabasas",
    neighborhoodSlug: "calabasas-tutoring",
    region: "Conejo Valley / West Valley",
    eyebrow: "Calabasas · All Subjects · K–12 & College",
    headline: "Private Tutor in",
    headlineAccent: "Calabasas.",
    tagline:
      "Calabasas families invest seriously in their children's education. Tutoring should match that standard.",
    body: "Calabasas High and Viewpoint School both run rigorous academic programs where falling behind in one subject affects confidence in all of them. Families in Calabasas want a tutor who can cover everything — not just the subject that's in crisis this month. Tiana works with Calabasas students across math, science, English, history, and test prep, building a consistent academic relationship that grows with the student as courses get harder. A.E. Wright Middle is also where students need the most foundational support: the transition to algebraic and scientific thinking in 6th through 8th grade shapes the entire high school trajectory.",
    metaTitle: "Private Tutor in Calabasas | HUMBLE Learning Co.",
    metaDescription:
      "Private tutoring in Calabasas — one tutor for every subject. Calabasas High, Viewpoint, A.E. Wright. One-on-one with Tiana. Free intro call.",
    schools: [
      "Calabasas High School",
      "Viewpoint School",
      "A.E. Wright Middle School",
      "Chaparral Elementary",
    ],
    faqs: [
      {
        q: "What subjects do you cover for Calabasas High students?",
        a: "All subjects — honors math through AP Calculus and AP Statistics, AP English Language and Literature, AP Biology, AP Chemistry, AP Physics, AP US History, AP Government, SAT/ACT prep, college essay writing, and study skills. Calabasas High students often carry 4–6 APs at once; we cover every subject so families don't need to find a different tutor for each one.",
      },
      {
        q: "My student attends Viewpoint School and needs support across multiple subjects — can you help?",
        a: "Yes. Viewpoint's accelerated curriculum across subjects makes multi-subject support especially valuable. Tiana works with Viewpoint students in math, science, and English — coordinating sessions to support whatever is most time-sensitive as the school year unfolds.",
      },
      {
        q: "Can you help my Calabasas student prepare for the SAT alongside their AP courses?",
        a: "Yes — and this is very common for Calabasas juniors. The SAT overlaps significantly with the content of AP English, AP Math, and even AP Science. Sessions can integrate test prep with coursework so that preparing for the SAT also reinforces what students are studying in school.",
      },
      {
        q: "Do you offer in-home tutoring in Calabasas?",
        a: "Yes. In-home sessions are available throughout Calabasas, Agoura Hills, Westlake Village, and surrounding areas. Online sessions are also available for schedule flexibility.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Calabasas", slug: "math-tutor-calabasas" },
      { label: "Private Tutor — Beverly Hills", slug: "private-tutor-beverly-hills" },
      { label: "Private Tutor — Manhattan Beach", slug: "private-tutor-manhattan-beach" },
    ],
  },

  {
    slug: "private-tutor-manhattan-beach",
    subject: "Private Tutoring",
    subjectSlug: null,
    neighborhood: "Manhattan Beach",
    neighborhoodSlug: "manhattan-beach-tutoring",
    region: "South Bay",
    eyebrow: "Manhattan Beach · All Subjects · K–12 & College",
    headline: "Private Tutor in",
    headlineAccent: "Manhattan Beach.",
    tagline:
      "Mira Costa students are competing for UC admission. One-on-one support across every subject they're taking.",
    body: "Mira Costa High School is one of the most competitive public schools in the South Bay, and Manhattan Beach families take academic outcomes seriously. Students here need more than a tutor for the subject they're currently failing — they need consistent, comprehensive support across their full course load as AP classes pile up and college applications approach. Tiana works with Manhattan Beach and Mira Costa students in math, English, science, history, SAT and ACT prep, and college essays — one tutor, one consistent relationship, every subject the student needs.",
    metaTitle: "Private Tutor in Manhattan Beach | HUMBLE Learning Co.",
    metaDescription:
      "Private tutoring in Manhattan Beach — one tutor for every subject. Mira Costa High, Manhattan Beach Middle. One-on-one with Tiana. Free intro call.",
    schools: [
      "Mira Costa High School",
      "Manhattan Beach Middle School",
      "Meadows Elementary",
    ],
    faqs: [
      {
        q: "What subjects do you cover for Mira Costa High students?",
        a: "All of them — honors and AP math (through Calculus BC and Statistics), AP English Language and Literature, AP US History and AP World History, AP Biology, AP Chemistry, AP Physics, SAT and ACT prep, college essay writing, and study skills. Mira Costa students often take multiple APs at once; we cover the full load so families have one point of contact for all of it.",
      },
      {
        q: "My Manhattan Beach student is a junior applying to UCs — what support do you offer?",
        a: "For juniors, we typically focus on three things in parallel: AP exam prep to maximize scores before the May exams, SAT or ACT prep if scores need improvement, and college essay development beginning in the spring. All three are covered by the same tutor in coordinated sessions — not fragmented across different services.",
      },
      {
        q: "Do you work with Manhattan Beach Middle School students?",
        a: "Yes. Middle school is when the foundational skills that determine high school placement are built. Students who leave Manhattan Beach Middle with strong math, reading, and writing skills enter Mira Costa's honors sequences with a genuine advantage — and significantly less stress.",
      },
      {
        q: "Do you offer in-home tutoring in Manhattan Beach?",
        a: "Yes. In-home sessions are available throughout Manhattan Beach and the surrounding South Bay — Hermosa Beach, Redondo Beach, and Palos Verdes. Online sessions are also available.",
      },
    ],
    relatedCombos: [
      { label: "Math Tutor — Manhattan Beach", slug: "math-tutor-manhattan-beach" },
      { label: "Private Tutor — Beverly Hills", slug: "private-tutor-beverly-hills" },
      { label: "Private Tutor — Calabasas", slug: "private-tutor-calabasas" },
    ],
  },
];

export function getSubjectNeighborhood(
  slug: string
): SubjectNeighborhoodData | undefined {
  return subjectNeighborhoods.find((p) => p.slug === slug);
}

export function getCombosForNeighborhood(
  neighborhoodName: string
): { label: string; slug: string }[] {
  return subjectNeighborhoods
    .filter((p) => p.neighborhood === neighborhoodName)
    .map((p) => ({
      label: `${p.subject} — ${p.neighborhood}`,
      slug: p.slug,
    }));
}

export function getCombosForSubjectSlug(
  subjectSlug: string
): { label: string; slug: string }[] {
  return subjectNeighborhoods
    .filter((p) => p.subjectSlug === subjectSlug)
    .map((p) => ({ label: p.neighborhood, slug: p.slug }));
}
