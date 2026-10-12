import { useEffect } from "react";
import { siteMeta } from "@/data/site";
import { getPageSeo } from "@/lib/pageSeo";

const shareImage = `https://${siteMeta.domain}/Paperfrogs_HQ_Logo_MediaKit.jpg`;

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function usePageSeo(path: string) {
  useEffect(() => {
    const seo = getPageSeo(path);
    const title = seo?.title ?? `Page not found | ${siteMeta.name}`;
    const description = seo?.description ?? "The page you requested could not be found.";
    const url = seo?.canonical ?? `https://${siteMeta.domain}${path}`;
    document.title = title;

    setMeta("description", description);
    setMeta("robots", seo && !seo.noindex ? "index,follow,max-image-preview:large" : "noindex,follow");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", url, true);
    setMeta("og:image", shareImage, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", shareImage);

    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (seo && !seo.noindex) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    } else {
      canonical?.remove();
    }

    let jsonLd = document.head.querySelector("script[data-page-jsonld]") as HTMLScriptElement | null;
    if (!seo || seo.schema.length === 0) {
      jsonLd?.remove();
    } else {
      if (!jsonLd) {
        jsonLd = document.createElement("script");
        jsonLd.type = "application/ld+json";
        jsonLd.dataset.pageJsonld = "";
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(seo.schema);
    }
  }, [path]);
}
