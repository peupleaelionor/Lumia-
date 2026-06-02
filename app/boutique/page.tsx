import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import BoutiqueProductCard from '@/components/BoutiqueProductCard';
import CTA from '@/components/CTA';
import { IMAGES } from '@/lib/constants';
import {
  preorderItems,
  comingSoonItems,
  shopRationale,
} from '@/lib/data/boutique';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Boutique',
  description:
    'La future boutique LUMIA : cartes cadeaux, box sensorielles, passeport explorateur, peluche signature et plus. Précommande et bientôt disponible — soyez prévenu·e.',
  path: '/boutique',
  image: IMAGES.storefrontFamily,
});

export default function BoutiquePage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Boutique bientôt disponible"
        title="Prolonger l’univers LUMIA à la maison."
        subtitle="Une sélection douce et naturelle pour retrouver la magie de LUMIA chez vous. Les cartes cadeaux et box sensorielles seront les premières disponibles."
        image={IMAGES.storefrontFamily}
        imageAlt="La future boutique LUMIA"
        actions={[
          { label: 'Précommander une carte cadeau', href: '/reservation?interet=boutique&produit=carte-cadeau-lumia' },
          { label: 'Être prévenu du lancement', href: '/reservation?interet=boutique', variant: 'secondary' },
        ]}
      />

      {/* Intro rassurante */}
      <section className="container-lumia pt-20 sm:pt-24">
        <SectionTitle
          eyebrow="En prévisualisation"
          title="Des objets doux, pensés avec soin"
          description="La boutique n’encaisse pas encore. Découvrez les premiers objets de l’univers LUMIA et manifestez votre intérêt pour être prévenu·e en priorité du lancement."
        />
      </section>

      {/* Précommande */}
      <section className="container-lumia py-16 sm:py-20">
        <div className="mb-8 flex items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-terracotta/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Précommande
          </span>
          <p className="text-sm text-brown-light">
            Précommander les premiers objets de la boutique.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preorderItems.map((item, i) => (
            <BoutiqueProductCard key={item.slug} item={item} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* Bientôt disponible */}
      <section className="bg-cream-200/60 py-16 sm:py-20">
        <div className="container-lumia">
          <div className="mb-8 flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brown">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-wood" />
              Bientôt disponible
            </span>
            <p className="text-sm text-brown-light">
              Les essentiels LUMIA à venir.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {comingSoonItems.map((item) => (
              <BoutiqueProductCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi les produits dérivés comptent */}
      <section className="container-lumia py-20 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-5xl bg-sage-dark p-8 text-cream shadow-soft-lg sm:p-12">
          <h2 className="text-2xl text-ivory sm:text-3xl">{shopRationale.title}</h2>
          <p className="mt-4 leading-relaxed text-cream/85">{shopRationale.text}</p>
          <ul className="mt-6 grid gap-2.5 text-sm text-cream/90 sm:grid-cols-2">
            {shopRationale.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span aria-hidden className="text-wood-light">
                  ✦
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        tone="terracotta"
        title="Envie d’offrir un moment LUMIA ?"
        description="Précommandez une carte cadeau ou demandez à être prévenu·e du lancement de la boutique."
        actions={[
          { label: 'Précommander une carte cadeau', href: '/reservation?interet=boutique&produit=carte-cadeau-lumia' },
          { label: 'Être prévenu du lancement', href: '/reservation?interet=boutique', variant: 'secondary' },
        ]}
      />
    </>
  );
}
