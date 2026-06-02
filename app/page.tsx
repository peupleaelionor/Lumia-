import Link from 'next/link';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard';
import OfferCard from '@/components/OfferCard';
import PricingCard from '@/components/PricingCard';
import ImageGallery, { type GalleryItem } from '@/components/ImageGallery';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import SocialProof from '@/components/SocialProof';
import LocalSEOBlock from '@/components/LocalSEOBlock';
import ReservationForm from '@/components/ReservationForm';
import SmartImage from '@/components/SmartImage';
import { SITE, IMAGES } from '@/lib/constants';
import {
  EXPERIENCES,
  MAIN_OFFERS,
  BIRTHDAY_FORMULAS,
  WORKSHOPS,
} from '@/lib/offers';
import { FAQ_ITEMS } from '@/lib/faq';
import { buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: SITE.name,
  description:
    'LUMIA, future maison immersive et sensorielle pour enfants et familles à Ambarès / Bassens : jeu, salle sensorielle, ateliers parent-enfant et anniversaires premium.',
  path: '/',
});

const GALLERY: GalleryItem[] = [
  { src: IMAGES.mainRoomPlay, alt: 'Grande salle de jeu immersive', caption: 'La grande salle immersive', featured: true },
  { src: IMAGES.facade, alt: 'Façade du futur lieu, à l’arrivée des familles', caption: 'La façade' },
  { src: IMAGES.reception, alt: 'Accueil chaleureux et boutique', caption: 'L’accueil' },
  { src: IMAGES.sensoryRoom, alt: 'Salle sensorielle douce', caption: 'La salle sensorielle' },
  { src: IMAGES.birthday, alt: 'Anniversaire premium décoré', caption: 'Un anniversaire premium' },
  { src: IMAGES.workshop, alt: 'Atelier parent-enfant dans un espace sensoriel premium LUMIA', caption: 'Un atelier parent-enfant' },
  { src: IMAGES.babyCocon, alt: 'Espace Baby Cocon', caption: 'Le Baby Cocon' },
  { src: IMAGES.diverseFamilies, alt: 'Familles diverses réunies dans la salle sensorielle', caption: 'Toutes les familles bienvenues' },
  { src: IMAGES.wowRoom, alt: 'Pièce sensorielle spectaculaire et lumineuse', caption: 'La pièce « wow »' },
  { src: IMAGES.mainRoom, alt: 'Grande salle sous un ciel étoilé', caption: 'L’ambiance du soir' },
  { src: IMAGES.babyPlay, alt: 'Tout-petits qui explorent en douceur', caption: 'Les tout-petits explorent' },
  { src: IMAGES.workshopNatural, alt: 'Atelier autour de matières naturelles', caption: 'Un atelier naturel' },
];

