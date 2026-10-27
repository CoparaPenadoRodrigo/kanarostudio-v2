import type { ComponentProps } from 'react';

type WhatsAppLinkProps = Omit<ComponentProps<'a'>, 'href' | 'target' | 'rel'> & {
  message: string;
};

export function WhatsAppLink({ message, ...props }: WhatsAppLinkProps) {
  const href = `https://wa.me/51957076122?text=${encodeURIComponent(message)}`;

  return <a {...props} href={href} target="_blank" rel="noopener noreferrer" />;
}
