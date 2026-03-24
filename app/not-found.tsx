/**
 * Not Found Page - 404 Error
 * 
 * Benutzerfreundliche 404-Fehlerseite im TYANA Design
 */

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata = {
  title: '404 - Seite nicht gefunden | TYANA GmbH',
  description: 'Die gewünschte Seite konnte nicht gefunden werden.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-light pt-32 pb-24">
      <div className="container-tyana max-w-2xl text-center">
        {/* Error Code */}
        <div className="mb-8">
          <span className="text-9xl font-bold text-primary/20">404</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Seite nicht gefunden
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. 
          Bitte überprüfen Sie die URL oder navigieren Sie zurück zur Startseite.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </Link>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2 border-2 border-dark text-dark px-8 py-4 font-semibold hover:bg-dark hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Benötigen Sie Hilfe?{' '}
            <a href="mailto:info@tyana.de" className="text-primary hover:underline">
              info@tyana.de
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
