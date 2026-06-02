import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import CTA from '@/components/CTA';
import { IMAGES } from '@/lib/constants';
import { PRODUCTS, SHOP_RATIONALE } from '@/lib/products';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Boutique',
  description:
    'La future boutique LUMIA : cartes cadeaux, box sensorielles, passeport explorateur, peluche signature et plus. Bientôt disponible — soyez prévenu·e.',
  path: '/boutique',
  image: IMAGES.storefrontFamily,
});

export default function BoutiquePage() {
  return (
    <>
      <Hero
        variant="page"
        badge="Boutique bientôt disponible"
        title="Prolonger l’expérience à la maison."
        subtitle="Une sélection douce et naturelle pour retrouver la magie de LUMIA chez vous. Les cartes cadeaux et box seront les premières disponibles."
        image={IMAGES.storefrontFamily}
        imageAlt="La future boutique LUMIA"
        actions={[
          { label: 'Précommander une carte cadeau', href: '/reservation?interet=boutique&produit=carte-cadeau' },
          { label: 'Être prévenu du lancement', href: '/reservation?interet=boutique', variant: 'secondary' },
        ]}
      />

      <section className="container-lumia py-20 sm:py-24">
        <SectionTitle
          eyebrow="En prévisualisation"
          title="Un avant-goût de la boutique"
          description="La boutique n’encaisse pas encore : découvrez les produits à venir et manifestez votre intérêt pour être prévenu·e en priorité."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-cream-200/60 py-20 sm:py-24">
        <div className="container-lumia">
          <div className="mx-auto max-w-3xl rounded-5xl bg-sage-dark p-8 text-cream shadow-soft-lg sm:p-12">
            <h2 className="text-2xl text-ivory sm:text-3xl">
              {SHOP_RATIONALE.title}
            </h2>
            <p className="mt-4 leading-relaxed text-cream/85">
              {SHOP_RATIONALE.text}
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-cream/90 sm:grid-cols-2">
              {[
                'Commencer sans stock lourd',
                'Cartes cadeaux en premier',
                'Box en précommande',
                'Produits en petite série',
                'Boutique en ligne plus tard',
                'Photos / vidéos d’anniversaire en option premium',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span aria-hidden className="text-wood-light">
                    ✦
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        tone="terracotta"
        title="Envie d’offrir un moment LUMIA ?"
        description="Précommandez une carte cadeau ou demandez à être prévenu·e du lancement de la boutique."
        actions={[
          { label: 'Précommander une carte cadeau', href: '/reservation?interet=boutique&produit=carte-cadeau' },
          { label: 'Être prévenu du lancement', href: '/reservation?interet=boutique', variant: 'secondary' },
        ]}
      />
    </>
  );
}
