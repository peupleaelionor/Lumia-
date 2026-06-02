export type NavigationItem = {
  label: string;
  href: string;
  description: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Accueil',
    href: '/',
    description: 'Découvrir l’univers LUMIA',
  },
  {
    label: 'Le concept',
    href: '/#concept',
    description: 'Comprendre la maison immersive et sensorielle',
  },
  {
    label: 'Anniversaires',
    href: '/anniversaires',
    description: 'Préparer une fête douce et mémorable',
  },
  {
    label: 'Ateliers',
    href: '/ateliers',
    description: 'Explorer, créer et grandir ensemble',
  },
  {
    label: 'Salle sensorielle',
    href: '/salle-sensorielle',
    description: 'Découvrir le cocon immersif LUMIA',
  },
  {
    label: 'Écoles & crèches',
    href: '/ecoles-creches',
    description: 'Organiser une sortie ou un atelier de groupe',
  },
  {
    label: 'Boutique',
    href: '/boutique',
    description: 'Objets doux, cartes cadeaux et précommandes',
  },
  {
    label: 'Galerie',
    href: '/#galerie',
    description: 'Voir l’ambiance et les espaces',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Échanger ou rejoindre la liste d’attente',
  },
];

export const mobileNavigationCtas = [
  {
    label: 'Rejoindre la liste d’attente',
    href: '/contact?intent=waitlist',
    variant: 'primary',
  },
  {
    label: 'Préparer un anniversaire',
    href: '/anniversaires',
    variant: 'secondary',
  },
] as const;
