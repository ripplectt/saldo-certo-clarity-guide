import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle, ArrowRight, Bell, Wallet } from "lucide-react";

export function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Buttons */}
      <div className="p-8 rounded-2xl bg-card border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-6">Botões</h4>
        <div className="flex flex-wrap gap-4">
          <Button>
            Botão Primário
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline">Botão Secundário</Button>
          <Button variant="secondary">Neutro</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="success">
            <Check className="w-4 h-4" />
            Sucesso
          </Button>
          <Button disabled>Desabilitado</Button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Tamanhos</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Pequeno</Button>
            <Button size="default">Padrão</Button>
            <Button size="lg">Grande</Button>
            <Button size="xl">Extra Grande</Button>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="p-8 rounded-2xl bg-card border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-6">Inputs</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Estado Normal</label>
            <Input placeholder="Digite seu e-mail" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Com Valor</label>
            <Input value="usuario@email.com" readOnly />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Desabilitado</label>
            <Input placeholder="Campo desabilitado" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-destructive">Com Erro</label>
            <Input 
              placeholder="Campo com erro" 
              className="border-destructive focus-visible:ring-destructive" 
            />
            <p className="text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Este campo é obrigatório
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="p-8 rounded-2xl bg-card border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-6">Cards</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-secondary border border-border shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <h5 className="font-semibold text-foreground">Saldo do Dia</h5>
            <p className="text-2xl font-bold text-foreground mt-2">R$ 1.250,00</p>
            <p className="text-sm text-muted-foreground mt-1">Atualizado agora</p>
          </div>
          
          <div className="p-6 rounded-xl bg-background border border-success/30 shadow-card">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-success" />
            </div>
            <h5 className="font-semibold text-foreground">No Azul!</h5>
            <p className="text-2xl font-bold text-success mt-2">+R$ 450,00</p>
            <p className="text-sm text-muted-foreground mt-1">Esta semana</p>
          </div>
          
          <div className="p-6 rounded-xl bg-background border border-border">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </div>
            <h5 className="font-semibold text-foreground">Lembretes</h5>
            <p className="text-sm text-muted-foreground mt-2">3 contas vencem esta semana</p>
            <Button variant="ghost" size="sm" className="mt-3 -ml-2">
              Ver detalhes
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="p-8 rounded-2xl bg-card border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-6">Badges</h4>
        <div className="flex flex-wrap gap-3">
          <Badge>Padrão</Badge>
          <Badge variant="secondary">Secundário</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge className="bg-success text-success-foreground hover:bg-success/90">
            <Check className="w-3 h-3 mr-1" />
            Pago
          </Badge>
          <Badge variant="destructive">Atrasado</Badge>
        </div>
      </div>
    </div>
  );
}
