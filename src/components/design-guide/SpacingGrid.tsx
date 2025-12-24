export function SpacingGrid() {
  const spacings = [
    { name: "xs", value: "4px", px: 4 },
    { name: "sm", value: "8px", px: 8 },
    { name: "md", value: "16px", px: 16 },
    { name: "lg", value: "24px", px: 24 },
    { name: "xl", value: "32px", px: 32 },
    { name: "2xl", value: "48px", px: 48 },
    { name: "3xl", value: "64px", px: 64 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {spacings.map((spacing) => (
          <div 
            key={spacing.name}
            className="flex flex-col items-center p-4 rounded-xl bg-card border border-border"
          >
            <div 
              className="bg-primary rounded-md mb-3"
              style={{ width: spacing.px, height: spacing.px }}
            />
            <span className="text-sm font-semibold text-foreground">{spacing.name}</span>
            <span className="text-xs text-muted-foreground">{spacing.value}</span>
          </div>
        ))}
      </div>
      
      <div className="p-6 rounded-xl bg-secondary border border-border">
        <h4 className="text-sm font-semibold text-foreground mb-4">Sistema Base: 8px</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Todos os espaçamentos devem ser múltiplos de 8px para garantir consistência e ritmo visual.
          Nunca use valores quebrados como 14px ou 22px.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">8px</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">16px</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">24px</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">32px</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">48px</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">64px</span>
        </div>
      </div>
    </div>
  );
}
