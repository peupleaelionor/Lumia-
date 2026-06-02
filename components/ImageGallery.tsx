import SmartImage from './SmartImage';

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Mettre en avant l'image sur 2 colonnes / 2 lignes. */
  featured?: boolean;
};

/**
 * Galerie immersive responsive avec captions premium.
 * Fonctionne même si certaines images sont absentes (fallback SmartImage).
 */
export default function ImageGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4">
      {items.map((item, i) => (
        <figure
          key={item.src + i}
          className={`group relative overflow-hidden rounded-3xl shadow-soft ${
            item.featured ? 'col-span-2 row-span-2' : ''
          }`}
        >
          <SmartImage
            src={item.src}
            alt={item.alt}
            fallbackLabel={item.caption}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/75 via-brown-dark/10 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4">
            <span className="font-serif text-sm text-ivory drop-shadow sm:text-base">
              {item.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
