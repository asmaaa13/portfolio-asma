import { projects } from "@/data/projects";

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

// Projet précédent / suivant, pour la navigation en bas de la page détail.
export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

// Liste unique des technologies, pour le filtre de la page Projets.
export function getAllTechnologies() {
  return [...new Set(projects.flatMap((project) => project.stack))].sort((a, b) =>
    a.localeCompare(b, "fr")
  );
}
