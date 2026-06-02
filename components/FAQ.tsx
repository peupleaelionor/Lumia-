import type { FaqItem } from '@/lib/faq';

/**
 * FAQ accessible en HTML natif (details/summary) — fonctionne sans JS,
 * navigable au clavier, et compatible avec le schema JSON-LD.
 */
export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="card-soft group overflow-hidden p-0"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-serif text-lg text-brown-dark marker:hidden">
            {item.question}
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brown/20 text-brown-light transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-brown-light">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
