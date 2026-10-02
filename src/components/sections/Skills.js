import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle
          eyebrow="Compétences"
          title={<span id="skills-title">Ma boîte à outils</span>}
          intro="Les technologies que j'utilise au quotidien pour concevoir des sites rapides, maintenables et bien référencés."
          center
        />

        <div className="row g-4">
          {skills.map((group, index) => (
            <Reveal className="col-12 col-sm-6 col-lg-3" key={group.category} delay={index * 90}>
              <div className="skill-card h-100">
                <span className="skill-card__icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="skill-card__title">{group.category}</h3>
                <ul className="skill-card__list list-unstyled">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
