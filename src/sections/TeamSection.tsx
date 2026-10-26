import { SectionLabel } from '../components/SectionLabel';

export function TeamSection() {
  return (
    <section className="team" id="equipo" aria-labelledby="team-title">
      <div className="team-heading" data-reveal>
        <SectionLabel>Somos Kanaro</SectionLabel>
        <h2 id="team-title"><em>Nos gusta conectar</em> lo que otros suelen separar.</h2>
      </div>
      <div className="team-body" data-reveal>
        <div className="team-copy">
          <p>La estrategia con el diseño.<br />El diseño con la tecnología.<br />La creatividad con lo que necesita funcionar.</p>
          <p>Somos Karla, Nathalie y Rodrigo.</p>
        </div>
        <div className="team-image-wrap">
          <img className="team-image" src="/assets/kanarostudio_team.webp" alt="Equipo de Kanaro" width="1392" height="1104" loading="lazy" decoding="async" />
        </div>
      </div>
      <p className="team-note" data-reveal>Y juntos somos Kanaro, un estudio boutique creativo en Lima donde estrategia, diseño y tecnología trabajan juntas para convertir ideas en experiencias y soluciones que funcionan.</p>
    </section>
  );
}
