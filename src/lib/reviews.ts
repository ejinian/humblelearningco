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
  /** Shorter pull-quote used on the homepage, when stronger than the full body. */
  featuredExcerpt?: string;
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
    body: "HUMBLE Learning Co. has been an incredible experience! The tutors are patient, encouraging, and genuinely invested in helping students grow both academically and personally. The support feels personal, positive, and motivating, and you can tell they truly care about every learner’s success. Highly recommend to any family looking for thoughtful, high-quality tutoring.",
  },
  {
    name: "David Preuss",
    age: "2 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "I rarely write reviews, but Tiana, the founder of Humble Learning Co., is truly AMAZING!! She deserves 10-stars!! I had to learn how to create an AI Agent for a job interview, and Tiana got me a finished product in 2 hours and I now can create AI Agents by myself. Tiana is one of the most intelligent young person that I have ever met. She is patient and caring and most importantly a phenomenal teacher! I highly recommend her for any subject for a person of any age. She is worth every penny! David (a CEO and Harvard MBA).",
    featuredExcerpt:
      "I had to learn how to create an AI Agent for a job interview, and Tiana got me a finished product in 2 hours. She is patient, caring, and most importantly a phenomenal teacher.",
  },
  {
    name: "Justin Lubert",
    age: "2 months ago",
    stars: 5,
    badge: "Local Guide · 22 reviews · 2 photos",
    body: "I couldn’t read even a Dr Seuss book or do simple multiplication before I met Tiana. Thank you so much for your help. I’d recommend her to all my friends and family",
    featuredExcerpt:
      "I couldn’t read even a Dr Seuss book or do simple multiplication before I met Tiana. Thank you so much for your help.",
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
    body: "We were really stressed about our two kids (one in 8th grade, one in 10th) failing their final exams this semester. Both were struggling badly in Math and Science, and the regular school explanations just weren’t clicking for them anymore. Then we found Tiana and honestly, she changed everything. From the very first session, Tiana had this incredible ability to break down complicated concepts into simple, relatable steps that actually made sense to my kids. She never talked down to them, never rushed them, and somehow managed to make even the driest topics feel interesting and doable.",
    featuredExcerpt:
      "We were really stressed about our two kids failing their final exams. Then we found Tiana and honestly, she changed everything.",
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
    body: "The tutor was amazing!!! I had an excellent experience with Humble Learning Co.!! Tiana is patient, caring, and efficient. She breaks down concepts clearly; she did a phenomal job of guiding me and creating a plan that made visible progress in all my classes. She was truly invested in my success, well prepared and extremely knowledgeable and I gained so much confidence throughout the way. She helped me through my most stressful academic times and I am so grateful, highly reccomend!",
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
    body: "I just wanted to say how grateful and lucky I am to come across Humble Tutoring. Tiana is super kind and observant and clearly understood what I needed help with in anything academic related. She’s beyond kind and easy to get help from, she’s very patient and made my math assignments genuinely fun and exciting coming from someone who always struggled with pre-calculus. What are you waiting for? Come get all your academic needs from Humble Tutoring! Overall I had amazing experience and her expertise in helping her students is truly outstanding, I definitely recommend over other tutors.",
  },
  {
    name: "Samantha Diekmann",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "Tiana is an absolutely amazing tutor and is kind, understanding, flexible, thorough, and has a great understanding of math in many levels! She helped me in under two hours learn and understand a whole chapter of math that gave me the ability to score 100% on my exam the next day! She is patient, amazing a what she does, and really helps you fully understand content. I truly do not have one negative thing to say!!!",
  },
  {
    name: "Alexander Ohanian",
    age: "4 months ago",
    stars: 5,
    badge: "6 reviews · 4 photos",
    body: "The tutor was amazing!!!! She helped me with all my academic needs, helped me build study skills that work for me and I gained confidence and more comfort with academics throughout the way. I used to hate academics and now I actually feel progress and have the passion and motivation to do it, all thanks to this tutoring!!",
    featuredExcerpt:
      "I used to hate academics and now I actually feel progress and have the passion and motivation to do it.",
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
    body: "I had an amazing experience with this tutoring. Tiana was sweet, caring, patient, organized and so supportive the entire session and helped me overcome all my challenges in my Calculus class. At first I was insecure, hesitant, overwhelmed and frustrated but she made everything so clear that I actually understand math for the first time and enjoy it. Highly recommend!!!",
  },
  {
    name: "Ameen Mohsenzadeh",
    age: "5 months ago",
    stars: 5,
    badge: "9 reviews · 4 photos",
    body: "I just wanted to leave a review because we had such a good experience. My child was really struggling in the class and honestly was feeling discouraged before we started tutoring. From the very first session, you could tell how patient and calm they were, never rushed my kid or made them feel bad for not getting it right away. They took the time to explain things in a way my child could actually understand, sometimes going over the same thing a few times without any frustration. That made a huge difference in confidence. Over time we saw real improvement, not just in understanding but in grades too. My child’s grade went up and more importantly they stopped dreading the subject. As a parent that means everything. I really appreciate how supportive and encouraging they were. Highly recommend to any parent whose child needs extra help and someone who actually cares.",
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
    featuredExcerpt:
      "Tiana tutored me in a way no other tutor could since I have ADHD; she adjusted my tutoring cycle and made it easier for me to focus.",
  },
  {
    name: "Amanda Simonyan",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "Service is AMAZING!! My tutor, Tiana was very knowledgeable and caring; she not only helped me improve new skills but feel supported throughout the entire journey. The personalized attention and tailored lessons truly made a difference in my learning experience. She was incredibly patient and supportive. She went above and beyond to ensure i was understanding the material, and her enthusiasm for teaching is contagious. My grade went from C to A+ and I’m so thankful for the experience. If you're looking for a dedicated and professional tutoring service that truly cares about your success, here it is!",
  },
  {
    name: "Sofia Tolentino",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "I cannot recommend Tiana enough! Thanks to her incredible help, I earned an A on my precalculus test which is something I genuinely didn’t think was possible a few weeks ago. She’s patient, clear, and really knows how to break down difficult concepts in a way that actually makes sense. What makes Tiana stand out is how encouraging she is. Even when I felt overwhelmed, she stayed positive and made me feel capable. She didn’t just help me memorize steps, she helped me understand the math. Her style of tutoring made a huge difference in my confidence and performance.",
    featuredExcerpt:
      "I earned an A on my precalculus test, something I genuinely didn’t think was possible. Even when I felt overwhelmed, she made me feel capable.",
  },
  {
    name: "Martin Anderson",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "My tutor, Tiana was truly incredible. When I first reached out to her, I was struggling with my Calculus class. My grades were slipping, and I was barely scraping by with a C. I felt overwhelmed and frustrated. But from the very first session, Tiana made me feel heard and understood. She explained the material and took the time to figure out how I learn best and adapted her teaching to fit my needs. But more than that, Tiana gave me something I didn’t expect: the belief in myself. I never thought I could do well in math, and now I actually look forward to it. It’s hard to express how grateful I am for her support—not just in improving my grades, but in making me believe that I could succeed. Her sense of humor is also phenomenal!!",
    featuredExcerpt:
      "My grades were slipping, and I was barely scraping by with a C. Tiana made me feel heard, adapted to how I learn best, and gave me belief in myself.",
  },
];

/**
 * Homepage testimonials chosen for conversion: parent stress, transformation,
 * personalization, confidence, overwhelm relief, and measurable results.
 */
const featuredReviewNames = [
  "Abo G",
  "Justin Lubert",
  "Martin Anderson",
  "Sofia Tolentino",
  "Vilen Torabian",
  "Alexander Ohanian",
  "David Preuss",
] as const;

export const featuredReviews = featuredReviewNames.map((name) => {
  if (name === "Vilen Torabian") {
    return reviews.find(
      (review) =>
        review.name === name && review.body.toLowerCase().includes("adhd"),
    )!;
  }

  return reviews.find((review) => review.name === name)!;
});
