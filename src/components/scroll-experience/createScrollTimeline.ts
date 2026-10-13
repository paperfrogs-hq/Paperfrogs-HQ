import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// One timeline owns every animated property in the stage.
export function createScrollTimeline(container: HTMLElement, stage: HTMLElement) {
  const pick = gsap.utils.selector(container);
  const panels = ["intro", "thesis", "burnlink", "fusion", "resolution"].map(name => pick(`[data-story-panel="${name}"]`)[0]);
  const mobile = window.matchMedia("(max-width: 820px)").matches;
  const travel = mobile ? 3.6 : 4.25;

  gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: mobile ? 7 : 11 });
  gsap.set(pick(".story-background__field--wine"), { opacity: 0.12 });
  gsap.set(pick(".story-background__field--ember"), { opacity: 0 });

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      id: "paperfrogs-story",
      trigger: container,
      pin: stage,
      start: "top top",
      end: () => `+=${Math.round(window.innerHeight * travel)}`,
      scrub: mobile ? 0.25 : 0.65,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  const changePanel = (from: number, to: number, at: number) => {
    timeline.to(panels[from], { autoAlpha: 0, yPercent: mobile ? -4 : -7, duration: 0.22 }, at);
    timeline.to(panels[to], { autoAlpha: 1, yPercent: 0, duration: 0.26 }, at + 0.2);
  };

  timeline.addLabel("intro", 0)
    .to(pick(".story-background__field--coral"), { xPercent: 13, yPercent: -8, scale: 1.18, opacity: 0.75, duration: 1 }, 0)
    .to(pick(".story-stage__progress span"), { scaleX: 0.2, duration: 1 }, 0);

  timeline.addLabel("transformation", 1);
  changePanel(0, 1, 0.92);
  timeline.to(pick(".story-background__grid"), { opacity: 0.44, duration: 0.9 }, 1)
    .to(pick(".story-background__field--wine"), { opacity: 0.57, xPercent: -14, scale: 1.25, duration: 1 }, 1)
    .to(pick(".story-stage__progress span"), { scaleX: 0.4, duration: 1 }, 1);

  timeline.addLabel("burnlink", 2);
  changePanel(1, 2, 1.92);
  timeline.to(pick(".story-background__field--coral"), { xPercent: -18, yPercent: 10, opacity: 0.46, duration: 1 }, 2)
    .to(pick(".story-stage__progress span"), { scaleX: 0.6, duration: 1 }, 2);

  timeline.addLabel("fusion", 3);
  changePanel(2, 3, 2.92);
  timeline.to(pick(".story-background__field--ember"), { opacity: 0.68, xPercent: 13, duration: 1 }, 3)
    .to(pick(".story-stage__progress span"), { scaleX: 0.8, duration: 1 }, 3);

  timeline.addLabel("resolution", 4);
  changePanel(3, 4, 3.92);
  timeline.to(pick(".story-background__field--wine"), { opacity: 0.28, duration: 1 }, 4)
    .to(pick(".story-stage__progress span"), { scaleX: 1, duration: 1 }, 4)
    .to({}, { duration: 0.28 });

  return timeline;
}
