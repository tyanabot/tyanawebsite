/**
 * Home Page - TYANA GmbH
 * 
 * Startseite mit folgenden Sektionen:
 * 1. HeroSection - Großes Bild mit Claim und CTAs
 * 2. TrustBar - Kundenlogos (Marquee)
 * 3. AboutTeaser - Kurzbeschreibung der Agentur
 * 4. ServicesTeaser - 5 Leistungskacheln
 */

import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ServicesTeaser from '@/components/sections/ServicesTeaser';

export const metadata = {
  title: 'TYANA GmbH | Designagentur für Markeninszenierung',
  description: 'Die TYANA GmbH entwickelt kreative Markenlösungen für POS, Retail, Messe und Unternehmenskommunikation. Design, Technik und Handwerk vereint.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Bar - Kundenlogos */}
      <TrustBar />
      
      {/* About Teaser */}
      <AboutTeaser />
      
      {/* Services Teaser */}
      <ServicesTeaser />
    </>
  );
}
