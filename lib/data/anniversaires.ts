/**
 * Données centralisées de la page Anniversaires LUMIA.
 * Source unique pour les formules, options, déroulé, réassurance, FAQ et galerie.
 * Les visuels (affiches premium) vivent dans /public/images/lumia/{anniversaires,options,explications,faq}.
 *
 * Note ton juridique : aucune promesse médicale. Tarifs indicatifs.
 */

import { IMAGES } from '@/lib/constants';

/** Chemins des affiches (infographies premium). */
export const ANNIV_POSTERS = {
  comparison: {
    src: '/images/lumia/anniversaires/comparer-les-3-formules.webp',
    alt: 'Comparatif des formules d’anniversaire LUMIA : Doux 249 €, Signature 349 €, Prestige 490 €',
  },
  options: {
    src: '/images/lumia/options/options-a-la-carte.webp',
    alt: 'Options à la carte pour un anniversaire LUMIA : gâteau, photo, vidéo, décoration, atelier, invitation digitale',
  },
  process: {
    src: '/images/lumia/explications/deroule-de-la-fete.webp',
    alt: 'Le déroulé d’une fête d’anniversaire LUMIA en six étapes',
  },
  parentComfort: {
    src: '/images/lumia/explications/pourquoi-les-parents-se-sentent-a-laise.webp',
    alt: 'Pourquoi les parents se sentent à l’aise chez LUMIA',
  },
  faq: {
    src: '/images/lumia/faq/questions-frequentes-anniversaire.webp',
    alt: 'Questions fréquentes sur les anniversaires LUMIA',
  },
} as const;

export type PricingPlan = {
  id: 'doux' | 'signature' | 'prestige';
  name: string;
  price: string;
  subtitle: string;
  image: string;
  alt: string;
  highlights: string[];
  badge?: string;
  highlight?: boolean;
  ctaLabel: string;
  ctaHref: string;
  order: number;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'doux',
    name: 'Doux',
    price: 'dès 249 €',
    subtitle: 'L’essentiel d’un bel anniversaire, simple et chaleureux.',
    image: '/images/lumia/anniversaires/anniversaire-formule-doux.webp',
    alt: 'Formule Doux dès 249 € — un anniversaire LUMIA simple et chaleureux',
    highlights: [
      'Privatisation du créneau',
      'Décoration douce de base',
      'Espace de jeu immersif',
      'Coin parents confortable',
    ],
    badge: 'Idéale pour une première fête',
    ctaLabel: 'Choisir la formule Doux',
    ctaHref: '#demande',
    order: 1,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 'dès 349 €',
    subtitle: 'Une fête complète, décorée et pensée dans les moindres détails.',
    image: '/images/lumia/anniversaires/anniversaire-formule-signature.webp',
    alt: 'Formule Signature dès 349 € — la plus choisie, une fête LUMIA complète et décorée',
    highlights: [
      'Tout le pack Doux',
      'Décoration renforcée à thème',
      'Mini-atelier sensoriel pour les invités',
      'Table d’accueil soignée',
    ],
    badge: 'La plus choisie',
    highlight: true,
    ctaLabel: 'Choisir la formule Signature',
    ctaHref: '#demande',
    order: 2,
  },
  {
    id: 'prestige',
    name: 'Prestige',
    price: 'dès 490 €',
    subtitle: 'Le grand jeu : une expérience premium et inoubliable.',
    image: '/images/lumia/anniversaires/anniversaire-formule-prestige.webp',
    alt: 'Formule Prestige dès 490 € — l’expérience LUMIA premium et inoubliable',
    highlights: [
      'Tout le pack Signature',
      'Scénographie immersive complète',
      'Souvenirs photo / vidéo en option',
      'Accompagnement personnalisé',
    ],
    badge: 'Pour une fête mémorable',
    ctaLabel: 'Choisir la formule Prestige',
    ctaHref: '#demande',
    order: 3,
  },
];

export type AddOnOption = {
  title: string;
  description: string;
};

