// Informations générales du site : modifie ce fichier pour personnaliser le portfolio.
export const site = {
  name: "Asma", // TODO : ajouter ton nom de famille
  role: "Développeuse Full Stack",
  shortBio:
    "Ingénieure en génie biologique reconvertie dans le développement web, je conçois des sites et des applications avec React, Next.js et Strapi, avec la rigueur d'une scientifique.",
  description:
    "Portfolio d'Asma, développeuse Full Stack junior : React, Next.js, Strapi, API REST, SEO. Découvrez mes projets web réalisés pour des clients réels.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "fr_FR",
  email: "contact@exemple.fr", // TODO : ton adresse email professionnelle
  location: "France", // TODO : ta ville
  availability: "Disponible pour un poste de développeuse Full Stack",
  cv: "/cv.pdf", // TODO : déposer ton CV dans public/cv.pdf
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ton-profil" }, // TODO
    { label: "GitLab", href: "https://gitlab.com/ton-profil" }, // TODO
  ],
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Projets", href: "/projets" },
    { label: "Contact", href: "/contact" },
  ],
};
