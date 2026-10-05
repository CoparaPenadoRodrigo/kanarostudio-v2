import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router';
import { routes } from '../data/site';
import { SiteLayout } from '../layout/SiteLayout';
import { HomePage } from './HomePage';

function RoutedHome() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (pathname === routes.inicio) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        document.getElementById(pathname.slice(1))?.scrollIntoView({ behavior: 'auto' });
      }
    };
    const frame = requestAnimationFrame(scrollToSection);
    window.addEventListener('load', scrollToSection, { once: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', scrollToSection);
    };
  }, [pathname]);

  return <SiteLayout><HomePage /></SiteLayout>;
}

function NotFound() {
  return (
    <SiteLayout>
      <main className="not-found">
        <h1>Página no encontrada</h1>
        <p>La dirección que buscas no existe.</p>
        <Link className="button" to={routes.inicio}>Volver al inicio</Link>
      </main>
    </SiteLayout>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.inicio} element={<RoutedHome />} />
        <Route path="/inicio" element={<Navigate to={routes.inicio} replace />} />
        <Route path={routes.servicios} element={<RoutedHome />} />
        <Route path={routes.equipo} element={<RoutedHome />} />
        <Route path={routes.proyectos} element={<RoutedHome />} />
        <Route path={routes.contacto} element={<RoutedHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