const DIFFERENCES = [
  'Lieu sur réservation',
  'Ambiance calme et propre',
  'Design premium',
  'Sécurité et hygiène',
  'Enfants de 0 à 10 ans',
  'Moments parent-enfant',
  'Anniversaires privés',
  'Approche naturelle et sensorielle',
  'Inclusif : toutes les familles bienvenues',
  'Pensé pour Bassens, Ambarès et la rive droite',
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_ITEMS)) }}
      />

      {/* 1. HERO */}
      <Hero
        badge={SITE.status}
        title="Une maison immersive pour jouer, créer et rêver en famille."
        subtitle="Un futur lieu à Ambarès / Bassens pensé pour les enfants, les parents, les anniversaires, les ateliers sensoriels et les moments précieux."
        image={IMAGES.heroMain}
        imageAlt="Intérieur immersif et chaleureux de la future maison LUMIA"
        actions={[
          { label: 'Découvrir le concept', href: '#concept', variant: 'secondary' },
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Préparer un anniversaire', href: '/anniversaires', variant: 'secondary' },
        ]}
      />

      {/* 2. VISION */}
      <section id="concept" className="container-lumia py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-5xl shadow-soft-lg">
              <div className="relative aspect-[4/5]">
                <SmartImage
                  src={IMAGES.wowRoom}
                  alt="Espace doux et lumineux de LUMIA"
                  fallbackLabel="L’ambiance LUMIA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-4xl bg-sage-dark px-6 py-5 text-cream shadow-soft-lg sm:block">
              <p className="font-serif text-3xl">0–10</p>
              <p className="text-xs uppercase tracking-wider text-cream/80">ans, en famille</p>
            </div>
          </div>

          <div>
            <SectionTitle
              align="left"
              eyebrow="La vision"
              title="Plus qu’une salle de jeux, un cocon immersif."
              description="LUMIA n’est pas une simple salle de jeux. C’est un cocon immersif, doux et sécurisé, pensé pour éveiller l’enfant, rassurer le parent, créer des souvenirs et rendre chaque visite belle, utile et mémorable."
            />
            <blockquote className="mt-8 border-l-2 border-terracotta pl-5 font-serif text-xl italic leading-relaxed text-brown-dark">
              « Un lieu doux et magique pour jouer, explorer, créer, célébrer et
              se calmer en famille. »
            </blockquote>
            <p className="mt-6 text-sm text-brown-light">
              Un lieu pensé pour les enfants, mais aussi pour la tranquillité
              des parents.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXPÉRIENCES */}
      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Les expériences"
            title="Tout ce que LUMIA réunit sous un même toit"
            description="Huit façons de vivre le lieu, du jeu immersif au retour au calme, des ateliers aux anniversaires."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. POURQUOI DIFFÉRENT */}
      <section className="container-lumia py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionTitle
            align="left"
            eyebrow="Ce qui nous rend différents"
            title="Un lieu pensé dans le moindre détail"
            description="Chaque choix est guidé par le bien-être de l’enfant et la sérénité du parent."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {DIFFERENCES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-3xl border border-brown/10 bg-ivory p-4 text-sm text-brown shadow-soft"
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-light/60 text-xs text-sage-dark"
                >
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. GALERIE IMMERSIVE */}
      <section id="galerie" className="bg-brown-dark py-20 text-cream sm:py-28">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="La galerie"
            title={<span className="text-ivory">La vision du lieu, en images</span>}
            description={
              <span className="text-cream/75">
                Façade, accueil, salle sensorielle, anniversaires, ateliers,
                Baby Cocon et grande salle : un avant-goût de l’expérience LUMIA.
              </span>
            }
          />
          <div className="mt-12">
            <ImageGallery items={GALLERY} />
          </div>
          <p className="mt-6 text-center text-xs italic text-cream/50">
            Visuels conceptuels — direction artistique du projet, avant
            l’ouverture du lieu réel.
          </p>
        </div>
      </section>

      {/* 6. OFFRES */}
      <section className="container-lumia py-20 sm:py-28">
        <SectionTitle
          eyebrow="Les offres"
          title="Des formules simples, claires et accessibles"
          description="Quatre façons de vivre LUMIA, selon votre envie et votre famille."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAIN_OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brown/50">
          Tarifs indicatifs, à confirmer selon le local, le nombre d’enfants et
          les options.
        </p>
      </section>

      {/* 7. ANNIVERSAIRES */}
      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Anniversaires premium"
            title="Le cœur premium de LUMIA"
            description="Les anniversaires seront le cœur premium de LUMIA : des moments privés, élégants, décorés et pensés pour créer des souvenirs forts sans transformer le lieu en salle bruyante."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BIRTHDAY_FORMULAS.map((formula) => (
              <PricingCard
                key={formula.id}
                formula={formula}
                ctaHref="/anniversaires"
                ctaLabel="Découvrir cette formule"
              />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brown/50">
            Tarifs indicatifs à confirmer selon le local, le nombre d’enfants et
            les options.
          </p>
          <div className="mt-8 text-center">
            <Link href="/anniversaires" className="btn-primary">
              Préparer un anniversaire
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ATELIERS */}
      <section className="container-lumia py-20 sm:py-28">
        <SectionTitle
          eyebrow="Les ateliers"
          title="Toucher, créer, sentir, observer et partager"
          description="Des ateliers doux pour explorer les sens et créer du lien — une expérience sensorielle, pas une promesse médicale."
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
        <div className="mt-8 text-center">
          <Link href="/ateliers" className="btn-secondary">
            Découvrir les ateliers
          </Link>
        </div>
      </section>

      {/* 9. BOUTIQUE */}
      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-lumia grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-5xl shadow-soft-lg">
            <div className="relative aspect-[5/4]">
              <SmartImage
                src={IMAGES.storefrontFamily}
                alt="Famille devant la boutique LUMIA"
                fallbackLabel="La boutique LUMIA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow="La boutique"
              title="Prolonger l’expérience à la maison"
              description="Cartes cadeaux, box sensorielles, passeport explorateur, peluche signature… Une boutique douce et naturelle, bientôt disponible."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/boutique" className="btn-primary">
                Voir la boutique
              </Link>
              <Link
                href="/reservation?interet=boutique"
                className="btn-secondary"
              >
                Être prévenu du lancement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRÉ-LANCEMENT */}
      <section className="container-lumia py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Pré-lancement"
              title="Rejoindre les familles fondatrices"
              description="Les premières familles inscrites seront invitées aux tests, aux offres fondatrices et aux premiers créneaux."
            />
            <ul className="mt-6 space-y-3 text-sm text-brown">
              {[
                'Accès prioritaire aux premiers créneaux',
                'Offres fondatrices réservées',
                'Invitations aux tests et avant-premières',
              ].map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <span aria-hidden className="text-terracotta">
                    ✦
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* 11. PRÉSENCE EN LIGNE */}
      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Présence en ligne"
            title="Suivez les coulisses du projet"
            description="Du moodboard au lancement officiel, suivez la naissance de LUMIA au plus près."
          />
          <div className="mt-12">
            <SocialProof />
          </div>
        </div>
      </section>

      {/* 12. LOCAL */}
      <section className="container-lumia py-20 sm:py-28">
        <LocalSEOBlock />
      </section>

      {/* 13. FAQ */}
      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Tout ce que vous voulez savoir"
          />
          <div className="mt-12">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTA
        tone="starry"
        title="Et si votre famille faisait partie des premières ?"
        description="Rejoignez la liste d’attente et soyez prévenu·e en avant-première de l’ouverture, des offres fondatrices et des premiers créneaux."
        actions={[
          { label: 'Rejoindre la liste d’attente', href: '/reservation' },
          { label: 'Nous contacter', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
