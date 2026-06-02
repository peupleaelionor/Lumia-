import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ImageGallery, { type GalleryItem } from '@/components/ImageGallery';
import CTA from '@/components/CTA';
import SmartImage from '@/components/SmartImage';
import { IMAGES } from '@/lib/constants';
import { SENSORY_FEATURES } from '@/lib/offers';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Salle sensorielle',
  description:
    'Une salle sensorielle douce à Ambarès / Bassens : lumière tamisée, textures, sons apaisants et ciel étoilé pour un retour au calme. Sans promesse médicale.',
  path: '/salle-sensorielle',
  image: IMAGES.sensoryRoom,
  keywords: ['salle sensorielle enfants Bordeaux', 'espace enfant sensoriel Gironde'],
});

const REASSURANCE = [
  'Lumière tamisée',
  'Sons apaisants',
  'Petits effectifs',
  'Sans promesse médicale',
];

const AUDIENCES = [
  'Enfants sensibles aux environnements calmes',
  'Bébés et tout-petits',
  'Moments parent-enfant',
  'Retour au calme après le jeu',
];

const MOMENTS = [
  {
    number: '1',
    title: 'Entrée en douceur',
    description: 'On baisse la lumière et le ton : l’enfant prend ses repères tranquillement.',
  },
  {
    number: '2',
    title: 'Éveil des sens',
    description: 'Fibre optique, textures, projections et sons doux à explorer librement.',
  },
  {
    number: '3',
    title: 'Apaisement',
    description: 'Un temps calme, allongé sous le ciel étoilé, pour se recentrer.',
  },
];

const GALLERY: GalleryItem[] = [
  { src: IMAGES.sensoryRoom, alt: 'Salle sensorielle lumineuse', caption: 'Lumière douce et fibre optique', featured: true },
  { src: IMAGES.babyCocon, alt: 'Coin tout-doux pour bébés', caption: 'Le coin Baby Cocon' },
  { src: IMAGES.sensoryWow, alt: 'Pièce sensorielle « wow »', caption: 'La pièce « wow »' },
  { src: IMAGES.diverseFamilies, alt: 'Familles diverses dans la salle sensorielle', caption: 'Un espace pour toutes les familles' },
];

export default function SalleSensoriellePage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Un espace de retour au calme"
        title="Une parenthèse douce pour les sens."
        subtitle="Lumière tamisée, textures et sons apaisants : un espace pensé pour explorer les sens et favoriser un moment calme."
        image={IMAGES.sensoryRoom}
        imageAlt="Salle sensorielle douce et lumineuse de LUMIA"
        actions={[
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Voir la galerie', href: '#galerie', variant: 'secondary' },
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

      <section className="container-lumia py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="La salle sensorielle"
              title="Un cocon pour ralentir et s’émerveiller"
              description="Un espace doux et enveloppant, pensé pour inviter l’enfant à explorer les sens à son rythme, dans une ambiance apaisante."
            />
            <div className="mt-6 rounded-3xl border border-sage/30 bg-sage-light/20 p-5 text-sm leading-relaxed text-brown">
              <strong className="text-brown-dark">Important :</strong> la salle
              sensorielle est un espace d’éveil et de bien-être. Elle ne
              constitue pas une activité thérapeutique et ne remplace aucun
              accompagnement médical ou thérapeutique.
            </div>
          </div>
          <div className="overflow-hidden rounded-5xl shadow-soft-lg">
            <div className="relative aspect-[4/3]">
              <SmartImage
                src={IMAGES.sensoryRoom}
                alt="Détail de la salle sensorielle"
                fallbackLabel="La salle sensorielle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Les équipements"
              title="Pensée pour les sens"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {SENSORY_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-3xl border border-brown/10 bg-ivory p-4 text-sm text-brown shadow-soft"
                >
                  <span aria-hidden className="text-sage-dark">
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Pour qui ?"
              title="Un espace pour de nombreux moments"
            />
            <ul className="mt-8 space-y-3">
              {AUDIENCES.map((aud) => (
                <li
                  key={aud}
                  className="flex items-center gap-3 rounded-3xl bg-ivory p-4 text-sm text-brown shadow-soft"
                >
                  <span aria-hidden className="text-terracotta">
                    ✦
                  </span>
                  {aud}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-brown/50">
              Peut convenir aux enfants qui aiment les environnements apaisants.
            </p>
          </div>
        </div>
      </section>

      {/* Le déroulé d'une visite */}
      <section className="container-lumia py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              align="left"
              eyebrow="Le déroulé d’une visite"
              title="Un moment pensé pour ralentir"
              description="Chaque visite suit un rythme doux, du premier pas dans la pièce au retour au calme."
            />
            <ol className="mt-8 space-y-5">
              {MOMENTS.map((moment) => (
                <li key={moment.number} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/20 font-serif text-sm font-semibold text-sage-dark"
                  >
                    {moment.number}
                  </span>
                  <div>
                    <p className="font-semibold text-brown-dark">{moment.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-brown-light">
                      {moment.description}
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
                  src={IMAGES.sensoryWow}
                  alt="Ambiance immersive de la salle sensorielle LUMIA"
                  fallbackLabel="La salle sensorielle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galerie" className="bg-brown-dark py-20 text-cream sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="La galerie"
            title={<span className="text-ivory">L’ambiance de la salle</span>}
          />
          <div className="mt-12">
            <ImageGallery items={GALLERY} />
          </div>
          <p className="mt-6 text-center text-xs italic text-cream/50">
            Visuels conceptuels — direction artistique du projet.
          </p>
        </div>
      </section>

      <CTA
        tone="starry"
        title="Offrez une parenthèse douce à votre enfant"
        description="Rejoignez la liste d’attente pour découvrir la salle sensorielle dès l’ouverture."
        actions={[
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Découvrir les ateliers', href: '/ateliers', variant: 'secondary' },
        ]}
      />
    </>
  );
}
