import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/site";
import { FeaturedTile } from "@/components/site/FeaturedTile";
import { Reveal } from "@/components/shared/Reveal";
import { MOTION_DURATION } from "@/lib/motion";

type FeaturedProjectsSliderProps = {
  projects: Project[];
};

export const FeaturedProjectsSlider = ({ projects }: FeaturedProjectsSliderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const getSlideDistance = () => {
    const container = containerRef.current;
    if (!container) {
      return 360;
    }

    const firstItem = container.firstElementChild as HTMLElement | null;
    if (!firstItem) {
      return 360;
    }

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "16");
    return firstItem.offsetWidth + gap;
  };

  const updateScrollState = () => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const maxLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 4);
    setCanScrollRight(container.scrollLeft < maxLeft - 4);
  };

  const scrollBySlide = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const distance = getSlideDistance() * (direction === "right" ? 1 : -1);
    container.scrollBy({ left: distance, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollState();
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const onScroll = () => updateScrollState();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      const container = containerRef.current;
      if (!container || isHovered) {
        return;
      }

      const maxLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxLeft - 8) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: getSlideDistance(), behavior: "smooth" });
      }
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isHovered, shouldReduceMotion]);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="mb-4 flex items-center justify-end gap-2">
        <motion.button
          type="button"
          onClick={() => scrollBySlide("left")}
          disabled={!canScrollLeft}
          aria-label="Previous project"
          className="inline-flex items-center justify-center border-b border-border px-1.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 ease-out hover:border-coral hover:text-coral disabled:cursor-not-allowed disabled:opacity-40"
          whileHover={shouldReduceMotion || !canScrollLeft ? {} : { y: -1 }}
          whileTap={shouldReduceMotion || !canScrollLeft ? {} : { scale: 0.98 }}
          transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </motion.button>
        <motion.button
          type="button"
          onClick={() => scrollBySlide("right")}
          disabled={!canScrollRight}
          aria-label="Next project"
          className="inline-flex items-center justify-center border-b border-border px-1.5 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-200 ease-out hover:border-coral hover:text-coral disabled:cursor-not-allowed disabled:opacity-40"
          whileHover={shouldReduceMotion || !canScrollRight ? {} : { y: -1 }}
          whileTap={shouldReduceMotion || !canScrollRight ? {} : { scale: 0.98 }}
          transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </motion.button>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-2"
        aria-label="Current projects"
      >
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05} className="w-[300px] shrink-0 snap-start sm:w-[380px]">
            <FeaturedTile project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
