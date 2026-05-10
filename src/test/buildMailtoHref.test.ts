import { describe, expect, it } from "vitest";
import {
  buildMailtoHref,
  contactSchema,
  type ContactFormValues,
} from "@/components/ContactForm";

const baseValues: ContactFormValues = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "555-0100",
  studentName: "Alex",
  grade: "High School (9-12)",
  subject: "Math (K-12)",
  message: "Alex is struggling with Algebra II — failed the last test.",
};

describe("buildMailtoHref", () => {
  it("builds a mailto URL targeting the configured address", () => {
    const href = buildMailtoHref(baseValues, "owner@example.com");
    expect(href.startsWith("mailto:owner@example.com?")).toBe(true);
  });

  it("includes the subject area in the email subject line", () => {
    const href = buildMailtoHref(baseValues);
    const url = new URL(href);
    expect(url.searchParams.get("subject")).toBe(
      "Tutoring inquiry — Math (K-12)",
    );
  });

  it("encodes name, email, grade, and message into the body", () => {
    const href = buildMailtoHref(baseValues);
    const body = new URL(href).searchParams.get("body") ?? "";
    expect(body).toContain("Name: Jane Doe");
    expect(body).toContain("Email: jane@example.com");
    expect(body).toContain("Phone: 555-0100");
    expect(body).toContain("Student: Alex");
    expect(body).toContain("Grade: High School (9-12)");
    expect(body).toContain("Subject area: Math (K-12)");
    expect(body).toContain("Algebra II");
  });

  it("omits optional fields when blank", () => {
    const href = buildMailtoHref({
      ...baseValues,
      phone: "",
      studentName: "",
      grade: undefined,
    });
    const body = new URL(href).searchParams.get("body") ?? "";
    expect(body).not.toContain("Phone:");
    expect(body).not.toContain("Student:");
    expect(body).not.toContain("Grade:");
  });
});

describe("contactSchema", () => {
  it("requires a valid email", () => {
    const result = contactSchema.safeParse({
      ...baseValues,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("requires a message of at least 10 characters", () => {
    const result = contactSchema.safeParse({
      ...baseValues,
      message: "too short",
    });
    expect(result.success).toBe(false);
  });

  it("accepts a fully valid payload", () => {
    const result = contactSchema.safeParse(baseValues);
    expect(result.success).toBe(true);
  });
});
