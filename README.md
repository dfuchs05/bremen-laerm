# Lärmkarte Bremen – statische Demo

Dieselbe Oberfläche wie die volle Version, aber ohne Server: Kein Supabase,
kein Cloudflare, kein Build-Schritt. Die Dateien in diesem Ordner sind direkt
die fertige Website.

## Was funktioniert, was nicht

- Karte, Marker/Heatmap, Filter, „Meine Position“, Melden, „Meldung melden“: funktioniert.
- Die Beispielmeldungen sind erfunden und werden bei jedem Aufruf neu erzeugt,
  damit die Karte nie leer ist.
- Eigene Meldungen landen nur im localStorage des eigenen Browsers.
  **Andere Besucher sehen sie nicht.** Auf einem anderen Gerät oder in einem privaten Fenster sind sie weg.
- „Meldung melden“ blendet in der Demo sofort aus (in der echten Version erst nach 3 Markierungen).

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein neues Repository anlegen, z. B. `laermkarte-demo`.
   Für GitHub Pages im kostenlosen Tarif muss es **öffentlich** sein.
2. Auf der Repo-Seite **Add file → Upload files** und den **Inhalt** dieses Ordners
   hineinziehen (alle Dateien, nicht den Ordner selbst).
   Die versteckte Datei `.nojekyll` wird im Finder nicht angezeigt; sie ist nicht zwingend nötig.
3. **Commit changes**.
4. **Settings → Pages**: unter „Build and deployment“ Source **Deploy from a branch**,
   Branch **main**, Ordner **/ (root)** → **Save**.
5. Nach ein bis zwei Minuten ist die Seite unter
   `https://<dein-name>.github.io/laermkarte-demo/` erreichbar.

## Lokal ansehen

Ein Doppelklick auf `index.html` reicht **nicht**: Browser blockieren JavaScript-Module
von `file://`. Stattdessen im Terminal in diesem Ordner:

```bash
python3 -m http.server 8000
```

und dann <http://localhost:8000> öffnen.

## Vor dem Veröffentlichen

- Impressum und Datenschutz sind **Vorlagen** und müssen ausgefüllt und geprüft werden,
  sobald die Seite öffentlich ist.
- Die OSM-Kacheln sind für geringen Verkehr in Ordnung (Tile Usage Policy der OSMF).

## Herkunft der Dateien

- `leaflet.js`, `leaflet.css` – Leaflet 1.9.4 (BSD-2-Clause, siehe `leaflet.LICENSE`)
- `leaflet-heat.js` – Leaflet.heat 0.2.0 (MIT, siehe `leaflet-heat.LICENSE`)
