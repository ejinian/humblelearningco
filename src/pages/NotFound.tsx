import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl font-semibold">
        That page doesn't exist.
      </h1>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        The link may be old, or you may have typed it wrong. Head back to the
        home page and we'll help from there.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild variant="accent">
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
