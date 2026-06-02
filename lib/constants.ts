/**
 * Constantes globales du site LUMIA.
 * Centralise les informations de marque, contact, navigation et zones desservies.
 * Modifier ici met à jour tout le site.
 */

export const SITE = {
  name: 'LUMIA',
  /** Signature de la porteuse de projet, affichée avec le nom de marque. */
  byline: 'by Malika',
  /** Nom de marque complet (titre du site, partage, header/footer). */
  brand: 'LUMIA by Malika',
  tagline: 'Maison immersive & sensorielle',
  baseline:
    'Un lieu doux et magique pour jouer, explorer, créer, célébrer et se calmer en famille.',
  status: 'Projet en préparation — Ambarès / Bassens',
  /** URL publique : surchargée par NEXT_PUBLIC_SITE_URL en production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lumia-maison.fr',
  locale: 'fr_FR',
} as const;

export const CONTACT = {
  // Coordonnées provisoires — à remplacer dès qu'elles sont définitives.
  email: 'contact@lumia-maison.fr',
  phone: '', // ex: '+33 6 00 00 00 00' — laisser vide tant que non défini
  area: 'Ambarès / Bassens — Rive droite bordelaise',
} as const;

export const SOCIAL = {
  // Placeholders — seront remplacés par les comptes définitifs.
  instagram: 'https://instagram.com/lumia',
  youtube: 'https://youtube.com/@lumia',
  // googleBusiness: 'https://g.page/lumia', // à ajouter dès création de la fiche
} as const;

export const AGENCY = {
  porteuse: 'Malika',
  accompagnement: 'Kevin B.',
  agence: 'Mabele.tech',
} as const;

/** Communes desservies (utilisé pour le SEO local et le schema LocalBusiness). */
export const AREA_SERVED = [
  'Ambarès-et-Lagrave',
  'Bassens',
  'Carbon-Blanc',
  'Sainte-Eulalie',
  'Lormont',
  'Cenon',
  'Saint-Loubès',
  'Bordeaux rive droite',
] as const;

/** Navigation principale (header + footer). */
export const NAV_LINKS = [
  { label: 'Concept', href: '/#concept' },
  { label: 'Anniversaires', href: '/anniversaires' },
  { label: 'Ateliers', href: '/ateliers' },
  { label: 'Salle sensorielle', href: '/salle-sensorielle' },
  { label: 'Écoles & crèches', href: '/ecoles-creches' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = [
  { label: 'Concept', href: '/#concept' },
  { label: 'Anniversaires', href: '/anniversaires' },
  { label: 'Ateliers', href: '/ateliers' },
  { label: 'Salle sensorielle', href: '/salle-sensorielle' },
  { label: 'Écoles & crèches', href: '/ecoles-creches' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Réservation', href: '/reservation' },
  { label: 'Contact', href: '/contact' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
] as const;

/**
 * Visuels LUMIA — direction artistique du projet (images conceptuelles).
 * Tous les fichiers vivent dans /public/images/lumia/.
 * Tant qu'une image est absente, le composant affiche un fallback élégant.
 *
 * Pour chaque visuel, des déclinaisons sociales existent dans le même dossier :
 *   • `<nom>-og-1200x630.webp`        → OpenGraph / partage
 *   • `<nom>-square-1080.webp`        → Instagram carré
 *   • `<nom>-instagram-1080x1350.webp`→ Instagram portrait
 */
export const IMAGES = {
  base: '/images/lumia',
  // Image OpenGraph par défaut (partage réseaux / metadata)
  ogImage: '/images/lumia/hero-main-og-1200x630.webp',

  // Visuels principaux (clés historiques conservées)
  heroMain: '/images/lumia/hero-main.webp',
  facade: '/images/lumia/facade-family-arrival.webp',
  reception: '/images/lumia/reception-boutique.webp',
  mainRoom: '/images/lumia/main-room-night.webp',
  sensoryRoom: '/images/lumia/sensory-room-soft.webp',
  birthday: '/images/lumia/birthday-premium.webp',
  workshop: '/images/lumia/atelier-parent-enfant.webp',
  babyCocon: '/images/lumia/baby-cocon.webp',
  diverseFamilies: '/images/lumia/sensory-room-diverse-og-1200x630.webp',
  wowRoom: '/images/lumia/sensory-wow-room.webp',
  storefrontFamily: '/images/lumia/facade-storefront.webp',

  // Visuels supplémentaires fournis (set enrichi)
  heroSecondary: '/images/lumia/hero-secondary.webp',
  facadeStorefront: '/images/lumia/facade-storefront.webp',
  mainRoomEmpty: '/images/lumia/main-room-empty.webp',
  mainRoomPlay: '/images/lumia/main-room-play.webp',
  sensoryWow: '/images/lumia/sensory-wow-room.webp',
  workshopNatural: '/images/lumia/workshop-natural.webp',
  babyPlay: '/images/lumia/baby-play.webp',
  birthdayTable: '/images/lumia/birthday-table.webp',
} as const;
