import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={cn("max-w-3xl", alignment)}>
      {label ? <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p> : null}
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p> : null}
    </header>
  );
};
