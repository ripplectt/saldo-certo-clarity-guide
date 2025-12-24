import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  MessageSquare, 
  Smartphone, 
  Image, 
  Users, 
  X, 
  Check,
  LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  priority?: "high" | "medium" | "low";
}

function ImageryCard({ icon, title, description, priority = "medium" }: ImageryCardProps) {
  return (
    <div className="p-5 rounded-xl bg-card border border-border">
      <div className="flex items-start gap-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
          priority === "high" && "bg-primary/10 text-primary",
          priority === "medium" && "bg-secondary text-foreground",
          priority === "low" && "bg-muted text-muted-foreground"
        )}>
          {icon}
        </div>
        <div>
          <h5 className="font-semibold text-foreground mb-1">{title}</h5>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface GuidelineItemProps {
  text: string;
  allowed: boolean;
}

function GuidelineItem({ text, allowed }: GuidelineItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
        allowed ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
      )}>
        {allowed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </div>
      <span className={cn(
        "text-sm",
        allowed ? "text-foreground" : "text-muted-foreground"
      )}>
        {text}
      </span>
    </div>
  );
}

export function ImageryShowcase() {
  return (
    <div className="space-y-8">
      {/* Preferências */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Preferência de Uso (por prioridade)</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ImageryCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Gráficos"
            description="Barras, linhas e pizza para visualização de dados financeiros"
            priority="high"
          />
          <ImageryCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Dados Visuais"
            description="Números destacados, indicadores e métricas"
            priority="high"
          />
          <ImageryCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Simulações de Chat"
            description="Mockups de conversa mostrando uso do app"
            priority="medium"
          />
        </div>
      </div>

      {/* Exemplos Visuais */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Exemplos de Uso Correto</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Exemplo: Gráfico Simples */}
          <div className="p-6 rounded-2xl bg-secondary border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Gráfico de Barras Simples</p>
            <div className="flex items-end gap-3 h-32">
              {[
                { day: "Seg", value: 60, opacity: "20" },
                { day: "Ter", value: 80, opacity: "30" },
                { day: "Qua", value: 45, opacity: "40" },
                { day: "Qui", value: 100, opacity: "100" },
                { day: "Sex", value: 70, opacity: "60" },
              ].map((item, index) => (
                <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={cn(
                      "w-full rounded-t-lg transition-all duration-700 ease-out",
                      item.opacity === "100" ? "bg-primary" : `bg-primary/${item.opacity}`
                    )}
                    style={{ 
                      height: `${item.value}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                  <span className="text-xs text-muted-foreground">{item.day}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-success text-center mt-4 font-medium">✓ Legível, simples, cores consistentes</p>
          </div>

          {/* Exemplo: Simulação de Chat */}
          <div className="p-6 rounded-2xl bg-secondary border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Simulação de Uso do App</p>
            <div className="bg-background rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Saldo Certo</span>
              </div>
              <div className="space-y-3">
                <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">Qual o meu saldo hoje?</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm text-foreground">Seu saldo atual é <span className="font-semibold text-primary">R$ 1.250,00</span></p>
                </div>
              </div>
            </div>
            <p className="text-xs text-success text-center mt-4 font-medium">✓ Mostra funcionalidade real do produto</p>
          </div>
        </div>
      </div>

      {/* Diretrizes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-success" />
            Fazer
          </h4>
          <div className="space-y-3">
            <GuidelineItem allowed text="Gráficos sempre legíveis e simples" />
            <GuidelineItem allowed text="Visual funcional > emocional exagerado" />
            <GuidelineItem allowed text="Imagens que reforçam transformação" />
            <GuidelineItem allowed text="Ilustrações de uso do app/chat" />
            <GuidelineItem allowed text="Dados e métricas destacados" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" />
            Evitar
          </h4>
          <div className="space-y-3">
            <GuidelineItem allowed={false} text="Excesso de elementos humanos sem agregar" />
            <GuidelineItem allowed={false} text="Gráficos complexos ou poluídos" />
            <GuidelineItem allowed={false} text="Imagens apenas decorativas" />
            <GuidelineItem allowed={false} text="Ilustrações emocionais exageradas" />
            <GuidelineItem allowed={false} text="Stock photos genéricas" />
          </div>
        </div>
      </div>

      {/* Regra de Ouro */}
      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-foreground font-medium text-center">
          "Imagens devem informar ou demonstrar transformação — nunca apenas decorar."
        </p>
      </div>

      {/* Tipos de Gráficos Permitidos */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Tipos de Gráficos Permitidos</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Barras</p>
            <p className="text-xs text-muted-foreground">Comparações</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <LineChart className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Linhas</p>
            <p className="text-xs text-muted-foreground">Evolução</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <PieChart className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Pizza</p>
            <p className="text-xs text-muted-foreground">Proporções</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Indicadores</p>
            <p className="text-xs text-muted-foreground">Métricas-chave</p>
          </div>
        </div>
      </div>
    </div>
  );
}
