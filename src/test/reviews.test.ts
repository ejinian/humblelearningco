import { describe, expect, it } from "vitest";
import { reviews, featuredReviews } from "@/lib/reviews";

describe("reviews data", () => {
  it("ships at least 20 reviews", () => {
    expect(reviews.length).toBeGreaterThanOrEqual(20);
  });

  it("only ships 5-star reviews", () => {
    for (const r of reviews) {
      expect(r.stars).toBe(5);
    }
  });

  it("never has an empty body", () => {
    for (const r of reviews) {
      expect(r.body.trim().length).toBeGreaterThan(20);
    }
  });

  it("featured reviews are a non-empty subset of reviews", () => {
    expect(featuredReviews.length).toBeGreaterThan(0);
    for (const r of featuredReviews) {
      expect(reviews).toContain(r);
    }
  });
});
