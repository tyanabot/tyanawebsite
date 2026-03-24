/**
 * SectionHeader Component
 * 
 * Wiederverwendbarer Header für Sektionen mit:
 * - Claim/Titel
 * - Optionaler Untertitel
 * - Optionaler Beschreibungstext
 * - Animation via Framer Motion
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  claim: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  claim,
  subtitle,
  description,
  centered = true,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-white' : 'text-dark';
  const subtitleColor = light ? 'text-gray-300' : 'text-primary';
  const descriptionColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-sm font-semibold uppercase tracking-wider ${subtitleColor} mb-3`}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Main Claim */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-6`}
      >
        {claim}
      </motion.h2>

      {/* Description (optional) */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionColor}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
