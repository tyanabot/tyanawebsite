/**
 * Über uns Page - TYANA GmbH
 * 
 * Über uns-Seite mit:
 * - Claim und Beschreibung
 * - Team/Vision/Werte
 * - Standort mit Google Maps
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart, Users, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Kreativität',
    description: 'Wir denken über den Tellerrand hinaus und finden innovative Lösungen für jede Herausforderung.',
  },
  {
    icon: Target,
    title: 'Präzision',
    description: 'Handwerkliche Exzellenz und technische Perfektion sind der Maßstab für unsere Arbeit.',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    description: 'Wir lieben, was wir tun – und das spürt man in jedem unserer Projekte.',
  },
];

const stats = [
  { icon: Users, value: '25+', label: 'Mitarbeiter' },
  { icon: Award, value: '15+', label: 'Jahre Erfahrung' },
  { icon: Globe, value: '3', label: 'Standorte' },
];

export default function UeberUnsPage() {
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
              Kreativität, Technik und Handwerk vereint
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Seit über 15 Jahren gestalten wir Markenerlebnisse, die begeistern. Erfahren Sie mehr über unsere Geschichte und Philosophie.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-tyana">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="relative aspect-square shadow-xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/uberuns.jpeg"
                    alt="TYANA GmbH Team bei der Arbeit"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Unsere Geschichte
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Von der Vision zur Realität
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Die TYANA GmbH wurde mit einer klaren Vision gegründet: Marken nicht nur sichtbar, 
                  sondern erlebbar zu machen. Was als kleines Designteam begann, hat sich zu einem 
                  Full-Service-Dienstleister für Markeninszenierung entwickelt.
                </p>
                <p>
                  Heute vereinen wir unter einem Dach kreative Designer, erfahrene Techniker und 
                  qualifizierte Handwerker. Diese interdisziplinäre Zusammenarbeit ermöglicht es uns, 
                  Projekte ganzheitlich zu betreuen – von der ersten Skizze bis zur finalen Installation.
                </p>
                <p>
                  Unser Erfolg basiert auf dem Vertrauen unserer Kunden und der Leidenschaft unseres Teams. 
                  Wir sind stolz darauf, für namhafte Marken arbeiten zu dürfen und freuen uns auf jedes neue Projekt.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="block text-2xl md:text-3xl font-bold text-dark">{stat.value}</span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-tyana">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              Unsere Werte
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-dark"
            >
              Was uns antreibt
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-white">
        <div className="container-tyana">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Unser Standort
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Besuchen Sie uns
              </h2>
              <p className="text-gray-600 mb-8">
                Unser Hauptsitz befindet sich im Herzen von Hattersheim am Main. 
                Wir freuen uns auf Ihren Besuch – vereinbaren Sie gerne einen Termin.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-dark mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    TYANA GmbH<br />
                    Heddingheimerstrasse 19<br />
                    65795 Hattersheim
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Kontakt</h3>
                  <p className="text-gray-600">
                    Ali Karapinar<br />
                    <a href="mailto:info@tyana.de" className="text-primary hover:underline">
                      info@tyana.de
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-full min-h-[400px] shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8834!2d8.4768!3d50.0672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbe4532c4b4a7%3A0x779fac2a2f00b8f1!2sHeddingheimer%20Str.%2019%2C%2065795%20Hattersheim%20am%20Main!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TYANA GmbH Standort"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
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
              Lassen Sie uns kennenlernen
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
              Kontaktieren Sie uns für ein unverbindliches Gespräch.
            </p>
            <a
              href="/kontakt/"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-dark hover:text-white transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
