/**
 * Datenschutz Page - TYANA GmbH
 * 
 * Datenschutzerklärung nach DSGVO.
 * HINWEIS: Bitte die Platzhalter durch korrekte Informationen ersetzen!
 */

import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Datenschutz | TYANA GmbH',
  description: 'Datenschutzerklärung der TYANA GmbH - Ihre Daten sind bei uns sicher.',
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container-tyana max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Datenschutz&shy;erklärung</h1>
        <p className="text-gray-600 text-lg mb-12">
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
          Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen 
          (DSGVO, TKG 2003).
        </p>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">1. Verantwortlicher</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-dark">TYANA GmbH</p>
              <p>Heddingheimerstrasse 19</p>
              <p>65795 Hattersheim</p>
              <p className="mt-4">
                <span className="font-medium">E-Mail:</span>{' '}
                <a href="mailto:info@tyana.de" className="text-primary hover:underline">
                  info@tyana.de
                </a>
              </p>
              <p>
                <span className="font-medium">Geschäftsführer:</span> Ali Karapinar
              </p>
            </div>
          </section>

          {/* 2. Datenerfassung auf unserer Website */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">2. Datenerfassung auf unserer Website</h2>
            
            <h3 className="text-xl font-semibold text-dark mt-6 mb-3">2.1 Server-Log-Dateien</h3>
            <p className="text-gray-600">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-6 mb-3">2.2 Kontaktformular</h3>
            <p className="text-gray-600">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-600 mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt.
            </p>
          </section>

          {/* 3. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">3. Cookies</h2>
            <p className="text-gray-600">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf 
              Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, 
              effektiver und sicherer zu machen.
            </p>
            <p className="text-gray-600 mt-4">
              Einige Cookies sind „session-basiert". Das bedeutet, dass sie nach dem Schließen 
              Ihres Browsers wieder gelöscht werden. Andere Cookies bleiben auf Ihrem Endgerät, 
              bis Sie diese löschen.
            </p>
            <p className="text-gray-600 mt-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
              werden und Cookies nur im Einzelfall erlauben.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-6 mb-3">3.1 Cookie-Übersicht</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Anbieter</th>
                    <th className="px-4 py-3 font-semibold">Zweck</th>
                    <th className="px-4 py-3 font-semibold">Speicherdauer</th>
                    <th className="px-4 py-3 font-semibold">Typ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">tyana-cookie-consent</td>
                    <td className="px-4 py-3">TYANA GmbH</td>
                    <td className="px-4 py-3">Speichert Ihre Cookie-Einwilligung</td>
                    <td className="px-4 py-3">1 Jahr</td>
                    <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essenziell</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">tyana-cookie-settings</td>
                    <td className="px-4 py-3">TYANA GmbH</td>
                    <td className="px-4 py-3">Speichert Ihre Cookie-Einstellungen</td>
                    <td className="px-4 py-3">1 Jahr</td>
                    <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essenziell</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">next-*</td>
                    <td className="px-4 py-3">Next.js</td>
                    <td className="px-4 py-3">Technische Funktionalität</td>
                    <td className="px-4 py-3">Session</td>
                    <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essenziell</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-dark mt-6 mb-3">3.2 Wesentliche Cookies</h3>
            <p className="text-gray-600">
              Diese Cookies sind für den Betrieb der Website erforderlich und können nicht 
              deaktiviert werden. Sie speichern zum Beispiel Ihre Cookie-Einstellungen und 
              technische Informationen für die Funktionalität der Website.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-6 mb-3">3.3 Cookie-Einwilligung</h3>
            <p className="text-gray-600">
              Beim ersten Besuch unserer Website werden Sie über die Verwendung von Cookies informiert 
              und um Ihre Einwilligung gebeten. Diese Einwilligung können Sie jederzeit widerrufen, 
              indem Sie auf das Cookie-Icon in der linken unteren Ecke klicken oder die Cookies in 
              Ihren Browsereinstellungen löschen.
            </p>
            <p className="text-gray-600 mt-4">
              Die Einwilligung wird mit einem Zeitstempel dokumentiert und in Ihrem Browser gespeichert. 
              Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </section>

          {/* 4. Ihre Rechte */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">4. Ihre Rechte</h2>
            <p className="text-gray-600">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, 
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, 
              dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre 
              datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, 
              können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
            <p className="text-gray-600 mt-4">In Deutschland ist dies der Bundesbeauftragte für den Datenschutz:</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</p>
              <p>Graurheindorfer Str. 153</p>
              <p>53117 Bonn</p>
              <p className="mt-2">
                <a 
                  href="https://www.bfdi.bund.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.bfdi.bund.de
                </a>
              </p>
            </div>
          </section>

          {/* 5. Speicherdauer */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">5. Speicherdauer</h2>
            <p className="text-gray-600">
              Wir speichern personenbezogene Daten nur so lange, wie dies für die Zwecke, 
              für die sie verarbeitet werden, erforderlich ist oder wie es gesetzliche 
              Aufbewahrungsfristen vorsehen.
            </p>
            <p className="text-gray-600 mt-4">
              Anfragen über das Kontaktformular werden für die Dauer von 12 Monaten gespeichert, 
              um bei Rückfragen Zugriff auf die ursprüngliche Anfrage zu haben.
            </p>
          </section>

          {/* 6. Dritt­anbieter */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">6. Drittanbieter</h2>
            <p className="text-gray-600">
              Wir verwenden folgende Drittanbieter-Dienste:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>
                <strong>Web3Forms:</strong> Für die Verarbeitung von Kontaktformularen. 
                Die Daten werden auf Servern in der EU verarbeitet.
                <br />
                <a 
                  href="https://web3forms.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Datenschutzerklärung von Web3Forms
                </a>
              </li>
              <li>
                <strong>Hosting:</strong> Unsere Website wird bei Netlify gehostet.
                <br />
                <a 
                  href="https://www.netlify.com/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Datenschutzerklärung von Netlify
                </a>
              </li>
            </ul>
          </section>

          {/* 7. SSL-Verschlüsselung */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">7. SSL-Verschlüsselung</h2>
            <p className="text-gray-600">
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
              vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
              erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" 
              wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* 8. Änderungen */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">8. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-gray-600">
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, 
              damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um 
              Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. 
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          {/* Kontakt Datenschutz */}
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">Kontakt zum Datenschutz</h2>
            <p className="text-gray-600">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <div className="mt-4">
              <a 
                href="mailto:info@tyana.de" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                info@tyana.de
              </a>
            </div>
          </section>

          {/* Stand */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              <strong>Stand:</strong> Februar 2026
            </p>
          </div>


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
