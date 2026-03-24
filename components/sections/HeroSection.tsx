/**
 * HeroSection Component
 * 
 * Hero-Bereich der Startseite mit:
 * - Großem Hintergrundbild/Video
 * - Claim und Subtext
 * - Zwei CTA-Buttons
 * - Fade-In Animationen
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leistung1.jpeg"
          alt="TYANA GmbH - Designagentur"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
      </div>

      {/* Content */}
      <div className="container-tyana relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Claim */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow"
          >
            Design, das wirkt.
            <br />
            <span className="text-primary">Räume, die verkaufen.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Die TYANA GmbH entwickelt kreative Markenlösungen für POS, Retail, 
            Messe und Unternehmenskommunikation. Wir verbinden Design, Technik und Handwerk.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio/"
              className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-all duration-300"
            >
              Projekte ansehen
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/kontakt/"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-dark transition-all duration-300"
            >
              Kontakt
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Nach unten scrollen"
        >
          <span className="text-sm font-medium">Mehr entdecken</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
