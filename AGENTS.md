# TYANA GmbH Website - Agent Guide

Dieses Dokument enthält alle wesentlichen Informationen für AI Coding Agents, die am TYANA GmbH Website-Projekt arbeiten.

## Projektübersicht

Die TYANA GmbH Website ist eine moderne, hochperformante B2B-Agentur-Website für eine deutsche Designagentur mit Fokus auf Markeninszenierung ("Designagentur für Markeninszenierung"). Die Website präsentiert Leistungen wie Grafik/3D-Visualisierung, Laden-/Messebau, Werbemittel, IT-Installation und Montage-Service.

**Kerneigenschaften:**
- Sprache: Deutsch (alle nutzerseitigen Texte)
- Zielgruppe: B2B-Kunden im POS-, Retail-, Messen- und Unternehmenskommunikations-Bereich
- DSGVO-konform: Keine externen Fonts, keine Tracking-Cookies ohne Einwilligung
- Statische Site-Generierung (SSG) - kein Server-Runtime erforderlich
- Deployment: Netlify

## Technologie-Stack

| Kategorie | Technologie | Version |
|-----------|------------|---------|
| Framework | Next.js | 14.2.0 |
| Sprache | TypeScript | 5.4.0 |
| UI-Bibliothek | React | 18.2.0 |
| Styling | Tailwind CSS | 3.4.3 |
| Animation | Framer Motion | 11.0.0 |
| Icons | Lucide React | 0.363.0 |
| Package Manager | npm | - |
| Build-Output | Static Export | `dist/` |

**Node.js Version:** 18+ (definiert in `.nvmrc`)

## Build-Befehle

```bash
# Development-Server (localhost:3000)
npm run dev

# Produktions-Build (statischer Export nach dist/)
npm run build

# Production-Server starten (nach Build)
npm run start

# ESLint ausführen
npm run lint

# Abhängigkeiten installieren
npm install
```

## Projektstruktur

```
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Startseite (/)
│   ├── layout.tsx               # Root-Layout (Metadaten, Navbar, Footer, CookieBanner)
│   ├── globals.css              # Globale Styles, @font-face Definitionen
│   ├── leistungen/              # Leistungen-Seite (/leistungen/)
│   ├── portfolio/               # Portfolio-Seite (/portfolio/)
│   ├── ueber-uns/               # Über uns-Seite (/ueber-uns/)
│   ├── kontakt/                 # Kontakt-Seite (/kontakt/)
│   ├── impressum/               # Impressum (/impressum/)
│   └── datenschutz/             # Datenschutzerklärung (/datenschutz/)
├── components/
│   ├── layout/                  # Layout-Komponenten
│   │   ├── Navbar.tsx           # Navigation mit Mobile-Menü
│   │   ├── Footer.tsx           # Footer mit Links und Kontaktdaten
│   │   └── CookieBanner.tsx     # DSGVO-konformer Cookie-Consent
│   ├── sections/                # Seiten-Sektionen
│   │   ├── HeroSection.tsx      # Hero mit Hintergrundbild
│   │   ├── TrustBar.tsx         # Kundenlogos-Marquee
│   │   ├── AboutTeaser.tsx      # Über-uns-Vorschau mit Statistiken
│   │   ├── ServicesTeaser.tsx   # Leistungskacheln-Übersicht
│   │   └── ContactForm.tsx      # Web3Forms Kontaktformular
│   └── ui/                      # Wiederverwendbare UI-Komponenten
│       ├── Button.tsx           # Button mit Varianten
│       ├── SectionHeader.tsx    # Sektions-Titel + Beschreibung
│       ├── ServiceCard.tsx      # Leistungs-Kachel
│       └── ImagePlaceholder.tsx # Bild-Platzhalter
├── lib/                         # Hilfsfunktionen
│   └── utils.ts                 # cn(), debounce(), formatPhoneNumber(), scrollToElement()
├── public/                      # Statische Assets
│   ├── fonts/                   # Lokale Inter-Font-Dateien (DSGVO-konform)
│   │   ├── Inter-Light.woff2    # 300
│   │   ├── Inter-Regular.woff2  # 400
│   │   ├── Inter-Medium.woff2   # 500
│   │   ├── Inter-SemiBold.woff2 # 600
│   │   └── Inter-Bold.woff2     # 700
│   └── images/                  # Bilder und Logos
│       ├── logo.png/jpeg        # TYANA Logos
│       ├── leistung1-6.jpeg     # Leistungsseiten-Bilder
│       ├── ref1-8.{jpeg,png,jpg}# Portfolio-Referenzbilder
│       └── uberuns.jpeg         # Über-uns-Teamfoto
├── dist/                        # Build-Output (generiert)
├── next.config.js               # Next.js Konfiguration (static export)
├── tailwind.config.js           # Tailwind CSS Konfiguration
├── tsconfig.json                # TypeScript Konfiguration
├── postcss.config.js            # PostCSS Konfiguration
└── netlify.toml                 # Netlify Deployment Konfiguration
```

