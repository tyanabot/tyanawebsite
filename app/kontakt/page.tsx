/**
 * Kontakt Page - TYANA GmbH
 * 
 * Kontakt-Seite mit:
 * - Claim und Einleitung
 * - Web3Forms Kontaktformular
 * - Kontaktdaten (Ali Karapinar)
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/sections/ContactForm';
import { MapPin, Mail, User, Building2, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: User,
    title: 'Ansprechpartner',
    content: 'Ali Karapinar',
    subtext: 'Geschäftsführer',
  },
  {
    icon: Building2,
    title: 'Adresse',
    content: 'Heddingheimerstrasse 19',
    subtext: '65795 Hattersheim',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'info@tyana.de',
    subtext: 'Wir antworten schnellstmöglich',
    href: 'mailto:info@tyana.de',
  },
  {
    icon: Clock,
    title: 'Erreichbarkeit',
    content: 'Mo - Fr: 9:00 - 17:00 Uhr',
    subtext: 'Termine nach Vereinbarung',
  },
];

export default function KontaktPage() {
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
              Lassen Sie uns Ihr Projekt realisieren
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Haben Sie eine Idee oder ein konkretes Projekt? Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-tyana">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Kontaktdaten
              </h2>
              <p className="text-gray-600 mb-10">
                Wir freuen uns auf Ihre Nachricht. Füllen Sie das Formular aus 
                oder kontaktieren Sie uns direkt über die unten stehenden Informationen.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">{info.title}</h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-primary hover:underline font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-dark font-medium">{info.content}</p>
                      )}
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Link */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <a
                  href="https://maps.google.com/?q=Heddingheimerstrasse+19,+65795+Hattersheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  In Google Maps öffnen
                </a>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-gray-light">
        <div className="container-tyana">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                Schnelle Antworten
              </h2>
              <p className="text-gray-600 mb-8">
                Für einfache Anfragen können Sie uns auch direkt per E-Mail erreichen. 
                Wir bemühen uns, alle Nachrichten innerhalb von 24 Stunden zu beantworten.
              </p>
              <a
                href="mailto:info@tyana.de"
                className="inline-flex items-center gap-2 border-2 border-dark text-dark px-8 py-3 font-semibold hover:bg-dark hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                info@tyana.de
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
