import Reveal from "@/components/ui/Reveal";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <ol className="timeline list-unstyled">
      {timeline.map((step, index) => (
        <Reveal as="li" className="timeline__item" key={step.title} delay={index * 80}>
          <span className="timeline__dot" aria-hidden="true" />
          {step.period && <p className="timeline__period">{step.period}</p>}
          <h3 className="timeline__title">{step.title}</h3>
          <p className="timeline__text">{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
