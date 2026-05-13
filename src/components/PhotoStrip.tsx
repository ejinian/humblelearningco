import { photos } from "@/lib/photos";

interface PhotoStripProps {
  /** Optional: how many photos to show (defaults to 4 for a clean strip). */
  count?: number;
}

export function PhotoStrip({ count = 4 }: PhotoStripProps) {
  const items = photos.slice(0, count);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {items.map((p, i) => (
        <div
          key={p.src}
          className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-border bg-muted"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
