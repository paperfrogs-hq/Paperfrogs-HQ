import { useEffect, useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASING = [0.22, 1, 0.36, 1] as const;

type InstallSnippetProps = {
  command: string;
  label?: string;
  hint?: string;
  className?: string;
};

export const InstallSnippet = ({
  command,
  label = "Install",
  hint,
  className,
}: InstallSnippetProps) => {
  const rm = useReducedMotion();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const ta = document.createElement("textarea");
        ta.value = command;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={cn(
        "pf-surface group relative overflow-hidden rounded-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-coral/10 text-coral/80">
            <Terminal className="h-3 w-3" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            {label}
          </span>
        </div>
        {hint && (
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/25 sm:block">
            {hint}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
        <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-[12px] leading-relaxed text-foreground/75 sm:text-[14px]">
          <span className="select-none text-coral/55">$ </span>
          {command}
        </code>
        <motion.button
          type="button"
          onClick={handleCopy}
          whileHover={rm ? {} : { scale: 1.04 }}
          whileTap={rm ? {} : { scale: 0.94 }}
          transition={{ duration: 0.18, ease: EASING }}
          aria-label={copied ? "Copied" : "Copy command"}
          className={cn(
            "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral",
            copied
              ? "border-coral/40 bg-coral/10 text-coral"
              : "border-white/[0.08] bg-white/[0.02] text-foreground/45 hover:border-white/20 hover:text-foreground",
          )}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </motion.button>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--coral) / 0.35), transparent)",
        }}
      />
    </div>
  );
};

export default InstallSnippet;