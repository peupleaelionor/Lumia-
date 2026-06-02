'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type SmartImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  /** Légende courte affichée dans le fallback élégant. */
  fallbackLabel?: string;
};

/**
 * Image LUMIA avec fallback propre.
 * Tant que le fichier n'est pas déposé dans /public/images/lumia,
 * un visuel doux (dégradé + libellé) s'affiche à la place — jamais d'image cassée.
 */
export default function SmartImage({
  src,
  alt,
  fallbackLabel,
  className,
  fill,
  sizes,
  priority,
  ...rest
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-sand-light via-beige to-sage-light/50 ${
          className ?? ''
        }`}
      >
        <span className="px-4 text-center font-serif text-sm italic text-brown/60">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
