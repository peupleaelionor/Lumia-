import Image from 'next/image';
import Link from 'next/link';
import type { PricingPlan } from '@/lib/data/anniversaires';

/**
 * Carte de formule d'anniversaire : affiche premium dédiée + pied natif
 * (nom, prix, CTA) et liste de bénéfices accessible (sr-only, déjà visible
 * sur l'affiche). La formule « Signature » est mise en avant.
 */
export default function AnniversaryPlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-4xl border bg-ivory shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg ${
        plan.highlight
          ? 'border-gold/60 ring-2 ring-gold/50'
          : 'border-brown/10'
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-semibold shadow-warm ${
            plan.highlight
              ? 'bg-gold text-brown-dark'
              : 'bg-ivory/90 text-brown-dark backdrop-blur'
          }`}
        >
          {plan.badge}
        </span>
      )}

      <Image
        src={plan.image}
        alt={plan.alt}
        width={1122}
        height={1402}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
        loading="lazy"
        className="h-auto w-full"
      />

      {/* Contenu natif (SEO + accessibilité) */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-2xl text-brown-dark">
            Formule {plan.name}
          </h3>
          <span className="font-serif text-xl font-semibold text-terracotta-dark">
            {plan.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-brown-light">
          {plan.subtitle}
        </p>

        {/* Bénéfices : visibles sur l'affiche, exposés ici pour les lecteurs d'écran */}
        <ul className="sr-only">
          {plan.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <Link
          href={plan.ctaHref}
          className={`mt-5 w-full ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
