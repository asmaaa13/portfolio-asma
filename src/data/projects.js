// Données des projets.
// Les textes entre crochets [ ... ] sont à remplacer par les vraies informations
// de chaque projet avant la mise en ligne.
//
// Champs :
// - slug        : identifiant utilisé dans l'URL (/projets/<slug>)
// - featured    : true = affiché sur la page d'accueil
// - color       : couleur de la vignette quand il n'y a pas encore de capture
// - cover       : capture principale (ex. "/images/projects/bedb-cover.webp"), null sinon
// - gallery     : captures supplémentaires
// - liveUrl     : lien vers le site en ligne, null si non public
// - repoUrl     : lien vers le dépôt, null si privé

export const projects = [
  {
    slug: "bedb",
    title: "BEDB",
    client: "BEDB",
    category: "Site web",
    year: "[année]",
    featured: true,
    color: "#0f5c55",
    summary: "[Une phrase qui résume le projet BEDB et son objectif.]",
    description:
      "[Contexte : qui est le client, quel était son besoin, à qui s'adresse le site.]",
    role: "[Ce que tu as fait toi-même : intégration, composants, API, SEO…]",
    stack: ["Next.js", "React", "Strapi", "API REST", "Bootstrap"],
    features: ["[Fonctionnalité 1]", "[Fonctionnalité 2]", "[Fonctionnalité 3]"],
    challenges: "[Une difficulté rencontrée et la solution que tu as mise en place.]",
    results: "[Résultat concret : mise en ligne, performance, SEO, retour client…]",
    cover: null,
    gallery: [],
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "volpi-batiment",
    title: "Volpi Bâtiment",
    client: "Volpi Bâtiment",
    category: "Site vitrine",
    year: "[année]",
    featured: true,
    color: "#b5683f",
    summary: "[Une phrase qui résume le projet Volpi Bâtiment et son objectif.]",
    description:
      "[Contexte : qui est le client, quel était son besoin, à qui s'adresse le site.]",
    role: "[Ce que tu as fait toi-même : intégration, composants, API, SEO…]",
    stack: ["Next.js", "React", "Strapi", "SEO", "Bootstrap"],
    features: ["[Fonctionnalité 1]", "[Fonctionnalité 2]", "[Fonctionnalité 3]"],
    challenges: "[Une difficulté rencontrée et la solution que tu as mise en place.]",
    results: "[Résultat concret : mise en ligne, performance, SEO, retour client…]",
    cover: null,
    gallery: [],
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "ingenium",
    title: "Ingenium",
    client: "Ingenium",
    category: "Site web",
    year: "[année]",
    featured: true,
    color: "#3d4f8a",
    summary: "[Une phrase qui résume le projet Ingenium et son objectif.]",
    description:
      "[Contexte : qui est le client, quel était son besoin, à qui s'adresse le site.]",
    role: "[Ce que tu as fait toi-même : intégration, composants, API, SEO…]",
    stack: ["Next.js", "React", "API REST", "SCSS"],
    features: ["[Fonctionnalité 1]", "[Fonctionnalité 2]", "[Fonctionnalité 3]"],
    challenges: "[Une difficulté rencontrée et la solution que tu as mise en place.]",
    results: "[Résultat concret : mise en ligne, performance, SEO, retour client…]",
    cover: null,
    gallery: [],
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "lerda",
    title: "Lerda",
    client: "Lerda",
    category: "Site web",
    year: "[année]",
    featured: false,
    color: "#7a4e7e",
    summary: "[Une phrase qui résume le projet Lerda et son objectif.]",
    description:
      "[Contexte : qui est le client, quel était son besoin, à qui s'adresse le site.]",
    role: "[Ce que tu as fait toi-même : intégration, composants, API, SEO…]",
    stack: ["React", "JavaScript", "Bootstrap", "Git"],
    features: ["[Fonctionnalité 1]", "[Fonctionnalité 2]", "[Fonctionnalité 3]"],
    challenges: "[Une difficulté rencontrée et la solution que tu as mise en place.]",
    results: "[Résultat concret : mise en ligne, performance, SEO, retour client…]",
    cover: null,
    gallery: [],
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "probat",
    title: "Probat",
    client: "Probat",
    category: "Site web",
    year: "[année]",
    featured: false,
    color: "#4f6b3a",
    summary: "[Une phrase qui résume le projet Probat et son objectif.]",
    description:
      "[Contexte : qui est le client, quel était son besoin, à qui s'adresse le site.]",
    role: "[Ce que tu as fait toi-même : intégration, composants, API, SEO…]",
    stack: ["Next.js", "Strapi", "API REST", "GitLab"],
    features: ["[Fonctionnalité 1]", "[Fonctionnalité 2]", "[Fonctionnalité 3]"],
    challenges: "[Une difficulté rencontrée et la solution que tu as mise en place.]",
    results: "[Résultat concret : mise en ligne, performance, SEO, retour client…]",
    cover: null,
    gallery: [],
    liveUrl: null,
    repoUrl: null,
  },
];
