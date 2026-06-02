import Link from 'next/link';

type CtaAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type CTAProps = {
  title: string;
  description?: string;
  actions: CtaAction[];
  /** Variante visuelle de la bannière. */
  tone?: 'terracotta' | 'sage' | 'starry';
};

/** Bannière d'appel à l'action pleine largeur, réutilisable en fin de page. */
export default function CTA({
  title,
  description,
  actions,
  tone = 'terracotta',
}: CTAProps) {
  const tones: Record<string, string> = {
    terracotta:
      'bg-gradient-to-br from-terracotta to-terracotta-dark text-ivory',
    sage: 'bg-gradient-to-br from-sage to-sage-dark text-ivory',
    // bg-starry est un backgroundImage qui écraserait le gradient Tailwind :
    // on utilise un fond solide brun foncé + overlay étoilé séparé.
    starry: 'bg-brown-dark text-ivory',
  };

  return (
    <section className="container-lumia py-16">
      <div
        className={`relative overflow-hidden rounded-5xl px-8 py-14 text-center shadow-soft-lg sm:px-14 ${tones[tone]}`}
      >
        {tone === 'starry' && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-starry opacity-30"
          />
        )}
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-ivory sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-ivory/85 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                className={
                  action.variant === 'secondary'
                    ? 'inline-flex items-center justify-center gap-2 rounded-full border border-ivory/50 px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ivory/10'
                    : 'inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-brown-dark shadow-soft transition hover:bg-cream active:scale-[0.98]'
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
