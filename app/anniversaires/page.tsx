import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import PricingCard from '@/components/PricingCard';
import ImageGallery, { type GalleryItem } from '@/components/ImageGallery';
import ReservationForm from '@/components/ReservationForm';
import CTA from '@/components/CTA';
import { IMAGES } from '@/lib/constants';
import { BIRTHDAY_FORMULAS, BIRTHDAY_OPTIONS } from '@/lib/offers';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Anniversaires premium',
  description:
    'Anniversaire enfant à Ambarès / Bassens : des fêtes privées, belles et douces dans un lieu sensoriel premium. Formules Doux, Signature et Prestige.',
  path: '/anniversaires',
  image: IMAGES.birthday,
  keywords: ['anniversaire enfant premium Bordeaux', 'fête enfant rive droite'],
});

const DIFFERENCES = [
  {
    title: 'Privé et calme',
    text: 'Le lieu rien que pour vous, sans bruit inutile ni surcharge.',
  },
  {
    title: 'Beau et décoré',
    text: 'Une scénographie douce et soignée, pensée pour les souvenirs.',
  },
  {
    title: 'Sans stress',
    text: 'Tout est organisé pour vous : vous profitez, on s’occupe du reste.',
  },
  {
    title: 'Sensoriel',
    text: 'Une expérience qui émerveille petits et grands, en douceur.',
  },
];

const GALLERY: GalleryItem[] = [
  { src: IMAGES.birthday, alt: 'Table d’anniversaire décorée', caption: 'Une table d’accueil soignée', featured: true },
  { src: IMAGES.wowRoom, alt: 'Décor immersif de fête', caption: 'Un décor immersif' },
  { src: IMAGES.mainRoom, alt: 'Espace de jeu pour la fête', caption: 'L’espace de jeu' },
  { src: IMAGES.workshop, alt: 'Mini-atelier pour les invités', caption: 'Un mini-atelier inclus' },
  { src: IMAGES.reception, alt: 'Accueil des familles', caption: 'L’accueil des familles' },
];

export default function AnniversairesPage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Anniversaires sur réservation"
        title="Des anniversaires beaux, doux et mémorables."
        subtitle="Un anniversaire privé, élégant et sans stress, pensé pour créer des souvenirs forts en famille."
        image={IMAGES.birthday}
        imageAlt="Anniversaire premium décoré dans la maison LUMIA"
        actions={[
          { label: 'Demander un anniversaire', href: '#demande' },
          { label: 'Voir les formules', href: '#formules', variant: 'secondary' },
        ]}
      />

      {/* Pourquoi différent */}
      <section className="container-lumia py-20 sm:py-24">
        <SectionTitle
          eyebrow="Pourquoi c’est différent"
          title="Un anniversaire, pas une salle bruyante"
          description="Des anniversaires beaux, doux et organisés, sans bruit inutile ni surcharge."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENCES.map((item) => (
            <div key={item.title} className="card-soft p-6">
              <h3 className="text-lg text-brown-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formules */}
      <section id="formules" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Les formules"
            title="Doux, Signature ou Prestige"
            description="Trois niveaux pour s’adapter à votre envie et à votre budget."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BIRTHDAY_FORMULAS.map((formula) => (
              <PricingCard key={formula.id} formula={formula} ctaHref="#demande" />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brown/50">
            Tarifs indicatifs à confirmer selon le local, le nombre d’enfants et
            les options.
          </p>
        </div>
      </section>

      {/* Options */}
      <section className="container-lumia py-20 sm:py-24">
        <SectionTitle
          eyebrow="Les options"
          title="Composez votre fête sur mesure"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BIRTHDAY_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="flex items-start gap-4 rounded-3xl border border-brown/10 bg-ivory p-5 shadow-soft"
            >
              <span aria-hidden className="text-lg text-gold">
                ✦
              </span>
              <div>
                <p className="font-semibold text-brown-dark">{option.title}</p>
                <p className="mt-1 text-sm text-brown-light">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-brown-dark py-20 text-cream sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="La galerie"
            title={<span className="text-ivory">L’ambiance d’un anniversaire LUMIA</span>}
          />
          <div className="mt-12">
            <ImageGallery items={GALLERY} />
          </div>
        </div>
      </section>

      {/* Demande */}
      <section id="demande" className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Votre demande"
              title="Préparons votre anniversaire"
              description="Dites-nous la date envisagée, l’âge de l’enfant et vos envies : nous revenons vers vous avec une proposition."
            />
          </div>
          <ReservationForm
            defaultInterest="anniversaire"
            submitLabel="Envoyer ma demande d’anniversaire"
          />
        </div>
      </section>

      <CTA
        tone="terracotta"
        title="Une date en tête ?"
        description="Rejoignez la liste d’attente pour réserver en priorité dès l’ouverture."
        actions={[
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Nous contacter', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
