/**
 * Constantes globales du site LUMIA.
 * Centralise les informations de marque, contact, navigation et zones desservies.
 * Modifier ici met à jour tout le site.
 */

export const SITE = {
  name: 'LUMIA',
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
 * Convention d'images LUMIA.
 * Déposer les visuels dans /public/images/lumia/ avec ces noms.
 * Tant qu'une image est absente, le composant affiche un fallback élégant.
 */
export const IMAGES = {
  base: '/images/lumia',
  heroMain: '/images/lumia/hero-main.webp',
  facade: '/images/lumia/facade.webp',
  reception: '/images/lumia/reception.webp',
  mainRoom: '/images/lumia/main-room.webp',
  sensoryRoom: '/images/lumia/sensory-room.webp',
  birthday: '/images/lumia/birthday.webp',
  workshop: '/images/lumia/workshop.webp',
  babyCocon: '/images/lumia/baby-cocon.webp',
  diverseFamilies: '/images/lumia/diverse-families.webp',
  wowRoom: '/images/lumia/wow-room.webp',
  storefrontFamily: '/images/lumia/storefront-family.webp',
} as const;
