/**
 * Portfolio Page - TYANA GmbH
 * 
 * Portfolio-Seite mit:
 * - Claim und Einleitung
 * - Partnerschaften (Digital Titans, thisplays, zelos concept, Digitags)
 * - Bildergalerie mit Referenzbildern
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Partner
const partners = [
  { name: 'Digital Titans GmbH', description: 'Softwareentwicklung' },
  { name: 'thisplays GmbH', description: 'Design & Konzept' },
  { name: 'zelos concept', description: 'Digitale PoS Lösungen' },
  { name: 'Digitags', description: 'Digitale Preisschilder' },
];

// Portfolio Bilder (Referenzen)
const portfolioImages = [
  { src: '/images/ref1.jpeg', alt: 'Referenzprojekt 1 - POS Display Installation' },
  { src: '/images/ref2.jpeg', alt: 'Referenzprojekt 2 - Messestand Design' },
  { src: '/images/ref3.jpg', alt: 'Referenzprojekt 3 - Retail Konzept' },
  { src: '/images/ref4.jpg', alt: 'Referenzprojekt 4 - Ladeneinrichtung' },
  { src: '/images/ref5.jpg', alt: 'Referenzprojekt 5 - Werbedisplay' },
  { src: '/images/ref6.jpg', alt: 'Referenzprojekt 6 - Markeninszenierung' },
  { src: '/images/ref7.png', alt: 'Referenzprojekt 7 - Digital Signage' },
  { src: '/images/ref8.png', alt: 'Referenzprojekt 8 - 3D Visualisierung' },
];

export default function PortfolioPage() {
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
              Ergebnisse, die überzeugen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Hier eine kleine Auswahl unserer Projekte für nationale und internationale Marken.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-light border-b border-gray-200">
        <div className="container-tyana">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6"
          >
            Starke Partnerschaften
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-center group"
              >
                <div className="text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-500">
                  {partner.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Galerie */}
      <section className="py-16 md:py-24">
        <div className="container-tyana">
          {/* Bildergalerie Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtiler Hover-Overlay ohne Text */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Hinweis */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Dies ist eine Auswahl unserer Projekte. Kontaktieren Sie uns für weitere Referenzen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-tyana text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Lassen Sie uns gemeinsam etwas Großartiges schaffen
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Haben Sie ein Projekt im Kopf? Wir beraten Sie gerne unverbindlich 
              und entwickeln gemeinsam die perfekte Lösung.
            </p>
            <a
              href="/kontakt/"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-all duration-300"
            >
              Projekt anfragen
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
