import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="section-label"><img src="/assets/section-dot.svg" alt="" /> {children}</p>;
}
