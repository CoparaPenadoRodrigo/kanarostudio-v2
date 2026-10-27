import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SectionLink } from '../components/SectionLink';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { navigation, routes } from '../data/site';

export function Header() {
  const { pathname, hash } = useLocation();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let wasScrolled = isScrolled;
    const updateScroll = () => {
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled === wasScrolled) return;
      wasScrolled = nextScrolled;
      setIsScrolled(nextScrolled);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}>
      <SectionLink className="brand" to={routes.inicio} aria-label="KanaroStudio, inicio" onClick={() => setIsMenuOpen(false)}>
        <img src="/kanarostudio_logo.webp" alt="KanaroStudio" width="231" height="56" />
      </SectionLink>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
      </button>
      <nav className="main-nav" id="main-navigation" aria-label="Navegación principal">
        {navigation.map(({ label, to }) => (
          <SectionLink key={to} to={to} aria-current={pathname === '/' && `/${hash}` === to ? 'location' : undefined} onClick={() => setIsMenuOpen(false)}>
            {label}
          </SectionLink>
        ))}
        <WhatsAppLink className="mobile-nav-contact" message="Hola, equipo Kanaro. Visité su web y me gustaría conversar sobre mi proyecto." onClick={() => setIsMenuOpen(false)}>
          Contáctanos
        </WhatsAppLink>
      </nav>
      <WhatsAppLink className="button button-small" message="Hola, equipo Kanaro. Visité su web y me gustaría conversar sobre mi proyecto.">
        Contáctanos <img src="/assets/arrow-right.svg" alt="" />
      </WhatsAppLink>
    </header>
  );
}
