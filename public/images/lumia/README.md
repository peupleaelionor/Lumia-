# Images LUMIA

Tous les visuels du projet vivent ici. Ce sont des **visuels conceptuels**
(direction artistique), en attendant les photos du lieu réel.

Tant qu’un fichier est absent, le site affiche automatiquement un **fallback
élégant** (dégradé doux + légende) — jamais d’image cassée.

## Visuels principaux (référencés dans `lib/constants.ts` → `IMAGES`)

| Fichier | Où il apparaît |
| --- | --- |
| `hero-main.webp` | Grand visuel d’accueil (hero) |
| `hero-secondary.webp` | Visuel d’appoint |
| `facade-family-arrival.webp` | Façade (arrivée des familles) — galerie, Contact |
| `facade-storefront.webp` | Boutique / section local |
| `reception-boutique.webp` | Accueil — page Réservation |
| `main-room-night.webp` | Grande salle, ambiance du soir |
| `main-room-empty.webp` | Grande salle, vue d’ensemble |
| `main-room-play.png` | Grande salle en pleine activité (galerie) |
| `sensory-room-soft.webp` | Salle sensorielle |
| `sensory-wow-room.webp` | Pièce « wow » sensorielle |
| `sensory-room-diverse-*.webp` | Familles diverses en salle sensorielle |
| `birthday-premium.webp` | Anniversaires |
| `birthday-table.png` | Table d’anniversaire dressée |
| `workshop-family.webp` | Ateliers parent-enfant |
| `workshop-natural.png` | Ateliers autour de matières naturelles |
| `baby-cocon.webp` | Espace Baby Cocon |
| `baby-play.webp` | Tout-petits en exploration |

## Déclinaisons par visuel

Chaque visuel dispose de variantes prêtes pour les réseaux et le partage :

| Suffixe | Format | Usage |
| --- | --- | --- |
| `-og-1200x630.webp` | 1200 × 630 | OpenGraph / partage (metadata) |
| `-square-1080.webp` | 1080 × 1080 | Instagram carré |
| `-instagram-1080x1350.webp` | 1080 × 1350 | Instagram portrait |

L’image OpenGraph par défaut du site est `hero-main-og-1200x630.webp`
(définie via `IMAGES.ogImage`).

## Modifier un visuel

Pour changer l’image d’une section, éditez la map `IMAGES` dans
`lib/constants.ts` — c’est le seul endroit à toucher.
