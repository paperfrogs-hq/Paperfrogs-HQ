import { cn } from "@/lib/utils";

type FilterChipsProps<T extends string> = {
  label: string;
  options: readonly T[];
  value: T | "All";
  onChange: (value: T | "All") => void;
};

export const FilterChips = <T extends string>({ label, options, value, onChange }: FilterChipsProps<T>) => {
  const allOptions = ["All", ...options] as const;

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {allOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option as T | "All")}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral",
              value === option
                ? "border-coral/70 bg-coral/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-coral/40 hover:text-foreground",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
