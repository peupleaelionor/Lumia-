import Link from 'next/link';

type ReservationCTAProps = {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/**
 * Bandeau compact de conversion vers la pré-réservation.
 * Réutilisable au fil des pages pour garder un CTA toujours à portée.
 */
export default function ReservationCTA({
  title = 'Rejoindre les familles fondatrices',
  text = 'Les premières familles inscrites seront invitées aux tests, aux offres fondatrices et aux premiers créneaux.',
  primary = { label: 'Rejoindre la liste d’attente', href: '/reservation' },
  secondary,
}: ReservationCTAProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-gold/30 bg-sand-light/60 p-7 sm:flex-row sm:items-center sm:p-9">
      <div className="max-w-xl">
        <h3 className="text-xl text-brown-dark sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brown-light">{text}</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-3">
        <Link href={primary.href} className="btn-primary">
          {primary.label}
        </Link>
        {secondary && (
          <Link href={secondary.href} className="btn-secondary">
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
