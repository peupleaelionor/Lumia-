import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

const ROUTES = [
  '',
  '/anniversaires',
  '/ateliers',
  '/salle-sensorielle',
  '/ecoles-creches',
  '/boutique',
  '/reservation',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
