import { motion } from "framer-motion";

export const ProductHuntBadge = () => {
  return (
    <motion.a
      href="https://www.producthunt.com/products/paperfrogs-hq?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-paperfrogs-hq"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="group relative inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-white/[0.03] px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur transition-all hover:border-orange-500/60 hover:bg-white/[0.06]"
    >
      {/* Glowing backdrop effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full"
        animate={{ opacity: [0, 0.3, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)",
        }}
      />

      <span>🚀</span>
      <span className="whitespace-nowrap">Launching on ProductHunt soon!</span>
      <span className="ml-1 text-orange-400/60">→</span>
    </motion.a>
  );
};
