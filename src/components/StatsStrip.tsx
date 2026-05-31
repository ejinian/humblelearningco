import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface StatItem {
  end?: number;
  display?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { end: 125, suffix: "+", label: "Five-star reviews" },
  { end: 1000, suffix: "+", label: "Students helped" },
  { display: "1:1", label: "Always one-on-one" },
  { display: "K–College", label: "Every grade level" },
];

function AnimatedStat({ end, suffix, display }: Pick<StatItem, "end" | "suffix" | "display">) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const count = useCountUp(end ?? 0, 0, inView);

  if (display) return <span>{display}</span>;

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-border/50 bg-card">
      <div className="container py-8 md:py-10">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "md:border-l md:border-border/30" : ""}`}
            >
              <dt className="font-serif text-4xl font-black text-primary md:text-5xl">
                <AnimatedStat end={stat.end} suffix={stat.suffix} display={stat.display} />
              </dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
