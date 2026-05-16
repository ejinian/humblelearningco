import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import App from "@/App";

function renderApp(initialPath: string) {
  const client = new QueryClient();
  return render(
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <MemoryRouter initialEntries={[initialPath]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}

describe("App routes", () => {
  it("renders the hero on the home page", () => {
    renderApp("/");
    // Hero headline split across two lines, asserting on the highlighted half.
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /personalized learning.*proven results/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the contact form heading on /contact", () => {
    renderApp("/contact");
    expect(
      screen.getByRole("heading", { level: 1, name: /tell us about your student/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email/i)).toBeInTheDocument();
  });

  it("renders the 404 page for unknown routes", () => {
    renderApp("/totally-not-a-page");
    expect(
      screen.getByRole("heading", { name: /that page doesn't exist/i }),
    ).toBeInTheDocument();
  });
});
