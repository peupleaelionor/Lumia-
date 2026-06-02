# Images LUMIA

Déposez ici les visuels du projet. Tant qu’un fichier est absent, le site
affiche automatiquement un **fallback élégant** (dégradé doux + légende) —
jamais d’image cassée. Vous pouvez donc lancer le site avant d’avoir tous
les visuels.

## Fichiers attendus (format `.webp` recommandé)

| Fichier | Où il apparaît |
| --- | --- |
| `hero-main.webp` | Grand visuel d’accueil (hero) |
| `facade.webp` | Façade du lieu / page Contact |
| `reception.webp` | Accueil / page Réservation |
| `main-room.webp` | Grande salle de jeu immersive |
| `sensory-room.webp` | Salle sensorielle |
| `birthday.webp` | Anniversaires |
| `workshop.webp` | Ateliers parent-enfant |
| `baby-cocon.webp` | Espace Baby Cocon |
| `diverse-families.webp` | Familles diverses / page Écoles-crèches |
| `wow-room.webp` | Pièce « wow » / vision |
| `storefront-family.webp` | Boutique |

## Conseils

- **Format** : privilégier le `.webp` (ou `.avif`) pour des images légères.
- **Dimensions** : viser au moins **1600 px** de large pour les visuels pleine largeur (hero, galerie).
- **Poids** : compresser pour rester sous ~300 Ko par image quand c’est possible.
- **Nommage** : conserver exactement les noms ci-dessus (ils sont référencés dans `lib/constants.ts`).

Pour ajouter ou renommer un visuel, modifiez la map `IMAGES` dans
`lib/constants.ts`.
