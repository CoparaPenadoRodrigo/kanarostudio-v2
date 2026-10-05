import { SectionLink } from '../components/SectionLink';
import { routes } from '../data/site';

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow eyebrow-lilac">Estudio boutique creativo · Lima, Perú</p>
        <h1><em>Damos vida</em> a marcas hechas para crecer</h1>
        <p className="hero-description">
          Estrategia, diseño y tecnología para transformar el valor de tu marca en experiencias y soluciones que conectan, generan resultados y hacen crecer tu negocio.
        </p>
        <div className="hero-actions">
          <SectionLink className="button" to={routes.contacto}>
            Hablemos de tu proyecto <img src="/assets/arrow-right.svg" alt="" />
          </SectionLink>
          <SectionLink className="showreel" to={routes.proyectos}>
            <span className="play-button"><img src="/assets/play.svg" alt="" /></span>
            <span>Play Showreel</span>
          </SectionLink>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-orbit hero-orbit-three" />
        <span className="hero-spark hero-spark-one">✳</span>
        <span className="hero-spark hero-spark-two">✳</span>
      </div>
    </section>
  );
}
