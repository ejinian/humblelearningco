/**
 * Single source of truth for site-wide details.
 * TODO(owner): replace placeholders before launch.
 */
export const site = {
  name: "HUMBLE Learning Co.",
  shortName: "HUMBLE",
  tagline: "One-on-one tutoring that meets your student where they are.",
  domain: "humblelearningco.com",
  url: "https://humblelearningco.com",
  founder: "Tiana",
  location: "Los Angeles, CA",

  // TODO(owner): replace these placeholders.
  contact: {
    email: "humblelearnco@gmail.com",
    phone: "(818) 643-1670",
    // Optional booking link (Calendly, Cal.com, etc.). Leave empty to hide.
    bookingUrl: "",
  },

  // TODO(owner): replace placeholders. Leave a value empty string to hide.
  social: {
    instagram: "https://instagram.com/humblelearningco",
    tiktok: "",
    facebook: "",
    google:
      "https://www.google.com/search?q=HUMBLE+Learning+Co.+reviews",
  },

  rating: {
    stars: 5.0,
    reviewCount: 100, // approximate count on Google (reviews.ts has the substantive ones)
    source: "Google",
  },
} as const;

export type Site = typeof site;
