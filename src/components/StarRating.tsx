import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value?: number;
  outOf?: number;
  size?: number;
  className?: string;
  /** Adds an aria-label like "5 out of 5 stars". */
  ariaLabel?: string;
}

export function StarRating({
  value = 5,
  outOf = 5,
  size = 18,
  className,
  ariaLabel,
}: StarRatingProps) {
  return (
    <span
      role="img"
      aria-label={ariaLabel ?? `${value} out of ${outOf} stars`}
      className={cn("inline-flex items-center gap-0.5 text-accent", className)}
    >
      {Array.from({ length: outOf }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          // Filled if its index is below the integer floor of value.
          fill={i < Math.floor(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
