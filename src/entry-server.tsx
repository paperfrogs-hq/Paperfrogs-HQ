import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { getPageSeo } from "./lib/pageSeo";

export function renderPage(path: string) {
  const seo = getPageSeo(path);
  if (!seo) throw new Error(`Missing SEO content for ${path}`);
  const body = renderToString(<StaticRouter location={path}><AppRoutes /></StaticRouter>);
  return { body, meta: seo, schema: seo.schema };
}
