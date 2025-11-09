import LimitedOfferBanner from "@/components/LimitedOfferBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductGallery from "@/components/ProductGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LimitedOfferBanner />
      <HeroSection />
      <BenefitsSection />
      <ProductGallery />
      <TestimonialsCarousel />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      
      <footer className="bg-muted py-6 border-t" data-testid="footer-copyright">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cores da Fé Oficial. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
