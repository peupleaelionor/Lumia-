import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ReservationForm from '@/components/ReservationForm';
import CTA from '@/components/CTA';
import { IMAGES } from '@/lib/constants';
import { WORKSHOPS } from '@/lib/offers';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Ateliers parent-enfant & sensoriels',
  description:
    'Ateliers parent-enfant et sensoriels à Ambarès / Bassens : toucher, créer, sentir, observer et partager. Une expérience sensorielle, pas une promesse médicale.',
  path: '/ateliers',
  image: IMAGES.workshop,
  keywords: ['atelier parent enfant Bordeaux rive droite', 'atelier sensoriel enfant'],
});

const CATEGORIES = [
  {
    title: 'Ateliers parent-enfant',
    text: 'Un moment privilégié à deux, pour créer du lien autour d’une activité douce.',
  },
  {
    title: 'Ateliers sensoriels',
    text: 'Explorer les sens, les textures, les couleurs et les sons en toute sécurité.',
  },
  {
    title: 'Ateliers naturels',
    text: 'Des matières naturelles et un cadre apaisant pour découvrir et s’émerveiller.',
  },
  {
    title: 'Baby Cocon',
    text: 'Un espace tout-doux pensé pour les tout-petits et leurs parents, à leur rythme.',
  },
];

export default function AteliersPage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Ateliers sur inscription"
        title="Toucher, créer, sentir, observer et partager."
        subtitle="Des ateliers doux pour explorer les sens et créer du lien. Une expérience sensorielle, pas une promesse médicale."
        image={IMAGES.workshop}
        imageAlt="Atelier parent-enfant sensoriel à LUMIA"
        actions={[
          { label: 'S’inscrire à un atelier', href: '#inscription' },
          { label: 'Voir les ateliers', href: '#ateliers', variant: 'secondary' },
        ]}
      />

      <section className="container-lumia py-20 sm:py-24">
        <SectionTitle
          eyebrow="Les familles d’ateliers"
          title="Quatre univers, une même douceur"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="card-soft p-6">
              <h3 className="text-lg text-brown-dark">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-light">
                {cat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="ateliers" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Le programme"
            title="Nos ateliers signature"
            description="Chaque atelier favorise un moment calme, l’exploration des sens et le partage — sans aucune promesse médicale."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((workshop) => (
              <div key={workshop.id} className="card-soft p-6">
                <h3 className="text-lg text-brown-dark">{workshop.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-light">
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-4xl border border-dashed border-brown/20 bg-ivory p-7 text-center">
            <p className="font-serif text-xl text-brown-dark">
              Calendrier bientôt disponible
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-brown-light">
              Les dates et horaires des premiers ateliers seront publiés ici.
              Inscrivez-vous pour être prévenu·e en priorité.
            </p>
          </div>
        </div>
      </section>

      <section id="inscription" className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Inscription"
              title="Demander une inscription"
              description="Indiquez l’atelier qui vous intéresse et l’âge de votre enfant : nous vous tenons informé·e des prochaines dates."
            />
          </div>
          <ReservationForm
            defaultInterest="atelier"
            submitLabel="Demander une inscription"
          />
        </div>
      </section>

      <CTA
        tone="sage"
        title="Envie d’un moment doux en famille ?"
        description="Rejoignez la liste d’attente et soyez parmi les premiers à réserver un atelier."
        actions={[
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Découvrir la salle sensorielle', href: '/salle-sensorielle', variant: 'secondary' },
        ]}
      />
    </>
  );
}
