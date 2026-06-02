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

const AUDIENCES = [
  'Enfants sensibles aux environnements calmes',
  'Bébés et tout-petits',
  'Moments parent-enfant',
  'Retour au calme après le jeu',
];

const GALLERY: GalleryItem[] = [
  { src: IMAGES.sensoryRoom, alt: 'Salle sensorielle lumineuse', caption: 'Lumière douce et fibre optique', featured: true },
  { src: IMAGES.babyCocon, alt: 'Coin tout-doux pour bébés', caption: 'Le coin Baby Cocon' },
  { src: IMAGES.wowRoom, alt: 'Ciel étoilé immersif', caption: 'Le ciel étoilé' },
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

      <section id="galerie" className="bg-brown-dark py-20 text-cream sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="La galerie"
            title={<span className="text-ivory">L’ambiance de la salle</span>}
          />
          <div className="mt-12">
            <ImageGallery items={GALLERY} />
          </div>
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
