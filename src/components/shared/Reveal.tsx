import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
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
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateXTarget = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [6, 0, -6],
  );
  const scaleTarget = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.985, 1, 0.985],
  );
  const zTarget = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [10, 0, 10],
  );

  const rotateX = useSpring(rotateXTarget, { stiffness: 140, damping: 24, mass: 0.35 });
  const scale = useSpring(scaleTarget, { stiffness: 140, damping: 24, mass: 0.35 });
  const z = useSpring(zTarget, { stiffness: 140, damping: 24, mass: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reducedMotionValue(shouldReduceMotion, y) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: VIEWPORT_REVEAL_AMOUNT }}
      transition={{
        duration: reducedMotionDuration(shouldReduceMotion, MOTION_DURATION.standard),
        ease: EASING_PRIMARY,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      style={{
        willChange: "transform, opacity",
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        rotateX,
        scale,
        z,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
