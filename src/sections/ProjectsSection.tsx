import { useEffect, useRef, useState } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/site';

export function ProjectsSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (activeProject && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [activeProject]);

  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-heading" data-reveal>
        <SectionLabel>Ideas que ya cobraron vida <img src="/assets/section-dot.svg" alt="" /></SectionLabel>
        <h2 id="projects-title">NUESTRO TRABAJO </h2>
        <p>Proyectos de branding, contenido, páginas web, landing pages y soluciones digitales que hemos construido junto a nuestros clientes.</p>
      </div>
      <div className="project-grid" data-reveal>
        {projects.map((project) => (
          <button
            className="project-card"
            type="button"
            key={project.id}
            aria-label={`Ampliar proyecto ${project.id}`}
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={project.alt} width="615" height="501" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      <dialog
        className="project-lightbox"
        ref={dialogRef}
        aria-label="Vista ampliada del proyecto"
        onClose={() => setActiveProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button className="project-lightbox-close" type="button" aria-label="Cerrar imagen ampliada" onClick={() => dialogRef.current?.close()}>
          ×
        </button>
        {activeProject && <img src={activeProject.image} alt={activeProject.alt} />}
      </dialog>
    </section>
  );
}
