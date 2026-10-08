// Prerenders every route in public/sitemap.xml (plus the 404 page) to static
// HTML so crawlers get real content, titles and schema without running JS.
// Runs after `vite build` and the SSR build of src/entry-server.tsx.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const { render } = await import(pathToFileURL(path.join(root, "dist-server/entry-server.js")).href);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const NOT_FOUND_MARKER = "That page doesn&#x27;t exist.";

/** Drops template head tags that the page's Helmet output replaces. */
function mergeHead(html, head) {
  let out = html;
  if (head.includes("<title")) out = out.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  for (const [, attr, key] of head.matchAll(/<meta[^>]*?\b(name|property)="([^"]+)"/g)) {
    const re = new RegExp(`<meta\\s+${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>\\s*`, "g");
    out = out.replace(re, "");
  }
  // og:url should match the page's canonical, not the homepage default in index.html.
  const canonical = head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  if (canonical) out = out.replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonical}"`);
  return out.replace("</head>", `${head}\n  </head>`);
}

function page(url) {
  const { html, head } = render(url);
  return { html, doc: mergeHead(template, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`) };
}

const failures = [];
for (const route of routes) {
  const { html, doc } = page(route);
  if (html.includes(NOT_FOUND_MARKER)) failures.push(route);
  // Folder-per-route (about/index.html) so the host serves /about without cleanUrls,
  // which would also 308 real .html files like the Google verification files.
  const file = path.join(distDir, route.replace(/^\/|\/$/g, ""), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, doc);
}

fs.writeFileSync(path.join(distDir, "404.html"), page("/__not-found__").doc);

if (failures.length) {
  console.error(`Prerender: these sitemap URLs rendered the 404 page:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log(`Prerendered ${routes.length} routes + 404.html`);
