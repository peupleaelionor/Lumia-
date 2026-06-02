# LUMIA — Maison immersive & sensorielle

Vitrine premium, tunnel de pré-réservation et base e-commerce future pour
**LUMIA**, futur lieu immersif et sensoriel pour enfants et familles à
**Ambarès / Bassens** (rive droite bordelaise).

> _« Un lieu doux et magique pour jouer, explorer, créer, célébrer et se calmer en famille. »_

---

## ✨ Ce que contient le site

- **Page d’accueil** complète (hero, vision, expériences, offres, anniversaires, ateliers, boutique, pré-lancement, présence en ligne, local, FAQ).
- **Pages dédiées** : Anniversaires, Ateliers, Salle sensorielle, Écoles & crèches, Boutique, Réservation, Contact, Mentions légales, Politique de confidentialité.
- **Galerie immersive** avec fallback automatique si une image manque.
- **Formulaires de pré-réservation / contact** côté front (prêts à brancher).
- **SEO local** : metadata par page, données structurées `LocalBusiness` + `FAQPage`, `sitemap.xml`, `robots.txt`.
- **Future boutique** en prévisualisation (sans encaissement).

---

## 🧱 Stack technique

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- `next/font` (Fraunces + Inter), `next/image`
- Aucune dépendance lourde — code propre, réutilisable, prêt à évoluer.

---

## 🚀 Installation & commandes

```bash
# 1. Installer les dépendances
npm install        # ou : pnpm install

# 2. Lancer le serveur de développement
npm run dev        # http://localhost:3000

# 3. Build de production
npm run build

# 4. Démarrer le build
npm start

# 5. Linter
npm run lint
```

> Le projet fonctionne **immédiatement**, même sans images ni backend.

---

## 🖼️ Où placer les images

Déposez les visuels dans **`public/images/lumia/`** en respectant les noms
attendus (voir `public/images/lumia/README.md`).

| Fichier | Usage |
| --- | --- |
| `hero-main.webp` | Hero d’accueil |
| `facade.webp` | Façade / Contact |
| `reception.webp` | Accueil / Réservation |
| `main-room.webp` | Grande salle immersive |
| `sensory-room.webp` | Salle sensorielle |
| `birthday.webp` | Anniversaires |
| `workshop.webp` | Ateliers |
| `baby-cocon.webp` | Baby Cocon |
| `diverse-families.webp` | Familles / Écoles-crèches |
| `wow-room.webp` | Pièce « wow » |
| `storefront-family.webp` | Boutique |

Tant qu’un fichier est absent, un **fallback doux** (dégradé + légende)
s’affiche — jamais d’image cassée. Pour changer un chemin ou un nom, éditez
la map `IMAGES` dans **`lib/constants.ts`**.

---

## ✏️ Comment changer les textes

Tout le contenu éditorial vit dans **`/lib`** :

| Fichier | Contenu |
| --- | --- |
| `lib/constants.ts` | Nom, baseline, contact, réseaux, navigation, zones desservies, chemins d’images |
| `lib/offers.ts` | Expériences, offres, formules d’anniversaire, ateliers, offres pro |
| `lib/products.ts` | Catalogue de la boutique |
| `lib/faq.ts` | Questions / réponses |
| `lib/seo.ts` | Mots-clés locaux, metadata, JSON-LD |

Modifier une valeur ici met à jour automatiquement tout le site. Les pages
(`/app/**`) ne contiennent que la mise en page.

---

## 🔌 Connecter Supabase / Resend / Stripe plus tard

Les formulaires sont centralisés dans **`components/ReservationForm.tsx`**.
La fonction `handleSubmit` contient un bloc `TODO` clair et une **simulation**
en attendant le backend.

### Étapes recommandées

1. **Variables d’environnement** : copier `.env.example` en `.env.local` et
   renseigner les clés (Resend, Supabase, Stripe, Calendly).
2. **Route API** : créer `app/api/contact/route.ts` qui reçoit le `payload`
   et l’envoie vers le service choisi.
3. **Brancher le front** : dans `handleSubmit`, remplacer la simulation par :

   ```ts
   await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(payload),
   });
   ```

### Pistes par service

- **Resend** → e-mail de notification à chaque demande.
- **Supabase / Airtable / Notion / Google Sheets** → stockage des prospects (CRM).
- **Calendly** → réservation de créneaux (redirection ou embed).
- **Stripe** → acompte anniversaire, carte cadeau, abonnement famille, boutique en ligne.

L’architecture est prête : aucun faux paiement n’est implémenté.

---

## ✅ Checklist avant mise en ligne

- [ ] Déposer toutes les images dans `public/images/lumia/`.
- [ ] Renseigner `NEXT_PUBLIC_SITE_URL` (domaine définitif).
- [ ] Mettre à jour l’e-mail et le téléphone dans `lib/constants.ts` (`CONTACT`).
- [ ] Remplacer les liens Instagram / YouTube placeholders (`SOCIAL`).
- [ ] Brancher le formulaire (Resend / Supabase…) et tester un envoi réel.
- [ ] Compléter les **Mentions légales** (statut, immatriculation, hébergeur).
- [ ] Vérifier la **Politique de confidentialité** (RGPD).
- [ ] Ajouter l’adresse réelle dans le JSON-LD une fois le local signé (`lib/seo.ts`).
- [ ] Créer la fiche **Google Business Profile** et l’ajouter aux réseaux.
- [ ] Lancer `npm run build` + `npm run lint` sans erreur.
- [ ] Vérifier le rendu **mobile** et l’accessibilité (contrastes, labels, alt).
- [ ] Soumettre `sitemap.xml` à la Search Console.

---

## ⚖️ Ton & cadre juridique

LUMIA est présenté comme **un lieu d’éveil, de jeu, de calme et d’expérience
sensorielle**. Le site n’emploie **aucune promesse médicale** : on parle de
« favoriser un moment calme », « explorer les sens », « créer du lien ». Une
mention rappelle que cela **ne remplace aucun accompagnement médical ou
thérapeutique**.

---

## 📁 Structure du projet

```
app/                  Pages (App Router) + sitemap, robots, layout
components/           Composants réutilisables (Hero, cartes, galerie, formulaire…)
lib/                  Données & contenu éditorial (constants, offers, products, faq, seo)
public/images/lumia/  Visuels du projet (+ fallback automatique)
```

---

Projet accompagné par **Kevin B.** — Agence **Mabele.tech**.
