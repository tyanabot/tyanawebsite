/**
 * Footer Component
 * 
 * Footer mit:
 * - Logo & Unternehmensbeschreibung
 * - Schnelllinks
 * - Kontaktdaten
 * - Rechtliche Links (Impressum, Datenschutz)
 * - Copyright
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { href: '/leistungen/', label: 'Leistungen' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/ueber-uns/', label: 'Über uns' },
  { href: '/kontakt/', label: 'Kontakt' },
];

const legalLinks = [
  { href: '/impressum/', label: 'Impressum' },
  { href: '/datenschutz/', label: 'Datenschutz' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-tyana py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative h-12 w-40">
              <Image
                src="/images/logo3.png"
                alt="TYANA GmbH Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Designagentur für Markeninszenierung. Wir verbinden kreatives Design, 
              technische Umsetzung und handwerkliche Präzision für Ihren Erfolg.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Grafik & 3D-Visualisierung</li>
              <li>Laden- & Messebau</li>
              <li>Werbemittel & Displays</li>
              <li>IT-Installation</li>
              <li>Montage & Service</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Heddingheimerstrasse+19,+65795+Hattersheim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    TYANA GmbH<br />
                    Heddingheimerstrasse 19<br />
                    65795 Hattersheim
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@tyana.de"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@tyana.de</span>
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>Auf Anfrage</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-tyana py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} TYANA GmbH. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  localStorage.removeItem('tyana-cookie-consent');
                  localStorage.removeItem('tyana-cookie-settings');
                  window.location.reload();
                }}
                className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
