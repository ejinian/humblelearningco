import { photos } from "@/lib/photos";

interface PhotoStripProps {
  /** Optional: how many photos to show (defaults to 4 for a clean strip). */
  count?: number;
}

export function PhotoStrip({ count = 4 }: PhotoStripProps) {
  const items = photos.slice(0, count);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((p, i) => (
        <div
          key={p.src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary shadow-sm ring-1 ring-border"
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
