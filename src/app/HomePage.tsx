import { ContactSection } from '../sections/ContactSection';
import { FrictionSection } from '../sections/FrictionSection';
import { HeroSection } from '../sections/HeroSection';
import { ImpactSection } from '../sections/ImpactSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { FaqSection } from '../sections/FaqSection';
import { ServicesSection } from '../sections/ServicesSection';
import { TeamSection } from '../sections/TeamSection';

export function HomePage() {
  return (
    <main>
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
