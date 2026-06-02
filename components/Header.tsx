'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brown/10 bg-cream/90 backdrop-blur-md shadow-soft'
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
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-terracotta-dark">
            {SITE.tagline}
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown transition hover:text-terracotta-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reservation" className="btn-primary px-5 py-2.5 text-sm">
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
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-brown/15 bg-ivory/70 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-brown-dark transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 top-20 z-40 origin-top bg-cream/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open
            ? 'visible opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="container-lumia flex flex-col gap-1 py-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-brown/10 py-4 font-serif text-xl text-brown-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Rejoindre la liste d’attente
          </Link>
        </nav>
      </div>
    </header>
  );
}
