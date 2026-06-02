import Link from 'next/link';
import type { Offer } from '@/lib/offers';

/** Carte d'offre principale (créneau, atelier, anniversaire, pro). */
export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div
      className={`card-soft relative flex flex-col p-7 ${
        offer.highlight
          ? 'ring-2 ring-terracotta/60 shadow-soft-lg'
          : ''
      }`}
    >
      {offer.highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-ivory shadow-warm">
          Le plus apprécié
        </span>
      )}
      <h3 className="text-xl text-brown-dark">{offer.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brown-light">
        {offer.pitch}
      </p>

      <p className="mt-5 flex items-baseline gap-1">
        <span className="font-serif text-3xl font-semibold text-terracotta-dark">
          {offer.price}
        </span>
        {offer.priceNote && (
          <span className="text-sm text-brown-light">{offer.priceNote}</span>
        )}
      </p>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm text-brown">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={offer.cta.href}
        className={`mt-6 w-full ${offer.highlight ? 'btn-primary' : 'btn-secondary'}`}
      >
        {offer.cta.label}
      </Link>
    </div>
  );
}
