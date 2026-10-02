import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section" aria-labelledby="featured-title">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <SectionTitle
            eyebrow="Réalisations"
            title={<span id="featured-title">Projets sélectionnés</span>}
            intro="Des sites réalisés pour de vrais clients, de l'intégration à la mise en ligne."
          />
          <Link href="/projets" className="btn btn-outline-primary flex-shrink-0">
            Tous les projets
          </Link>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <Reveal className="col-12 col-md-6 col-lg-4" key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
