import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FilterChipsProps<T extends string> = {
  label: string;
  options: readonly T[];
  value: T | "All";
  onChange: (value: T | "All") => void;
};

export const FilterChips = <T extends string>({ label, options, value, onChange }: FilterChipsProps<T>) => {
  const allOptions = ["All", ...options] as const;
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {allOptions.map((option) => (
          <motion.button
            key={option}
            type="button"
            onClick={() => onChange(option as T | "All")}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral",
              value === option
                ? "border-coral/70 bg-coral/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-coral/40 hover:text-foreground",
            )}
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ duration: MOTION_DURATION.fast, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
