/**
 * Root Layout - TYANA GmbH Website
 * 
 * Dieses Layout umschließt alle Seiten und enthält:
 * - Globale Metadaten
 * - CookieBanner (DSGVO)
 * - Navigation und Footer
 * - Structured Data für SEO
 */

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

export const metadata: Metadata = {
  title: 'TYANA GmbH | Designagentur für Markeninszenierung',
  description: 'Die TYANA GmbH entwickelt kreative Markenlösungen für POS, Retail, Messe und Unternehmenskommunikation. Design, Technik und Handwerk vereint.',
  keywords: 'Designagentur, Markeninszenierung, POS, Retail, Messebau, Werbemittel, 3D Visualisierung, Ladenbau, Digital Signage',
  authors: [{ name: 'TYANA GmbH' }],
  creator: 'TYANA GmbH',
  publisher: 'TYANA GmbH',
  metadataBase: new URL('https://www.tyana.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TYANA GmbH | Designagentur für Markeninszenierung',
    description: 'Kreative Markenlösungen für POS, Retail, Messe und Unternehmenskommunikation.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.tyana.de',
    siteName: 'TYANA GmbH',
    images: [
      {
        url: '/images/logo3.png',
        width: 1200,
        height: 630,
        alt: 'TYANA GmbH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TYANA GmbH | Designagentur für Markeninszenierung',
    description: 'Kreative Markenlösungen für POS, Retail, Messe und Unternehmenskommunikation.',
    images: ['/images/logo3.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo3.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo3.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo3.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/images/logo3.png'],
  },
  manifest: '/manifest.json',
  category: 'business',
  classification: 'Designagentur, Marketing, Werbung',
  other: {
    'theme-color': '#e62e4c',
    'msapplication-TileColor': '#e62e4c',
    'msapplication-config': 'none',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'TYANA GmbH',
              image: 'https://www.tyana.de/images/logo3.png',
              '@id': 'https://www.tyana.de',
              url: 'https://www.tyana.de',
              telephone: '',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Heddingheimerstrasse 19',
                addressLocality: 'Hattersheim',
                postalCode: '65795',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 50.0672,
                longitude: 8.4768,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              priceRange: '€€',
              description: 'Designagentur für Markeninszenierung - POS, Retail, Messebau, Werbemittel, IT-Installation',
              founder: {
                '@type': 'Person',
                name: 'Ali Karapinar',
              },
              sameAs: [],
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TYANA GmbH',
              url: 'https://www.tyana.de',
              logo: 'https://www.tyana.de/images/logo3.png',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@tyana.de',
                contactType: 'customer service',
                areaServed: 'DE',
                availableLanguage: ['German'],
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        
        {/* Navigation */}
        <Navbar />
        
        {/* Hauptinhalt */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* DSGVO Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
