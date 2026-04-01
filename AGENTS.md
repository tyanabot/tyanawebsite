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
- Domain: https://www.tyana.de

**Unternehmensdaten:**
- Firma: TYANA GmbH
- Adresse: Heddingheimerstrasse 19, 65795 Hattersheim, Deutschland
- Geschäftsführer: Ali Karapinar
- E-Mail: info@tyana.de
- Öffnungszeiten: Mo-Fr 9:00-17:00 Uhr

## Technologie-Stack

| Kategorie | Technologie | Version |
|-----------|------------|---------|
| Framework | Next.js | 14.2.0 |
| Sprache | TypeScript | 5.4.0 |
| UI-Bibliothek | React | 18.2.0 |
| Styling | Tailwind CSS | 3.4.3 |
| Animation | Framer Motion | 11.0.0 |
| Icons | Lucide React | 0.363.0 |
| Fonts | @fontsource/inter | 5.2.8 |
| Package Manager | npm | - |
| Build-Output | Static Export | `dist/` |
| Node.js Version | 18+ | (definiert in `.nvmrc`) |

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
│   ├── not-found.tsx            # 404-Fehlerseite
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
│       └── ServiceCard.tsx      # Leistungs-Kachel
├── lib/                         # Hilfsfunktionen
│   └── utils.ts                 # cn(), debounce(), formatPhoneNumber(), scrollToElement()
├── public/                      # Statische Assets
│   ├── images/                  # Bilder und Logos
│   │   ├── logo.png/jpeg        # TYANA Logos
│   │   ├── logo2.jpeg           # Logo für Navbar
│   │   ├── logo3.png            # Logo für Footer
│   │   ├── leistung1-6.jpeg     # Leistungsseiten-Bilder
│   │   ├── ref1-8.{jpeg,png,jpg}# Portfolio-Referenzbilder
│   │   └── uberuns.jpeg         # Über-uns-Teamfoto
│   ├── manifest.json            # PWA Manifest
│   ├── robots.txt               # SEO-Robots.txt
│   └── sitemap.xml              # SEO-Sitemap
├── dist/                        # Build-Output (generiert)
├── next.config.js               # Next.js Konfiguration (static export)
├── tailwind.config.js           # Tailwind CSS Konfiguration
├── tsconfig.json                # TypeScript Konfiguration
├── postcss.config.js            # PostCSS Konfiguration
├── netlify.toml                 # Netlify Deployment Konfiguration
└── .nvmrc                       # Node.js Version (18)
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
  - `gray-light': '#f5f5f5'
  - `gray-medium': '#e5e5e5'
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
- Beispiele: Impressum, Datenschutz (einige Seiten exportieren metadata)

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
- Access-Key ist in `components/sections/ContactForm.tsx` konfiguriert
- Aktueller Key: `fd6a33fd-5fe0-4d69-b69d-34237e5e748e`
- Form-Endpunkt: `https://api.web3forms.com/submit`
- Daten werden auf Servern in der EU verarbeitet

### Lokale Fonts (DSGVO-Konformität)
Fonts werden via @fontsource/inter lokal geladen:
- `@import '@fontsource/inter/300.css';` (Light)
- `@import '@fontsource/inter/400.css';` (Regular)
- `@import '@fontsource/inter/500.css';` (Medium)
- `@import '@fontsource/inter/600.css';` (SemiBold)
- `@import '@fontsource/inter/700.css';` (Bold)

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
    Permissions-Policy = "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.web3forms.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"
