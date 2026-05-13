/**
 * Gallery photos served from /public/photos.
 * Real tutoring photos used across the site.
 */
export interface Photo {
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    src: "/photos/tutoring-01.png",
    alt: "Tiana smiling with a student during a tutoring session.",
  },
  {
    src: "/photos/IMG_4624.jpg",
    alt: "Student smiling during a reading and worksheet tutoring session.",
  },
  {
    src: "/photos/tutoring-07.png",
    alt: "Young student smiling during a personalized learning activity.",
  },
  {
    src: "/photos/tutoring-02.png",
    alt: "Tiana and a student reviewing notes together at a study session.",
  },
  {
    src: "/photos/tutoring-03.png",
    alt: "Tiana working through a problem with a student.",
  },
  {
    src: "/photos/tutoring-04.png",
    alt: "Tiana and a student studying together at a co-working space.",
  },
  {
    src: "/photos/tutoring-05.png",
    alt: "Tiana helping a student with their schoolwork.",
  },
  {
    src: "/photos/tutoring-06.png",
    alt: "Tiana and a student during a one-on-one tutoring session.",
  },
];

/** Lead photo used at the top of pages and the About section. */
export const heroPhoto = photos[0];
