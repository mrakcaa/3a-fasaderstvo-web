# Projekt: Website für 3A FASADERSTVO d. o. o. (Fassadenbau, Slowenien)

## Ziel
Einfache, schnelle Website, die Vertrauen schafft und Anfragen bringt
(Anruf, WhatsApp, Kontaktformular). Wichtigste Handlung: kostenlose
Besichtigung und Angebot anfragen („brezplačen ogled objekta in
priprava ponudbe“). Zielgruppe: Hausbesitzer und Bauherren in
Škofja Loka und Umgebung.

## Sprache und Land
- Die Website ist für den slowenischen Markt. Hauptsprache ist Slowenisch.
- Alle Inhalte auf der Seite auf Slowenisch: Texte, Buttons, Menüs,
  Formulare, Fehlermeldungen, Alt-Texte, Meta-Titel und -Beschreibungen.
- Natürliches, korrektes Slowenisch, keine wörtliche Übersetzung aus dem
  Deutschen. Fachbegriffe aus dem Fassadenbau so verwenden, wie Kunden
  in Slowenien sie suchen.
- HTML: lang="sl".
- Slowenische Formate: Telefon +386 …, Adressformat, Datum TT. MM. JJJJ.
- Domain: .si
- Mit mir (dem Entwickler) kommunizierst du auf Deutsch.
- Zweite Sprache: keine (Stand 24.11.2026, nur Slowenisch)

## Firmendaten
- Name: 3A FASADERSTVO d. o. o.
- Slogan: „Kakovost v vsakem sloju.“
- Inhaber: Fahrudin Coralic
- Adresse: TODO (vom Inhaber nachliefern)
- Telefon/WhatsApp: +386 41 234 567 (BEISPIEL - TODO: echte Nummer)
- E-Mail: info@3a-fasaderstvo.si
- Arbeitszeiten: ponedeljek–petek, 7.00–17.00
- Einsatzgebiet: Škofja Loka und Umgebung (TODO: genaue Reichweite)
- Alle Texte, Leistungen und Argumente: siehe inhalt/podatki-podjetja.md

## Technik
- Astro + Tailwind CSS, statische Seite
- Hosting: Netlify, Kontaktformular über Netlify Forms

## Befehle
- Entwicklung: npm run dev
- Build: npm run build (muss ohne Fehler durchlaufen)

## Inhalt
- Texte und Fotos liegen in inhalt/. Nur echte Inhalte verwenden,
  nichts erfinden (keine erfundenen Bewertungen, Projekte oder Zahlen).
  Fehlende Infos als TODO markieren und mir melden.
- Die Texte des Inhabers als Grundlage nehmen, sprachlich glätten,
  Aussagen aber nicht verändern.
- Fotos für das Web optimieren (Astro Image), sinnvolle Alt-Texte.

## SEO
- Eine eigene Seite pro Leistung (siehe Liste in podatki-podjetja.md).
- Ort/Region in Seitentitel, Überschriften und Texten nennen.
- Wichtige Suchbegriffe: fasade Škofja Loka, fasaderstvo Škofja Loka,
  izdelava fasad, toplotna izolacija fasade, sanacija fasade,
  barvanje fasade
- Pro Seite eigener Meta-Titel und eigene Meta-Beschreibung.
- LocalBusiness-Schema (JSON-LD) mit Firmendaten und Arbeitszeiten,
  Sitemap, hreflang falls zweite Sprache.

## Design
- Farben aus dem Logo: dunkles Anthrazit (ca. #2B2E33) und Gold
  (ca. #C9A24A), dazu viel Weiß bzw. helles Grau für Lesbarkeit.
  Gold sparsam für Akzente und Buttons einsetzen.
- Wirkung: hochwertig, seriös, handwerklich. Viel Platz für Projektfotos.
- Logo: inhalt/logo-foto.png (Mockup-Render) und inhalt/logo-karta.png
  (zugeschnitten). TODO: saubere Vektor-/PNG-Version mit transparentem
  Hintergrund fehlt noch.
- Mobil zuerst: Die meisten Besucher kommen vom Handy.
- Telefonnummer auf dem Handy immer gut sichtbar, mit Click-to-call.

## Regeln
- Vor jeder größeren Änderung kurz den Plan nennen.
- Nach jeder Änderung npm run build ausführen und Fehler beheben.
- In kleinen Schritten arbeiten und nach jedem Schritt committen.
