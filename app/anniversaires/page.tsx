import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ImageGallery from '@/components/ImageGallery';
import ReservationForm from '@/components/ReservationForm';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import VisualInfoCard from '@/components/VisualInfoCard';
import AnniversaryPlanCard from '@/components/AnniversaryPlanCard';
import { IMAGES } from '@/lib/constants';
import { buildMetadata, faqJsonLd } from '@/lib/seo';
import {
  ANNIV_POSTERS,
  pricingPlans,
  addOnOptions,
  processSteps,
  parentComfortReasons,
  anniversaireFaq,
  reassurance,
  galleryItems,
} from '@/lib/data/anniversaires';

export const metadata: Metadata = buildMetadata({
  title: 'Anniversaires premium',
  description:
    'Anniversaire enfant à Ambarès / Bassens : des fêtes privées, belles et douces dans un lieu sensoriel premium. Formules Doux, Signature et Prestige, options à la carte et déroulé clair.',
  path: '/anniversaires',
  image: IMAGES.birthday,
  keywords: ['anniversaire enfant premium Bordeaux', 'fête enfant rive droite'],
});

const DIFFERENCES = [
  { title: 'Privé et calme', text: 'Le lieu rien que pour vous, sans bruit inutile ni surcharge.' },
  { title: 'Beau et décoré', text: 'Une scénographie douce et soignée, pensée pour les souvenirs.' },
  { title: 'Sans stress', text: 'Tout est organisé pour vous : vous profitez, on s’occupe du reste.' },
  { title: 'Sensoriel', text: 'Une expérience qui émerveille petits et grands, en douceur.' },
];

export default function AnniversairesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(anniversaireFaq)),
        }}
      />

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

      {/* Bandeau de réassurance */}
      <section className="border-b border-brown/10 bg-sand-light/40">
        <div className="container-lumia flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center">
          {reassurance.map((phrase) => (
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

      {/* Pourquoi c'est différent */}
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

      {/* Les 3 formules */}
      <section id="formules" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Les formules"
            title="Doux, Signature ou Prestige"
            description="Trois niveaux pour s’adapter à votre envie et à votre budget. La formule Signature est notre plus choisie."
          />
          <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <AnniversaryPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-brown/50">
            Tarifs indicatifs à confirmer selon le local, le nombre d’enfants et
            les options.
          </p>
        </div>
      </section>

      {/* Options à la carte */}
      <section className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <VisualInfoCard
              src={ANNIV_POSTERS.options.src}
              alt={ANNIV_POSTERS.options.alt}
            />
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Options à la carte"
              title="Composez votre fête sur mesure"
              description="Chaque option est pensée pour sublimer votre événement et créer des souvenirs uniques."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {addOnOptions.map((option) => (
                <li
                  key={option.title}
                  className="flex items-start gap-3 rounded-3xl border border-brown/10 bg-ivory p-4 shadow-soft"
                >
                  <span aria-hidden className="mt-0.5 text-gold">
                    ✦
                  </span>
                  <div>
                    <p className="font-semibold text-brown-dark">{option.title}</p>
                    <p className="mt-1 text-sm text-brown-light">
                      {option.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Le déroulé de la fête */}
      <section className="container-lumia py-20 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              align="left"
              eyebrow="Le déroulé de la fête"
              title="Un accompagnement clair, simple et rassurant"
              description="De la prise de contact aux souvenirs, nous nous occupons de tout — vous profitez de l’essentiel."
            />
            <ol className="mt-8 space-y-5">
              {processSteps.map((step) => (
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
            <VisualInfoCard
              src={ANNIV_POSTERS.process.src}
              alt={ANNIV_POSTERS.process.alt}
            />
          </div>
        </div>
      </section>

      {/* Pourquoi les parents se sentent à l'aise */}
      <section className="bg-sage-dark py-20 text-cream sm:py-24">
        <div className="container-lumia grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <VisualInfoCard
              src={ANNIV_POSTERS.parentComfort.src}
              alt={ANNIV_POSTERS.parentComfort.alt}
            />
          </div>
          <div>
            <span className="eyebrow text-wood-light">
              <span aria-hidden className="h-px w-6 bg-wood-light/60" />
              Réassurance
            </span>
            <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">
              Pourquoi les parents se sentent à l’aise
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/85">
              Une expérience pensée aussi pour les familles : ici, chaque détail
              est imaginé pour que vous viviez un moment unique, en toute
              confiance.
            </p>
            <ul className="mt-8 space-y-4">
              {parentComfortReasons.map((reason) => (
                <li key={reason.number} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/15 text-sm font-semibold text-cream"
                  >
                    {reason.number}
                  </span>
                  <div>
                    <p className="font-semibold text-ivory">{reason.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-cream/80">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
            <ImageGallery items={galleryItems} />
          </div>
          <p className="mt-6 text-center text-xs italic text-cream/50">
            Visuels conceptuels — direction artistique du projet.
          </p>
        </div>
      </section>

      {/* FAQ anniversaire */}
      <section className="container-lumia py-20 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Questions fréquentes"
              title="De quoi se rassurer avant de réserver"
              description="Les réponses aux questions que se posent le plus souvent les parents."
            />
            <div className="mt-8">
              <VisualInfoCard
                src={ANNIV_POSTERS.faq.src}
                alt={ANNIV_POSTERS.faq.alt}
                className="max-w-sm"
              />
            </div>
          </div>
          <FAQ items={anniversaireFaq} />
        </div>
      </section>

      {/* Demande */}
      <section id="demande" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
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
