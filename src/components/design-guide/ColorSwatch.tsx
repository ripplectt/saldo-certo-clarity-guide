import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  hex: string;
  usage: string;
  className?: string;
  isLight?: boolean;
}

export function ColorSwatch({ name, hex, usage, className, isLight = false }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      <div 
        className="h-32 w-full flex items-end p-4 cursor-pointer"
        style={{ backgroundColor: hex }}
        onClick={handleCopy}
      >
        <div className={cn(
          "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity",
          isLight ? "text-foreground" : "text-white"
        )}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </div>
      </div>
      <div className="bg-background p-4 border border-t-0 border-border rounded-b-xl">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground font-mono mt-1">{hex}</p>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{usage}</p>
      </div>
    </div>
  );
}
