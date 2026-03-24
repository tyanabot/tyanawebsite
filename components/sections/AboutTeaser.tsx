/**
 * AboutTeaser Component
 * 
 * Kurzbeschreibung der Agentur mit:
 * - Claim/Überschrift
 * - Beschreibungstext
 * - Statistiken/Zahlen
 * - CTA
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Realisierte Projekte' },
  { value: '50+', label: 'Zufriedene Kunden' },
  { value: '5', label: 'Kernleistungen' },
];

const AboutTeaser: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-tyana">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Über TYANA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              Wir verbinden Design, 
              <span className="text-primary"> Technik</span> und 
              <span className="text-primary"> Handwerk</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Als Full-Service-Agentur für Markeninszenierung bieten wir Ihnen alles aus einer Hand. 
              Von der ersten Idee über die Planung und Visualisierung bis hin zur technischen Umsetzung 
              und Installation – wir begleiten Ihr Projekt in jeder Phase.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Unser erfahrenes Team aus Designern, Technikern und Handwerkern arbeitet Hand in Hand, 
              um Ihre Marke perfekt in Szene zu setzen. Ob POS, Retail, Messe oder Unternehmenskommunikation 
              – wir schaffen Räume, die begeistern und verkaufen.
            </p>
            <Link
              href="/ueber-uns/"
              className="group inline-flex items-center gap-2 bg-dark text-white px-8 py-4 font-semibold hover:bg-primary transition-all duration-300"
            >
              Mehr über uns
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-light p-8 text-center hover:bg-primary group transition-colors duration-300"
              >
                <span className="block text-4xl md:text-5xl font-bold text-primary group-hover:text-white transition-colors duration-300 mb-2">
                  {stat.value}
                </span>
                <span className="text-gray-600 group-hover:text-white/80 text-sm font-medium transition-colors duration-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
