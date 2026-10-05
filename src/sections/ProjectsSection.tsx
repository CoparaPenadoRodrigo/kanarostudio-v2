import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/site';

export function ProjectsSection() {
  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-heading">
        <SectionLabel>El tuyo puede ser nuestro próximo proyecto <img src="/assets/section-dot.svg" alt="" /></SectionLabel>
        <h2 id="projects-title">Proyectos</h2>
      </div>
      <div className="project-grid">
        {projects.map(({ image, alt }) => <img src={`/assets/${image}`} alt={alt} key={image} />)}
      </div>
    </section>
  );
}
