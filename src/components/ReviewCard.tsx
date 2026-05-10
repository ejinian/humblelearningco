import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import type { Review } from "@/lib/reviews";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

/** Initials for the reviewer avatar circle. Handles "First Last" and single names. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardContent className="flex flex-col gap-4 p-6 pt-6 flex-1">
        <Quote
          className="size-6 text-accent shrink-0"
          aria-hidden="true"
        />

        <p className="text-foreground/90 leading-relaxed text-pretty flex-1">
          {review.body}
          {review.truncated && <span className="text-muted-foreground"> …</span>}
        </p>

        <div className="flex items-center gap-3 pt-2 border-t border-border/60">
          <div
            className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-semibold shrink-0"
            aria-hidden="true"
          >
            {initials(review.name)}
          </div>
          <div className="min-w-0">
            <div className="font-medium text-primary truncate">{review.name}</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <StarRating value={review.stars} size={12} />
              <span>·</span>
              <span>{review.age}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
