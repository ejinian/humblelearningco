import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold font-sans">
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "mt-3 text-balance",
          as === "h1"
            ? "text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            : "text-3xl md:text-4xl font-semibold leading-tight",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
