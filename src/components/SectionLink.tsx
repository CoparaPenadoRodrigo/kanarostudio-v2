import type { ComponentProps, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'to'> & {
  to: string;
};

export function SectionLink({ to, onClick, ...props }: SectionLinkProps) {
  const { pathname } = useLocation();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (pathname === to) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      if (to === '/') {
        window.scrollTo({ top: 0, behavior });
      } else {
        document.getElementById(to.slice(1))?.scrollIntoView({ behavior });
      }
    }
  }

  return <Link {...props} to={to} onClick={handleClick} />;
}
