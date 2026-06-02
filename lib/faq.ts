/**
 * Questions fréquentes.
 * Ton prudent : aucune promesse médicale, formulations rassurantes.
 * Utilisé par le composant FAQ et par le schema JSON-LD FAQPage.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'À partir de quel âge ?',
    answer:
      'LUMIA est pensé pour les enfants de 0 à 10 ans, avec des espaces et des créneaux adaptés à chaque tranche d’âge, du Baby Cocon aux plus grands.',
  },
  {
    question: 'Est-ce ouvert tous les jours ?',
    answer:
      'Le lieu fonctionnera principalement sur réservation, avec des créneaux dédiés selon les jours. Les horaires précis seront communiqués à l’ouverture.',
  },
  {
    question: 'Peut-on réserver un anniversaire ?',
    answer:
      'Oui. Les anniversaires sont au cœur de LUMIA : des moments privés, beaux et organisés. Vous pourrez faire une demande dès la phase de pré-lancement.',
  },
  {
    question: 'Est-ce adapté aux bébés ?',
    answer:
      'Oui, un espace Baby Cocon est spécialement pensé pour les tout-petits et leurs parents, dans une ambiance douce et sécurisée.',
  },
  {
    question: 'Est-ce une activité thérapeutique ?',
    answer:
      'Non. LUMIA est un lieu d’éveil, de jeu, de calme et d’expérience sensorielle. Il ne s’agit pas d’une activité thérapeutique et cela ne remplace aucun accompagnement médical ou thérapeutique.',
  },
  {
    question: 'Est-ce accessible aux crèches et MAM ?',
    answer:
      'Oui. Des formules dédiées aux crèches, MAM, assistantes maternelles, écoles et centres de loisirs sont prévues, avec des créneaux et des ateliers adaptés.',
  },
  {
    question: 'Peut-on privatiser le lieu ?',
    answer:
      'Oui, la privatisation est possible pour un anniversaire, un groupe ou une occasion spéciale. Contactez-nous pour étudier votre projet.',
  },
  {
    question: 'Les parents restent-ils sur place ?',
    answer:
      'Oui. LUMIA est pensé comme un lieu familial : les parents restent et profitent d’un cadre calme et confortable aux côtés de leurs enfants.',
  },
  {
    question: 'Comment rejoindre la liste d’attente ?',
    answer:
      'Il suffit de remplir le formulaire de pré-lancement. Les premières familles inscrites seront invitées aux tests, aux offres fondatrices et aux premiers créneaux.',
  },
  {
    question: 'Où sera situé le lieu ?',
    answer:
      'Le lieu s’implantera à Ambarès, Bassens ou dans un secteur proche de la rive droite bordelaise. L’adresse précise sera communiquée une fois le local confirmé.',
  },
];
