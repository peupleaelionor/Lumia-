import Image from 'next/image';
import Link from 'next/link';
import {
  type BoutiqueItem,
  shopInterestHref,
} from '@/lib/data/boutique';

const badgeStyles: Record<BoutiqueItem['status'], string> = {
  precommande: 'bg-terracotta text-ivory',
  bientot: 'bg-ivory/90 text-brown-dark backdrop-blur',
};

/**
 * Carte produit de la boutique LUMIA.
 * Image lifestyle en haut (ratio 4:5, jamais rognée violemment), badge de
 * statut, titre, description, prix ou « bientôt », et CTA d'intérêt.
 * Hauteur harmonisée via flex pour un alignement propre en grille.
 */
export default function BoutiqueProductCard({
  item,
  priority = false,
}: {
  item: BoutiqueItem;
  priority?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-4xl border bg-ivory shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg ${
        item.featured ? 'border-terracotta/40' : 'border-brown/10'
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-light/40">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-warm ${badgeStyles[item.status]}`}
        >
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-brown-dark">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-light">
          {item.description}
        </p>
        <p className="mt-4 font-serif text-lg font-semibold text-terracotta-dark">
          {item.priceLabel ?? (
            <span className="text-base font-normal text-brown-light">
              Bientôt disponible
            </span>
          )}
        </p>
        <Link
          href={shopInterestHref(item.slug)}
          className={`mt-4 w-full text-xs ${item.featured ? 'btn-primary' : 'btn-secondary'}`}
        >
          {item.ctaLabel}
        </Link>
      </div>
    </article>
  );
}
