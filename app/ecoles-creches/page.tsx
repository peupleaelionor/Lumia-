import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ReservationForm from '@/components/ReservationForm';
import CTA from '@/components/CTA';
import { IMAGES } from '@/lib/constants';
import { PRO_OFFERS, PRO_TARGETS } from '@/lib/offers';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Écoles & crèches',
  description:
    'Crèches, MAM, assistantes maternelles et écoles : ateliers sensoriels et matinées cocon à Ambarès / Bassens. Demandez une proposition pour votre structure.',
  path: '/ecoles-creches',
  image: IMAGES.diverseFamilies,
  keywords: ['crèche MAM atelier sensoriel Bordeaux', 'activité crèche rive droite'],
});

const BENEFITS = [
  'Un cadre calme, propre et sécurisé',
  'Des ateliers clés en main et encadrés',
  'Une approche sensorielle et naturelle',
  'Des créneaux dédiés à votre groupe',
];

export default function EcolesCrechesPage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Offres dédiées aux structures"
        title="Un partenaire pour la petite enfance."
        subtitle="Crèches, MAM, assistantes maternelles, écoles et centres de loisirs : des matinées et ateliers sensoriels pensés pour vos groupes."
        image={IMAGES.diverseFamilies}
        imageAlt="Groupe d’enfants accompagné dans la maison LUMIA"
        actions={[
          { label: 'Demander une proposition', href: '#demande' },
          { label: 'Voir les offres', href: '#offres', variant: 'secondary' },
        ]}
      />

      <section className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            align="left"
            eyebrow="Pour qui ?"
            title="Pensé pour les professionnels de la petite enfance"
            description="LUMIA accueille les structures locales avec des formules adaptées à leurs contraintes et à leur rythme."
          />
          <ul className="flex flex-wrap gap-2.5">
            {PRO_TARGETS.map((target) => (
              <li
                key={target}
                className="rounded-full border border-brown/15 bg-ivory px-4 py-2 text-sm text-brown shadow-soft"
              >
                {target}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="offres" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <SectionTitle
            eyebrow="Les offres B2B"
            title="Des formules sur mesure"
            description="Du créneau ponctuel au cycle régulier, nous construisons l’offre qui correspond à votre structure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRO_OFFERS.map((offer) => (
              <div key={offer.id} className="card-soft p-6">
                <h3 className="text-lg text-brown-dark">{offer.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-light">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            align="left"
            eyebrow="Les bénéfices"
            title="Ce que votre structure y gagne"
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-3xl border border-brown/10 bg-ivory p-4 text-sm text-brown shadow-soft"
              >
                <span aria-hidden className="text-sage-dark">
                  ✦
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="demande" className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Votre demande"
              title="Demander une proposition pour ma structure"
              description="Parlez-nous de votre groupe, de vos effectifs et de vos disponibilités : nous revenons vers vous avec une proposition adaptée."
            />
          </div>
          <ReservationForm
            defaultInterest="creche-mam-ecole"
            submitLabel="Demander une proposition"
            showStructure
          />
        </div>
      </section>

      <CTA
        tone="sage"
        title="Construisons un projet adapté à votre structure"
        description="Matinée cocon, atelier mobile, privatisation ou cycle mensuel : parlons-en."
        actions={[
          { label: 'Demander une proposition', href: '#demande' },
          { label: 'Nous contacter', href: '/contact', variant: 'secondary' },
        ]}
      />
    </>
  );
}
