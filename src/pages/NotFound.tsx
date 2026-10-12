import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { usePageSeo } from "@/hooks/usePageSeo";
export default function NotFound(){usePageSeo("/404");return <SiteShell><section className="wrap not-found"><p className="eyebrow">404 / Lost your way?</p><h1>Nothing<br/><em>here yet.</em></h1><p>The page may have moved, or the address may need another look.</p><Link className="primary-link" to="/">Back to home</Link></section></SiteShell>}
