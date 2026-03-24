/**
 * ServicesTeaser Component
 * 
 * Leistungsübersicht mit 5 Kacheln:
 * - Grafik/3D
 * - Laden/Messebau
 * - Werbemittel
 * - IT-Installation
 * - Montage
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette, 
  Store, 
  Megaphone, 
  Monitor, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Grafik & 3D',
    description: 'Kreative Gestaltung und fotorealistische Visualisierungen für Ihre Markenpräsenz.',
    href: '/leistungen/#grafik-3d',
  },
  {
    icon: Store,
    title: 'Laden- & Messebau',
    description: 'Maßgeschneiderte Ladeneinrichtungen und Messestände, die Ihre Marke ins rechte Licht rücken.',
    href: '/leistungen/#laden-messebau',
  },
  {
    icon: Megaphone,
    title: 'Werbemittel',
    description: 'Hochwertige Displays, Schilder und Werbeträger für maximale Aufmerksamkeit.',
    href: '/leistungen/#werbemittel',
  },
  {
    icon: Monitor,
    title: 'IT-Installation',
    description: 'Professionelle Installation von Digital Signage, Beleuchtung und technischer Infrastruktur.',
    href: '/leistungen/#it-installation',
  },
  {
    icon: Wrench,
    title: 'Montage & Service',
    description: 'Zuverlässige Montage und weltweiter Service für Ihre Projekte.',
    href: '/leistungen/#montage-service',
  },
];

const ServicesTeaser: React.FC = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-tyana">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            Alles aus einer Hand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Von der ersten Idee bis zur finalen Installation – wir begleiten Ihr Projekt 
            in jeder Phase mit Fachwissen und Leidenschaft.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Erste 3 Kacheln */}
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group block bg-white p-8 h-full hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}

          {/* Letzte 2 Kacheln + CTA */}
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group block bg-white p-8 h-full hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href="/leistungen/"
              className="group block bg-primary p-8 h-full hover:bg-primary-dark transition-all duration-300"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Alle Leistungen entdecken
                  </h3>
                  <p className="text-white/80">
                    Erfahren Sie mehr über unser umfassendes Leistungsspektrum 
                    und wie wir Ihr Projekt zum Erfolg führen.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-white font-semibold">
                    Zur Übersicht
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
