import Link from 'next/link';
import {
  type Product,
  PRODUCT_STATUS_LABEL,
} from '@/lib/products';

const statusStyles: Record<Product['status'], string> = {
  bientot: 'bg-sand-light text-brown',
  precommande: 'bg-sage-light/60 text-sage-dark',
  disponible: 'bg-terracotta/15 text-terracotta-dark',
};

/** Carte produit de la future boutique. Pas d'encaissement : CTA d'intérêt. */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-soft group flex flex-col overflow-hidden">
      {/* Vignette produit (placeholder doux en attendant les visuels) */}
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-sand-light via-beige to-sage-light/40">
        <span className="font-serif text-lg italic text-brown/40">
          {product.name}
        </span>
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[product.status]}`}
        >
          {PRODUCT_STATUS_LABEL[product.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-brown-dark">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-light">
          {product.description}
        </p>
        <p className="mt-4 font-serif text-lg font-semibold text-terracotta-dark">
          {product.price ?? 'Bientôt disponible'}
        </p>
        <Link
          href={`/reservation?interet=boutique&produit=${product.id}`}
          className="btn-secondary mt-4 w-full text-xs"
        >
          {product.cta}
        </Link>
      </div>
    </div>
  );
}
