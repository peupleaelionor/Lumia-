import Link from 'next/link';
import SmartImage from './SmartImage';
import type { Experience } from '@/lib/offers';

/** Carte d'expérience avec image immersive, titre, description et CTA. */
export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <Link
      href={item.href}
      className="card-soft group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-soft-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={item.image}
          alt={item.title}
          fallbackLabel={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-brown-dark">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-light">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-dark">
          En savoir plus
          <span
            aria-hidden
            className="transition group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
