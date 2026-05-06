# 👶 Bébé au Naturel Guide

**Le guide expert pour les jeunes parents - DME, sommeil, portage & bien plus**

Site d'affiliation Amazon construit avec [Astro](https://astro.build/) — déployé sur Cloudflare Pages.

## Contenu

- **105** fiches produits testés
- **43** articles de blog
- Tag affiliation : `materielgamer-21`

## Stack technique

- **Framework** : Astro 5 (SSG — Static Site Generation)
- **Hébergement** : Cloudflare Pages
- **Sitemap** : @astrojs/sitemap (auto-généré)
- **SEO** : JSON-LD (Product, Article, BreadcrumbList), meta OG/Twitter, canonical
- **Design** : Dark theme responsive, mobile-first

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le dev server
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## Déploiement Cloudflare Pages

1. Connecter le repo GitHub à Cloudflare Pages
2. Configuration :
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Node.js version** : 18+
3. Ajouter le domaine personnalisé : `bebe-au-naturel-guide.fr`

Le fichier `public/_headers` configure automatiquement le cache et les headers de sécurité.

## Structure du projet

```
src/
  layouts/          → BaseLayout, ProductLayout, BlogLayout
  components/       → ProductCard, BlogCard, AmazonButton, Rating, Badge, FAQ...
  pages/
    index.astro     → Homepage
    produits/       → Listing + fiches dynamiques [slug]
    blog/           → Listing + articles dynamiques [slug]
    categories/     → Pages catégories dynamiques [slug]
    a-propos.astro
    mentions-legales.astro
  content/
    products/       → 105 JSON (données produits)
    blog/           → 43 Markdown (articles)
  data/
    categories.json → Catégories du site
  styles/
    global.css      → Styles de base
    theme.css       → Thème couleurs spécifique
public/
  robots.txt
  _headers          → Cache Cloudflare
  favicon.svg
```

## Affiliation Amazon

- Tous les liens Amazon incluent le tag `materielgamer-21`
- Disclosure affilié en footer et sur chaque fiche produit
- Boutons CTA "Voir sur Amazon" stylisés
- Liens `rel="nofollow noopener sponsored"`

## Licence

Contenu propriétaire — tous droits réservés.
