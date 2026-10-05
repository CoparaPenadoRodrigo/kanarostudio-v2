import { clients, steps } from '../data/site';

export function ImpactSection() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="client-list">
        <p className="overline">Marcas que confiaron en nosotros</p>
        <div className="client-logos" aria-label="Google, Slack, Airbnb, Shopify, Dropbox y Webflow">
          {clients.map((client) => <span key={client}><img src="/assets/globe.svg" alt="" />{client}</span>)}
        </div>
      </div>

      <div className="impact-grid">
        <div className="impact-image" role="img" aria-label="Equipo de Kanaro trabajando en un proyecto">
          <div className="floating-note">
            <span>Somos Kanaro</span>
            <strong>Tu equipo completo</strong>
            <i><b /></i>
          </div>
        </div>
        <div className="impact-copy">
          <div className="section-heading section-heading-dark">
            <span className="kicker">Nuestro team</span>
            <h2 id="impact-title">3 Piezas<br />Una forma <em>de construir</em></h2>
          </div>
          <div className="steps">
            {steps.map(({ number, title, icon, tagline, description }) => (
              <article className="step-card" key={number}>
                <div className="step-title"><h3><b>{number}</b> — {title}</h3><img src={`/assets/${icon}`} alt="" /></div>
                <p className="step-tagline">{tagline}</p>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
