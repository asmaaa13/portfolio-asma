# Portfolio · Développeuse Full Stack

Next.js 14 (App Router) · React · Bootstrap 5 · SCSS · SEO.

## Lancer le projet

> Next.js 14 demande Node.js 18.17 ou plus.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # serveur de production
```

## Personnaliser le contenu

| Fichier | Contenu |
|---|---|
| `src/data/site.js` | nom, email, réseaux sociaux, CV |
| `src/data/projects.js` | les 5 projets (remplacer les textes entre crochets) |
| `src/data/skills.js` | compétences |
| `src/data/timeline.js` | parcours et atouts (page À propos) |
| `public/cv.pdf` | ton CV |
| `public/images/projects/` | captures d'écran (renseigner `cover` et `gallery` dans `projects.js`) |

## Variables d'environnement

Copier `.env.example` en `.env.local` :

- `NEXT_PUBLIC_SITE_URL` : URL publique (sitemap, Open Graph, URL canoniques)
- `NEXT_PUBLIC_FORMSPREE_ID` : formulaire de contact via Formspree (sinon ouverture de la messagerie)

## Structure

```
src/
├── app/          routes (pages, sitemap, robots, image Open Graph)
├── components/   layout, sections, projects, contact, ui
├── data/         contenu du site
├── hooks/        useInView (animations au scroll)
├── lib/          fonctions utilitaires (projets, SEO)
└── styles/       SCSS : variables Bootstrap, mixins, animations, styles par zone
```
