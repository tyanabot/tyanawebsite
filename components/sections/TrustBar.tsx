/**
 * TrustBar Component
 * 
 * Marquee/Laufleiste mit Kundenlogos
 * - Unendlich scrollende Animation
 * - Duplizierte Logos für nahtlosen Loop
 * - Grayscale-Effekt mit Farbe beim Hover
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Dummy-Logos (werden später durch echte ersetzt)
const clients = [
  { name: 'Samsung', placeholder: 'samsung-logo.png' },
  { name: 'Vodafone', placeholder: 'vodafone-logo.png' },
  { name: 'LG', placeholder: 'lg-logo.png' },
  { name: 'Braun', placeholder: 'braun-logo.png' },
  { name: 'Sony', placeholder: 'sony-logo.png' },
  { name: 'Panasonic', placeholder: 'panasonic-logo.png' },
  { name: 'Philips', placeholder: 'philips-logo.png' },
  { name: 'Bosch', placeholder: 'bosch-logo.png' },
];

const TrustBar: React.FC = () => {
  // Dupliziere die Liste für nahtlosen Loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="trust-bar" className="bg-gray-light py-12 overflow-hidden">
      <div className="container-tyana mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider"
        >
          Vertrauen von führenden Marken
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays für Fade-Effekt */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-light to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              {/* Logo Placeholder */}
              <div className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-500" />
                </div>
                <span className="text-xl font-bold text-dark">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hinweis für Entwickler */}
      <div className="container-tyana mt-8">
        <p className="text-center text-xs text-gray-400">
          Platzhalter: Ersetzen Sie die Logos in /public/images/ (samsung-logo.png, vodafone-logo.png, etc.)
        </p>
      </div>
    </section>
  );
};

export default TrustBar;
