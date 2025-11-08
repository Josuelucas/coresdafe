import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield } from "lucide-react";

export default function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-8 bg-gradient-to-b from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <img 
                  src="https://i.ibb.co/SXXf7qDC/CAPA-9.jpg" 
                  alt="Livro para Colorir Cristão - A Verdadeira Páscoa"
                  className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              35 Livros de Colorir <span className="text-accent">Cristãos</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-primary-foreground/90">
              Transforme momentos especiais com sua família, célula e escola dominical
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent px-4 py-2">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Células
              </Badge>
              <Badge className="bg-accent/90 text-accent-foreground hover:bg-accent/90 px-4 py-2">
                <Shield className="w-4 h-4 mr-1" />
                Escola Dominical
              </Badge>
              <Badge className="bg-accent/80 text-accent-foreground hover:bg-accent/80 px-4 py-2">
                Devocional Familiar
              </Badge>
              <Badge className="bg-accent/70 text-accent-foreground hover:bg-accent/70 px-4 py-2">
                Pedagogia
              </Badge>
            </div>
            
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-lg font-bold"
              onClick={scrollToPricing}
              data-testid="button-hero-cta"
            >
              QUERO VER AS OFERTAS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
