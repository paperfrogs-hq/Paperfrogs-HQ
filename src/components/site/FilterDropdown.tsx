import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterDropdownProps<T extends string> = {
  label: string;
  options: readonly T[];
  value: T | "All";
  onChange: (value: T | "All") => void;
};

export const FilterDropdown = <T extends string>({ label, options, value, onChange }: FilterDropdownProps<T>) => {
  return (
    <label className="block space-y-3">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={(next) => onChange(next as T | "All")}>
        <SelectTrigger className="h-11 rounded-full border-border bg-card text-sm focus:ring-coral">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent className="border-border bg-card">
          <SelectItem value="All">All</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
};
