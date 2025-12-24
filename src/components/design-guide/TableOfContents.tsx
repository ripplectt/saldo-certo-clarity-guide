import { cn } from "@/lib/utils";

interface Section {
  id: string;
  number: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection?: string;
  onSectionClick: (id: string) => void;
}

export function TableOfContents({ sections, activeSection, onSectionClick }: TableOfContentsProps) {
  return (
    <nav className="sticky top-8 space-y-1">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Índice
      </p>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-all",
            activeSection === section.id
              ? "bg-primary text-primary-foreground font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          <span className={cn(
            "flex items-center justify-center w-6 h-6 rounded text-xs font-bold",
            activeSection === section.id
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}>
            {section.number}
          </span>
          <span className="truncate">{section.title}</span>
        </button>
      ))}
    </nav>
  );
}
