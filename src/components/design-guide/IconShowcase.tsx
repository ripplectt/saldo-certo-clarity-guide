import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Bell, 
  Settings, 
  User, 
  CreditCard,
  PiggyBank,
  BarChart3,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle
} from "lucide-react";

export function IconShowcase() {
  const icons = [
    { Icon: Wallet, name: "Carteira" },
    { Icon: TrendingUp, name: "Entrada" },
    { Icon: TrendingDown, name: "Saída" },
    { Icon: Calendar, name: "Calendário" },
    { Icon: Bell, name: "Notificação" },
    { Icon: Settings, name: "Configurações" },
    { Icon: User, name: "Usuário" },
    { Icon: CreditCard, name: "Cartão" },
    { Icon: PiggyBank, name: "Poupança" },
    { Icon: BarChart3, name: "Gráficos" },
    { Icon: ArrowUpRight, name: "Receber" },
    { Icon: ArrowDownLeft, name: "Pagar" },
    { Icon: CheckCircle, name: "Sucesso" },
    { Icon: AlertCircle, name: "Alerta" },
    { Icon: Info, name: "Info" },
    { Icon: HelpCircle, name: "Ajuda" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {icons.map(({ Icon, name }) => (
          <div 
            key={name}
            className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all"
          >
            <Icon className="w-6 h-6 text-foreground mb-2" strokeWidth={1.5} />
            <span className="text-xs text-muted-foreground text-center">{name}</span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-card border border-border">
          <h5 className="text-sm font-semibold text-foreground mb-2">Estilo</h5>
          <p className="text-sm text-muted-foreground">Outline com stroke consistente de 1.5px</p>
        </div>
        <div className="p-5 rounded-xl bg-card border border-border">
          <h5 className="text-sm font-semibold text-foreground mb-2">Cantos</h5>
          <p className="text-sm text-muted-foreground">Levemente arredondados para suavidade</p>
        </div>
        <div className="p-5 rounded-xl bg-card border border-border">
          <h5 className="text-sm font-semibold text-foreground mb-2">Cor</h5>
          <p className="text-sm text-muted-foreground">Monocromático, seguindo a paleta</p>
        </div>
      </div>
    </div>
  );
}
