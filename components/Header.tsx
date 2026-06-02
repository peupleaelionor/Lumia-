'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/constants';
import { mainNavigation, mobileNavigationCtas } from '@/lib/data/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    if (open) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Empêche le scroll du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-brown/10 bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-lumia flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-2xl font-semibold tracking-[0.18em] text-brown-dark">
            {SITE.name}
            <span className="ml-1.5 text-sm font-normal italic tracking-normal text-terracotta-dark">
              {SITE.byline}
            </span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-terracotta-dark">
            {SITE.tagline}
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 lg:flex"
        >
          {mainNavigation.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown transition hover:text-terracotta-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact?intent=waitlist" className="btn-primary px-5 py-2.5 text-sm">
            Liste d’attente
          </Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-brown/15 bg-ivory/90 shadow-soft transition hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-terracotta/35 lg:hidden"
        >
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-20 z-[70] overflow-y-auto bg-cream/98 px-5 pb-8 pt-5 shadow-soft-lg backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="mx-auto flex max-w-xl flex-col gap-3"
        >
          <div className="rounded-[2rem] border border-brown/10 bg-ivory/90 p-3 shadow-soft">
            {mainNavigation.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`group block rounded-[1.35rem] px-4 py-4 transition hover:bg-cream focus:bg-cream focus:outline-none focus:ring-2 focus:ring-terracotta/25 ${
                  index !== mainNavigation.length - 1 ? 'border-b border-brown/8' : ''
                }`}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-serif text-xl leading-none text-brown-dark transition group-hover:text-terracotta-dark">
                    {link.label}
                  </span>
                  <span aria-hidden className="text-lg text-terracotta-dark transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-brown/65">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-2 grid gap-3">
            {mobileNavigationCtas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                onClick={() => setOpen(false)}
                className={
                  cta.variant === 'primary'
                    ? 'btn-primary w-full justify-center py-4 text-center'
                    : 'rounded-full border border-brown/15 bg-ivory px-6 py-4 text-center font-semibold text-brown-dark shadow-soft transition hover:border-terracotta/35 hover:text-terracotta-dark focus:outline-none focus:ring-2 focus:ring-terracotta/25'
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>

          <p className="rounded-[1.5rem] bg-sand-light/70 px-5 py-4 text-center text-sm leading-relaxed text-brown/70">
            Un futur lieu doux pour les familles à Ambarès / Bassens.
          </p>
        </nav>
      </div>
    </header>
  );
}
