import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
};

/** Titre de section réutilisable avec eyebrow et description optionnels. */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  as: Heading = 'h2',
}: SectionTitleProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span aria-hidden className="h-px w-6 bg-terracotta-dark/60" />
          {eyebrow}
        </span>
      )}
      <Heading className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-brown-light sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
