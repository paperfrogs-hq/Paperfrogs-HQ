import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public", "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/paperfrogs\.dev([^<]*)<\/loc>/g)].map(match => match[1] || "/");
const { renderPage } = await import(path.join(dist, "server", "entry-server.js"));

const escapeHtml = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const meta = (attribute, key, value) => `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;

for (const route of [...paths, "/404"]) {
    const { body, meta: page, schema } = renderPage(route);
    const url = `https://paperfrogs.dev${route}`;
    const image = "https://paperfrogs.dev/Paperfrogs_HQ_Logo_MediaKit.jpg";
    const tags = [
      `<title>${escapeHtml(page.title)}</title>`,
      meta("name", "description", page.description),
      meta("name", "robots", page.noindex ? "noindex,follow" : "index,follow,max-image-preview:large"),
      ...(page.noindex ? [] : [`<link rel="canonical" href="${url}" />`]),
      meta("property", "og:title", page.title),
      meta("property", "og:description", page.description),
      meta("property", "og:url", url),
      meta("property", "og:image", image),
      meta("name", "twitter:title", page.title),
      meta("name", "twitter:description", page.description),
      meta("name", "twitter:image", image),
      ...(schema.length ? [`<script type="application/ld+json" data-page-jsonld>${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`] : []),
    ].join("\n    ");

    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\s+name="description"[\s\S]*?\/>/, "")
      .replace(/<link rel="canonical"[^>]*>/, "")
      .replace(/<meta name="robots"[^>]*>/, "")
      .replace(/<meta\s+(?:property="og:(?:title|description|url|image)"|name="twitter:(?:title|description|image)")[\s\S]*?\/>/g, "")
      .replace("</head>", `    ${tags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    const destination = route === "/" ? path.join(dist, "index.html") : route === "/404" ? path.join(dist, "404.html") : path.join(dist, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, html);
}
console.log(`Prerendered ${paths.length} indexable pages plus 404`);
fs.rmSync(path.join(dist, "server"), { recursive: true, force: true });
