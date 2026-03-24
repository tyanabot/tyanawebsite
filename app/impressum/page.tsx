/**
 * Impressum Page - TYANA GmbH
 * 
 * Impressum mit allen gesetzlich erforderlichen Angaben.
 */

import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Impressum | TYANA GmbH',
  description: 'Impressum der TYANA GmbH - Designagentur für Markeninszenierung',
  alternates: {
    canonical: '/impressum/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container-tyana max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-12">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-dark">TYANA GmbH</p>
              <p>Heddingheimerstrasse 19</p>
              <p>65795 Hattersheim</p>
              <p className="mt-4">Deutschland</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Vertreten durch</h2>
            <p>Geschäftsführer: Ali Karapinar</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">E-Mail:</span>{' '}
                <a href="mailto:info@tyana.de" className="text-primary hover:underline">
                  info@tyana.de
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{' '}
                <a href="https://www.tyana.de" className="text-primary hover:underline">
                  www.tyana.de
                </a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Registereintrag</h2>
            <p className="text-gray-600">
              Die TYANA GmbH ist im Handelsregister eingetragen.
              Details zum Registergericht und zur Registernummer werden auf Anfrage zur Verfügung gestellt.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-600">
              Die Umsatzsteuer-Identifikationsnummer wird auf Anfrage bereitgestellt.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-dark">Ali Karapinar</p>
              <p>Heddingheimerstrasse 19</p>
              <p>65795 Hattersheim</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Streitschlichtung</h2>
            <p className="text-gray-600 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-gray-600">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-600">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Haftung für Links</h2>
            <p className="text-gray-600">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Urheberrecht</h2>
            <p className="text-gray-600">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>


        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-300"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
