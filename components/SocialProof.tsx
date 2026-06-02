import Link from 'next/link';
import { SOCIAL } from '@/lib/constants';

const channels = [
  {
    name: 'Instagram',
    handle: '@lumia',
    href: SOCIAL.instagram,
    cta: 'Suivre sur Instagram',
    description:
      'Coulisses, avant/après du local, mini-vidéos, anniversaires, ateliers et conseils parents.',
  },
  {
    name: 'YouTube',
    handle: '@lumia',
    href: SOCIAL.youtube,
    cta: 'Découvrir la chaîne',
    description:
      'Formats courts, présentation du projet, coulisses de création, visites du lieu et témoignages.',
  },
];

/**
 * Section « Présence en ligne » qui relie le site, Instagram, YouTube
 * et la future fiche Google Business. CTA sociaux élégants.
 */
export default function SocialProof() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {channels.map((channel) => (
        <div
          key={channel.name}
          className="card-soft flex flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-serif text-xl text-brown-dark">
              {channel.name}{' '}
              <span className="text-sm font-normal text-terracotta-dark">
                {channel.handle}
              </span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-brown-light">
              {channel.description}
            </p>
          </div>
          <a
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0 whitespace-nowrap"
          >
            {channel.cta}
          </a>
        </div>
      ))}

      <div className="md:col-span-2">
        <div className="rounded-4xl border border-dashed border-brown/20 bg-sand-light/40 px-7 py-5 text-center text-sm text-brown-light">
          Bientôt&nbsp;: retrouvez aussi LUMIA sur{' '}
          <span className="font-semibold text-brown">Google</span> (avis,
          photos, horaires et itinéraire) dès l’ouverture du lieu.{' '}
          <Link href="/contact" className="font-semibold text-terracotta-dark underline-offset-2 hover:underline">
            Être prévenu·e
          </Link>
        </div>
      </div>
    </div>
  );
}
