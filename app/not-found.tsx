import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-lumia flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="badge-soft">Page introuvable</span>
      <h1 className="mt-5 font-serif text-5xl text-brown-dark sm:text-6xl">404</h1>
      <p className="mt-4 max-w-md text-brown-light">
        Cette page n’existe pas encore — un peu comme le lieu, elle est en
        préparation. Revenons à l’essentiel.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Retour à l’accueil
        </Link>
        <Link href="/reservation" className="btn-secondary">
          Rejoindre la liste d’attente
        </Link>
      </div>
    </section>
  );
}
