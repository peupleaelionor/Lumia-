import Link from 'next/link';
import type { BirthdayFormula } from '@/lib/offers';

type PricingCardProps = {
  formula: BirthdayFormula;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Carte de formule tarifaire (utilisée pour les anniversaires). */
export default function PricingCard({
  formula,
  ctaHref = '/reservation',
  ctaLabel = 'Demander cette formule',
}: PricingCardProps) {
  return (
    <div
      className={`card-soft relative flex flex-col p-7 ${
        formula.highlight ? 'ring-2 ring-gold/70 shadow-soft-lg' : ''
      }`}
    >
      {formula.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-brown-dark shadow-warm">
          Formule signature
        </span>
      )}
      <h3 className="text-center font-serif text-2xl text-brown-dark">
        {formula.name}
      </h3>
      <p className="mt-3 text-center font-serif text-3xl font-semibold text-terracotta-dark">
        {formula.price}
      </p>
      <p className="mt-3 text-center text-sm leading-relaxed text-brown-light">
        {formula.description}
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-brown">
        {formula.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-0.5 text-sage-dark"
            >
              ✦
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`mt-7 w-full ${formula.highlight ? 'btn-primary' : 'btn-secondary'}`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
