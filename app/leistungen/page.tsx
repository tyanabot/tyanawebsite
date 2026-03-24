/**
 * Leistungen Page - TYANA GmbH
 * 
 * Übersichtsseite aller Leistungen mit:
 * - Hero/Header mit Claim
 * - 5 Detail-Sektionen (abwechselnd Links/Rechts)
 * - Jede Sektion mit Features/Bulletpoints
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Box, 
  Store, 
  Megaphone, 
  Monitor, 
  CheckCircle 
} from 'lucide-react';

// Leistungsdaten mit Bildern
const services = [
  {
    id: 'grafik-3d',
    icon: Palette,
    title: 'Grafik, Video & Animation',
    subtitle: 'Visuelle Kommunikation',
    description: 'Wir gestalten Ihre visuelle Kommunikation mit Kreativität und technischer Präzision. Von der Konzeption bis zur finalen Umsetzung sorgen wir für ein einheitliches und markenstarkes Erscheinungsbild.',
    features: [
      'Corporate Design & Branding',
      'Printmedien & Broschüren',
      'Packaging Design',
      'Motion Graphics & Animation',
      'Videoproduktion & Editing',
      'Social Media Content',
    ],
    image: '/images/leistung2.jpeg',
    imageAlt: 'Grafik und Video Produktion',
  },
  {
    id: '3d-visualisierung',
    icon: Box,
    title: '3D & Visualisierung',
    subtitle: 'Virtuelle Realität',
    description: 'Mit fotorealistischen 3D-Visualisierungen bringen wir Ihre Ideen zum Leben, bevor sie realisiert werden. Perfekt für Präsentationen, Marketing und Planungsentscheidungen.',
    features: [
      'Produktvisualisierung',
      'Architekturvisualisierung',
      'Raumplanung & Einrichtung',
      '360° Panoramen',
      'VR-Ready Renderings',
      'Animationen & Walkthroughs',
    ],
    image: '/images/leistung3.jpeg',
    imageAlt: '3D Visualisierung',
  },
  {
    id: 'laden-messebau',
    icon: Store,
    title: 'Laden- & Messebau',
    subtitle: 'Räume erleben',
    description: 'Wir schaffen Räume, die begeistern. Ob Ladenbau, Messestand oder Showroom – unsere maßgeschneiderten Lösungen setzen Ihre Marke perfekt in Szene.',
    features: [
      'Ladenbau & Shopkonzepte',
      'Messestände & Exhibition',
      'Showroomgestaltung',
      'Pop-up Stores',
      'Modulare Systeme',
      'Weltweiter Auf- & Abbau',
    ],
    image: '/images/leistung4.jpeg',
    imageAlt: 'Laden- und Messebau',
  },
  {
    id: 'werbemittel',
    icon: Megaphone,
    title: 'Werbemittel & Displays',
    subtitle: 'Aufmerksamkeit garantiert',
    description: 'Hochwertige Werbemittel und Displays für maximale Aufmerksamkeit am Point of Sale. Individuell gefertigt und perfekt auf Ihre Marke abgestimmt.',
    features: [
      'POS-Displays & Aufsteller',
      'Schilder & Beschilderung',
      'Fahnen & Banner',
      'Leuchtreklame & Lichtwerbung',
      'Digital Signage Hardware',
      'Messetragersysteme',
    ],
    image: '/images/leistung5.jpeg',
    imageAlt: 'Werbemittel und Displays',
  },
  {
    id: 'it-installation',
    icon: Monitor,
    title: 'IT-Installation',
    subtitle: 'Technik perfekt integriert',
    description: 'Professionelle Installation und Integration technischer Systeme. Von Digital Signage über Beleuchtung bis hin zu komplexen Medientechnik-Lösungen.',
    features: [
      'Digital Signage Installation',
      'Videowalls & Screens',
      'Beleuchtungssysteme',
      'Audiosysteme',
      'Netzwerk & Infrastruktur',
      'Wartung & Support',
    ],
    image: '/images/leistung6.jpeg',
    imageAlt: 'IT-Installation',
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-dark">
        <div className="container-tyana">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Wir gestalten visuelle Kommunikation, die sichtbar wirkt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Von der ersten Idee bis zur finalen Installation – wir begleiten Ihr Projekt mit kreativem Design, technischer Expertise und handwerklicher Präzision.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-16 md:py-24">
        <div className="container-tyana">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={isEven ? '' : 'lg:order-2'}
                    >
                      {/* Icon & Subtitle */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                          {service.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={isEven ? '' : 'lg:order-1'}
                    >
                      <div className="relative">
                        {/* Service-Bild */}
                        <div className="relative aspect-video shadow-xl overflow-hidden bg-gray-200">
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading={index < 2 ? "eager" : "lazy"}
                            className="object-cover"
                          />
                        </div>
                        {/* Decorative Element */}
                        <div className={`absolute -z-10 w-full h-full bg-primary/10 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-tyana text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Ideen verwirklichen. Kontaktieren Sie uns 
              für ein unverbindliches Erstgespräch.
            </p>
            <a
              href="/kontakt/"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-dark hover:text-white transition-all duration-300"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