```

## Seitenstruktur

| Route | Beschreibung |
|-------|-------------|
| `/` | Startseite mit Hero, About-Teaser, Services-Teaser |
| `/leistungen/` | 5 Leistungsbereiche mit Detailbeschreibungen |
| `/portfolio/` | Partner-Übersicht und Referenzbilder-Galerie |
| `/ueber-uns/` | Unternehmensgeschichte, Werte, Standort mit Karte |
| `/kontakt/` | Kontaktformular und Kontaktdaten |
| `/impressum/` | Impressum mit gesetzlichen Angaben |
| `/datenschutz/` | DSGVO-konforme Datenschutzerklärung |

## Navigation

Die Hauptnavigation (`Navbar.tsx`) enthält folgende Links:
1. Startseite (`/`)
2. Leistungen (`/leistungen/`)
3. Portfolio (`/portfolio/`)
4. Über uns (`/ueber-uns/`)
5. Kontakt (`/kontakt/`) - Als CTA-Button

## Testing

**Aktuell sind keine automatisierten Tests konfiguriert.**

Manuelles Testing-Checklist:
1. `npm run build` ausführen - muss fehlerfrei durchlaufen
2. Alle Seiten im `dist/`-Ordner korrekt rendern
3. Responsive Design testen (Mobile, Tablet, Desktop)
4. Mobile-Menü-Funktionalität testen
5. Cookie-Banner Akzeptieren/Ablehnen testen
6. Kontaktformular-Übermittlung testen
7. Alle internen Links mit `trailingSlash: true` überprüfen
8. Google Maps Embed auf Über-uns-Seite prüfen

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
- ✅ Keine externen Fonts (Google Fonts) - @fontsource verwenden
- ✅ Keine externen Tracker ohne Einwilligung
- ✅ Keine Cookies ohne Einwilligung
- ✅ Funktionaler Cookie-Banner mit Akzeptieren/Ablehnen
- ✅ Impressum vorhanden
- ✅ Datenschutzerklärung vorhanden
- ✅ SSL-Verschlüsselung (via Netlify)
- ✅ Kontaktformular mit Datenschutz-Checkbox

### Cookie-Banner Funktionalität
- Speichert Einwilligung in localStorage:
  - `tyana-cookie-consent`: 'accepted' | 'declined'
  - `tyana-cookie-settings`: JSON mit Cookie-Einstellungen
  - `tyana-cookie-consent-data`: Detaillierte Consent-Daten mit Timestamp
- Essenzielle Cookies immer aktiv
- Analytics und Marketing optional
- Widerrufsmöglichkeit über Footer-Link oder Floating-Button

### Formular-Sicherheit
- Web3Forms bietet Spam-Schutz (Honeypot)
- Keine sensiblen Daten im Repository
- Datenschutz-Checkbox im Kontaktformular
- SSL-verschlüsselte Übertragung

## SEO & Metadaten

### Strukturierte Daten (Schema.org)
- LocalBusiness Schema in `layout.tsx`
- Organization Schema in `layout.tsx`
- Öffnungszeiten, Adresse, Geo-Koordinaten

### Meta-Tags
- Alle Seiten haben individuelle `title` und `description`
- Open Graph Tags für Social Media
- Twitter Cards
- Canonical URLs
- Robots-Meta-Tags

### PWA
- `manifest.json` vorhanden
- Theme-Color: #e62e4c
- Icons konfiguriert

## Häufige Aufgaben

### Neue Seite hinzufügen
1. Ordner in `app/` erstellen (z.B. `app/neue-seite/`)
2. `page.tsx` mit Default-Export erstellen
3. Navigation-Link in `components/layout/Navbar.tsx` hinzufügen
4. Alle nutzerseitigen Texte auf Deutsch verfassen
5. `metadata` exportieren für SEO

### Neue Komponente hinzufügen
1. Kategorie bestimmen: `layout/`, `sections/` oder `ui/`
2. Datei mit PascalCase-Name erstellen
3. JSDoc-Header auf Deutsch hinzufügen
4. Als Default exportieren
5. `cn()` für bedingte Klassen verwenden
6. Bei Interaktivität: `'use client'` am Anfang

### Bilder hinzufügen
1. In `public/images/` ablegen
2. Next.js `Image`-Komponente mit `unoptimized` verwenden (Static Export)
3. Aussagekräftigen Alt-Text auf Deutsch vergeben
4. `width` und `height` oder `fill` Attribut setzen

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

4. **Kontaktdaten aktualisieren**: Bei Änderungen an Kontaktdaten müssen folgende Dateien angepasst werden:
   - `app/layout.tsx` (Structured Data)
   - `components/layout/Footer.tsx`
   - `app/kontakt/page.tsx`
   - `app/impressum/page.tsx`
   - `app/datenschutz/page.tsx`
   - `components/sections/ContactForm.tsx`

5. **Web3Forms Key**: Der Access Key für das Kontaktformular ist in `components/sections/ContactForm.tsx` hinterlegt. Bei Problemen mit dem Formular kann der Key bei web3forms.com überprüft werden.
