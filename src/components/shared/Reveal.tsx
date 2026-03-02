import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const EASING = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: rm ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: rm ? 0.15 : 0.68, ease: EASING, delay: rm ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};