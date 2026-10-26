export function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-banner" data-reveal>
        <div className="contact-banner-copy">
          <h2>Si llegaste hasta aquí,<br />probablemente <strong>tienes algo que contarnos.</strong></h2>
          <p>Nos encantará poner nuestras tres piezas en juego.</p>
        </div>
        <a className="button button-light" href="mailto:contacto@kanarostudio.com">Agendemos una reunión</a>
        <img className="contact-texture" src="/assets/impact-section.png" alt="" />
      </div>
    </section>
  );
}
