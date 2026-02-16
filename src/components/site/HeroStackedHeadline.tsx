import { motion, useReducedMotion } from "framer-motion";
import {
  EASING_PRIMARY,
  MOTION_DURATION,
  MOTION_OFFSET,
  MOTION_STAGGER,
  reducedMotionDuration,
  reducedMotionValue,
} from "@/lib/motion";

type HeroStackedHeadlineProps = {
  lines: string[];
  delay?: number;
};

export const HeroStackedHeadline = ({ lines, delay = 0 }: HeroStackedHeadlineProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: shouldReduceMotion ? 0 : delay,
            staggerChildren: shouldReduceMotion ? 0 : MOTION_STAGGER.heroLine,
          },
        },
      }}
    >
      {lines.map((line, index) => (
        <motion.h1
          key={line}
          variants={{
            hidden: {
              opacity: 0,
              y: reducedMotionValue(shouldReduceMotion, MOTION_OFFSET.large),
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.hero),
                ease: EASING_PRIMARY,
              },
            },
          }}
          style={{ willChange: "transform, opacity" }}
          className="text-balance text-[clamp(2rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
        >
          {line}
        </motion.h1>
      ))}
    </motion.div>
  );
};
