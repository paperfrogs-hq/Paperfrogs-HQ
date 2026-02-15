import { useEffect } from "react";
import { siteMeta } from "@/data/site";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    if (property) {
      tag.setAttribute("property", name);
    } else {
      tag.setAttribute("name", name);
    }
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export function usePageSeo({ title, description, path = "/" }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteMeta.name}`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    const canonicalUrl = `https://${siteMeta.domain}${path}`;
    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, path, title]);
}
