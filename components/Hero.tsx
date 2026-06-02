import Link from 'next/link';
import SmartImage from './SmartImage';

type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type HeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
  /** `full` = hero d'accueil pleine hauteur ; `page` = bandeau de page plus compact. */
  variant?: 'full' | 'page';
};

export default function Hero({
  badge,
  title,
  subtitle,
  image,
  imageAlt,
  actions = [],
  variant = 'full',
}: HeroProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={`relative overflow-hidden ${isFull ? 'min-h-[92vh]' : 'min-h-[58vh]'} flex items-center`}
    >
      {/* Image de fond immersive */}
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt={imageAlt}
          fallbackLabel="Visuel du futur lieu LUMIA"
          fill
          priority={isFull}
          sizes="100vw"
          className="object-cover"
        />
        {/* Voiles chaleureux pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/35 to-brown-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/55 to-transparent" />
      </div>

      <div className="container-lumia relative z-10 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-up">
          {badge && (
            <span className="badge-soft bg-ivory/85 text-brown-dark backdrop-blur">
              <span
                aria-hidden
                className="h-1.5 w-1.5 animate-twinkle rounded-full bg-gold"
              />
              {badge}
            </span>
          )}
          <h1
            className={`mt-5 font-serif font-semibold text-ivory drop-shadow-sm ${
              isFull
                ? 'text-4xl leading-[1.08] sm:text-5xl lg:text-6xl'
                : 'text-3xl leading-tight sm:text-4xl lg:text-5xl'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
              {subtitle}
            </p>
          )}
          {actions.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={
                    action.variant === 'secondary'
                      ? 'btn-secondary'
                      : 'btn-primary'
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
