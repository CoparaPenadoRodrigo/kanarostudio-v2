import { WhatsAppLink } from '../components/WhatsAppLink';

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-decoration hero-decoration-top" style={{ backgroundImage: `url(${new URL('../../img/kanarostudio_hero_superior.webp', import.meta.url).href})` }} aria-hidden="true" />
      <div className="hero-decoration hero-decoration-bottom" style={{ backgroundImage: `url(${new URL('../../img/kanarostudio_hero_inferior.webp', import.meta.url).href})` }} aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow eyebrow-lilac">AGENCIA DE MARKETING · LIMA, PERÚ</p>
        <h1><img className="hero-title-mark" src="/assets/hero-title-mark.svg" alt="" aria-hidden="true" width="42" height="45" /><em>Damos vida</em> a marcas hechas para <span className="hero-growth">crecer</span><img className="hero-title-check" src={new URL('../../img/check_ascendente.webp', import.meta.url).href} alt="" aria-hidden="true" /></h1>
        <p className="hero-description">
          Estrategia, diseño y tecnología para transformar el valor de tu marca o negocio en experiencias y soluciones que conectan, funcionan y están hechas para crecer.
        </p>
        <div className="hero-actions">
          <WhatsAppLink className="button" message="Hola, equipo Kanaro. Quiero hacer crecer mi marca y conversar sobre estrategia, diseño o tecnología.">
            Hablemos de tu proyecto <img src="/assets/arrow-right.svg" alt="" />
          </WhatsAppLink>
        </div>
      </div>
      <div className="hero-highlights">
        <span className="hero-highlight">Branding &amp; Identidad</span>
        <span className="hero-highlight">Web &amp; Landing</span>
        <span className="hero-highlight">Social Media</span>
        <span className="hero-highlight">Sistemas &amp; Automatización</span>
      </div>
    </section>
  );
}
