import Image from 'next/image';
import type { ReactNode } from 'react';

type VisualInfoCardProps = {
  src: string;
  alt: string;
  /** Dimensions intrinsèques de l'affiche (par défaut format portrait 4:5 LUMIA). */
  width?: number;
  height?: number;
  /** Charger en priorité (uniquement si above-the-fold). */
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Contenu natif optionnel affiché sous l'affiche (SEO / accessibilité). */
  children?: ReactNode;
};

/**
 * Affiche premium encadrée (infographie / poster informatif).
 * L'image reste entière (jamais rognée) dans un cadre doux et arrondi.
 * Le contenu informatif clé peut être complété en HTML via `children`.
 */
export default function VisualInfoCard({
  src,
  alt,
  width = 1122,
  height = 1402,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 540px',
  className = '',
  children,
}: VisualInfoCardProps) {
  return (
    <figure
      className={`overflow-hidden rounded-4xl border border-brown/10 bg-ivory p-2 shadow-soft ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="h-auto w-full rounded-3xl"
      />
      {children && <figcaption className="px-2 pb-1 pt-3">{children}</figcaption>}
    </figure>
  );
}
