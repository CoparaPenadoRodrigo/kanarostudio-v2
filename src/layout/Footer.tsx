import { SectionLink } from '../components/SectionLink';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { footerNavigation, routes, socialLinks } from '../data/site';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <span>SOMOS KANARO</span>
          <h2>Trabajemos<br /><em>juntos</em></h2>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          {[
            'Branding',
            'Social Media y contenido',
            'Flujo de infoproducto',
            'Web · Landing · E-commerce',
            'Sistemas y automatizaciones',
          ].map((label) => <SectionLink key={label} to={routes.servicios}>{label}</SectionLink>)}
        </div>
        <div className="footer-column">
          <h3>Explorar</h3>
          {footerNavigation.map(({ label, to }) => <SectionLink key={label} to={to}>{label}</SectionLink>)}
        </div>
        <div className="footer-column">
          <h3>Hablemos</h3>
          <a href="mailto:contacto@kanarostudio.com">contacto@kanarostudio.com</a>
          <WhatsAppLink message="Hola, equipo Kanaro. Vi su número en la web y quisiera hacer una consulta.">+51 957 076 122</WhatsAppLink>
          <span>Lima Perú</span>
        </div>
        <div className="footer-idea-card">
          <h3>¿Tienes algo en mente?</h3>
          <p>Cuéntanos qué quieres construir y encontraremos la mejor forma de hacerlo realidad.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 KanaroStudio. Todos los derechos reservados.</p>
        <SectionLink to={routes.contacto}>Privacidad</SectionLink>
        <SectionLink to={routes.contacto}>Términos de servicio</SectionLink>
        <SectionLink to={routes.contacto}>Configuración de cookies</SectionLink>
        <div className="social-links" aria-label="Redes sociales">
          {socialLinks.map(({ label, icon, href }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}>
              <img src={`/assets/${icon}`} alt="" />
            </a>
          ))}
        </div>
      </div>
      <img className="footer-ring footer-ring-one" src="/assets/footer-ring-1.svg" alt="" />
      <img className="footer-ring footer-ring-two" src="/assets/footer-ring-2.svg" alt="" />
      <img className="footer-line" src="/assets/footer-line.svg" alt="" />
    </footer>
  );
}
