import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/projects/ProjectCover";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ContactCTA from "@/components/sections/ContactCTA";
import Reveal from "@/components/ui/Reveal";
import TechBadge from "@/components/ui/TechBadge";
import { getAdjacentProjects, getAllProjects, getProjectBySlug } from "@/lib/projects";
import { buildMetadata, projectJsonLd } from "@/lib/seo";

// Génère une page HTML statique par projet au moment du build.
export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

// Toute URL qui ne correspond pas à un projet renvoie une 404.
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} : ${project.category}`,
    description: project.summary,
    path: `/projets/${project.slug}`,
  });
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <article>
        <header className="page-header page-header--project">
          <div className="container">
            <nav aria-label="Fil d'Ariane" className="animate-in">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Accueil</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/projets">Projets</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>
            <p className="eyebrow animate-in" style={{ "--delay": "60ms" }}>
              {project.category} · {project.year}
            </p>
            <h1 className="page-header__title animate-in" style={{ "--delay": "120ms" }}>
              {project.title}
            </h1>
            <p className="page-header__lead animate-in" style={{ "--delay": "180ms" }}>
              {project.summary}
            </p>
            <div className="d-flex flex-wrap gap-2 animate-in" style={{ "--delay": "240ms" }}>
              {project.liveUrl && (
                <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Voir le site en ligne
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  Voir le code
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="container">
          <Reveal className="project-hero-cover">
            <ProjectCover project={project} priority sizes="(min-width: 1200px) 1140px, 100vw" />
          </Reveal>

          <div className="row g-5 section pt-5">
            <div className="col-12 col-lg-8">
              <Reveal as="section" className="project-block">
                <h2>Contexte</h2>
                <p>{project.description}</p>
              </Reveal>

              <Reveal as="section" className="project-block">
                <h2>Mon rôle</h2>
                <p>{project.role}</p>
              </Reveal>

              {project.features?.length > 0 && (
                <Reveal as="section" className="project-block">
                  <h2>Fonctionnalités clés</h2>
                  <ul className="check-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {project.challenges && (
                <Reveal as="section" className="project-block">
                  <h2>Difficulté et solution</h2>
                  <p>{project.challenges}</p>
                </Reveal>
              )}

              {project.results && (
                <Reveal as="section" className="project-block">
                  <h2>Résultat</h2>
                  <p>{project.results}</p>
                </Reveal>
              )}

              <ProjectGallery project={project} />
            </div>

            <aside className="col-12 col-lg-4">
              <div className="project-aside">
                <dl>
                  <dt>Client</dt>
                  <dd>{project.client}</dd>
                  <dt>Type</dt>
                  <dd>{project.category}</dd>
                  <dt>Année</dt>
                  <dd>{project.year}</dd>
                  <dt>Technologies</dt>
                  <dd className="d-flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </dd>
                </dl>
              </div>
            </aside>
          </div>

          <nav className="project-nav" aria-label="Autres projets">
            {previous ? (
              <Link href={`/projets/${previous.slug}`} className="project-nav__link">
                <span>← Projet précédent</span>
                <strong>{previous.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/projets/${next.slug}`} className="project-nav__link project-nav__link--next">
                <span>Projet suivant →</span>
                <strong>{next.title}</strong>
              </Link>
            )}
          </nav>
        </div>
      </article>

      <ContactCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
    </>
  );
}
