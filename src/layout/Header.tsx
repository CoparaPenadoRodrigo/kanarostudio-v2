import { SectionLink } from '../components/SectionLink';
import { navigation, routes } from '../data/site';

export function Header() {
  return (
    <header className="site-header">
      <SectionLink className="brand" to={routes.inicio} aria-label="Kanaro Studio, inicio">
        <img src="/kanarostudio_logo.webp" alt="Kanaro Studio" />
      </SectionLink>
      <nav className="main-nav" aria-label="Navegación principal">
        {navigation.map(({ label, to }) => <SectionLink key={to} to={to}>{label}</SectionLink>)}
      </nav>
      <SectionLink className="button button-small" to={routes.contacto}>
        Contáctanos <img src="/assets/arrow-right.svg" alt="" />
      </SectionLink>
    </header>
  );
}
