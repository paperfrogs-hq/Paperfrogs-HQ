import { SiteShell } from "@/components/layout/SiteShell";
import { siteMeta } from "@/data/site";
import { usePageSeo } from "@/hooks/usePageSeo";

const questions = [
  { title: "Infrastructure that holds up", body: "Build systems with clear boundaries, careful failure paths, and room to grow." },
  { title: "Trust you can verify", body: "Explore security and provenance where the technical details really matter." },
  { title: "Tools people return to", body: "Turn useful ideas into simple, dependable experiences for developers and teams." },
];

export default function Careers() {
  usePageSeo({ title: "Careers", description: "Work with Paperfrogs on infrastructure, security, and useful tools.", path: "/careers" });
  return <SiteShell>
    <div className="page-hero wrap"><p className="eyebrow">Careers / 004</p><div className="page-hero-grid"><h1>Build what<br/><em>comes next.</em></h1><p>We make room for people who are curious, technically grounded, and willing to stay with a difficult problem until it works.</p></div><div className="page-hero-foot"><span>Remote first · Dhaka based</span><span>Open conversations welcome</span></div></div>
    <section className="wrap career-intro"><div><p className="eyebrow">The invitation</p><h2>Real work.<br/><em>Direct conversations.</em></h2></div><p>There is no application portal. Write to the founders, show us something you have made, and tell us which part of Paperfrogs you would want to move forward.</p></section>
    <section className="career-roles"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">The work</p><h2>Problems worth solving.</h2></div><p className="section-intro">These are directions we care about, not a fixed list of job titles.</p></div><div className="role-list">{questions.map((item,i)=><div key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><span className="role-arrow" aria-hidden="true">↗</span></div>)}</div></div></section>
    <section className="wrap apply-section"><div><p className="eyebrow">How to reach us</p><h2>Three sentences.<br/>One link.<br/><em>Your voice.</em></h2></div><div><ol><li><span>01</span>Tell us what you want to work on here.</li><li><span>02</span>Share a repository, write-up, or something you have shipped.</li><li><span>03</span>Attach a CV if it helps tell your story.</li></ol><a className="primary-link" href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Working with Paperfrogs")}`}>Email the founders <span>↗</span></a><p className="apply-small">{siteMeta.email} · We read every note ourselves.</p></div></section>
  </SiteShell>;
}