## Code-Style-Richtlinien

### Datei-Organisation
- **Seiten**: Jede Route hat eigenen Ordner mit `page.tsx`
- **Komponenten**: Organisiert nach Zweck in `layout/`, `sections/`, `ui/`
- **Benennung**: PascalCase für Komponenten, camelCase für Utilities

### Komponenten-Struktur
```typescript
/**
 * Component Name - Kurzbeschreibung (auf Deutsch)
 * 
 * Detaillierte Beschreibung der Komponenten-Funktionalität
 */

'use client'; // Nur für Client-Komponenten

import React from 'react';
// Imports...

interface ComponentProps {
  // Props...
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Komponenten-Logik
  return (
    // JSX
  );
};

export default Component;
```

### Styling-Konventionen
- Ausschließlich Tailwind CSS Utility-Klassen verwenden
- Eigene Klassen in `globals.css` mittels `@layer components` definieren
- Farben in `tailwind.config.js` definiert:
  - `primary`: '#e62e4c' (TYANA Rot)
  - `primary-dark`: '#c42640'
  - `dark`: '#1d1d1b' (TYANA Schwarz)
  - `light`: '#ffffff'
  - `gray-light`: '#f5f5f5'
  - `gray-medium`: '#e5e5e5'
- `cn()` Utility aus `lib/utils.ts` für bedingte Klassen verwenden
- Container-Klasse: `container-tyana` (max-w-7xl mit responsivem Padding)
- Sektions-Padding: `section-padding` (py-16 md:py-24 lg:py-32)

### TypeScript-Konventionen
- Strict-Mode aktiviert
- Alle Komponenten mit `React.FC<Props>` typisieren
- Props-Interfaces explizit definieren
- Path-Alias `@/*` mapped auf Projekt-Root

### Sprache
- **Alle nutzerseitigen Texte MÜSSEN auf Deutsch sein**
- Kommentare und Dokumentation auf Deutsch verfassen
- Variablennamen können auf Englisch sein

## Server vs Client Komponenten

### Server-Komponenten (Standard)
- Statische Seiten ohne Interaktivität
- Data-Fetching zur Build-Zeit
- Beispiele: Statische Seiteninhalte, Metadaten

### Client-Komponenten ('use client')
Mit `'use client'`-Direktive markieren bei Verwendung von:
- React-Hooks (useState, useEffect, etc.)
- Browser-APIs (window, document)
- Event-Handlern (onClick, onSubmit, etc.)
- Framer Motion Animationen

**Aktuelle Client-Komponenten:**
- `components/layout/Navbar.tsx`
- `components/layout/CookieBanner.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Button.tsx`
- `components/ui/SectionHeader.tsx`
- `components/ui/ServiceCard.tsx`
- `components/ui/ImagePlaceholder.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/TrustBar.tsx`
- `components/sections/AboutTeaser.tsx`
- `components/sections/ServicesTeaser.tsx`
- `components/sections/ContactForm.tsx`
- `app/kontakt/page.tsx`
- `app/leistungen/page.tsx`
- `app/portfolio/page.tsx`
- `app/ueber-uns/page.tsx`

## Wichtige Abhängigkeiten

### Framer Motion
Für Scroll-Animationen und Übergänge:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Web3Forms
Kontaktformular verwendet Web3Forms für E-Mail-Versand ohne Backend:
- Access-Key muss in `components/sections/ContactForm.tsx` konfiguriert werden
- Aktueller Platzhalter: `YOUR_ACCESS_KEY_HERE`
- Form-Endpunkt: `https://api.web3forms.com/submit`

### Lokale Fonts (DSGVO-Konformität)
Fonts werden lokal aus `/public/fonts/` geladen:
- Inter-Light.woff2 (300)
- Inter-Regular.woff2 (400)
- Inter-Medium.woff2 (500)
- Inter-SemiBold.woff2 (600)
- Inter-Bold.woff2 (700)

**Wichtig:** Keine Google Fonts CDN verwenden (DSGVO-Verstoß!)

