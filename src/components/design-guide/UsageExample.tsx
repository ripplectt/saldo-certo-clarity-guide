import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface UsageExampleProps {
  correct?: boolean;
  title: string;
  children: React.ReactNode;
  description?: string;
}

export function UsageExample({ correct = true, title, children, description }: UsageExampleProps) {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden border-2 transition-all",
      correct 
        ? "border-success/30 bg-success/5" 
        : "border-destructive/30 bg-destructive/5"
    )}>
      <div className={cn(
        "px-4 py-2 flex items-center gap-2",
        correct ? "bg-success/10" : "bg-destructive/10"
      )}>
        {correct ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <X className="w-4 h-4 text-destructive" />
        )}
        <span className={cn(
          "text-sm font-medium",
          correct ? "text-success" : "text-destructive"
        )}>
          {correct ? "Correto" : "Incorreto"}
        </span>
        <span className="text-sm text-muted-foreground ml-2">{title}</span>
      </div>
      <div className="p-6 bg-background">
        {children}
      </div>
      {description && (
        <div className="px-4 py-3 bg-muted/50 border-t border-border">
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      )}
    </div>
  );
}
