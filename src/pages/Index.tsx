import { useState, useEffect } from "react";
import { 
  Palette, 
  Type, 
  Layers, 
  Grid3X3, 
  Sparkles, 
  CheckCircle2, 
  Lightbulb,
  Eye,
  Box,
  Target,
  FileText,
  BookOpen,
  Image
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorSwatch } from "@/components/design-guide/ColorSwatch";
import { TypographySample } from "@/components/design-guide/TypographySample";
import { ComponentShowcase } from "@/components/design-guide/ComponentShowcase";
import { UsageExample } from "@/components/design-guide/UsageExample";
import { SpacingGrid } from "@/components/design-guide/SpacingGrid";
import { IconShowcase } from "@/components/design-guide/IconShowcase";
import { SectionHeader } from "@/components/design-guide/SectionHeader";
import { TableOfContents } from "@/components/design-guide/TableOfContents";
import { ImageryShowcase } from "@/components/design-guide/ImageryShowcase";

const sections = [
  { id: "essencia", number: "1", title: "Essência da Marca" },
  { id: "personalidade", number: "2", title: "Personalidade Visual" },
  { id: "cores", number: "3", title: "Paleta de Cores" },
  { id: "tipografia", number: "4", title: "Tipografia" },
  { id: "espacamento", number: "5", title: "Grid e Espaçamento" },
  { id: "icones", number: "6", title: "Iconografia" },
  { id: "componentes", number: "7", title: "Componentes" },
  { id: "imagens", number: "8", title: "Imagens e Gráficos" },
  { id: "uso", number: "9", title: "Uso Correto/Incorreto" },
  { id: "checklist", number: "10", title: "Checklist" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("essencia");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Guia de Design v1.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Identidade Visual
              <br />
              <span className="text-white/80">Saldo Certo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Referência operacional para a criação de conteúdos, interfaces e materiais visuais, 
              garantindo consistência e alinhamento absoluto com o branding.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => scrollToSection("cores")}
              >
                Explorar Cores
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 hover:bg-white/20"
                onClick={() => scrollToSection("componentes")}
              >
                Ver Componentes
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents 
              sections={sections} 
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl space-y-24">
            {/* Section 1: Essência */}
            <section id="essencia" className="scroll-mt-24">
              <SectionHeader 
                number="1" 
                title="Essência da Marca" 
                icon={Sparkles}
                description="Propósito, promessa e sensações que guiam todas as decisões visuais."
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Propósito
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Trazer clareza imediata e paz financeira para trabalhadores autônomos e MEIs, 
                    mesmo em meio à renda variável e à correria do dia a dia.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Promessa
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Clareza em até 10 segundos sobre o dinheiro do dia, da semana e do mês — 
                    para viver no azul com tranquilidade.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-secondary border border-border">
                <h4 className="font-semibold text-foreground mb-4">Sensações que o visual deve transmitir</h4>
                <div className="flex flex-wrap gap-3">
                  {["Clareza", "Confiança", "Simplicidade", "Acolhimento", "Autoridade calma"].map((item, idx) => (
                    <span 
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      {item}
                      {idx === 0 && <span className="text-xs text-primary font-bold ml-1">#1</span>}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: Personalidade */}
            <section id="personalidade" className="scroll-mt-24">
              <SectionHeader 
                number="2" 
                title="Personalidade Visual" 
                icon={Eye}
                description="Diretrizes que definem como a marca se apresenta visualmente."
              />
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { aspect: "Formalidade", value: "Neutra", desc: "Profissional sem rigidez" },
                  { aspect: "Complexidade", value: "Simples", desc: "Redução de carga cognitiva" },
                  { aspect: "Energia", value: "Calma", desc: "Antídoto à ansiedade" },
                  { aspect: "Linguagem", value: "Funcional + Minimalista", desc: "Visual que organiza" },
                ].map(({ aspect, value, desc }) => (
                  <div key={aspect} className="p-5 rounded-xl bg-card border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{aspect}</p>
                    <p className="font-semibold text-foreground">{value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-foreground font-medium text-center">
                  "O visual não disputa atenção: ele organiza."
                </p>
              </div>
            </section>

            {/* Section 3: Cores */}
            <section id="cores" className="scroll-mt-24">
              <SectionHeader 
                number="3" 
                title="Paleta de Cores Oficial" 
                icon={Palette}
                description="Cores travadas — nada além disso é permitido."
              />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ColorSwatch 
                  name="Azure Blue" 
                  hex="#3A86F5" 
                  usage="Azul Core — CTA, ações primárias, ícones ativos"
                />
                <ColorSwatch 
                  name="Alice Blue" 
                  hex="#EAF2FF" 
                  usage="Azul Air — Cards, onboarding, destaques suaves"
                  isLight
                />
                <ColorSwatch 
                  name="Deep Space Blue" 
                  hex="#1B3A57" 
                  usage="Azul Night — Títulos, valores, autoridade"
                />
                <ColorSwatch 
                  name="Bright Snow" 
                  hex="#FAFBFD" 
                  usage="Fundo Principal — Background, telas longas"
                  isLight
                />
                <ColorSwatch 
                  name="Slate Gray" 
                  hex="#667085" 
                  usage="Texto Secundário — Labels, datas, microcopy"
                  isLight
                />
                <ColorSwatch 
                  name="Medium Jungle" 
                  hex="#27AE60" 
                  usage="Verde Vitória — Confirmações, sucesso"
                />
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-4">Regra-Mãe do Sistema</h4>
                <p className="text-xl text-foreground font-medium mb-4">
                  "Se duas cores competem pela atenção, uma delas está errada."
                </p>
                <div className="grid sm:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="w-8 h-8 rounded-full bg-primary mx-auto mb-2" />
                    <p className="text-sm text-foreground font-medium">Azul chama</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted">
                    <div className="w-8 h-8 rounded-full bg-background border border-border mx-auto mb-2" />
                    <p className="text-sm text-foreground font-medium">Branco respira</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted">
                    <div className="w-8 h-8 rounded-full bg-muted-foreground/30 mx-auto mb-2" />
                    <p className="text-sm text-foreground font-medium">Cinza sustenta</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-success/10">
                    <div className="w-8 h-8 rounded-full bg-success mx-auto mb-2" />
                    <p className="text-sm text-foreground font-medium">Verde celebra</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Tipografia */}
            <section id="tipografia" className="scroll-mt-24">
              <SectionHeader 
                number="4" 
                title="Tipografia" 
                icon={Type}
                description="Inter como fonte única — previsibilidade acima de decoração."
              />
              
              <div className="p-6 rounded-2xl bg-secondary border border-border mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-foreground">Aa</span>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Inter</h4>
                    <p className="text-sm text-muted-foreground">Fonte Principal e Única</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Extremamente legível em telas pequenas, números claros para valores financeiros, 
                  passa autoridade calma sem chamar atenção para si.
                </p>
              </div>

              <div className="space-y-4">
                <TypographySample 
                  label="Títulos"
                  weight="Semibold (600)"
                  size="24-32px"
                  color="Deep Space Blue"
                  colorHex="#1B3A57"
                  example="Seu saldo do mês"
                  className="text-2xl font-semibold text-foreground"
                />
                <TypographySample 
                  label="Subtítulos"
                  weight="Medium (500)"
                  size="18-20px"
                  color="Deep Space Blue"
                  colorHex="#1B3A57"
                  example="Confira os lançamentos recentes"
                  className="text-lg font-medium text-foreground"
                />
                <TypographySample 
                  label="Corpo de Texto"
                  weight="Regular (400)"
                  size="14-16px"
                  color="Slate Gray"
                  colorHex="#667085"
                  example="O Saldo Certo ajuda você a ter clareza sobre suas finanças pessoais de forma simples e rápida."
                  className="text-base text-muted-foreground"
                />
                <TypographySample 
                  label="Labels / Microcopy"
                  weight="Medium (500)"
                  size="12-14px"
                  color="Slate Gray"
                  colorHex="#667085"
                  example="Última atualização: 24/12/2025"
                  className="text-sm font-medium text-muted-foreground"
                />
              </div>

              <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-foreground font-medium text-center">
                  "Se a tipografia está sendo percebida, ela está atrapalhando."
                </p>
              </div>
            </section>

            {/* Section 5: Espaçamento */}
            <section id="espacamento" className="scroll-mt-24">
              <SectionHeader 
                number="5" 
                title="Grid e Espaçamento" 
                icon={Grid3X3}
                description="Sistema base de 8px para ritmo visual consistente."
              />
              
              <SpacingGrid />

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-card border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Respiro Visual</h5>
                  <p className="text-sm text-muted-foreground">Margens generosas, elementos nunca apertados</p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Alinhamento</h5>
                  <p className="text-sm text-muted-foreground">Rigoroso e previsível em todas as telas</p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Foco Único</h5>
                  <p className="text-sm text-muted-foreground">Um foco visual por tela ou arte</p>
                </div>
              </div>
            </section>

            {/* Section 6: Ícones */}
            <section id="icones" className="scroll-mt-24">
              <SectionHeader 
                number="6" 
                title="Iconografia" 
                icon={Box}
                description="Ícones outline com stroke consistente e uso monocromático."
              />
              
              <IconShowcase />
            </section>

            {/* Section 7: Componentes */}
            <section id="componentes" className="scroll-mt-24">
              <SectionHeader 
                number="7" 
                title="Componentes Base" 
                icon={Layers}
                description="Design system mínimo — cada componente existe antes de novas telas."
              />
              
              <ComponentShowcase />
            </section>

            {/* Section 8: Imagens e Gráficos */}
            <section id="imagens" className="scroll-mt-24">
              <SectionHeader 
                number="8" 
                title="Imagens, Ilustrações e Gráficos" 
                icon={Image}
                description="Preferência por dados visuais e simulações de uso do app."
              />
              
              <ImageryShowcase />
            </section>

            {/* Section 9: Uso Correto/Incorreto */}
            <section id="uso" className="scroll-mt-24">
              <SectionHeader 
                number="9" 
                title="Uso Correto e Incorreto" 
                icon={FileText}
                description="Exemplos práticos do que fazer e evitar."
              />
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <UsageExample 
                    correct 
                    title="Azul Core para CTA"
                    description="Use o azul #3A86F5 exclusivamente para ações primárias."
                  >
                    <Button>Ver meu saldo</Button>
                  </UsageExample>
                  
                  <UsageExample 
                    correct={false} 
                    title="Azul Core como fundo"
                    description="Nunca use o azul core como fundo de tela inteira."
                  >
                    <div className="p-4 bg-primary rounded-lg">
                      <p className="text-white text-sm">Texto sobre fundo azul excessivo</p>
                    </div>
                  </UsageExample>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <UsageExample 
                    correct 
                    title="Verde apenas para sucesso"
                    description="Verde só aparece quando algo deu certo."
                  >
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">Pagamento confirmado!</span>
                    </div>
                  </UsageExample>
                  
                  <UsageExample 
                    correct={false} 
                    title="Verde para elementos comuns"
                    description="Não use verde em botões ou textos que não indicam sucesso."
                  >
                    <Button className="bg-success text-white">Próximo passo</Button>
                  </UsageExample>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <UsageExample 
                    correct 
                    title="Hierarquia clara"
                    description="Um foco visual por bloco, tipografia respeitando pesos."
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Saldo Atual</h3>
                      <p className="text-3xl font-bold text-foreground mt-1">R$ 2.450,00</p>
                      <p className="text-sm text-muted-foreground mt-1">Atualizado há 5 min</p>
                    </div>
                  </UsageExample>
                  
                  <UsageExample 
                    correct={false} 
                    title="Competição visual"
                    description="Múltiplos elementos disputando atenção no mesmo bloco."
                  >
                    <div>
                      <h3 className="text-xl font-bold text-primary">SALDO ATUAL!</h3>
                      <p className="text-3xl font-bold text-success mt-1">R$ 2.450,00 ✨</p>
                      <p className="text-sm font-bold text-primary mt-1">ATUALIZADO AGORA!</p>
                    </div>
                  </UsageExample>
                </div>
              </div>
            </section>

            {/* Section 10: Checklist */}
            <section id="checklist" className="scroll-mt-24">
              <SectionHeader 
                number="10"
                title="Checklist Final" 
                icon={CheckCircle2}
                description="Verificar antes de publicar qualquer material."
              />
              
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="space-y-4">
                  {[
                    "Está dentro da paleta travada?",
                    "Respeita tipografia e hierarquia?",
                    "Existe um único foco visual?",
                    "Azul Core está sendo usado só para ação?",
                    "Verde só aparece como vitória?",
                    "Transmite clareza e paz?",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-6 h-6 rounded-md border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center">
                    <span className="text-xl font-semibold text-foreground block mb-2">Regra Final</span>
                    <span className="text-muted-foreground">
                      Identidade visual é previsibilidade. Consistência cria confiança.
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 pb-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Saldo Certo</p>
                    <p className="text-xs text-muted-foreground">Guia de Design v1.0</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Este guia deve ser consultado sempre que um novo conteúdo for criado.
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
