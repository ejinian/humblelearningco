import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";

import App from "./App";
import { AppToaster } from "./components/AppToaster";

export interface RenderResult {
  html: string;
  head: string;
}

/** Renders one route to static HTML at build time (see scripts/prerender.mjs). */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState | null } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={new QueryClient()}>
        <StaticRouter location={url}>
          <App />
          <AppToaster />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((t) => t.toString()).join("")
    : "";

  return { html, head };
}