## Build-Konfiguration

### next.config.js
```javascript
{
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

# SPA-Redirects
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security-Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Testing

**Aktuell sind keine automatisierten Tests konfiguriert.**

Manuelles Testing-Checklist:
1. `npm run build` ausführen - muss fehlerfrei durchlaufen
2. Alle Seiten im `dist/`-Ordner korrekt rendern
3. Responsive Design testen (Mobile, Tablet, Desktop)
4. Mobile-Menü-Funktionalität testen
5. Cookie-Banner Akzeptieren/Ablehnen testen
6. Kontaktformular-Übermittlung testen (gültiger Web3Forms-Key erforderlich)
7. Alle internen Links mit `trailingSlash: true` überprüfen

## Deployment

### Deployment-Schritte
1. `npm run build` lokal ausführen zur Verifikation
2. Änderungen committen und pushen (bei Git-basiertem Deployment)
3. Netlify deployed automatisch aus dem `dist/`-Ordner

### Manuelles Deployment
```bash
npm run build
# dist/-Verzeichnis auf Netlify hochladen (Drag & Drop)
```

## Sicherheitsaspekte

### DSGVO (GDPR) Konformität
- ✅ Keine externen Fonts (Google Fonts)
- ✅ Keine externen Tracker ohne Einwilligung
- ✅ Keine Cookies ohne Einwilligung
- ✅ Funktionaler Cookie-Banner mit Akzeptieren/Ablehnen
- ✅ Impressum vorhanden
- ✅ Datenschutzerklärung vorhanden
- ✅ SSL-Verschlüsselung (via Netlify)

### Cookie-Banner Funktionalität
- Speichert Einwilligung in localStorage:
  - `tyana-cookie-consent`: 'accepted' | 'declined'
  - `tyana-cookie-settings`: JSON mit Cookie-Einstellungen
  - `tyana-cookie-consent-data`: Detaillierte Consent-Daten mit Timestamp
- Essenzielle Cookies immer aktiv
- Analytics und Marketing optional
- Widerrufsmöglichkeit über Footer-Link oder Floating-Button

### Formular-Sicherheit
- Web3Forms bietet Spam-Schutz
- Keine sensiblen Daten im Repository
- Datenschutz-Checkbox im Kontaktformular

## Häufige Aufgaben

### Neue Seite hinzufügen
1. Ordner in `app/` erstellen (z.B. `app/neue-seite/`)
2. `page.tsx` mit Default-Export erstellen
3. Navigation-Link in `components/layout/Navbar.tsx` hinzufügen
4. Alle nutzerseitigen Texte auf Deutsch verfassen

### Neue Komponente hinzufügen
1. Kategorie bestimmen: `layout/`, `sections/` oder `ui/`
2. Datei mit PascalCase-Name erstellen
3. JSDoc-Header auf Deutsch hinzufügen
4. Als Default exportieren
5. `cn()` für bedingte Klassen verwenden

### Bilder hinzufügen
1. In `public/images/` ablegen
2. Next.js `Image`-Komponente mit `unoptimized` verwenden (Static Export)
3. Aussagekräftigen Alt-Text auf Deutsch vergeben

### Farben ändern
1. `tailwind.config.js` theme.extend.colors bearbeiten
2. `globals.css` bei Bedarf aktualisieren
3. Alle betroffenen Komponenten prüfen

## Wichtige Hinweise

1. **Static Export Limitation**: Dieses Projekt verwendet `output: 'export'`, was bedeutet:
   - Keine API-Routen
   - Kein Server-Side Rendering zur Runtime
   - Keine dynamischen Routen mit Params (ohne generateStaticParams)
   - Bilder müssen unoptimized sein

2. **DSGVO First**: Jede neue Funktion muss DSGVO-konform sein:
   - Keine externen Ressourcen ohne Einwilligung
   - Keine Cookies ohne Einwilligung
   - Datenverarbeitung in Datenschutzseite dokumentieren

3. **Trailing Slashes**: Alle URLs haben trailing slashes (z.B. `/leistungen/`)

4. **Font-Dateien**: Font-Dateien müssen in `public/fonts/` vorhanden sein, damit die Seite korrekt angezeigt wird

5. **Kontaktdaten**: Die folgenden Kontaktdaten sind im Code hinterlegt:
   - Firma: TYANA GmbH
   - Adresse: Heddingheimerstrasse 19, 65795 Hattersheim
   - Geschäftsführer: Ali Karapinar
   - E-Mail: info@tyana.de
