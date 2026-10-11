import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/site';

export function ProjectsSection() {
  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-heading">
        <SectionLabel>Ideas que ya cobraron vida <img src="/assets/section-dot.svg" alt="" /></SectionLabel>
        <h2 id="projects-title">NUESTRO TRABAJO </h2>
        <p>Proyectos de branding, contenido, paginas webs, landings pages y y soluciones digitales  que hemos construido junto a nuestros clientes.</p>
      </div>
      <div className="project-grid">
        {projects.map(({ image, alt }) => <img src={`/assets/${image}`} alt={alt} key={image} />)}
      </div>
    </section>
  );
}
