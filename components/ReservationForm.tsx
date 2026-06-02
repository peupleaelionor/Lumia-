'use client';

import { useState, type FormEvent } from 'react';

export type InterestValue =
  | 'anniversaire'
  | 'atelier'
  | 'baby-cocon'
  | 'salle-sensorielle'
  | 'creche-mam-ecole'
  | 'boutique'
  | 'decouverte';

const INTERESTS: { value: InterestValue; label: string }[] = [
  { value: 'anniversaire', label: 'Anniversaire' },
  { value: 'atelier', label: 'Atelier' },
  { value: 'baby-cocon', label: 'Baby Cocon' },
  { value: 'salle-sensorielle', label: 'Salle sensorielle' },
  { value: 'creche-mam-ecole', label: 'Crèche / MAM / école' },
  { value: 'boutique', label: 'Boutique / carte cadeau' },
  { value: 'decouverte', label: 'Découverte du lieu' },
];

type ReservationFormProps = {
  /** Intérêt présélectionné selon la page. */
  defaultInterest?: InterestValue;
  /** Libellé du bouton d'envoi. */
  submitLabel?: string;
  /** Affiche le champ « structure » (utile pour le B2B). */
  showStructure?: boolean;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ReservationForm({
  defaultInterest = 'decouverte',
  submitLabel = 'Rejoindre les familles fondatrices',
  showStructure = false,
}: ReservationFormProps) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // ─────────────────────────────────────────────────────────────
      // TODO — Brancher l'envoi des données ici (au choix) :
      //   • Resend         → e-mail de notification (route /api/contact)
      //   • Supabase       → table `prospects`
      //   • Airtable       → base CRM
      //   • Notion         → base de données
      //   • Google Sheets  → via webhook / Apps Script
      //   • Calendly       → redirection vers la prise de RDV
      //   • Stripe         → acompte anniversaire / carte cadeau
      //
      // Exemple :
      //   await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(payload),
      //   });
      // ─────────────────────────────────────────────────────────────

      // Simulation tant que le backend n'est pas branché :
      console.info('[LUMIA] Demande reçue (simulation) :', payload);
      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      console.error('[LUMIA] Erreur formulaire :', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-soft p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-light/60 text-2xl text-sage-dark">
          ✦
        </div>
        <h3 className="mt-4 text-2xl text-brown-dark">Merci&nbsp;!</h3>
        <p className="mt-2 text-brown-light">
          Votre demande a bien été prise en compte. Les premières familles
          inscrites seront invitées aux tests, aux offres fondatrices et aux
          premiers créneaux.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-6"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-2xl border border-brown/15 bg-ivory px-4 py-3 text-sm text-brown-dark placeholder:text-brown/40 transition focus:border-terracotta focus:bg-white';
  const labelClass = 'mb-1.5 block text-sm font-medium text-brown-dark';

  return (
    <form onSubmit={handleSubmit} className="card-soft space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className={labelClass}>
            Prénom <span className="text-terracotta">*</span>
          </label>
          <input
            id="prenom"
            name="prenom"
            required
            autoComplete="given-name"
            className={inputClass}
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="text-terracotta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="vous@exemple.fr"
          />
        </div>
        <div>
          <label htmlFor="telephone" className={labelClass}>
            Téléphone <span className="text-brown/40">(facultatif)</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="06 ··· ·· ··"
          />
        </div>
        <div>
          <label htmlFor="ville" className={labelClass}>
            Ville
          </label>
          <input
            id="ville"
            name="ville"
            className={inputClass}
            placeholder="Ambarès, Bassens…"
          />
        </div>
      </div>

      {showStructure && (
        <div>
          <label htmlFor="structure" className={labelClass}>
            Nom de la structure
          </label>
          <input
            id="structure"
            name="structure"
            className={inputClass}
            placeholder="Crèche, MAM, école, association…"
          />
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age_enfants" className={labelClass}>
            Âge des enfants
          </label>
          <input
            id="age_enfants"
            name="age_enfants"
            className={inputClass}
            placeholder="ex : 2 ans et 5 ans"
          />
        </div>
        <div>
          <label htmlFor="interet" className={labelClass}>
            Votre intérêt
          </label>
          <select
            id="interet"
            name="interet"
            defaultValue={defaultInterest}
            className={`${inputClass} appearance-none`}
          >
            {INTERESTS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Dites-nous en quelques mots ce qui vous ferait plaisir…"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consentement"
          name="consentement"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-brown/30 text-terracotta focus:ring-terracotta"
        />
        <label htmlFor="consentement" className="text-xs leading-relaxed text-brown-light">
          J’accepte d’être recontacté·e au sujet du projet LUMIA. Mes
          informations restent confidentielles et ne sont jamais revendues.{' '}
          <span className="text-terracotta">*</span>
        </label>
      </div>

      {status === 'error' && (
        <p className="rounded-2xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta-dark">
          Une erreur est survenue. Merci de réessayer ou de nous écrire
          directement par e-mail.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Envoi en cours…' : submitLabel}
      </button>

      <p className="text-center text-xs text-brown/50">
        Les champs marqués d’un <span className="text-terracotta">*</span> sont
        obligatoires.
      </p>
    </form>
  );
}
