import { AREA_SERVED } from '@/lib/constants';

/**
 * Bloc « Local » + SEO local.
 * Met en avant la zone desservie sans donner d'adresse (local non signé).
 */
export default function LocalSEOBlock() {
  return (
    <div className="overflow-hidden rounded-5xl bg-sage-dark text-cream shadow-soft-lg">
      <div className="grid md:grid-cols-2">
        <div className="p-8 sm:p-12">
          <span className="eyebrow text-wood-light">
            <span aria-hidden className="h-px w-6 bg-wood-light/60" />
            Le futur lieu
          </span>
          <h2 className="mt-3 text-3xl text-ivory sm:text-4xl">
            Pensé pour la rive droite bordelaise
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-cream/85">
            Le lieu est pensé pour s’implanter à Ambarès, Bassens ou dans un
            secteur proche de la rive droite, avec priorité à l’accessibilité,
            au parking, aux familles, aux poussettes et à la proximité des
            écoles, crèches et quartiers résidentiels.
          </p>
          <p className="mt-4 text-sm text-cream/60">
            L’adresse précise sera communiquée une fois le local confirmé.
          </p>
        </div>

        <div className="bg-brown-dark/30 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-wood-light">
            Familles bienvenues depuis
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {AREA_SERVED.map((city) => (
              <li
                key={city}
                className="rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/90"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
