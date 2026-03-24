# TYANA GmbH Website

Eine moderne, hochperformante B2B-Agentur-Website für die TYANA GmbH - Designagentur für Markeninszenierung.

## Features

- **Framework:** Next.js 14 mit App Router
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Formular:** Web3Forms (DSGVO-konform)
- **Fonts:** Lokale Inter-Fonts (DSGVO-konform, keine Google Fonts)
- **Cookie-Banner:** Funktional mit Akzeptieren/Ablehnen
- **Statischer Export:** Optimiert für Netlify

## Projektstruktur

```
├── app/                          # Next.js App Router
│   ├── leistungen/              # Leistungen-Seite
│   ├── portfolio/               # Portfolio-Seite
│   ├── ueber-uns/               # Über uns-Seite
│   ├── kontakt/                 # Kontakt-Seite
│   ├── impressum/               # Impressum
│   ├── datenschutz/             # Datenschutzerklärung
│   ├── globals.css              # Globale Styles & Font-Faces
│   ├── layout.tsx               # Root Layout
│   └── page.tsx                 # Startseite
├── components/
│   ├── layout/                  # Layout-Komponenten
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CookieBanner.tsx
│   ├── sections/                # Seiten-Sektionen
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── ServicesTeaser.tsx
│   │   └── ContactForm.tsx
│   └── ui/                      # Wiederverwendbare UI-Komponenten
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       ├── ServiceCard.tsx
│       └── ImagePlaceholder.tsx
├── lib/                         # Utilities
│   └── utils.ts
├── public/
│   ├── fonts/                   # Lokale Fonts (Inter)
│   └── images/                  # Bilder (Platzhalter)
└── dist/                        # Build-Output
```

## Lokale Entwicklung

### 1. Installation

```bash
# Node.js 18+ erforderlich
node --version

# Abhängigkeiten installieren
npm install
```

### 2. Fonts herunterladen (DSGVO-konform)

Da wir keine Google Fonts CDN verwenden (DSGVO!), müssen Sie die Fonts lokal bereitstellen:

1. Gehen Sie zu: https://google-webfonts-helper.herokuapp.com/fonts
2. Suchen Sie nach "Inter"
3. Laden Sie folgende Schriftschnitte herunter:
   - Inter Light (300)
   - Inter Regular (400)
   - Inter Medium (500)
   - Inter SemiBold (600)
   - Inter Bold (700)
4. Platzieren Sie die `.woff2`-Dateien in `/public/fonts/`
5. Benennen Sie sie um in:
   - `Inter-Light.woff2`
   - `Inter-Regular.woff2`
   - `Inter-Medium.woff2`
   - `Inter-SemiBold.woff2`
   - `Inter-Bold.woff2`

### 3. Development Server starten

```bash
npm run dev
```

Die Website ist unter `http://localhost:3000` erreichbar.

### 4. Build erstellen

```bash
npm run build
```

Der statische Export wird im `dist/`-Ordner erstellt.

## Netlify Deployment

### Methode 1: Git-basiertes Deployment (empfohlen)

1. **Repository erstellen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Auf GitHub/GitLab/Bitbucket pushen**

