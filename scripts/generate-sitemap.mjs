import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectSlugs = ["fusion", "burnlink", "burnlink-cli", "apc", "fusion-verifier"];
const jobSlugs = ["full-stack-web-app-developer-intern", "platform-engineer", "developer-tools-engineer", "security-engineer", "product-designer", "content-and-communications-manager"];
const paths = [
  "/", "/studio", "/products", "/team", "/careers", "/contact", "/privacy", "/terms",
  ...projectSlugs.map(slug => `/products/${slug}`),
  ...jobSlugs.map(slug => `/careers/${slug}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(page => `  <url><loc>https://paperfrogs.dev${page === "/" ? "/" : `${page}/`}</loc></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
console.log(`Sitemap generated with ${paths.length} URLs`);
