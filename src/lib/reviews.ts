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
    body: "HUMBLE Learning Co. has been an incredible experience! The tutors are patient, encouraging, and genuinely invested in helping students grow both academically and personally. The support feels personal, positive, and motivating, and you can tell they truly care about every learner's success. Highly recommend to any family looking for thoughtful, high-quality tutoring.",
  },
  {
    name: "David Preuss",
    age: "2 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "I rarely write reviews, but Tiana, the founder of Humble Learning Co., is truly AMAZING!! She deserves 10-stars!! I had to learn how to create an AI Agent for a job interview, and Tiana got me a finished product in 2 hours and I now can create AI Agents by myself. Tiana is one of the most intelligent young person that I have ever met. She is patient and caring and most importantly a phenomenal teacher! I highly recommend her for any subject for a person of any age. She is worth every penny! David (a CEO and Harvard MBA).",
    featuredExcerpt:
      "I had to learn how to create an AI Agent for a job interview, and Tiana got me a finished product in 2 hours. She is one of the most intelligent young people I have ever met — and most importantly a phenomenal teacher. — David (a CEO and Harvard MBA)",
  },
  {
    name: "Justin Lubert",
    age: "2 months ago",
    stars: 5,
    badge: "Local Guide · 22 reviews · 2 photos",
    body: "I couldn't read even a Dr Seuss book or do simple multiplication before I met Tiana. Thank you so much for your help. I'd recommend her to all my friends and family",
    featuredExcerpt:
      "I couldn't read even a Dr Seuss book or do simple multiplication before I met Tiana. Thank you so much for your help.",
  },
  {
    name: "Abba Levi",
    age: "4 months ago",
    stars: 5,
    badge: "1 review",
    body: "Absolutely amazing tutor! She is incredibly patient, knowledgeable, and truly cares about her students' success. She explains everything so clearly and makes learning enjoyable. I've improved so much thanks to her. Highly, highly recommend!",
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
    body: "We were really stressed about our two kids (one in 8th grade, one in 10th) failing their final exams this semester. Both were struggling badly in Math and Science, and the regular school explanations just weren't clicking for them anymore. Then we found Tiana and honestly, she changed everything. From the very first session, Tiana had this incredible ability to break down complicated concepts into simple, relatable steps that actually made sense to my kids. She never talked down to them, never rushed them, and somehow managed to make even the driest topics feel interesting and doable.",
    featuredExcerpt:
      "We were really stressed about our two kids failing their final exams. Then we found Tiana and honestly, she changed everything.",
  },
  {
    name: "Gaming Topher",
    age: "4 months ago",
    stars: 5,
    badge: "4 reviews",
    body: "She is kind, professional, and incredibly effective. Her teaching style is clear, encouraging, and confidence-building. I can't recommend her enough — she deserves all the students!",
  },
  {
    name: "Garnik Sargsyan",
    age: "3 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "The tutor was amazing!!! I had an excellent experience with Humble Learning Co.!! Tiana is patient, caring, and efficient. She breaks down concepts clearly; she did a phenomenal job of guiding me and creating a plan that made visible progress in all my classes. She was truly invested in my success, well prepared and extremely knowledgeable and I gained so much confidence throughout the way. She helped me through my most stressful academic times and I am so grateful, highly recommend!",
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
    body: "I just wanted to say how grateful and lucky I am to come across Humble Tutoring. Tiana is super kind and observant and clearly understood what I needed help with in anything academic related. She's beyond kind and easy to get help from, she's very patient and made my math assignments genuinely fun and exciting coming from someone who always struggled with pre-calculus. What are you waiting for? Come get all your academic needs from Humble Tutoring! Overall I had amazing experience and her expertise in helping her students is truly outstanding, I definitely recommend over other tutors.",
  },
  {
    name: "Samantha Diekmann",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "Tiana is an absolutely amazing tutor and is kind, understanding, flexible, thorough, and has a great understanding of math in many levels! She helped me in under two hours learn and understand a whole chapter of math that gave me the ability to score 100% on my exam the next day! She is patient, amazing at what she does, and really helps you fully understand content. I truly do not have one negative thing to say!!!",
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
    body: "One of the great and kind tutors here, especially for math they're great. They will work with you on a daily basis to make sure you understand the subject.",
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
    body: "I just wanted to leave a review because we had such a good experience. My child was really struggling in the class and honestly was feeling discouraged before we started tutoring. From the very first session, you could tell how patient and calm they were, never rushed my kid or made them feel bad for not getting it right away. They took the time to explain things in a way my child could actually understand, sometimes going over the same thing a few times without any frustration. That made a huge difference in confidence. Over time we saw real improvement, not just in understanding but in grades too. My child's grade went up and more importantly they stopped dreading the subject. As a parent that means everything. I really appreciate how supportive and encouraging they were. Highly recommend to any parent whose child needs extra help and someone who actually cares.",
  },
  {
    name: "Arman Simonyan",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "The best tutor ever!!!! She helped me with every subject and was super patient, friendly, and supportive!!! The tutor makes learning easy, so much more fun and exciting and I'm no longer stressed about my grades.",
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
    body: "I highly recommend Tiana — her expertise in every subject is impressive, and she has a knack for explaining complex topics in a way that's easy to understand. She is incredibly patient and supportive, always encouraging kids to work hard.",
  },
  {
    name: "Vilen Torabian",
    age: "9 months ago",
    stars: 5,
    badge: "5 reviews · 3 photos",
    body: "I highly recommend HUMBLE Learning Co to anyone that is having difficulty with their school work! Tiana tutored me in a way no other tutor could since I have ADHD; she was able to adjust my tutoring cycle that made it easier for me to focus on my school work. 10/10, you're going to love Tiana!",
    featuredExcerpt:
      "Tiana tutored me in a way no other tutor could since I have ADHD; she adjusted my tutoring cycle and made it easier for me to focus.",
  },
  {
    name: "Amanda Simonyan",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "Service is AMAZING!! My tutor, Tiana was very knowledgeable and caring; she not only helped me improve new skills but feel supported throughout the entire journey. The personalized attention and tailored lessons truly made a difference in my learning experience. She was incredibly patient and supportive. She went above and beyond to ensure i was understanding the material, and her enthusiasm for teaching is contagious. My grade went from C to A+ and I'm so thankful for the experience. If you're looking for a dedicated and professional tutoring service that truly cares about your success, here it is!",
    featuredExcerpt: "My grade went from C to A+ and I'm so thankful for the experience.",
  },
  {
    name: "Sofia Tolentino",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "I cannot recommend Tiana enough! Thanks to her incredible help, I earned an A on my precalculus test which is something I genuinely didn't think was possible a few weeks ago. She's patient, clear, and really knows how to break down difficult concepts in a way that actually makes sense. What makes Tiana stand out is how encouraging she is. Even when I felt overwhelmed, she stayed positive and made me feel capable. She didn't just help me memorize steps, she helped me understand the math. Her style of tutoring made a huge difference in my confidence and performance.",
    featuredExcerpt:
      "I earned an A on my precalculus test, something I genuinely didn't think was possible. Even when I felt overwhelmed, she made me feel capable.",
  },
  {
    name: "Martin Anderson",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "My tutor, Tiana was truly incredible. When I first reached out to her, I was struggling with my Calculus class. My grades were slipping, and I was barely scraping by with a C. I felt overwhelmed and frustrated. But from the very first session, Tiana made me feel heard and understood. She explained the material and took the time to figure out how I learn best and adapted her teaching to fit my needs. But more than that, Tiana gave me something I didn't expect: the belief in myself. I never thought I could do well in math, and now I actually look forward to it. It's hard to express how grateful I am for her support—not just in improving my grades, but in making me believe that I could succeed. Her sense of humor is also phenomenal!!",
    featuredExcerpt:
      "My grades were slipping, and I was barely scraping by with a C. Tiana made me feel heard, adapted to how I learn best, and gave me belief in myself.",
  },
  // ── Additional reviews imported from Google (reviews.txt) ──
  {
    name: "Magic Words Story",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "HUMBLE Learning Co. has been amazing! The tutors are kind, patient, and really know how to make learning fun and easy to understand. My child has improved a lot in school and feels more confident. Highly recommend!",
  },
  {
    name: "Rosie Biedes",
    age: "9 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had such an amazing experience with this company. The tutors are not only patient, but they truly do care about helping you achieve your academic goals. Such an amazing time and experience 10/10",
  },
  {
    name: "Jason Ruelas",
    age: "7 months ago",
    stars: 5,
    badge: "1 review",
    body: "great services, Tiana helped me pass all my college courses with an A & I truly enjoyed working with her!",
  },
  {
    name: "Jeffrey Cartagena",
    age: "7 months ago",
    stars: 5,
    badge: "1 review",
    body: "An amazing tutor I really recommend her she is patient and she will make sure that you learned the material.",
  },
  {
    name: "Manie P",
    age: "10 months ago",
    stars: 5,
    badge: "Local Guide · 40 reviews · 358 photos",
    body: "Amazing tutoring service! They have created a supportive, effective learning environment that helps students of all ages thrive. Extremely helpful and highly recommend!",
  },
  {
    name: "JASNOOR SINGH",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had an amazing experience with this tutor. She is very knowledgeable, patient, and genuinely cares about helping students succeed. I gained so much confidence in both reading and math.",
  },
  {
    name: "8tan",
    age: "11 months ago",
    stars: 5,
    badge: "Local Guide · 11 reviews · 1 photo",
    body: "I've had an excellent experience with Tiana. She is incredibly knowledgeable, patient, and always explains things in a way that's easy to understand. Whether it's helping with homework, preparing for exams, or just building confidence in",
    truncated: true,
  },
  {
    name: "Luis Zamora",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "I'm so grateful to HUMBLE Learning Co for helping me pass my Pre-Calculus test! Their tutor was incredibly patient, detail-oriented, and clearly knowledgeable. They explained things in a way that finally clicked for me, and they never made",
    truncated: true,
  },
  {
    name: "Sam Wooden",
    age: "7 months ago",
    stars: 5,
    badge: "5 reviews",
    body: "Best tutor ever!!! Truly amazing and made a great difference in our children's education and confidence!!!",
  },
  {
    name: "Summer Morris",
    age: "a year ago",
    stars: 5,
    badge: "2 reviews",
    body: "She is like magic! Truly taught me everything i know. So patient and can explain complex concepts in a way that's very easy to understand. Very engaging and has truly made the biggest difference in my learning. Highly recommend to anyone needing to feel more confident in their subjects.",
    featuredExcerpt:
      "She is like magic! Truly taught me everything i know. So patient and can explain complex concepts in a way that's very easy to understand.",
  },
  {
    name: "Camden Schjott",
    age: "10 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "BEST TUTOR EVER!!! Whether it's help with homework, preparing for exams, or building long-term academic skills, this service goes above and beyond. I've seen a noticeable improvement in both confidence and grades. Highly recommend to anyone looking for reliable and effective tutoring!",
  },
  {
    name: "Zunaira Tariq",
    age: "9 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had a wonderful experience with Humble Learning Co.! Their content is not only educational but also engaging and thoughtfully designed. The team is professional, kind, and truly passionate about what they do. Highly recommended for anyone looking to enhance their learning journey!",
  },
  {
    name: "Elizabeth Melikyan",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had such a great time with my tutor, Tiana! From the beginning, Tiana was very reliable--always on time, prepared, and eager to help me with whatever I needed. Most impressive was how kind and patient she was. I was never rushed when I",
    truncated: true,
  },
  {
    name: "Donny Holbrooks",
    age: "11 months ago",
    stars: 5,
    badge: "5 reviews · 4 photos",
    body: "Seriously, this tutor is a game-changer! If you want to unlock your full potential and achieve incredible results, look no further. She has a unique way of making even the toughest subjects easy and fun. Her support and encouragement gave",
    truncated: true,
  },
  {
    name: "Ifra Anam",
    age: "11 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "The environment is supportive and the tutor is knowledgeable and approachable. The teaching methods were clear and effective. I would definitely recommend it to students who are serious about their academic growth.",
  },
  {
    name: "Andrew B",
    age: "4 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Great tutors they help you understand every subject and makes learning easier",
  },
  {
    name: "Tony",
    age: "5 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Great tutoring, helped me pass all my classes no problem.",
  },
  {
    name: "Julia Hyden",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "The tutors are not only super smart but also genuinely care about helping you succeed. They break down complex topics in a way that actually makes sense.",
  },
  {
    name: "Frank Nakkoud",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "Tiana is really an amazing tutor she helped me out with everything to pass my classes and she's really good at helping out with projects i definitely recommend her as a tutor make sure you get her to be your tutor",
  },
  {
    name: "Ray Hamilton",
    age: "6 months ago",
    stars: 5,
    badge: "1 review",
    body: "This company provides a unique, compassionate, individualized approach to tutoring and mentoring across a wide range of subjects!!!!!!",
  },
  {
    name: "Kara Clark",
    age: "10 months ago",
    stars: 5,
    badge: "7 reviews · 5 photos",
    body: "I have only just met Tiana but I am so impressed by her polish, poise, and ability to be down to earth and relatable. I can tell she is really gifted at what she does, and that she has a heart that will help so many people! Highly recommend booking with Tiana!!",
  },
  {
    name: "Mia Catalano",
    age: "10 months ago",
    stars: 5,
    badge: "4 reviews",
    body: "Tiana was such a patient and kind tutor, she helped me pass statistics which I was really struggling with until working with her!!! So grateful to her always ❤️",
  },
  {
    name: "maddie lata",
    age: "11 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "Tiana is amazing! She has me understanding statistics in no time, and that stuff is hard! She is kind and very patient if you don't understand a concept.",
  },
  {
    name: "vanessa naranjo",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "I had an amazing service! This tutoring company was extremely helpful. I highly recommend!",
  },
  {
    name: "kaden chancey",
    age: "4 months ago",
    stars: 5,
    badge: "5 reviews",
    body: "i've seen good improvement in my child's education. will be using this extensively.",
  },
  {
    name: "Nataly Jones",
    age: "7 months ago",
    stars: 5,
    badge: "4 reviews · 1 photo",
    body: "Helped my grades go up a whole letter (for reference I had a B). Strongly recommended!",
  },
  {
    name: "Matthew Diaz",
    age: "3 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Excellent tutoring service! Surpassed my expectations.",
  },
  {
    name: "Ruben Yeghiazaryan",
    age: "5 months ago",
    stars: 5,
    badge: "4 reviews · 3 photos",
    body: "Best experience I have had with any tutors",
  },
  {
    name: "Ashley Roblero",
    age: "11 months ago",
    stars: 5,
    badge: "1 review",
    body: "Amazing tutoring!! just started off she makes you feel really comfortable and explains everything thoroughly!!",
  },
  {
    name: "JASNOOR SINGH 2 E",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "Best tutor ever has a entertaining personality and I feel so motivated to learn. She makes learning fun and easy",
  },
  {
    name: "Aria Humble",
    age: "a year ago",
    stars: 5,
    badge: "4 reviews",
    body: "Very helpful tutor! She made learning all the more fun and exciting! Highly recommended.",
  },
  {
    name: "Alexander Morgan",
    age: "4 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Great place to learn!! I recommend it to friends.",
  },
  {
    name: "Alen Hovhannisyan",
    age: "10 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "The best tutor I can't wait for every session so excited to see her.",
  },
  {
    name: "Priscilla Nieto",
    age: "8 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "Highly recommend tutoring here ! Learned a lot and passed my class",
  },
  {
    name: "Iqra Saleem",
    age: "11 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Tiana is kind and nice tutor and her way of teaching is excellent.",
  },
  {
    name: "Chris Khachatryan",
    age: "8 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Great tutors, very helpful and professional.",
  },
  {
    name: "Rebecca Diekmann",
    age: "a year ago",
    stars: 5,
    badge: "1 review",
    body: "I always have had a good experience and understand what I am learning in math after a session. 5/5 stars!!!",
  },
  {
    name: "Flor Suchite",
    age: "10 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Best tutor ever!! Helped me pass AP psychology.",
  },
  {
    name: "Lamborghini 123",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "The absolute best!!! Helped me ace all my math tests!",
  },
  {
    name: "Ali Samhat",
    age: "8 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Very nice and very understanding I will be coming back",
  },
  {
    name: "Artur Grigoryan",
    age: "3 months ago",
    stars: 5,
    badge: "4 reviews · 1 photo",
    body: "Tina she is a Best",
  },
  {
    name: "Corghan Melendrez",
    age: "2 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "Amazing service and experience !!",
  },
  {
    name: "jewelliana lawrence",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "great tutoring. Learned very fast.",
  },
  {
    name: "Omar Al Sheyab",
    age: "5 months ago",
    stars: 5,
    badge: "1 review",
    body: "Perfect company!!",
  },
  {
    name: "Mia G",
    age: "10 months ago",
    stars: 5,
    badge: "5 reviews",
    body: "So sweet and helped me so much",
  },
  {
    name: "Luxee Collier",
    age: "10 months ago",
    stars: 5,
    badge: "4 reviews",
    body: "Best tutoring ever!!",
  },
  {
    name: "Michael Naghdi",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "Best tutoring in the world!!!!",
  },
  {
    name: "Hardeep singh",
    age: "4 months ago",
    stars: 5,
    badge: "7 reviews · 3 photos",
    body: "Really good 😊",
  },
  {
    name: "Lesly Diaz",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "Great tutors!",
  },
  {
    name: "scott farach",
    age: "4 months ago",
    stars: 5,
    badge: "5 reviews",
    body: "Good service",
  },
  {
    name: "Payam Tabankia",
    age: "10 months ago",
    stars: 5,
    badge: "3 reviews",
    body: "Wonderful tutoring",
  },
  {
    name: "Selyana Ghazin",
    age: "8 months ago",
    stars: 5,
    badge: "1 review",
    body: "absolutely incredible",
  },
  {
    name: "Catherine",
    age: "10 months ago",
    stars: 5,
    badge: "1 review · 1 photo",
    body: "Absolutely amazing",
  },
  {
    name: "worm observer",
    age: "10 months ago",
    stars: 5,
    badge: "1 review",
    body: "Great service!!",
  },
  {
    name: "Christina Akopekyan",
    age: "10 months ago",
    stars: 5,
    badge: "2 reviews",
    body: "The best!🫶🏻",
  },
  {
    name: "Arthur Farhadian",
    age: "4 weeks ago",
    stars: 5,
    badge: "2 reviews",
    body: "This company is perfect for tutoring they teach with highest quality and I recommend to everyone..",
  },
  {
    name: "Ernest Jinian",
    age: "a month ago",
    stars: 5,
    badge: "2 reviews",
    body: "Very supportive and easy to learn from. Tiana genuinely cares about helping you succeed. Lessons feel personalized and I've improved way faster than I expected",
  },
  {
    name: "Paylak Asatryan",
    age: "a month ago",
    stars: 5,
    badge: "3 reviews",
    body: "Best tutor in LA!!! We tried out so many tutors for our children and none were effective. Tiana is truly a gem, she has the sweetest attitude and makes everything easier and clear to understand. She was so patient with our children and made",
    truncated: true,
    featuredExcerpt:
      "We tried out so many tutors for our children and none were effective. Tiana is truly a gem — the sweetest attitude and makes everything easier and clear to understand.",
  },
  {
    name: "Гариб Аракелян",
    age: "a month ago",
    stars: 5,
    badge: "3 reviews",
    body: "Honestly, I didn't expect this level. They explain everything super simple even things I struggled with before finally make sense. You can actually feel the progress after just a few sessions. The vibe is great",
    truncated: true,
  },
  {
    name: "L. A.",
    age: "a month ago",
    stars: 5,
    badge: "2 reviews · 1 photo",
    body: "Really great tutoring company. Helpful, friendly, and easy to work with. Definitely recommend!",
  },
];

/**
 * Homepage testimonials chosen for conversion: parent stress, transformation,
 * personalization, confidence, overwhelm relief, and measurable results.
 */
const featuredReviewNames = [
  "David Preuss",
  "Justin Lubert",
  "Abo G",
  "Martin Anderson",
  "Sofia Tolentino",
  "Vilen Torabian",
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
