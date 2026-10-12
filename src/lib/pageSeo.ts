import { jobs } from "@/data/jobs";
import { founders, projects, siteMeta } from "@/data/site";
import {
  getBreadcrumbSchema,
  getJobPostingSchema,
  getProductSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seoSchemas";

const base = `https://${siteMeta.domain}`;
const brand = siteMeta.name;
const canonicalUrl = (path: string) => path === "/" ? `${base}/` : `${base}${path}/`;

type PageMeta = { title: string; description: string; breadcrumb: string };

const pages: Record<string, PageMeta> = {
  "/": {
    title: `${brand} | Venture Capital & Company Building`,
    description: "Paperfrogs is a Dhaka-based venture capital and company-building platform. We back and build infrastructure, security products, developer tools, and research-led ideas.",
    breadcrumb: "Home",
  },
  "/studio": {
    title: `About Paperfrogs | Venture Capital & Company Building`,
    description: "Learn how Paperfrogs combines capital, research, and hands-on building across infrastructure, security, and useful software from Dhaka, Bangladesh.",
    breadcrumb: "About",
  },
  "/products": {
    title: `Products & Research | BurnLink, Fusion and More | ${brand}`,
    description: "Explore Paperfrogs products and research: BurnLink encrypted one-time sharing, BurnLink CLI, Fusion audio provenance, and early-stage audio tools.",
    breadcrumb: "Products",
  },
  "/team": {
    title: `Founders | Niloy and Joy Majumder | ${brand}`,
    description: "Meet Paperfrogs founders Niloy Majumder and Joy G. Majumdar, who work across platform architecture, security, and research-to-production systems.",
    breadcrumb: "Founders",
  },
  "/careers": {
    title: `Remote Careers in Bangladesh | ${brand}`,
    description: "Explore remote engineering, product design, and content roles at Paperfrogs. Read each opening and apply directly by email. Open to Bangladesh-based applicants.",
    breadcrumb: "Careers",
  },
  "/contact": {
    title: `Contact Paperfrogs | Ideas, Partnerships and Careers`,
    description: "Contact Paperfrogs HQ in Dhaka about technical ideas, partnerships, products, or careers. Write directly to hello@paperfrogs.dev.",
    breadcrumb: "Contact",
  },
  "/privacy": {
    title: `Privacy Policy | ${brand}`,
    description: "Read the Paperfrogs HQ privacy policy and how the website handles personal and usage information.",
    breadcrumb: "Privacy Policy",
  },
  "/terms": {
    title: `Terms of Use | ${brand}`,
    description: "Read the terms governing use of the Paperfrogs HQ website.",
    breadcrumb: "Terms of Use",
  },
};

const productMeta: Record<string, Pick<PageMeta, "title" | "description">> = {
  fusion: {
    title: `Fusion | Audio Provenance Infrastructure | ${brand}`,
    description: "Fusion is Paperfrogs' active audio provenance project, developing cryptographic verification paths for media workflows. See its current stage and approach.",
  },
  burnlink: {
    title: `BurnLink | Encrypted One-Time File Sharing | ${brand}`,
    description: "BurnLink lets you share sensitive files with end-to-end encryption and one-time links that burn after access. Explore the live Paperfrogs product.",
  },
  "burnlink-cli": {
    title: `BurnLink CLI | One-Time File Sharing from the Terminal`,
    description: "BurnLink CLI brings encrypted, one-time file sharing to the terminal. Explore the npm release, installation command, and project details.",
  },
  apc: {
    title: `APC | Audio Watermarking Research | ${brand}`,
    description: "APC is early Paperfrogs research into watermark encoding, retrieval, and auditability for audio authenticity and provenance.",
  },
  "fusion-verifier": {
    title: `Fusion Verifier | Audio Provenance Validation | ${brand}`,
    description: "Fusion Verifier is an early Paperfrogs project for detecting and validating audio provenance claims. Read about its current development stage.",
  },
};

export function getPageSeo(path: string) {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  if (normalizedPath === "/404") return {
    title: `Page not found | ${brand}`,
    description: "The page you requested could not be found. Return to Paperfrogs HQ to explore our work and current roles.",
    path: normalizedPath,
    canonical: `${base}/404`,
    schema: [] as object[],
    noindex: true,
  };
  const job = jobs.find(item => normalizedPath === `/careers/${item.slug}`);
  const product = projects.find(item => normalizedPath === `/products/${item.slug}`);
  const page = pages[normalizedPath];
  if (!page && !job && !product) return null;

  const title = job
    ? `${job.title} | Remote in Bangladesh | ${brand}`
    : product
      ? productMeta[product.slug].title
      : page.title;
  const description = job
    ? `${job.summary} This remote ${job.type.toLowerCase()} role is open to Bangladesh-based applicants. Read the work and apply to Paperfrogs.`
    : product
      ? productMeta[product.slug].description
      : page.description;
  const breadcrumbs = normalizedPath === "/"
    ? [{ name: "Home", url: `${base}/` }]
    : [
      { name: "Home", url: `${base}/` },
      ...(job ? [{ name: "Careers", url: `${base}/careers/` }] : product ? [{ name: "Products", url: `${base}/products/` }] : []),
      { name: job?.title || product?.name || page.breadcrumb, url: canonicalUrl(normalizedPath) },
    ];

  const schema: object[] = [getBreadcrumbSchema(breadcrumbs)];
  if (normalizedPath === "/" || normalizedPath === "/studio") schema.unshift(organizationSchema, websiteSchema);
  if (normalizedPath === "/team") {
    schema.push(...founders.map(person => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: person.name,
      jobTitle: "Founder",
      worksFor: { "@id": `${base}/#organization` },
      url: `${base}/team`,
      sameAs: [person.links.linkedin, person.links.github],
      description: person.bio,
    })));
  }
  if (job) schema.push(getJobPostingSchema(job));
  if (product) schema.push(getProductSchema(product));

  return { title, description, path: normalizedPath, canonical: canonicalUrl(normalizedPath), schema, noindex: false };
}