3. **Auf Netlify verbinden**
   - Gehen Sie zu [netlify.com](https://netlify.com)
   - Klicken auf "Add new site" → "Import an existing project"
   - Wählen Sie Ihren Git-Provider
   - Autorisieren Sie Netlify
   - Wählen Sie das Repository

4. **Build-Einstellungen überprüfen**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Klicken auf "Deploy site"

### Methode 2: Manuelles Deployment

```bash
# Build erstellen
npm run build

# Das dist/-Verzeichnis auf Netlify hochladen
# Drag & Drop auf https://app.netlify.com/drop
```

### Wichtige Netlify-Einstellungen

Erstellen Sie eine `netlify.toml` im Projektroot:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Oder erstellen Sie eine `_redirects`-Datei im `public/`-Ordner:

```
/* /index.html 200
```

## Web3Forms Einrichtung

Das Kontaktformular verwendet Web3Forms für E-Mail-Versand ohne Backend:

1. Gehen Sie zu [web3forms.com](https://web3forms.com/)
2. Erstellen Sie einen kostenlosen Account
3. Kopieren Sie Ihren Access Key
4. Öffnen Sie `components/sections/ContactForm.tsx`
5. Ersetzen Sie `YOUR_ACCESS_KEY_HERE` mit Ihrem echten Key:

```typescript
const ACCESS_KEY = 'ihr-echter-access-key';
```

6. Fügen Sie auf Web3Forms Ihre Ziel-E-Mail hinzu (z.B. info@tyana.de)

## Bilder einfügen

Alle Bilder werden aus `/public/images/` geladen. Platzhalter sind bereits im Code vorbereitet.

### Erforderliche Bilder:

| Dateiname | Verwendung | Empfohlene Größe |
|-----------|------------|------------------|
| `hero-bg.jpg` | Hero-Hintergrund | 1920x1080 |
| `samsung-logo.png` | Trust Bar | 200x100 |
| `vodafone-logo.png` | Trust Bar | 200x100 |
| `lg-logo.png` | Trust Bar | 200x100 |
| `braun-logo.png` | Trust Bar | 200x100 |
| `sony-logo.png` | Trust Bar | 200x100 |
| `panasonic-logo.png` | Trust Bar | 200x100 |
| `philips-logo.png` | Trust Bar | 200x100 |
| `bosch-logo.png` | Trust Bar | 200x100 |
| `grafik-video.jpg` | Leistungen | 800x600 |
| `3d-visualisierung.jpg` | Leistungen | 800x600 |
| `laden-messebau.jpg` | Leistungen | 800x600 |
| `werbemittel.jpg` | Leistungen | 800x600 |
| `it-installation.jpg` | Leistungen | 800x600 |
| `team-tyana.jpg` | Über uns | 800x800 |
| `project-*.jpg` | Portfolio | Variabel |

### Bild-Platzhalter

Bis die echten Bilder bereitstehen, werden automatisch graue Platzhalter mit Dateinamen angezeigt.

## Anpassungen

### Farben

Die Farben sind in `tailwind.config.js` definiert:

```javascript
colors: {
  primary: '#e62e4c',      // TYANA Rot
  'primary-dark': '#c42640',
  dark: '#1d1d1b',         // TYANA Schwarz
  light: '#ffffff',        // Weiß
  'gray-light': '#f5f5f5',
  'gray-medium': '#e5e5e5',
}
```

### Texte anpassen

Alle Texte befinden sich direkt in den jeweiligen Komponenten und Seiten-Dateien.

### Navigation

Die Navigation-Links sind in `components/layout/Navbar.tsx` definiert.

## DSGVO-Konformität

- ✅ Keine externen Fonts (Google Fonts)
- ✅ Keine externen Tracker (Google Analytics, etc.)
- ✅ Keine Cookies ohne Einwilligung
- ✅ Funktionaler Cookie-Banner
- ✅ Impressum vorhanden
- ✅ Datenschutzerklärung vorhanden
- ✅ SSL-Verschlüsselung (via Netlify)
- ✅ Kontaktdaten vollständig

**Wichtig:** Aktualisieren Sie die Platzhalter in Impressum und Datenschutz mit den korrekten rechtlichen Informationen!

## Technische Details

### Warum Next.js mit statischem Export?

- Optimiert für schnelle Ladezeiten
- SEO-freundlich
- Einfaches Deployment auf Netlify
- Kein Server/Backend nötig
- Gute Entwickler-Experience

### Browser-Kompatibilität

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Support

Bei Fragen oder Problemen:
- Prüfen Sie die Browser-Konsole auf Fehler
- Überprüfen Sie, ob alle Fonts korrekt geladen werden
- Testen Sie das Formular mit einem gültigen Web3Forms-Key

## Lizenz

Dieses Projekt wurde für die TYANA GmbH erstellt.
Alle Rechte vorbehalten.
