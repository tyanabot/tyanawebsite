/**
 * Navbar Component
 * 
 * Responsive Navigation mit:
 * - Logo
 * - Desktop-Navigation (Links)
 * - Mobile-Navigation (Hamburger-Menü)
 * - Scroll-Effekt (Hintergrund wird sichtbar beim Scrollen)
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen/', label: 'Leistungen' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/ueber-uns/', label: 'Über uns' },
  { href: '/kontakt/', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll-Handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile-Menü bei Routenwechsel schließen
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Scrollen bei offenem Mobile-Menü verhindern
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-white shadow-md transition-all duration-300 ease-out
          ${isScrolled || isMobileMenuOpen ? 'py-3' : 'py-4'}
        `}
      >
        <div className="container-tyana">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative h-10 w-32 md:h-12 md:w-40 transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/images/logo2.jpeg"
                alt="TYANA GmbH Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      text-sm font-medium text-dark hover:text-primary transition-colors duration-300
                      relative after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                      hover:after:w-full
                      ${isActive(link.href) ? 'after:w-full text-primary' : ''}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* CTA Button */}
              <li>
                <Link
                  href="/kontakt/"
                  className="text-sm font-semibold px-5 py-2.5 bg-primary text-white hover:bg-primary-dark transition-all duration-300"
                >
                  Anfrage senden
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-dark transition-colors duration-300"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`
                      text-2xl font-semibold transition-colors duration-300
                      ${isActive(link.href) ? 'text-primary' : 'text-dark hover:text-primary'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/kontakt/"
                  className="mt-4 bg-primary text-white px-8 py-3 text-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Anfrage senden
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
