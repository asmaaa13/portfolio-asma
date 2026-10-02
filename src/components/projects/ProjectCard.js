import Link from "next/link";
import ProjectCover from "@/components/projects/ProjectCover";
import TechBadge from "@/components/ui/TechBadge";

export default function ProjectCard({ project, headingLevel: Heading = "h3" }) {
  return (
    <article className="project-card h-100">
      <ProjectCover project={project} />
      <div className="project-card__body">
        <p className="project-card__meta">
          {project.category} · {project.year}
        </p>
        <Heading className="project-card__title">
          <Link href={`/projets/${project.slug}`} className="stretched-link">
            {project.title}
          </Link>
        </Heading>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__stack">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <span className="project-card__more" aria-hidden="true">
          Voir le projet →
        </span>
      </div>
    </article>
  );
}
