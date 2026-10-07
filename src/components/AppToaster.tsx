import { Toaster } from "sonner";

/** Shared by the client entry and the prerender entry so hydration markup matches. */
export function AppToaster() {
  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "bg-card text-card-foreground border border-border shadow-md",
        },
      }}
    />
  );
}
