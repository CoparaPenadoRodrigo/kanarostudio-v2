import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { Footer } from './Footer';
import { Header } from './Header';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.14,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /></>;
}
