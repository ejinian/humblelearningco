import fs from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { act } from "@testing-library/react";
import { hydrateRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import App from "@/App";
import { AppToaster } from "@/components/AppToaster";
import { render } from "@/entry-server";

const sitemap = fs.readFileSync(path.resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

describe("prerendered pages", () => {
  it.each(routes)("%s renders real content and hydrates without mismatches", async (route) => {
    // Head tags are checked against the build output; under jsdom Helmet writes to document.head instead.
    const { html } = render(route);
    expect(html).not.toContain("That page doesn&#x27;t exist.");

    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});

    const root = await act(async () =>
      hydrateRoot(
        container,
        <HelmetProvider>
          <QueryClientProvider client={new QueryClient()}>
            <MemoryRouter initialEntries={[route]}>
              <App />
              <AppToaster />
            </MemoryRouter>
          </QueryClientProvider>
        </HelmetProvider>,
      ),
    );

    expect(errors.mock.calls.map((c) => String(c[0]))).toEqual([]);
    errors.mockRestore();
    act(() => root.unmount());
    container.remove();
  });
});
