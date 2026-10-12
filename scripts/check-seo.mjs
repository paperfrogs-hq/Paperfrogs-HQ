import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const titles = new Set();
const descriptions = new Set();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const url of urls) {
  const pathname = new URL(url).pathname;
  const filename = pathname === "/" ? path.join(dist, "index.html") : path.join(dist, pathname.slice(1), "index.html");
  assert(fs.existsSync(filename), `Missing prerendered page: ${pathname}`);
  const html = fs.readFileSync(filename, "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  const jsonLd = html.match(/<script type="application\/ld\+json" data-page-jsonld>([\s\S]*?)<\/script>/)?.[1];
  assert(title && !titles.has(title), `Missing or duplicate title: ${pathname}`);
  assert(description && !descriptions.has(description), `Missing or duplicate description: ${pathname}`);
  assert(canonical === url, `Canonical does not match sitemap: ${pathname}`);
  assert((html.match(/<h1[\s>]/g) || []).length === 1, `Expected one H1: ${pathname}`);
  assert(html.includes('content="index,follow,max-image-preview:large"'), `Missing index instruction: ${pathname}`);
  assert(html.includes('name="google-site-verification"'), `Missing site verification: ${pathname}`);
  assert(!/baseSalary|salary|৳/i.test(html), `Salary details found: ${pathname}`);
  assert(jsonLd, `Missing structured data: ${pathname}`);
  const schemas = JSON.parse(jsonLd);
  const jobCount = schemas.filter(item => item["@type"] === "JobPosting").length;
  assert(jobCount === (pathname.startsWith("/careers/") && pathname !== "/careers/" ? 1 : 0), `JobPosting on wrong page: ${pathname}`);
  titles.add(title);
  descriptions.add(description);
}

const notFound = fs.readFileSync(path.join(dist, "404.html"), "utf8");
assert(notFound.includes('content="noindex,follow"'), "404 page must be noindex");
assert(!notFound.includes('rel="canonical"'), "404 page must not have a canonical URL");
console.log(`SEO checks passed for ${urls.length} indexable pages and 404`);
