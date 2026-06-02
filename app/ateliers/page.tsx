import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ReservationForm from '@/components/ReservationForm';
import ImageGallery, { type GalleryItem } from '@/components/ImageGallery';
import SmartImage from '@/components/SmartImage';
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

const REASSURANCE = [
  'Petits groupes',
  'Matériel fourni',
  'Encadré avec douceur',
  'Sensoriel, pas médical',
];

const ATELIER_STEPS = [
  {
    number: '1',
    title: 'Accueil tout doux',
    description: 'On vous installe dans un cadre calme, à votre rythme, sans précipitation.',
  },
  {
    number: '2',
    title: 'Exploration sensorielle',
    description: 'Textures, couleurs, sons et matières naturelles à découvrir librement.',
  },
  {
    number: '3',
    title: 'Création partagée',
    description: 'Un temps de création à deux, pour fabriquer un petit souvenir à emporter.',
  },
  {
    number: '4',
    title: 'Retour au calme',
    description: 'On termine en douceur, par un moment apaisant avant de repartir.',
  },
];

const ATELIER_GALLERY: GalleryItem[] = [
  { src: IMAGES.workshop, alt: 'Atelier parent-enfant dans un espace sensoriel premium LUMIA', caption: 'Un atelier parent-enfant', featured: true },
  { src: IMAGES.workshopNatural, alt: 'Atelier autour de matières naturelles', caption: 'Matières naturelles' },
  { src: IMAGES.babyCocon, alt: 'Coin tout-doux Baby Cocon pour les tout-petits', caption: 'Le coin Baby Cocon' },
  { src: IMAGES.babyPlay, alt: 'Tout-petit en exploration sensorielle', caption: 'Explorer à son rythme' },
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
          { label: "S'inscrire à un atelier", href: '#inscription' },
          { label: 'Voir les ateliers', href: '#ateliers', variant: 'secondary' },
        ]}
      />

      {/* Bandeau de réassurance */}
      <section className="border-b border-brown/10 bg-sand-light/40">
        <div className="container-lumia flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center">
          {REASSURANCE.map((phrase) => (
            <span
              key={phrase}
              className="inline-flex items-center gap-2 text-sm text-brown"
            >
              <span aria-hidden className="text-gold">
                ✦
              </span>
              {phrase}
            </span>
          ))}
        </div>
      </section>

      <section id="ateliers" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Le programme"
            title="Nos ateliers signature"
            description="Chaque atelier favorise un moment calme, l'exploration des sens et le partage — sans aucune promesse médicale."
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

      {/* Comment se passe un atelier */}
      <section className="container-lumia py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              align="left"
              eyebrow="Le déroulé"
              title="Comment se passe un atelier"
              description="Un rythme doux, pensé pour que petits et grands se sentent à l'aise du début à la fin."
            />
            <ol className="mt-8 space-y-5">
              {ATELIER_STEPS.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta/15 font-serif text-sm font-semibold text-terracotta-dark"
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="font-semibold text-brown-dark">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-brown-light">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-5xl shadow-soft-lg">
              <div className="relative aspect-[4/5]">
                <SmartImage
                  src={IMAGES.workshopNatural}
                  alt="Atelier sensoriel autour de matières naturelles à LUMIA"
                  fallbackLabel="Un atelier LUMIA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-brown-dark py-20 text-cream sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="La galerie"
            title={<span className="text-ivory">L&apos;ambiance d&apos;un atelier LUMIA</span>}
          />
          <div className="mt-12">
            <ImageGallery items={ATELIER_GALLERY} />
          </div>
          <p className="mt-6 text-center text-xs italic text-cream/50">
            Visuels conceptuels — direction artistique du projet.
          </p>
        </div>
      </section>

      <section id="inscription" className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Inscription"
              title="Demander une inscription"
              description="Indiquez l'atelier qui vous intéresse et l'âge de votre enfant : nous vous tenons informé·e des prochaines dates."
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
        title="Envie d'un moment doux en famille ?"
        description="Rejoignez la liste d'attente et soyez parmi les premiers à réserver un atelier."
        actions={[
          { label: "Rejoindre la liste d'attente", href: '/reservation' },
          { label: 'Découvrir la salle sensorielle', href: '/salle-sensorielle', variant: 'secondary' },
        ]}
      />
    </>
  );
}
