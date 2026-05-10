import { Card, CardContent } from "@/components/ui/card";
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
      {items.map((service) => {
        const Icon = service.icon;
        return (
          <Card
            key={service.slug}
            className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-border/70"
          >
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
                <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                  {service.detail}
                </p>
              )}

              {detailed && (
                <ul className="mt-auto pt-4 border-t border-border/60 grid grid-cols-1 gap-1 text-sm text-foreground/80">
                  {service.topics.map((topic) => (
                    <li key={topic} className="flex items-baseline gap-2">
                      <span
                        className="size-1.5 rounded-full bg-accent translate-y-[3px] shrink-0"
                        aria-hidden
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
