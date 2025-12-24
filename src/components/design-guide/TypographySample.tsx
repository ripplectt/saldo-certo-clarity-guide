import { cn } from "@/lib/utils";

interface TypographySampleProps {
  label: string;
  weight: string;
  size: string;
  color: string;
  colorHex: string;
  example: string;
  className?: string;
}

export function TypographySample({ 
  label, 
  weight, 
  size, 
  color, 
  colorHex,
  example, 
  className 
}: TypographySampleProps) {
  return (
    <div className={cn("p-6 rounded-xl bg-card border border-border", className)}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          {label}
        </span>
        <span className="text-xs text-muted-foreground">
          {weight} • {size}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <span 
            className="w-3 h-3 rounded-full border border-border" 
            style={{ backgroundColor: colorHex }}
          />
          {color}
        </span>
      </div>
      <p className={cn("leading-relaxed", className)}>
        {example}
      </p>
    </div>
  );
}
