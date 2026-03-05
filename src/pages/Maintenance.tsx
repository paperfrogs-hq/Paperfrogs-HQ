import { motion, useReducedMotion } from "framer-motion";

const EASING = [0.22, 1, 0.36, 1] as const;

const Maintenance = () => {
  const rm = useReducedMotion();
  const duration = rm ? 0.1 : 0.7;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, hsl(16 85% 58% / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div className="noise-bg pointer-events-none absolute inset-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-xl"
        initial={{ opacity: 0, y: rm ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, ease: EASING }}
      >
        {/* Logo */}
        <motion.img
          src="/paperfrogs-logo-nav.png"
          alt="Paperfrogs"
          className="w-12 h-12 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration, delay: 0.1, ease: EASING }}
        />

        {/* Badge */}
        <motion.span
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.22em] border"
          style={{
            borderColor: "hsl(16 85% 58% / 0.35)",
            color: "hsl(16 90% 68%)",
            background: "hsl(16 85% 58% / 0.06)",
          }}
          initial={{ opacity: 0, y: rm ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2, ease: EASING }}
        >
          Redesigning
        </motion.span>

        {/* Heading */}
        <motion.h1
          className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-4"
          initial={{ opacity: 0, y: rm ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.25, ease: EASING }}
        >
          We're crafting something <span className="text-gradient">new</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-base leading-relaxed max-w-md mb-10"
          initial={{ opacity: 0, y: rm ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.35, ease: EASING }}
        >
          Paperfrogs HQ is currently under maintenance while we redesign the
          experience. We'll be back with a fresh look soon.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-12 h-px mb-8"
          style={{ background: "hsl(16 85% 58% / 0.4)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: rm ? 0.1 : 0.6, delay: 0.45, ease: EASING }}
        />

        {/* Contact hint */}
        <motion.p
          className="text-muted-foreground text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: 0.5, ease: EASING }}
        >
          In the meantime, reach us at
        </motion.p>

        <motion.a
          href="mailto:hello@paperfrogs.net"
          className="link-slide text-sm font-medium"
          style={{ color: "hsl(16 90% 68%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: 0.55, ease: EASING }}
        >
          hello@paperfrogs.net
        </motion.a>
      </motion.div>

      {/* Bottom bar */}
      <motion.footer
        className="absolute bottom-0 w-full py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: 0.65, ease: EASING }}
      >
        <p className="text-[11px] uppercase tracking-[0.20em] text-muted-foreground">
          &copy; {new Date().getFullYear()} Paperfrogs HQ &middot; Dhaka,
          Bangladesh
        </p>
      </motion.footer>
    </div>
  );
};

export default Maintenance;
