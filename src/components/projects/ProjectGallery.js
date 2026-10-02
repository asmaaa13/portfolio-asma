import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ProjectGallery({ project }) {
  if (!project.gallery?.length) return null;

  return (
    <section className="mt-5" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="h4 mb-4">
        Captures d&apos;écran
      </h2>
      <div className="row g-4">
        {project.gallery.map((src, index) => (
          <Reveal className="col-12 col-md-6" key={src} delay={index * 80}>
            <figure className="gallery-item">
              <Image
                src={src}
                alt={`${project.title}, capture ${index + 1}`}
                width={1200}
                height={750}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
