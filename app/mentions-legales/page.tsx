import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import { SITE, CONTACT, AGENCY } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site LUMIA — Maison immersive & sensorielle.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <section className="container-lumia max-w-3xl py-32 sm:py-40">
      <SectionTitle align="left" as="h1" eyebrow="Informations" title="Mentions légales" />

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brown-light">
        <p className="rounded-3xl border border-gold/30 bg-sand-light/50 p-5 text-brown">
          Le projet {SITE.name} est en cours de préparation. Les informations
          ci-dessous seront complétées (statut juridique, immatriculation,
          hébergeur, adresse) dès la création officielle de la structure.
        </p>

        <div>
          <h2 className="text-xl text-brown-dark">Éditeur du site</h2>
          <p className="mt-2">
            {SITE.name} — {SITE.tagline}
            <br />
            Projet en préparation, secteur {CONTACT.area}.
            <br />
            Contact :{' '}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-terracotta-dark hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Conception & développement</h2>
          <p className="mt-2">
            Site conçu et accompagné par {AGENCY.accompagnement} — Agence{' '}
            {AGENCY.agence}.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Hébergement</h2>
          <p className="mt-2">
            Les informations relatives à l’hébergeur seront précisées lors de la
            mise en ligne définitive du site.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des contenus présents sur ce site (textes, visuels,
            identité de marque) est protégé. Toute reproduction sans
            autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Avertissement</h2>
          <p className="mt-2">
            {SITE.name} est un lieu d’éveil, de jeu, de calme et d’expérience
            sensorielle. Il ne s’agit pas d’une activité thérapeutique et cela
            ne remplace aucun accompagnement médical ou thérapeutique. Les
            tarifs et informations présentés sont indicatifs et susceptibles
            d’évoluer avant l’ouverture.
          </p>
        </div>
      </div>
    </section>
  );
}
