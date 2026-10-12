const fs = require("fs");
const path = require("path");

const projects = [
  { slug: "fusion" },
  { slug: "burnlink" },
  { slug: "burnlink-cli" },
  { slug: "apc" },
  { slug: "fusion-verifier" },
];

const routes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/studio", changefreq: "monthly", priority: 0.8 },
  { path: "/products", changefreq: "weekly", priority: 0.9 },
  { path: "/team", changefreq: "monthly", priority: 0.7 },
  { path: "/careers", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
  { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", changefreq: "yearly", priority: 0.3 },
];

const productRoutes = projects.map((project) => ({
  path: `/products/${project.slug}`,
  changefreq: "monthly",
  priority: 0.7,
  lastmod: new Date().toISOString().split("T")[0],
}));

const allRoutes = [...routes, ...productRoutes];

function generateSitemap() {
  const baseUrl = "https://paperfrogs.dev";
  const today = new Date().toISOString().split("T")[0];

  const urls = allRoutes.map((route) => {
    const lastmod = route.lastmod || today;
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}

const sitemap = generateSitemap();

const publicDir = path.join(__dirname, "..", "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemap);
console.log("Sitemap generated at:", sitemapPath);
console.log(`Total URLs: ${allRoutes.length}`);