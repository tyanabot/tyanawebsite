/**
 * CookieBanner Component - DSGVO-konform
 * 
 * WICHTIGE DSGVO-ANFORDERUNGEN:
 * - Aktive Einwilligung erforderlich (keine voreingestellten Haken)
 * - Gleichrangige Buttons (Akzeptieren/Ablehnen gleich sichtbar)
 * - Einfache Widerrufsmöglichkeit
 * - Dokumentation der Einwilligung (Timestamp)
 * - Essenzielle Cookies dürfen nicht abgewählt werden
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, ChevronDown, ChevronUp } from 'lucide-react';

type ConsentType = 'accepted' | 'declined' | null;

interface CookieSettings {
  essential: boolean;  // Immer true, nicht abwählbar
  analytics: boolean;  // Nur wenn akzeptiert
  marketing: boolean;  // Nur wenn akzeptiert
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentType>(null);
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  // Prüfe LocalStorage beim Mount
  useEffect(() => {
    setIsMounted(true);
    const storedConsent = localStorage.getItem('tyana-cookie-consent') as ConsentType;
    const storedSettings = localStorage.getItem('tyana-cookie-settings');
    
    if (!storedConsent) {
      // Zeige Banner nach kurzer Verzögerung
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setConsent(storedConsent);
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    }
  }, []);

  // Speichere Einwilligung mit Timestamp für DSGVO-Dokumentation
  const saveConsent = (type: ConsentType, cookieSettings: CookieSettings) => {
    const timestamp = new Date().toISOString();
    const consentData = {
      type,
      timestamp,
      settings: cookieSettings,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
    };
    
    localStorage.setItem('tyana-cookie-consent', type || '');
    localStorage.setItem('tyana-cookie-settings', JSON.stringify(cookieSettings));
    localStorage.setItem('tyana-cookie-consent-data', JSON.stringify(consentData));
    
    setConsent(type);
    setIsVisible(false);
  };

  // Alle Cookies akzeptieren
  const acceptAll = () => {
    const allSettings: CookieSettings = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setSettings(allSettings);
    saveConsent('accepted', allSettings);
  };

  // Nur essenzielle Cookies
  const acceptEssentialOnly = () => {
    const essentialSettings: CookieSettings = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setSettings(essentialSettings);
    saveConsent('declined', essentialSettings);
  };

  // Benutzerdefinierte Einstellungen speichern
  const saveCustomSettings = () => {
    const hasOptionalCookies = settings.analytics || settings.marketing;
    saveConsent(hasOptionalCookies ? 'accepted' : 'declined', settings);
  };

  // Einwilligung widerrufen (für Footer-Link)
  const revokeConsent = () => {
    localStorage.removeItem('tyana-cookie-consent');
    localStorage.removeItem('tyana-cookie-settings');
    localStorage.removeItem('tyana-cookie-consent-data');
    setConsent(null);
    setIsVisible(true);
  };

  // Verhindere Hydration-Mismatch
  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-2xl border-t-4 border-primary"
          >
            <div className="container-tyana py-6 md:py-8">
              {/* Hauptbereich */}
              <div className="flex flex-col gap-6">
                {/* Header mit Icon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-dark text-lg mb-2">
                      Wir schätzen Ihre Privatsphäre
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche 
                      Erfahrung auf unserer Website zu bieten. Einige Cookies sind für den Betrieb 
                      der Website erforderlich, während andere uns helfen, die Website zu verbessern 
                      und Ihnen personalisierte Inhalte anzuzeigen.
                    </p>
                  </div>
                  {/* Schließen-Button nur für Details-Ansicht */}
                  <button
                    onClick={() => setShowDetails(false)}
                    className="hidden md:block p-2 text-gray-400 hover:text-dark transition-colors"
                    aria-label="Banner schließen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cookie-Details (aufklappbar) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <h4 className="font-semibold text-dark mb-4">Cookie-Einstellungen</h4>
                        
                        {/* Essenzielle Cookies */}
                        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                          <div>
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-primary" />
                              <span className="font-medium text-dark">Essenzielle Cookies</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Erforderlich</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              Diese Cookies sind für den Betrieb der Website unbedingt erforderlich 
                              und können nicht deaktiviert werden.
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={settings.essential}
                            disabled
                            className="w-5 h-5 accent-primary cursor-not-allowed"
                          />
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                          <div>
                            <span className="font-medium text-dark">Analyse-Cookies</span>
                            <p className="text-sm text-gray-500 mt-1">
                              Helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                              indem sie Informationen anonym sammeln.
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={settings.analytics}
                            onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                            className="w-5 h-5 accent-primary cursor-pointer"
                          />
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="font-medium text-dark">Marketing-Cookies</span>
                            <p className="text-sm text-gray-500 mt-1">
                              Werden verwendet, um Besuchern relevante Werbung anzuzeigen.
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={settings.marketing}
                            onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                            className="w-5 h-5 accent-primary cursor-pointer"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  {/* Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {showDetails ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Einstellungen ausblenden
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Einstellungen anpassen
                      </>
                    )}
                  </button>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    {showDetails ? (
                      <>
                        <button
                          onClick={() => setShowDetails(false)}
                          className="px-6 py-3 border-2 border-gray-300 text-dark font-medium hover:border-dark hover:bg-dark hover:text-white transition-all duration-300 text-sm"
                        >
                          Zurück
                        </button>
                        <button
                          onClick={saveCustomSettings}
                          className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300 text-sm"
                        >
                          Auswahl speichern
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={acceptEssentialOnly}
                          className="px-6 py-3 border-2 border-gray-300 text-dark font-medium hover:border-dark hover:bg-dark hover:text-white transition-all duration-300 text-sm order-2 sm:order-1"
                        >
                          Nur essenzielle
                        </button>
                        <button
                          onClick={acceptAll}
                          className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300 text-sm order-1 sm:order-2"
                        >
                          Alle akzeptieren
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Rechtlicher Hinweis */}
                <p className="text-xs text-gray-500 text-center">
                  Mit Ihrer Einwilligung werden Cookies gesetzt und Daten an Dritte übermittelt.{' '}
                  <Link href="/datenschutz/" className="text-primary hover:underline">
                    Mehr erfahren
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button zum Widerrufen (nur wenn Einwilligung vorhanden) */}
      {consent && !isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-4 left-4 z-50 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow"
          onClick={revokeConsent}
          title="Cookie-Einstellungen ändern"
          aria-label="Cookie-Einstellungen ändern"
        >
          <Cookie className="w-5 h-5 text-primary" />
        </motion.button>
      )}
    </>
  );
};

export default CookieBanner;