export const addOnOptions: AddOnOption[] = [
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

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Prise de contact',
    description:
      'Vous nous écrivez, nous échangeons sur vos envies et vos besoins.',
  },
  {
    number: 2,
    title: 'Choix de la formule',
    description:
      'Vous choisissez la formule qui correspond à vos envies et à votre budget.',
  },
  {
    number: 3,
    title: 'Personnalisation',
    description:
      'Nous personnalisons chaque détail : thème, couleurs, activités, gâteau et petites attentions.',
  },
  {
    number: 4,
    title: 'Installation & accueil',
    description:
      'Nous installons, préparons l’espace et vous accueillons avec le sourire.',
  },
  {
    number: 5,
    title: 'Temps de fête',
    description:
      'Les enfants profitent d’un moment magique et immersif, en toute sérénité.',
  },
  {
    number: 6,
    title: 'Souvenirs & départ',
    description:
      'Nous immortalisons les instants précieux et vous repartez avec des souvenirs inoubliables.',
  },
];

export type ComfortReason = {
  number: number;
  title: string;
  description: string;
};

export const parentComfortReasons: ComfortReason[] = [
  {
    number: 1,
    title: 'Accueil chaleureux',
    description:
      'Dès votre arrivée, notre équipe vous accueille avec attention pour que vous vous sentiez serein·e et bien accompagné·e.',
  },
  {
    number: 2,
    title: 'Espace propre et apaisant',
    description:
      'Un lieu soigneusement entretenu, pensé pour le confort et le bien-être de toute la famille.',
  },
  {
    number: 3,
    title: 'Coin parents confortable',
    description:
      'Un espace dédié pour vous détendre, boire un café, échanger ou simplement profiter du moment.',
  },
  {
    number: 4,
    title: 'Accompagnement doux',
    description:
      'Notre équipe reste présente tout au long de la fête pour répondre à vos besoins, en toute discrétion.',
  },
  {
    number: 5,
    title: 'Ambiance sécurisante',
    description:
      'Mobilier adapté, espaces sécurisés et activités encadrées pour que vos enfants s’amusent en toute sécurité.',
  },
];

export type AnnivFaqItem = { question: string; answer: string };

export const anniversaireFaq: AnnivFaqItem[] = [
  {
    question: 'Pour quel âge ?',
    answer:
      'Selon la formule et l’espace, de la petite enfance aux jeunes enfants (0 à 10 ans).',
  },
  {
    question: 'Combien de temps dure une fête ?',
    answer: 'La durée dépend du créneau choisi et des options retenues.',
  },
  {
    question: 'Peut-on personnaliser la fête ?',
    answer: 'Oui : thème, palette et ambiance peuvent être adaptés à vos envies.',
  },
  {
    question: 'Les parents peuvent-ils rester ?',
    answer:
      'Oui, un coin parents confortable leur est dédié pour profiter sereinement du moment.',
  },
  {
    question: 'Peut-on ajouter une photo ou une vidéo ?',
    answer: 'Oui, selon la formule ou en option à la carte.',
  },
];

/** Micro-phrases de réassurance (premium, sans jargon). */
export const reassurance = [
  'Une fête pensée avec soin',
  'Des moments doux et mémorables',
  'Un accompagnement rassurant pour toute la famille',
  'Chaque détail est imaginé pour que vous profitiez sereinement',
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { src: IMAGES.birthday, alt: 'Anniversaire premium décoré', caption: 'Une fête premium et douce', featured: true },
  { src: IMAGES.birthdayTable, alt: 'Table d’anniversaire dressée', caption: 'Une table d’accueil soignée' },
  { src: IMAGES.wowRoom, alt: 'Décor immersif de fête', caption: 'Un décor immersif' },
  { src: IMAGES.mainRoomPlay, alt: 'Espace de jeu pour la fête', caption: 'L’espace de jeu' },
  { src: IMAGES.reception, alt: 'Accueil des familles', caption: 'L’accueil des familles' },
];
