/**
 * ServiceCard Component
 * 
 * Kachel für Leistungsübersichten mit:
 * - Icon
 * - Titel
 * - Beschreibung
 * - Optionaler Link
 * - Hover-Effekte
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  variant?: 'default' | 'dark' | 'outline';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  features,
  variant = 'default',
}) => {
  const baseClasses = `
    group relative p-6 md:p-8 h-full
    transition-all duration-300 ease-out
    flex flex-col
  `;

  const variantClasses = {
    default: 'bg-white shadow-lg hover:shadow-2xl border border-transparent hover:border-primary/10',
    dark: 'bg-dark text-white',
    outline: 'border-2 border-gray-200 hover:border-primary',
  };

  const iconClasses = {
    default: 'text-primary bg-primary/10',
    dark: 'text-primary bg-primary/20',
    outline: 'text-primary bg-primary/10',
  };

  const CardContent = () => (
    <>
      {/* Icon */}
      <div className={`w-14 h-14 rounded-lg ${iconClasses[variant]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-3 ${variant === 'dark' ? 'text-white' : 'text-dark'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`mb-4 flex-grow ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>

      {/* Features (optional) */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link (optional) */}
      {href && (
        <div className={`flex items-center gap-2 font-medium text-sm transition-colors duration-300 ${variant === 'dark' ? 'text-primary hover:text-white' : 'text-primary hover:text-primary-dark'}`}>
          <span>Mehr erfahren</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {href ? (
        <Link href={href} className="block h-full flex flex-col">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

export default ServiceCard;
