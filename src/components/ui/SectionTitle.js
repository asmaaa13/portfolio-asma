export default function SectionTitle({ eyebrow, title, intro, as: Heading = "h2", center = false }) {
  return (
    <div className={`section-title${center ? " section-title--center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="section-title__heading">{title}</Heading>
      {intro && <p className="section-title__intro">{intro}</p>}
    </div>
  );
}
