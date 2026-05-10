/**
 * Google reviews for HUMBLE Learning Co.
 * Imported verbatim from Google. Some long reviews were truncated by Google
 * with "… More" — those are kept up to the truncation point and marked.
 */
export interface Review {
  /** Reviewer name as shown on Google. */
  name: string;
  /** Approximate review age relative to scrape (e.g. "2 months ago"). */
  age: string;
  /** Star rating (Google reviews shipped here are all 5-star). */
  stars: 5;
  /** Body of the review. */
  body: string;
  /** True when Google had truncated the review with "… More". */
  truncated?: boolean;
  /** Local Guide / reviewer-stat blurb shown by Google, if present. */
  badge?: string;
}

export const reviews: Review[] = [
  {
    name: "Brambletale Press",
    age: "2 months ago",
    stars: 5,
    badge: "2 reviews · 1 photo",
    body: "HUMBLE Learning Co. has been an incredible experience! The tutors are patient, encouraging, and genuinely invested in helping students grow both academically and personally. The support feels personal, positive, and motivating, and you can",
    truncated: true,
  },
  {
    name: "David Preuss",
    age: "2 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "I rarely write reviews, but Tiana, the founder of Humble Learning Co., is truly AMAZING!! She deserves 10-stars!! I had to learn how to create an AI Agent for a job interview, and Tiana got me a finished product in 2 hours and I now can",
    truncated: true,
  },
  {
    name: "Justin Lubert",
    age: "2 months ago",
    stars: 5,
    badge: "Local Guide · 22 reviews · 2 photos",
    body: "I couldn’t read even a Dr Seuss book or do simple multiplication before I met Tiana. Thank you so much for your help. I’d recommend her to all my friends and family",
  },
  {
    name: "Abba Levi",
    age: "4 months ago",
    stars: 5,
    badge: "1 review",
    body: "Absolutely amazing tutor! She is incredibly patient, knowledgeable, and truly cares about her students’ success. She explains everything so clearly and makes learning enjoyable. I’ve improved so much thanks to her. Highly, highly recommend!",
  },
  {
    name: "Vilen Torabian",
    age: "5 months ago",
    stars: 5,
    badge: "1 review",
    body: "Tiana is an amazing tutor who actually asks questions before starting a lesson with me to ensure I know the subject enough. Highly recommend her for your tutoring needs, I passed my Geometry exam with the highest grade I have ever gotten! 10/10",
  },
  {
    name: "Ahmed Owainat",
    age: "5 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Best tutor ever. I was struggling in my math class for the longest time. She explained everything in the best possible way and I managed to bring my C up to a A.",
  },
  {
    name: "Abo G",
    age: "4 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "We were really stressed about our two kids (one in 8th grade, one in 10th) failing their final exams this semester. Both were struggling badly in Math and Science, and the regular school explanations just weren’t clicking for them anymore.",
    truncated: true,
  },
  {
    name: "Gaming Topher",
    age: "4 months ago",
    stars: 5,
    badge: "4 reviews",
    body: "She is kind, professional, and incredibly effective. Her teaching style is clear, encouraging, and confidence-building. I can’t recommend her enough — she deserves all the students!",
  },
  {
    name: "Garnik Sargsyan",
    age: "3 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "The tutor was amazing!!! I had an excellent experience with Humble Learning Co.!! Tiana is patient, caring, and efficient. She breaks down concepts clearly; she did a phenomenal job of guiding me and creating a plan that made visible",
    truncated: true,
  },
  {
    name: "Maria Klochenko",
    age: "7 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "The tutor was outstanding! She does a custom learning plan for your child and was so patient, knowledgeable and helpful. She had such a bright attitude and helped with everything our children needed! Overall, highly recommend! So glad we found this tutoring!",
  },
  {
    name: "Sevan",
    age: "4 months ago",
    stars: 5,
    badge: "1 review",
    body: "Best tutoring service in all of LA! Trust me I know because my family has tried a bunch for our nieces and nephews and cousins. This is the best, great price and methods.",
  },
  {
    name: "Shayan Hajian",
    age: "6 months ago",
    stars: 5,
    badge: "10 reviews · 6 photos",
    body: "I just wanted to say how grateful and lucky I am to come across Humble Tutoring. Tiana is super kind and observant and clearly understood what I needed help with in anything academic related. She’s beyond kind and easy to get help from,",
    truncated: true,
  },
  {
    name: "Samantha Diekmann",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "Tiana is an absolutely amazing tutor and is kind, understanding, flexible, thorough, and has a great understanding of math in many levels! She helped me in under two hours learn and understand a whole chapter of math that gave me the",
    truncated: true,
  },
  {
    name: "Alexander Ohanian",
    age: "4 months ago",
    stars: 5,
    badge: "6 reviews · 4 photos",
    body: "The tutor was amazing!!!! She helped me with all my academic needs, helped me build study skills that work for me and I gained confidence and more comfort with academics throughout the way. I used to hate academics and now I actually feel progress and have the passion and motivation to do it, all thanks to this tutoring!!",
  },
  {
    name: "Erik Khudabakhshyan",
    age: "4 months ago",
    stars: 5,
    badge: "6 reviews",
    body: "One of the great and kind tutors here, especially for math they’re great. They will work with you on a daily basis to make sure you understand the subject.",
  },
  {
    name: "Davit Yeghishyan",
    age: "7 months ago",
    stars: 5,
    badge: "4 reviews",
    body: "This tutoring company was the best. The tutor helped our children with reading and writing and comprehension and helped them improve their skills in no time! The kids were always excited for sessions and we saw a great difference in their grades. Highly recommend!",
  },
  {
    name: "Jonathan Odom",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had an amazing experience with this tutoring. Tiana was sweet, caring, patient, organized and so supportive the entire session and helped me overcome all my challenges in my Calculus class. At first I was insecure, hesitant, overwhelmed",
    truncated: true,
  },
  {
    name: "Ameen Mohsenzadeh",
    age: "4 months ago",
    stars: 5,
    badge: "9 reviews · 4 photos",
    body: "I just wanted to leave a review because we had such a good experience. My child was really struggling in the class and honestly was feeling discouraged before we started tutoring. From the very first session, you could tell how patient and",
    truncated: true,
  },
  {
    name: "Arman Simonyan",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "The best tutor ever!!!! She helped me with every subject and was super patient, friendly, and supportive!!! The tutor makes learning easy, so much more fun and exciting and I’m no longer stressed about my grades.",
  },
  {
    name: "Luna Jones",
    age: "7 months ago",
    stars: 5,
    badge: "Local Guide · 20 reviews · 6 photos",
    body: "Her tutoring services are top tier and quite excellent. My daughter really got a lot out of each session — more than they ever taught her in class to be honest.",
  },
  {
    name: "Ricky Bedi",
    age: "7 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "I highly recommend Tiana — her expertise in every subject is impressive, and she has a knack for explaining complex topics in a way that’s easy to understand. She is incredibly patient and supportive, always encouraging kids to work hard.",
  },
  {
    name: "Vilen Torabian",
    age: "9 months ago",
    stars: 5,
    badge: "5 reviews · 3 photos",
    body: "I highly recommend HUMBLE Learning Co to anyone that is having difficulty with their school work! Tiana tutored me in a way no other tutor could since I have ADHD; she was able to adjust my tutoring cycle that made it easier for me to focus on my school work. 10/10, you’re going to love Tiana!",
  },
  {
    name: "Amanda Simonyan",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "Service is AMAZING!! My tutor, Tiana, was very knowledgeable and caring; she not only helped me improve new skills but feel supported throughout the entire journey. The personalized",
    truncated: true,
  },
];

/** Reviews chosen for the homepage carousel — short, punchy, varied. */
export const featuredReviewIndexes = [2, 4, 5, 13, 19, 21] as const;

export const featuredReviews = featuredReviewIndexes.map((i) => reviews[i]);
