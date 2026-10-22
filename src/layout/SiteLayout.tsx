import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /></>;
}
