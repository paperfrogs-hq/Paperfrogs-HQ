import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { founders } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function Team() {
  usePageSeo({ title: "Founders", description: "Meet Niloy Majumder and Joy G. Majumdar, the founders of Paperfrogs HQ.", path: "/team" });
  return <SiteShell>
    <div className="page-hero wrap"><p className="eyebrow">Founders / 003</p><div className="page-hero-grid"><h1>Meet the<br/><em>founders.</em></h1><p>Paperfrogs is led by two people with complementary strengths in infrastructure, security, and turning research into working systems.</p></div><div className="page-hero-foot"><span>Niloy & Joy</span><span>Based in Dhaka · Working globally</span></div></div>
    <section className="wrap founder-section founder-section-simple"><div className="founder-intro"><p className="eyebrow">The people behind Paperfrogs</p><p>Close to the work, from first question to the systems people use.</p></div>{founders.map((person,i)=><article className="founder-row" key={person.name}><div className="founder-number"><span>0{i+1}</span><small>Founder / Paperfrogs</small></div><div className="founder-copy"><span className="eyebrow">0{i+1} / Founder</span><h2>{person.name}</h2><p>{person.bio}</p><div><a href={person.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={person.links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></article>)}</section>
    <section className="team-note"><div className="wrap"><p className="eyebrow">Working together</p><h2>Good work is<br/><em>collaborative.</em></h2><div><p>We work with people who care about the problem, the craft, and the outcome. Clear thinking and thoughtful execution matter more than a polished pitch.</p><Link className="text-link" to="/careers">Work with us <span>↗</span></Link></div></div></section>
  </SiteShell>;
}
