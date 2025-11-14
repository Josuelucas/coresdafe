import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Star, Crown, Sparkles, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PricingSection() {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  const handleBasicClick = () => {
    setShowUpsellModal(true);
  };

  const handlePremiumCheckout = () => {
    window.location.href = 'https://payments.clickmax.io/6OI63gpTqB';
  };

  const handleBasicCheckout = () => {
    window.location.href = 'https://payments.clickmax.io/0qo8izQFz_';
  };

  return (
    <section id="pricing-section" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <Badge className="bg-destructive text-destructive-foreground mb-4 px-4 py-2 animate-pulse">
            OFERTA RELÂMPAGO! Válida somente HOJE, 14/11/25
          </Badge>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escolha Sua Oferta Especial
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Livros de qualidade profissional para enriquecer seus momentos de fé
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="relative" data-testid="card-pricing-basic">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Pacote Básico</h3>
              </div>
              
              <div className="space-y-2">
                <div className="text-muted-foreground line-through text-sm">R$ 47,00</div>
                <Badge className="bg-secondary text-secondary-foreground">-79%</Badge>
                <div className="text-5xl font-bold text-secondary">R$ 10,00</div>
                <div className="text-sm text-muted-foreground">Você economiza R$ 37,00</div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">35 Livros de Colorir em PDF</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Temas Bíblicos Variados</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Acesso Vitalício</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Suporte por WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground">Garantia de 7 dias</span>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg font-bold"
                onClick={handleBasicClick}
                data-testid="button-checkout-basic"
              >
                QUERO O PACOTE BÁSICO
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="relative border-accent border-4 shadow-2xl shadow-accent/50 bg-gradient-to-br from-card to-accent/5" data-testid="card-pricing-premium">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-accent text-accent-foreground px-6 py-2 text-sm font-bold shadow-lg animate-pulse">
                MAIS VENDIDO
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4 pt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-accent fill-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Pacote Premium</h3>
              </div>
              
              <div className="space-y-2">
                <div className="text-muted-foreground line-through text-sm">R$ 256,00</div>
                <Badge className="bg-secondary text-secondary-foreground">-93%</Badge>
                <div className="text-5xl font-bold text-secondary">R$ 17,00</div>
                <div className="text-sm text-muted-foreground">Você economiza R$ 239,00</div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-accent/10 rounded-lg p-4 space-y-2">
                <div className="font-semibold text-card-foreground text-sm mb-3">
                  TUDO DO PACOTE BÁSICO +
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 1: 2 Novos livros/mês</div>
                    <div className="text-xs text-destructive line-through">R$ 80/ano</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 2: Vídeos de Histórias Bíblicas</div>
                    <div className="text-xs text-destructive line-through">R$ 27,00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 3: 15 Versículos Ilustrados</div>
                    <div className="text-xs text-destructive line-through">R$ 18,00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">BÔNUS 4: Calendário Bíblico Semanal</div>
                    <div className="text-xs text-destructive line-through">R$ 25,00</div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex-col gap-3">
              <Button 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold shadow-lg"
                onClick={handlePremiumCheckout}
                data-testid="button-checkout-premium"
              >
                SIM! QUERO O PREMIUM E TODOS OS BÔNUS
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                +500 pessoas já escolheram este pacote
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Dialog open={showUpsellModal} onOpenChange={setShowUpsellModal}>
        <DialogContent className="sm:max-w-[600px]" data-testid="dialog-upsell">
          <DialogHeader>
            <div className="flex items-center justify-center mb-2">
              <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold animate-pulse">
                ESPERE! NÃO PERCA A MELHOR OFERTA!
              </Badge>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
              Por apenas R$ 7,00 a mais, você leva MUITO MAIS!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Você prefere economizar R$ 7,00 ou perder <span className="text-accent font-bold text-xl">2 novos livros/mês por 6 meses</span> e todos os bônus exclusivos? Esta é a única chance de ouro!
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-accent/10 rounded-lg p-4 space-y-3">
              <h4 className="font-bold text-card-foreground flex items-center gap-2">
                <Crown className="w-5 h-5 text-accent fill-accent" />
                TUDO DO PACOTE BÁSICO + BÔNUS EXCLUSIVOS:
              </h4>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">Desafio Bíblico de 7 Dias</div>
                    <div className="text-xs text-muted-foreground">Fortaleça sua fé diariamente</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">Cartões Bíblicos para Memorização</div>
                    <div className="text-xs text-muted-foreground">Decore versículos importantes</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">Adesivos Temáticos</div>
                    <div className="text-xs text-muted-foreground">Para decorar e personalizar</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">Planner Devocional Infantil</div>
                    <div className="text-xs text-muted-foreground">Organize a rotina espiritual</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-card-foreground">+2 Livros de Colorir Durante 6 Meses</div>
                    <div className="text-xs text-muted-foreground">Conteúdo novo todo mês!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-card-foreground">
                Valor Total: <span className="line-through text-muted-foreground">R$ 256,00</span>
              </p>
              <p className="text-3xl font-bold text-accent mt-1">
                Por apenas R$ 17,00
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Você economiza R$ 239,00 (93% de desconto)
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-col gap-3">
            <Button 
              className="w-full bg-accent text-accent-foreground py-6 text-lg font-bold shadow-lg animate-pulse"
              onClick={handlePremiumCheckout}
              data-testid="button-upsell-accept"
            >
              SIM! QUERO O PREMIUM E TODOS OS BÔNUS
            </Button>
            <Button 
              variant="outline"
              className="w-full py-4 text-sm"
              onClick={handleBasicCheckout}
              data-testid="button-upsell-decline"
            >
              Não, continuar com o Pacote Básico
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
