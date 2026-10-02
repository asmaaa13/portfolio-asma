"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";

const ALL = "Tous";

export default function ProjectGrid({ projects, technologies = [] }) {
  const [filter, setFilter] = useState(ALL);

  const visibleProjects = useMemo(
    () => (filter === ALL ? projects : projects.filter((project) => project.stack.includes(filter))),
    [filter, projects]
  );

  return (
    <>
      {technologies.length > 0 && (
        <div className="filters" role="group" aria-label="Filtrer les projets par technologie">
          {[ALL, ...technologies].map((tech) => (
            <button
              key={tech}
              type="button"
              className={`filters__btn${filter === tech ? " is-active" : ""}`}
              aria-pressed={filter === tech}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      <p className="visually-hidden" aria-live="polite">
        {visibleProjects.length} projet(s) affiché(s)
      </p>

      <div className="row g-4">
        {visibleProjects.map((project) => (
          <div className="col-12 col-md-6 col-lg-4 fade-item" key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" />
          </div>
        ))}
      </div>
    </>
  );
}
