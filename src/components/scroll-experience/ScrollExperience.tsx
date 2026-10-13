import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createScrollTimeline } from "./createScrollTimeline";
import "./scroll-experience.css";

gsap.registerPlugin(ScrollTrigger);

const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function ScrollExperience() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useBrowserLayoutEffect(() => {
    if (!root.current || !stage.current) return;
    const container = root.current;
    const pinnedStage = stage.current;
    const media = gsap.matchMedia();
    let mounted = true;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      container.classList.add("is-enhanced");
      const context = gsap.context(() => {
        createScrollTimeline(container, pinnedStage);
      }, container);
      document.fonts.ready.then(() => {
        if (mounted) ScrollTrigger.refresh();
      });
      return () => {
        context.revert();
        container.classList.remove("is-enhanced");
      };
    });

    return () => {
      mounted = false;
      media.revert();
    };
  }, []);

  return <section className="scroll-experience" ref={root} aria-label="The Paperfrogs story">
    <div className="scroll-stage" ref={stage}>
      <div className="story-background" aria-hidden="true">
        <div className="story-background__grid" />
        <div className="story-background__field story-background__field--coral" />
        <div className="story-background__field story-background__field--wine" />
        <div className="story-background__field story-background__field--ember" />
      </div>
      <div className="story-stage__top wrap" aria-hidden="true"><span>PAPERFROGS HQ</span><span>CAPITAL / RESEARCH / BUILDING</span></div>

      <div className="story-panels wrap">
        <article className="story-panel story-panel--intro" data-story-panel="intro">
          <p className="eyebrow"><span className="signal" /> Venture capital & company building</p>
          <h1>Capital for<br />the hard parts<span className="accent">.</span></h1>
          <p className="story-panel__description">Capital, research, and hands-on building for durable infrastructure and ambitious technical ideas.</p>
          <Link className="button button-primary story-panel__cta" to="/contact">Start a conversation</Link>
          <p className="story-panel__index">01 / THE IDEA</p>
        </article>

        <article className="story-panel" data-story-panel="thesis">
          <p className="eyebrow">Our thesis / 02</p>
          <h2>The best ideas need <em>more than a check.</em></h2>
          <p className="story-panel__description">Some ideas need capital. Others need research, a first product, or a team willing to stay with the hard parts. Paperfrogs is built for all of it.</p>
          <Link className="inline-link" to="/studio">How we work</Link>
          <p className="story-panel__index">02 / THE APPROACH</p>
        </article>

        <article className="story-panel" data-story-panel="burnlink">
          <p className="eyebrow">Built at Paperfrogs / 03</p>
          <h2>Share once.<br /><em>Leave less behind.</em></h2>
          <p className="story-panel__description">BurnLink makes encrypted file sharing direct: one-time links that burn after access. BurnLink CLI brings the same workflow to the terminal.</p>
          <Link className="inline-link" to="/products/burnlink">Explore BurnLink</Link>
          <p className="story-panel__index">03 / BURNLINK</p>
        </article>

        <article className="story-panel" data-story-panel="fusion">
          <p className="eyebrow">In active development / 04</p>
          <h2>Make audio<br /><em>accountable.</em></h2>
          <p className="story-panel__description">Fusion is developing cryptographic audio provenance infrastructure, with verification paths for media workflows.</p>
          <Link className="inline-link" to="/products/fusion">Explore Fusion</Link>
          <p className="story-panel__index">04 / FUSION</p>
        </article>

        <article className="story-panel story-panel--final" data-story-panel="resolution">
          <p className="eyebrow">The work continues / 05</p>
          <h2>Where research<br /><em>becomes real.</em></h2>
          <p className="story-panel__description">One platform for infrastructure, useful software, and ideas worth building all the way through.</p>
          <Link className="button button-primary story-panel__cta" to="/products">See the work</Link>
          <p className="story-panel__index">05 / PAPERFROGS</p>
        </article>
      </div>

      <div className="story-stage__bottom wrap" aria-hidden="true"><span>SCROLL TO EXPLORE</span><div className="story-stage__progress"><span /></div><span>DHAKA · WORKING GLOBALLY</span></div>
    </div>
  </section>;
}
