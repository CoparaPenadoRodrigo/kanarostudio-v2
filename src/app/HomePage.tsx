import { useEffect } from 'react';
import { ContactSection } from '../sections/ContactSection';
import { FrictionSection } from '../sections/FrictionSection';
import { HeroSection } from '../sections/HeroSection';
import { ImpactSection } from '../sections/ImpactSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { FaqSection } from '../sections/FaqSection';
import { ServicesSection } from '../sections/ServicesSection';
import { TeamSection } from '../sections/TeamSection';

export function HomePage() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    targets.forEach((target) => observer.observe(target));
    document.documentElement.classList.add('has-scroll-reveal');

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-scroll-reveal');
    };
  }, []);

  return (
    <main id="contenido">
      <HeroSection />
      <ImpactSection />
      <FrictionSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
