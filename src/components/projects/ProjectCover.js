import Image from "next/image";

// Affiche la capture du projet, ou une vignette graphique tant qu'il n'y en a pas.
export default function ProjectCover({ project, priority = false, sizes = "(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" }) {
  if (project.cover) {
    return (
      <div className="project-cover">
        <Image
          src={project.cover}
          alt={`Aperçu du site ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="project-cover__img"
        />
      </div>
    );
  }

  return (
    <div
      className="project-cover project-cover--placeholder"
      style={{ "--project-color": project.color }}
      role="img"
      aria-label={`Visuel du projet ${project.title}`}
    >
      <span className="project-cover__window" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="project-cover__title" aria-hidden="true">
        {project.title}
      </span>
    </div>
  );
}
