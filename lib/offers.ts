/**
 * Offres, expériences, formules d'anniversaire, ateliers et offres B2B.
 * Toutes les données commerciales sont centralisées ici.
 * Les prix sont INDICATIFS et à confirmer selon le local et les options.
 */

import { IMAGES } from './constants';

export type Experience = {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

/** Les 8 expériences présentées sur la page d'accueil. */
export const EXPERIENCES: Experience[] = [
  {
    slug: 'jeu-immersif',
    title: 'Jeu immersif',
    description:
      'Un grand espace doux et lumineux pour explorer, grimper, imaginer et jouer en toute sécurité.',
    image: IMAGES.mainRoom,
    href: '/reservation',
  },
  {
    slug: 'salle-sensorielle',
    title: 'Salle sensorielle',
    description:
      'Lumière douce, textures et sons apaisants pour un retour au calme et l’éveil des sens.',
    image: IMAGES.sensoryRoom,
    href: '/salle-sensorielle',
  },
  {
    slug: 'ateliers',
    title: 'Ateliers parent-enfant',
    description:
      'Toucher, créer, sentir, observer et partager un moment privilégié à deux.',
    image: IMAGES.workshop,
    href: '/ateliers',
  },
  {
    slug: 'anniversaires',
    title: 'Anniversaires premium',
    description:
      'Des anniversaires privés, beaux et organisés, sans bruit inutile ni surcharge.',
    image: IMAGES.birthday,
    href: '/anniversaires',
  },
  {
    slug: 'baby-cocon',
    title: 'Baby Cocon',
    description:
      'Un espace tout-doux pensé pour les tout-petits et leurs parents, dès les premiers mois.',
    image: IMAGES.babyCocon,
    href: '/ateliers',
  },
  {
    slug: 'privatisations',
    title: 'Privatisations',
    description:
      'Le lieu rien que pour vous : familles, groupes ou occasions spéciales.',
    image: IMAGES.wowRoom,
    href: '/reservation',
  },
  {
    slug: 'ecoles-creches',
    title: 'Crèches / MAM / écoles',
    description:
      'Des matinées et ateliers sur mesure pour les structures de la petite enfance.',
    image: IMAGES.diverseFamilies,
    href: '/ecoles-creches',
  },
  {
    slug: 'boutique',
    title: 'Boutique sensorielle',
    description:
      'Prolonger l’expérience à la maison avec une sélection douce et naturelle.',
    image: IMAGES.storefrontFamily,
    href: '/boutique',
  },
];

export type Offer = {
  id: string;
  name: string;
  pitch: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

/** Les 4 offres principales de la home. */
export const MAIN_OFFERS: Offer[] = [
  {
    id: 'decouverte',
    name: 'Créneau Découverte',
    pitch: 'Pour découvrir le lieu en famille.',
    price: 'dès 12 €',
    priceNote: '/ enfant',
    features: [
      'Accès à l’espace de jeu immersif',
      'Créneau sur réservation',
      'Parent présent sur place',
    ],
    cta: { label: 'Rejoindre la liste d’attente', href: '/reservation' },
  },
  {
    id: 'atelier',
    name: 'Atelier Signature',
    pitch:
      'Un moment parent-enfant autour des sens, des textures, de la créativité et du naturel.',
    price: 'dès 19 €',
    features: [
      'Atelier encadré',
      'Matériel naturel fourni',
      'Petit groupe convivial',
    ],
    cta: { label: 'Découvrir les ateliers', href: '/ateliers' },
    highlight: true,
  },
  {
    id: 'anniversaire',
    name: 'Anniversaire Premium',
    pitch: 'Un anniversaire privé, beau, doux et mémorable.',
    price: 'dès 249 €',
    features: [
      'Lieu privatisé',
      'Décoration soignée',
      'Souvenirs photo possibles',
    ],
    cta: { label: 'Préparer un anniversaire', href: '/anniversaires' },
  },
  {
    id: 'pro',
    name: 'Matinée Cocon Pro',
    pitch: 'Pour crèches, MAM, assistantes maternelles et écoles.',
    price: 'sur demande',
    features: [
      'Créneau dédié à votre structure',
      'Encadrement sensoriel',
      'Formule adaptée au groupe',
    ],
    cta: { label: 'Demander une proposition', href: '/ecoles-creches' },
  },
];

export type BirthdayFormula = {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

export const BIRTHDAY_FORMULAS: BirthdayFormula[] = [
  {
    id: 'doux',
    name: 'Doux',
    price: 'dès 249 €',
    description: 'L’essentiel d’un bel anniversaire, simple et chaleureux.',
    includes: [
      'Privatisation du créneau',
      'Décoration douce de base',
      'Espace de jeu immersif',
      'Coin parents confortable',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 'dès 349 €',
    description: 'Une fête complète, décorée et pensée dans les moindres détails.',
    includes: [
      'Tout le pack Doux',
      'Décoration renforcée à thème',
      'Mini-atelier sensoriel pour les invités',
      'Table d’accueil soignée',
    ],
    highlight: true,
  },
  {
    id: 'prestige',
    name: 'Prestige',
    price: 'dès 490 €',
    description: 'Le grand jeu : une expérience premium et inoubliable.',
    includes: [
      'Tout le pack Signature',
      'Scénographie immersive complète',
      'Souvenirs photo / vidéo en option',
      'Accompagnement personnalisé',
    ],
  },
];

export type BirthdayOption = {
  title: string;
  description: string;
};

export const BIRTHDAY_OPTIONS: BirthdayOption[] = [
  { title: 'Gâteau partenaire', description: 'Pâtissier local sur demande.' },
  { title: 'Photo souvenir', description: 'Reportage doux du moment.' },
  { title: 'Vidéo', description: 'Mini-film de la fête.' },
  { title: 'Décoration renforcée', description: 'Thème et palette sur mesure.' },
  { title: 'Atelier inclus', description: 'Activité créative pour les invités.' },
  {
    title: 'Carte d’invitation digitale',
    description: 'Invitation élégante prête à partager.',
  },
];

export type Workshop = {
  id: string;
  name: string;
  description: string;
};

export const WORKSHOPS: Workshop[] = [
  {
    id: 'peau-douce',
    name: 'Peau Douce Parent-Enfant',
    description:
      'Un moment de douceur autour des textures et du toucher, pour créer du lien. Sans aucune promesse médicale.',
  },
  {
    id: 'salle-etoiles',
    name: 'Salle des Étoiles',
    description:
      'Une parenthèse sous un ciel étoilé pour favoriser un moment calme et apaisé.',
  },
  {
    id: 'mini-labo',
    name: 'Mini-Labo Sensoriel',
    description:
      'Explorer les sens, observer, manipuler et s’émerveiller en toute sécurité.',
  },
  {
    id: 'baby-cocon',
    name: 'Baby Cocon',
    description:
      'Un espace tout-doux pour les bébés et leurs parents, à leur rythme.',
  },
  {
    id: 'conte-immersif',
    name: 'Conte immersif',
    description:
      'Une histoire qui prend vie dans une ambiance douce et lumineuse.',
  },
  {
    id: 'emotions-couleurs',
    name: 'Atelier émotions & couleurs',
    description:
      'Découvrir les émotions par les couleurs, le jeu et la créativité.',
  },
];

export type ProOffer = {
  id: string;
  name: string;
  description: string;
};

export const PRO_OFFERS: ProOffer[] = [
  {
    id: 'matinee-cocon',
    name: 'Matinée Cocon',
    description:
      'Un créneau privatisé le matin pour accueillir votre groupe dans le calme.',
  },
  {
    id: 'atelier-mobile',
    name: 'Atelier mobile',
    description:
      'Nous venons à vous avec un atelier sensoriel clé en main (selon disponibilités).',
  },
  {
    id: 'privatisation-groupe',
    name: 'Privatisation groupe',
    description: 'Le lieu entièrement réservé pour votre structure.',
  },
  {
    id: 'cycle-mensuel',
    name: 'Cycle mensuel',
    description:
      'Un rendez-vous régulier pour inscrire l’éveil sensoriel dans la durée.',
  },
];

export const PRO_TARGETS = [
  'Crèches',
  'MAM',
  'Assistantes maternelles',
  'Écoles maternelles',
  'Centres de loisirs',
  'Associations',
] as const;

/** Équipements de la salle sensorielle. */
export const SENSORY_FEATURES = [
  'Lumière douce et modulable',
  'Textures variées à explorer',
  'Coussins et assises confortables',
  'Fibre optique lumineuse',
  'Sons doux et apaisants',
  'Ciel étoilé immersif',
] as const;
