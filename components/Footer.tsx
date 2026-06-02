import Link from 'next/link';
import {
  SITE,
  CONTACT,
  SOCIAL,
  AGENCY,
  FOOTER_LINKS,
} from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-brown-dark text-cream/90">
      {/* Ciel étoilé discret */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-starry opacity-40"
      />
      <div className="container-lumia relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em] text-cream">
            {SITE.name}
            <span className="ml-2 text-base font-normal italic tracking-normal text-wood-light">
              {SITE.byline}
            </span>
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-wood-light">
            {SITE.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {SITE.baseline}
          </p>
          <p className="mt-5 text-sm text-cream/60">{CONTACT.area}</p>
        </div>

        <nav aria-label="Pied de page" className="text-sm">
          <p className="mb-4 font-semibold uppercase tracking-wider text-wood-light">
            Explorer
          </p>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/75 transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-4 font-semibold uppercase tracking-wider text-wood-light">
            Suivre & contacter
          </p>
          <ul className="space-y-2.5">
            <li>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/75 transition hover:text-cream"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/75 transition hover:text-cream"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-cream/75 transition hover:text-cream"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-cream/75 transition hover:text-cream"
              >
                Page contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-lumia relative border-t border-cream/15 py-6">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-cream/55 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name} — {SITE.tagline}. Tous droits réservés.
          </p>
          <p>
            Projet accompagné par {AGENCY.accompagnement} —{' '}
            <span className="text-wood-light">Agence {AGENCY.agence}</span>
          </p>
        </div>
        <p className="mt-3 max-w-3xl text-[0.7rem] leading-relaxed text-cream/40">
          LUMIA est un lieu d’éveil, de jeu, de calme et d’expérience
          sensorielle. Il ne s’agit pas d’une activité thérapeutique et cela ne
          remplace aucun accompagnement médical ou thérapeutique. Tarifs et
          informations indicatifs, susceptibles d’évoluer avant l’ouverture.
        </p>
      </div>
    </footer>
  );
}
