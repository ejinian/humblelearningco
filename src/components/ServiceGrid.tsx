import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { services, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

interface ServiceGridProps {
  items?: Service[];
  className?: string;
  /** When true, renders the longer "detail" copy under the blurb. */
  detailed?: boolean;
}

export function ServiceGrid({
  items = services,
  className,
  detailed = false,
}: ServiceGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((service, i) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.slug} delay={i * 70}>
            <Card className="group h-full border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_14px_38px_hsl(var(--primary)/0.09)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                <div className="size-11 rounded-md bg-accent/15 text-accent grid place-items-center ring-1 ring-accent/30 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="size-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {service.blurb}
                  </p>
                </div>

                {detailed && (
                  <ul className="mt-auto pt-4 border-t border-border/60 flex flex-wrap gap-x-3 gap-y-1.5">
                    {service.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-xs font-medium text-foreground/65 flex items-center gap-1.5"
                      >
                        <span className="size-1 rounded-full bg-accent/70 shrink-0" aria-hidden />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}

                {service.subjectSlug && (
                  <div className="mt-auto pt-3">
                    <Link
                      to={`/${service.subjectSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      In-depth guide
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
