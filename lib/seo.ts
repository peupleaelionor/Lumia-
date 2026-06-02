/**
 * Helpers SEO : metadata par page + données structurées JSON-LD.
 * SEO local orienté Ambarès / Bassens / rive droite bordelaise.
 */

import type { Metadata } from 'next';
import { SITE, CONTACT, SOCIAL, AREA_SERVED, IMAGES } from './constants';

/** Mots-clés locaux ciblés. */
export const LOCAL_KEYWORDS = [
  'salle immersive enfants Ambarès',
  'anniversaire enfant Ambarès',
  'anniversaire enfant Bassens',
  'atelier parent enfant Bordeaux rive droite',
  'salle sensorielle enfants Bordeaux',
  'activité enfant Ambarès',
  'activité enfant Bassens',
  'activité famille Bordeaux rive droite',
  'espace enfant sensoriel Gironde',
  'crèche MAM atelier sensoriel Bordeaux',
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

/** Construit un objet Metadata Next.js cohérent pour une page. */
export function buildMetadata({
  title,
  description,
  path,
  image = IMAGES.ogImage,
  keywords = [],
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === '/' ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...LOCAL_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/**
 * JSON-LD LocalBusiness — SANS adresse tant que le local n'est pas signé.
 * `areaServed` couvre la rive droite bordelaise.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: SITE.baseline,
    url: SITE.url,
    image: `${SITE.url}${IMAGES.ogImage}`,
    email: CONTACT.email || undefined,
    telephone: CONTACT.phone || undefined,
    areaServed: AREA_SERVED.map((name) => ({ '@type': 'City', name })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ambarès-et-Lagrave',
      addressRegion: 'Gironde',
      addressCountry: 'FR',
    },
    sameAs: [SOCIAL.instagram, SOCIAL.youtube],
    knowsAbout: [
      'espace immersif enfants',
      'salle sensorielle',
      'ateliers parent-enfant',
      'anniversaires enfants',
    ],
  };
}

/** JSON-LD FAQPage à partir d'une liste de questions/réponses. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
