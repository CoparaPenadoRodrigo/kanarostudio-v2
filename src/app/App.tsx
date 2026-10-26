import { useEffect, useRef } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router';
import { routes } from '../data/site';
import { SiteLayout } from '../layout/SiteLayout';
import { HomePage } from './HomePage';

function SectionScroll() {
  const { pathname, hash } = useLocation();
  const hasMounted = useRef(false);

  useEffect(() => {
    if (pathname !== routes.inicio) return;
    const behavior = hasMounted.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'auto';
    hasMounted.current = true;
    const scrollToSection = () => {
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior });
      else window.scrollTo({ top: 0, behavior });
    };
    const frame = requestAnimationFrame(scrollToSection);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function RoutedHome() {
  return <SiteLayout><HomePage /></SiteLayout>;
}

function NotFound() {
  return (
    <SiteLayout>
      <main className="not-found" id="contenido">
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
      <SectionScroll />
      <Routes>
        <Route path={routes.inicio} element={<RoutedHome />} />
        <Route path="/inicio" element={<Navigate to={routes.inicio} replace />} />
        <Route path="/servicios" element={<Navigate to={routes.servicios} replace />} />
        <Route path="/equipo" element={<Navigate to={routes.equipo} replace />} />
        <Route path="/proyectos" element={<Navigate to={routes.proyectos} replace />} />
        <Route path="/preguntas-frecuentes" element={<Navigate to={routes.preguntasFrecuentes} replace />} />
        <Route path="/contacto" element={<Navigate to={routes.contacto} replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
