import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import { SITE, CONTACT } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et gestion des données personnelles du site LUMIA (RGPD).',
  path: '/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="container-lumia max-w-3xl py-32 sm:py-40">
      <SectionTitle
        align="left"
        as="h1"
        eyebrow="RGPD"
        title="Politique de confidentialité"
      />

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brown-light">
        <p>
          Chez {SITE.name}, nous attachons une grande importance au respect de
          votre vie privée. Cette page explique simplement quelles données nous
          collectons et comment elles sont utilisées.
        </p>

        <div>
          <h2 className="text-xl text-brown-dark">Données collectées</h2>
          <p className="mt-2">
            Lorsque vous remplissez un formulaire (liste d’attente, anniversaire,
            atelier, contact…), nous collectons uniquement les informations que
            vous nous transmettez : prénom, e-mail, téléphone (facultatif),
            ville, âge des enfants, intérêt et message.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Utilisation des données</h2>
          <p className="mt-2">
            Vos informations servent uniquement à vous recontacter au sujet du
            projet {SITE.name} (ouverture, offres fondatrices, réservations).
            Elles ne sont jamais revendues ni cédées à des tiers à des fins
            commerciales.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Consentement</h2>
          <p className="mt-2">
            En soumettant un formulaire, vous consentez à être recontacté·e. Ce
            consentement est recueilli explicitement via une case à cocher.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Conservation</h2>
          <p className="mt-2">
            Vos données sont conservées le temps nécessaire au suivi du projet,
            puis supprimées sur simple demande.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données. Pour exercer ces
            droits, écrivez-nous à{' '}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-terracotta-dark hover:underline"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl text-brown-dark">Cookies</h2>
          <p className="mt-2">
            Le site n’utilise pas de cookies de suivi publicitaire. Si des
            outils de mesure d’audience sont ajoutés ultérieurement, cette page
            sera mise à jour en conséquence.
          </p>
        </div>
      </div>
    </section>
  );
}
