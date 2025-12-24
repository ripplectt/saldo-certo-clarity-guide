import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export function SectionHeader({ 
  number, 
  title, 
  description, 
  icon: Icon,
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-center gap-3 mb-2">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold">
          {number}
        </span>
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
            <Icon className="w-4 h-4 text-foreground" />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      </div>
      {description && (
        <p className="text-muted-foreground ml-11 max-w-2xl">{description}</p>
      )}
    </div>
  );
}
