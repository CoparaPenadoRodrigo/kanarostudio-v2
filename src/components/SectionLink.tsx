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
      if (to === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(to.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return <Link {...props} to={to} onClick={handleClick} />;
}
