import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const subjectOptions = [
  "Math (K-12)",
  "Math (College)",
  "Reading & Writing",
  "Science",
  "Test Prep (SAT / ACT / AP)",
  "Homework Help",
  "Study Skills & Organization",
  "Other / Multiple",
] as const;

const gradeOptions = [
  "Elementary (K-5)",
  "Middle School (6-8)",
  "High School (9-12)",
  "College",
  "Adult learner",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80, "That looks a little long — please shorten it."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("That email doesn't look right."),
  phone: z
    .string()
    .max(40)
    .optional()
    .or(z.literal("")),
  studentName: z.string().max(80).optional().or(z.literal("")),
  grade: z
    .enum(gradeOptions, {
      errorMap: () => ({ message: "Pick the closest grade level." }),
    })
    .optional(),
  subject: z.enum(subjectOptions, {
    errorMap: () => ({ message: "Pick a subject so we can prepare." }),
  }),
  message: z
    .string()
    .min(10, "Tell us a bit more — what's the student working on?")
    .max(2000, "Please trim this to 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/** Builds a mailto: URL from form values. Exported for unit tests. */
export function buildMailtoHref(
  values: ContactFormValues,
  to: string = site.contact.email,
): string {
  const subject = `Tutoring inquiry — ${values.subject}`;
  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.studentName ? `Student: ${values.studentName}` : null,
    values.grade ? `Grade: ${values.grade}` : null,
    `Subject area: ${values.subject}`,
    "",
    values.message,
  ].filter(Boolean);
  const body = lines.join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      studentName: "",
      subject: undefined,
      grade: undefined,
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const href = buildMailtoHref(values);
    // Open the user's mail client with a prefilled draft.
    window.location.href = href;
    toast.success("Opening your email app…", {
      description:
        "If nothing opens, copy your message to " + site.contact.email,
    });
    reset();
  };

  const fieldError = (key: keyof ContactFormValues) =>
    errors[key]?.message as string | undefined;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-6",
        className,
      )}
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          htmlFor="cf-name"
          error={fieldError("name")}
          required
        >
          <Input
            id="cf-name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>

        <Field
          label="Email"
          htmlFor="cf-email"
          error={fieldError("email")}
          required
        >
          <Input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>

        <Field label="Phone (optional)" htmlFor="cf-phone" error={fieldError("phone")}>
          <Input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
        </Field>

        <Field
          label="Student name (if not you)"
          htmlFor="cf-student"
          error={fieldError("studentName")}
        >
          <Input
            id="cf-student"
            placeholder="Optional"
            {...register("studentName")}
          />
        </Field>

        <Field label="Grade level" htmlFor="cf-grade" error={fieldError("grade")}>
          <select
            id="cf-grade"
            className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            aria-invalid={!!errors.grade}
            {...register("grade")}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {gradeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Subject"
          htmlFor="cf-subject"
          error={fieldError("subject")}
          required
        >
          <select
            id="cf-subject"
            className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            aria-invalid={!!errors.subject}
            {...register("subject")}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="What's going on?"
        htmlFor="cf-message"
        error={fieldError("message")}
        required
      >
        <Textarea
          id="cf-message"
          rows={5}
          placeholder="A few sentences about the student, what they're struggling with, and what you'd like out of tutoring."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground">
          Submitting opens your email app with the message prefilled. You can
          also email us directly at{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="prose-link text-primary"
          >
            {site.contact.email}
          </a>
          .
        </p>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="sm:ml-auto"
        >
          <Send className="size-4" />
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
