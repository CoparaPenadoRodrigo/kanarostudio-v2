import { SectionLink } from '../components/SectionLink';
import { footerNavigation, routes, socialLinks } from '../data/site';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <span>Somos Kanaro Studio</span>
          <h2>Háblanos de <em>tu proyecto</em></h2>
        </div>
        <div className="footer-column">
          <h3>Explorar</h3>
          {footerNavigation.map(({ label, to }) => <SectionLink key={label} to={to}>{label}</SectionLink>)}
        </div>
        <div className="footer-column">
          <h3>Contáctanos</h3>
          <a href="mailto:hola@kanarostudio.com">Correo</a>
          <a href="tel:+51999999999">Número contacto</a>
        </div>
        <form className="subscribe" action="mailto:hola@kanarostudio.com" method="post" encType="text/plain">
          <label htmlFor="email">Suscribir</label>
          <p>Recibe noticias sobre nuestros últimos proyectos y actualizaciones del estudio.</p>
          <div className="subscribe-field">
            <input id="email" name="correo" type="email" placeholder="Correo" required />
            <button type="submit" aria-label="Suscribirme"><img src="/assets/footer-arrow.svg" alt="" /></button>
          </div>
          <small>Al suscribirte aceptas nuestra política de privacidad y consientes recibir comunicaciones de Kanaro Studio.</small>
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Kanaro Studio. Todos los derechos reservados.</p>
        <SectionLink to={routes.contacto}>Privacidad</SectionLink>
        <SectionLink to={routes.contacto}>Términos de servicio</SectionLink>
        <SectionLink to={routes.contacto}>Configuración de cookies</SectionLink>
        <div className="social-links" aria-label="Redes sociales">
          {socialLinks.map(({ label, icon }) => (
            <SectionLink key={label} to={routes.contacto} aria-label={label}>
              <img src={`/assets/${icon}`} alt="" />
            </SectionLink>
          ))}
        </div>
      </div>
      <img className="footer-ring footer-ring-one" src="/assets/footer-ring-1.svg" alt="" />
      <img className="footer-ring footer-ring-two" src="/assets/footer-ring-2.svg" alt="" />
      <img className="footer-line" src="/assets/footer-line.svg" alt="" />
    </footer>
  );
}
