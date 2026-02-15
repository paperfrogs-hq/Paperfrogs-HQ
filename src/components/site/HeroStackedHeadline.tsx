import { motion } from "framer-motion";

type HeroStackedHeadlineProps = {
  lines: string[];
};

export const HeroStackedHeadline = ({ lines }: HeroStackedHeadlineProps) => {
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <motion.h1
          key={line}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 + index * 0.09 }}
          className="text-balance text-[clamp(2rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
        >
          {line}
        </motion.h1>
      ))}
    </div>
  );
};
