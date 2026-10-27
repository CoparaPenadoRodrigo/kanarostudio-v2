import { WhatsAppLink } from '../components/WhatsAppLink';

export function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-banner" data-reveal>
        <div className="contact-banner-copy">
          <h2>Si llegaste hasta aquí,<br />probablemente <strong>tienes algo que contarnos.</strong></h2>
          <p>Nos encantará poner nuestras tres piezas en juego.</p>
        </div>
        <WhatsAppLink className="button button-light" message="Hola, equipo Kanaro. Me gustaría agendar una reunión para conversar sobre mi proyecto.">Agendemos una reunión</WhatsAppLink>
        <img className="contact-texture" src="/assets/impact-section.png" alt="" />
      </div>
    </section>
  );
}
