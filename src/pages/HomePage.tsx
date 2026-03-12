import HeroSection from '../components/sections/HeroSection';
import ActividadesRecientes from '../components/sections/ActividadesRecientes';
import BeneficiosSection from '../components/sections/BeneficiosSection';
import CtaSection from '../components/sections/CtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ActividadesRecientes />
      <BeneficiosSection />
      <CtaSection />
    </main>
  );
}
