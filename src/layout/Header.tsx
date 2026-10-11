import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SectionLink } from '../components/SectionLink';
import { navigation, routes } from '../data/site';

export function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 12);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <SectionLink className="brand" to={routes.inicio} aria-label="Kanaro Studio, inicio">
        <img src="/kanarostudio_logo.webp" alt="Kanaro Studio" />
      </SectionLink>
      <nav className="main-nav" aria-label="Navegación principal">
        {navigation.map(({ label, to }) => (
          <SectionLink key={to} to={to} aria-current={pathname === to ? 'page' : undefined}>
            {label}
          </SectionLink>
        ))}
      </nav>
      <SectionLink className="button button-small" to={routes.contacto}>
        Contáctanos <img src="/assets/arrow-right.svg" alt="" />
      </SectionLink>
    </header>
  );
}
