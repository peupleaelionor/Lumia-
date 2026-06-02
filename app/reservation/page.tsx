import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ReservationForm, {
  type InterestValue,
} from '@/components/ReservationForm';
import { IMAGES } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pré-réservation & liste d’attente',
  description:
    'Rejoignez les familles fondatrices de LUMIA : liste d’attente, demande d’anniversaire, atelier, structure pro ou carte cadeau. Accès prioritaire aux premiers créneaux.',
  path: '/reservation',
  image: IMAGES.reception,
});

const REQUEST_TYPES = [
  { title: 'Liste d’attente famille', text: 'Être prévenu·e en priorité de l’ouverture.' },
  { title: 'Demande d’anniversaire', text: 'Réserver un créneau privatisé et décoré.' },
  { title: 'Demande d’atelier', text: 'S’inscrire aux prochains ateliers.' },
  { title: 'Demande structure pro', text: 'Crèche, MAM, école, association.' },
  { title: 'Boutique / carte cadeau', text: 'Précommander ou être prévenu·e.' },
];

const VALID_INTERESTS: InterestValue[] = [
  'anniversaire',
  'atelier',
  'baby-cocon',
  'salle-sensorielle',
  'creche-mam-ecole',
  'boutique',
  'decouverte',
];

export default function ReservationPage({
  searchParams,
}: {
  searchParams: { interet?: string };
}) {
  const requested = searchParams.interet as InterestValue | undefined;
  const defaultInterest: InterestValue =
    requested && VALID_INTERESTS.includes(requested) ? requested : 'decouverte';

  return (
    <>
      <Hero
        variant="page"
        badge="Pré-lancement"
        title="Rejoindre les familles fondatrices."
        subtitle="Une seule demande, tous les usages : liste d’attente, anniversaire, atelier, structure pro ou boutique. Les premières familles inscrites seront invitées aux tests et aux offres fondatrices."
        image={IMAGES.reception}
        imageAlt="Accueil chaleureux de la future maison LUMIA"
        actions={[{ label: 'Remplir le formulaire', href: '#formulaire' }]}
      />

      <section className="container-lumia py-20 sm:py-24">
        <SectionTitle
          eyebrow="Que souhaitez-vous ?"
          title="Une demande pour chaque envie"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REQUEST_TYPES.map((type) => (
            <div key={type.title} className="card-soft p-5">
              <h3 className="text-base text-brown-dark">{type.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brown-light">
                {type.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="formulaire" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Votre demande"
            title="Remplissez le formulaire"
            description="Quelques informations suffisent. Nous revenons vers vous rapidement."
          />
          <div className="mt-10">
            <ReservationForm
              defaultInterest={defaultInterest}
              showStructure={defaultInterest === 'creche-mam-ecole'}
            />
          </div>
        </div>
      </section>
    </>
  );
}
