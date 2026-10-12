import { siteMeta, type Project } from "@/data/site";
import type { Job } from "@/data/jobs";

const baseUrl = `https://${siteMeta.domain}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: siteMeta.name,
  alternateName: "Paperfrogs",
  url: baseUrl,
  logo: `${baseUrl}/Paperfrogs_HQ_Logo_MediaKit.jpg`,
  sameAs: [siteMeta.links.github, siteMeta.links.linkedin, siteMeta.links.x],
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  email: siteMeta.email,
  description: "Paperfrogs is a venture capital and company-building platform for infrastructure, useful software, and research-led ideas.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: siteMeta.name,
  url: baseUrl,
  publisher: { "@id": `${baseUrl}/#organization` },
};

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getJobPostingSchema = (job: Job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: `<p>${job.introduction}</p><h2>What you will do</h2><ul>${job.work.map(item => `<li>${item}</li>`).join("")}</ul><h2>What we are looking for</h2><ul>${job.fit.map(item => `<li>${item}</li>`).join("")}</ul><p>Remote role open to applicants based in Bangladesh. Apply by email at ${siteMeta.email}.</p>`,
  identifier: { "@type": "PropertyValue", name: siteMeta.name, value: job.slug },
  datePosted: job.datePosted,
  employmentType: job.employmentType,
  hiringOrganization: {
    "@type": "Organization",
    name: siteMeta.name,
    sameAs: baseUrl,
    logo: `${baseUrl}/Paperfrogs_HQ_Logo_MediaKit.jpg`,
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: { "@type": "Country", name: "Bangladesh" },
  directApply: false,
  url: `${baseUrl}/careers/${job.slug}/`,
});

export const getProductSchema = (product: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: product.name,
  description: product.summary,
  url: `${baseUrl}/products/${product.slug}/`,
  creator: { "@id": `${baseUrl}/#organization` },
  sameAs: Object.values(product.links ?? {}).filter(Boolean),
});
