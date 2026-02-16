import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import {
  EASING_PRIMARY,
  MOTION_DURATION,
  MOTION_OFFSET,
  VIEWPORT_REVEAL_AMOUNT,
  reducedMotionDuration,
  reducedMotionValue,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export const Reveal = ({ children, className, delay = 0, y = MOTION_OFFSET.standard }: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotionValue(shouldReduceMotion, y) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: VIEWPORT_REVEAL_AMOUNT }}
      transition={{
        duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.standard),
        ease: EASING_PRIMARY,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
