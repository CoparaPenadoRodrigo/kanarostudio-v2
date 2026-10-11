import { SectionLabel } from '../components/SectionLabel';
import { team } from '../data/site';

const rings = [
  ['ring-outer.svg', 'ring-outer'],
  ['ring-inner.svg', 'ring-inner'],
  ['ring-2.svg', 'ring-two'],
  ['ring-3.svg', 'ring-three'],
  ['ring-4.svg', 'ring-four'],
  ['ring-5.svg', 'ring-five'],
  ['ring-6.svg', 'ring-six'],
  ['ring-7.svg', 'ring-seven'],
];

export function TeamSection() {
  return (
    <section className="team" id="equipo" aria-labelledby="team-title">
      <div className="team-copy">
        <SectionLabel>Somos Kanaro</SectionLabel>
        <h2 id="team-title"><em>Nos gusta conectar</em> lo que otros suelen separar.</h2>
        <p>La estrategia con el diseño.<br />El diseño con la tecnología.<br />La creatividad con lo que necesita funcionar.</p>
        <p>Somos Karla, Nathalie y Rodrigo.</p>
        <p className="team-note">Y juntos somos Kanaro, un estudio boutique creativo en Lima donde estrategia, diseño y tecnología trabajan juntas para convertir ideas en experiencias y soluciones que funcionan.</p>
      </div>
      <div className="team-orbit" aria-label="Karla, Nathalie y Rodrigo, el equipo de Kanaro">
        {rings.map(([image, className]) => <img className={`ring ${className}`} src={`/assets/${image}`} alt="" key={image} />)}
        {team.map(({ name, shortName, image, className, description }) => (
          <div className={`person ${className}`} key={name}>
            <img src={`/assets/${image}`} alt={name} />
            <strong>{shortName}</strong><span>{description}</span>
          </div>
        ))}
        <img className="team-spark team-spark-one" src="/assets/team-spark-1.svg" alt="" />
        <img className="team-spark team-spark-two" src="/assets/team-spark-2.svg" alt="" />
        <img className="team-doodle" src="/assets/team-doodle.svg" alt="" />
        <img className="team-mark" src="/assets/impact-section.png" alt="" />
      </div>
    </section>
  );
}
