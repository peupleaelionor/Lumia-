/**
 * Catalogue de la future boutique LUMIA.
 * Aucun encaissement au départ : chaque produit a un statut et un CTA d'intérêt.
 * Structure prête à être branchée sur Stripe / un back e-commerce plus tard.
 */

export type ProductStatus = 'bientot' | 'precommande' | 'disponible';

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Prix indicatif lisible, ou null si « bientôt ». */
  price: string | null;
  status: ProductStatus;
  category: 'physique' | 'numerique' | 'carte';
  cta: string;
};

export const PRODUCT_STATUS_LABEL: Record<ProductStatus, string> = {
  bientot: 'Bientôt',
  precommande: 'Précommande',
  disponible: 'Disponible',
};

export const PRODUCTS: Product[] = [
  {
    id: 'carte-cadeau',
    name: 'Carte cadeau LUMIA',
    description:
      'Offrez un moment doux en famille. Valable sur les créneaux, ateliers et anniversaires.',
    price: 'dès 25 €',
    status: 'precommande',
    category: 'carte',
    cta: 'Précommander une carte cadeau',
  },
  {
    id: 'box-sensorielle',
    name: 'Box sensorielle maison',
    description:
      'Une sélection de textures et d’activités douces pour prolonger l’expérience à la maison.',
    price: 'dès 34 €',
    status: 'precommande',
    category: 'physique',
    cta: 'Demander une box',
  },
  {
    id: 'passeport-explorateur',
    name: 'Passeport explorateur',
    description:
      'Un carnet ludique à tamponner à chaque visite pour suivre les découvertes de l’enfant.',
    price: null,
    status: 'bientot',
    category: 'numerique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'carnet-doux',
    name: 'Carnet doux',
    description:
      'Un carnet d’émotions et de souvenirs à remplir en famille, illustré avec tendresse.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'kit-atelier',
    name: 'Kit atelier parent-enfant',
    description:
      'Le matériel d’un atelier signature à refaire à la maison, naturel et réutilisable.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'tote-bag',
    name: 'Tote bag LUMIA',
    description: 'Le sac en coton signature, doux et durable, pour toute la famille.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 't-shirt-enfant',
    name: 'T-shirt enfant',
    description: 'Un t-shirt tout doux aux couleurs naturelles de LUMIA.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'affiche-chambre',
    name: 'Affiche chambre enfant',
    description:
      'Une affiche douce et poétique pour habiller la chambre dans l’esprit LUMIA.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'peluche-signature',
    name: 'Peluche signature',
    description: 'Le doudou LUMIA, compagnon tout doux des premières aventures.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
  {
    id: 'mini-lampe-etoile',
    name: 'Mini lampe étoile',
    description:
      'Une veilleuse étoilée pour retrouver l’ambiance douce de la salle sensorielle.',
    price: null,
    status: 'bientot',
    category: 'physique',
    cta: 'Être prévenu du lancement',
  },
];

/** Pourquoi les produits dérivés comptent (affiché sur /boutique). */
export const SHOP_RATIONALE = {
  title: 'Pourquoi les produits dérivés comptent',
  text: 'La boutique permettra de prolonger l’expérience à la maison, de créer une marque mémorable et de générer des revenus complémentaires sans dépendre uniquement des créneaux sur place.',
};
