/**
 * Données centralisées de la boutique LUMIA (source unique).
 * Aucun encaissement au départ : chaque produit a un statut et un CTA d'intérêt.
 * Visuels : /public/images/lumia/boutique/<slug>.webp
 */

export type ShopStatus = 'precommande' | 'bientot';

export type BoutiqueItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  /** Prix lisible, ou null si « bientôt ». */
  priceLabel: string | null;
  ctaLabel: string;
  status: ShopStatus;
  category: 'physique' | 'numerique' | 'carte';
  featured?: boolean;
  order: number;
};

const IMG = '/images/lumia/boutique';

export const boutiqueItems: BoutiqueItem[] = [
  // ── Précommande ────────────────────────────────────────────────
  {
    slug: 'carte-cadeau-lumia',
    title: 'Carte cadeau LUMIA',
    description:
      'Offrez un moment doux en famille. Valable sur les créneaux, ateliers et anniversaires.',
    image: `${IMG}/carte-cadeau-lumia.webp`,
    alt: 'Carte cadeau LUMIA élégante posée sur un lin crème avec un ruban de soie sauge',
    badge: 'Précommande',
    priceLabel: 'dès 25 €',
    ctaLabel: 'Précommander une carte cadeau',
    status: 'precommande',
    category: 'carte',
    featured: true,
    order: 1,
  },
  {
    slug: 'box-sensorielle-maison',
    title: 'Box sensorielle maison',
    description:
      'Une sélection de textures et d’activités douces pour prolonger l’expérience à la maison.',
    image: `${IMG}/box-sensorielle-maison.webp`,
    alt: 'Box sensorielle LUMIA garnie d’objets naturels, graines et feutrines aux tons doux',
    badge: 'Précommande',
    priceLabel: 'dès 34 €',
    ctaLabel: 'Demander une box',
    status: 'precommande',
    category: 'physique',
    featured: true,
    order: 2,
  },

  // ── Bientôt disponible ─────────────────────────────────────────
  {
    slug: 'peluche-signature',
    title: 'Peluche signature',
    description:
      'Le doudou LUMIA, compagnon tout doux des premières aventures.',
    image: `${IMG}/peluche-signature.webp`,
    alt: 'Peluche lapin signature LUMIA installée dans un coin douillet aux arches lumineuses',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 3,
  },
  {
    slug: 'mini-lampe-etoile',
    title: 'Mini lampe étoile',
    description:
      'Une veilleuse étoilée pour retrouver l’ambiance douce de la salle sensorielle.',
    image: `${IMG}/mini-lampe-etoile.webp`,
    alt: 'Mini lampe en forme d’étoile allumée dans un coin chambre cocooning',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 4,
  },
  {
    slug: 'affiche-chambre-enfant',
    title: 'Affiche chambre enfant',
    description:
      'Une affiche douce et poétique pour habiller la chambre dans l’esprit LUMIA.',
    image: `${IMG}/affiche-chambre-enfant.webp`,
    alt: 'Affiche poétique lune et étoiles encadrée au-dessus d’un lit d’enfant doux',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 5,
  },
  {
    slug: 't-shirt-enfant',
    title: 'T-shirt enfant',
    description: 'Un t-shirt tout doux aux couleurs naturelles de LUMIA.',
    image: `${IMG}/t-shirt-enfant.webp`,
    alt: 'Enfant paisible portant un t-shirt crème LUMIA dans un intérieur lumineux',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 6,
  },
  {
    slug: 'tote-bag-lumia',
    title: 'Tote bag LUMIA',
    description:
      'Le sac en coton signature, doux et durable, pour toute la famille.',
    image: `${IMG}/tote-bag-lumia.webp`,
    alt: 'Tote bag en toile naturelle floqué LUMIA posé devant une étagère douce',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 7,
  },
  {
    slug: 'kit-atelier-parent-enfant',
    title: 'Kit atelier parent-enfant',
    description:
      'Le matériel d’un atelier signature à refaire à la maison, naturel et réutilisable.',
    image: `${IMG}/kit-atelier-parent-enfant.webp`,
    alt: 'Kit créatif parent-enfant LUMIA avec rouleau, tampons et pâte, dans une ambiance calme',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 8,
  },
  {
    slug: 'carnet-doux',
    title: 'Carnet doux',
    description:
      'Un carnet d’émotions et de souvenirs à remplir en famille, illustré avec tendresse.',
    image: `${IMG}/carnet-doux.webp`,
    alt: 'Carnet doux LUMIA à couverture brodée d’un soleil, entouré de fleurs séchées',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'physique',
    order: 9,
  },
  {
    slug: 'passeport-explorateur',
    title: 'Passeport explorateur',
    description:
      'Un carnet ludique à tamponner à chaque visite pour suivre les découvertes de l’enfant.',
    image: `${IMG}/passeport-explorateur.webp`,
    alt: 'Passeport explorateur LUMIA avec tampon en bois, boussole et médaillons gravés',
    badge: 'Bientôt',
    priceLabel: null,
    ctaLabel: 'Être prévenu du lancement',
    status: 'bientot',
    category: 'numerique',
    order: 10,
  },
];

/** Produits regroupés par statut, triés par `order`. */
const byOrder = (a: BoutiqueItem, b: BoutiqueItem) => a.order - b.order;
export const preorderItems = boutiqueItems
  .filter((i) => i.status === 'precommande')
  .sort(byOrder);
export const comingSoonItems = boutiqueItems
  .filter((i) => i.status === 'bientot')
  .sort(byOrder);

/** Lien de demande d'intérêt pré-rempli pour un produit. */
export const shopInterestHref = (slug: string) =>
  `/reservation?interet=boutique&produit=${slug}`;

/** Pourquoi les produits dérivés comptent (affiché sur /boutique). */
export const shopRationale = {
  title: 'Pourquoi les produits dérivés comptent',
  text: 'La boutique permettra de prolonger l’expérience à la maison, de créer une marque mémorable et de générer des revenus complémentaires sans dépendre uniquement des créneaux sur place.',
  points: [
    'Commencer sans stock lourd',
    'Cartes cadeaux en premier',
    'Box en précommande',
    'Produits en petite série',
    'Boutique en ligne plus tard',
    'Photos / vidéos d’anniversaire en option premium',
  ],
};
