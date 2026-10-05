import { SectionLabel } from '../components/SectionLabel';
import { SectionLink } from '../components/SectionLink';
import { routes, services } from '../data/site';

export function ServicesSection() {
  return (
    <section className="services" id="servicios" aria-labelledby="services-title">
      <div className="section-topline">
        <div>
          <SectionLabel>Qué hacemos</SectionLabel>
          <h2 id="services-title">Así es como podemos ayudarte.</h2>
        </div>
        <p className="section-summary">Las piezas que hacen que una idea cobre vida.</p>
      </div>
      <div className="service-grid">
        {services.map(({ title, icon, description, featured }) => (
          <article className={`service-card${featured ? ' service-featured' : ''}`} key={title}>
            <span className="service-icon"><img src={`/assets/${icon}`} alt="" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <SectionLink to={routes.contacto}>Hablemos <img src="/assets/arrow-small.svg" alt="" /></SectionLink>
          </article>
        ))}
      </div>
      <div className="services-closer">
        <p>Cuéntanos qué quieres construir.<br />Te ayudamos a encontrar <strong>la mejor forma de hacerlo realidad.</strong></p>
        <SectionLink className="button" to={routes.contacto}>Quiero contarles mi proyecto <img src="/assets/arrow-right.svg" alt="" /></SectionLink>
      </div>
    </section>
  );
}
