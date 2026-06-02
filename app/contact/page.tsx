import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ReservationForm from '@/components/ReservationForm';
import { IMAGES, CONTACT, SOCIAL, AGENCY } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contactez LUMIA pour échanger, soutenir le projet, réserver un futur anniversaire ou proposer un partenariat à Ambarès / Bassens.',
  path: '/contact',
  image: IMAGES.facade,
});

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Projet en préparation"
        title="Échangeons autour du projet."
        subtitle="Pour échanger, soutenir, réserver un futur anniversaire ou proposer un partenariat, contactez-nous."
        image={IMAGES.facade}
        imageAlt="Façade du futur lieu LUMIA"
        actions={[{ label: 'Écrire un message', href: '#message' }]}
      />

      <section className="container-lumia py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Nous joindre"
              title="Restons en contact"
              description="Le lieu est en préparation. En attendant, nous répondons à toutes vos questions par e-mail et sur les réseaux."
            />
            <div className="mt-8 space-y-4">
              <div className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta-dark">
                  E-mail
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block font-serif text-lg text-brown-dark hover:text-terracotta-dark"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta-dark">
                  Secteur
                </p>
                <p className="mt-1 font-serif text-lg text-brown-dark">
                  {CONTACT.area}
                </p>
                <p className="mt-1 text-sm text-brown-light">
                  Adresse communiquée une fois le local confirmé.
                </p>
              </div>
              <div className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta-dark">
                  Réseaux
                </p>
                <div className="mt-2 flex gap-3">
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 py-2 text-xs"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 py-2 text-xs"
                  >
                    YouTube
                  </a>
                </div>
              </div>
              <p className="text-sm text-brown-light">
                Projet accompagné par {AGENCY.accompagnement} — Agence{' '}
                {AGENCY.agence}.
              </p>
            </div>
          </div>

          <div id="message">
            <ReservationForm
              defaultInterest="decouverte"
              submitLabel="Envoyer mon message"
            />
            <p className="mt-4 text-center text-sm text-brown-light">
              Vous souhaitez réserver ?{' '}
              <Link
                href="/reservation"
                className="font-semibold text-terracotta-dark underline-offset-2 hover:underline"
              >
                Rejoignez la liste d’attente
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
