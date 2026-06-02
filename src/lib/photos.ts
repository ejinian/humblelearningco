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
    alt: "Tiana, founder of HUMBLE Learning Co., smiling with a student during a one-on-one tutoring session in Los Angeles.",
  },
  {
    src: "/photos/tutoring-07.png",
    alt: "Student smiling and engaged during a personalized learning session with HUMBLE Learning Co. in Los Angeles.",
  },
  {
    src: "/photos/tutoring-02.png",
    alt: "Tiana reviewing notes with a student during a private tutoring session in Los Angeles.",
  },
  {
    src: "/photos/tutoring-04.png",
    alt: "Tiana and a student working together at a study session — one-on-one tutoring in Los Angeles.",
  },
  {
    src: "/photos/tutoring-05.png",
    alt: "Tiana helping a student during a personalized tutoring session at HUMBLE Learning Co.",
  },
  {
    src: "/photos/tutoring-06.png",
    alt: "Tiana working with a young student in a calm, focused one-on-one learning environment.",
  },
];

/** Lead photo used at the top of pages. */
export const heroPhoto = photos[0];

/** Founder portrait used only on the About page. */
export const founderPhoto: Photo = {
  src: "/photos/tutoring-03.png",
  alt: "Portrait of Tiana Humble, founder and tutor at HUMBLE Learning Co. in Los Angeles.",
};
