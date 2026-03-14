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

export const FeaturedProjectsSlider = ({
  projects,
}: FeaturedProjectsSliderProps) => {
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
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-2"
        aria-label="Current projects"
      >
        {/* Projects hidden for cleaner layout */}
      </div>
    </div>
  );
};
