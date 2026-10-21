import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { SectionLink } from '../components/SectionLink';
import { routes, services } from '../data/site';

const cloneCount = 4;
const carouselItems = [
  ...services.slice(-cloneCount),
  ...services,
  ...services.slice(0, cloneCount),
].map((service, position) => ({
  service,
  index: (position - cloneCount + services.length) % services.length,
  isClone: position < cloneCount || position >= cloneCount + services.length,
}));

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scrollToCard(position: number, behavior: ScrollBehavior = 'smooth') {
    const track = trackRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    const card = track?.children[position] as HTMLElement | undefined;
    if (track && firstCard && card) {
      track.scrollTo({ left: card.offsetLeft - firstCard.offsetLeft, behavior });
    }
  }

  function updateActive(index: number) {
    activeIndexRef.current = index;
    setActiveIndex(index);
  }

  useLayoutEffect(() => {
    scrollToCard(cloneCount, 'auto');
  }, []);

  useEffect(() => {
    const handleResize = () => scrollToCard(cloneCount + activeIndexRef.current, 'auto');
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  function selectService(index: number) {
    const nextIndex = (index + services.length) % services.length;
    let position = cloneCount + nextIndex;
    if (activeIndex === services.length - 1 && nextIndex === 0) position = cloneCount + services.length;
    if (activeIndex === 0 && nextIndex === services.length - 1) position = cloneCount - 1;
    updateActive(nextIndex);
    scrollToCard(position);
  }

  function syncSelectedService() {
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const cards = Array.from(track.children) as HTMLElement[];
      const firstOffset = cards[0].offsetLeft;
      const position = cards.reduce((closest, card, index) => (
        Math.abs(card.offsetLeft - firstOffset - track.scrollLeft) <
        Math.abs(cards[closest].offsetLeft - firstOffset - track.scrollLeft) ? index : closest
      ), 0);
      const index = (position - cloneCount + services.length) % services.length;
      updateActive(index);
      if (position < cloneCount || position >= cloneCount + services.length) {
        scrollToCard(cloneCount + index, 'auto');
      }
    }, 120);
  }

  return (
    <section className="services" id="servicios" aria-labelledby="services-title">
      <div className="section-topline">
        <div>
          <SectionLabel>Qué hacemos</SectionLabel>
          <h2 id="services-title">Así es como podemos ayudarte.</h2>
          <p>Estos son los servicios que hacen que una idea cobre vida.</p>
        </div>
        <p className="section-summary">Las piezas que hacen que una idea cobre vida.</p>
      </div>
      <div className="service-carousel" role="region" aria-roledescription="carrusel" aria-label="Nuestros servicios">
        <div className="service-grid" ref={trackRef} onScroll={syncSelectedService}>
          {carouselItems.map(({ service: { title, icon, description, cta }, index, isClone }, position) => (
            <article
              className={`service-card${index === activeIndex ? ' is-active' : ''}`}
              key={`${title}-${position}`}
              aria-hidden={isClone ? true : undefined}
              onClick={() => {
                updateActive(index);
                scrollToCard(position);
              }}
              onFocusCapture={() => updateActive(index)}
            >
              <span className="service-icon"><img src={`/assets/${icon}`} alt="" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <SectionLink to={routes.contacto} tabIndex={isClone ? -1 : undefined}>{cta} <img src="/assets/arrow-small.svg" alt="" /></SectionLink>
            </article>
          ))}
        </div>
        <div className="service-carousel-controls">
          <button type="button" className="carousel-arrow" onClick={() => selectService(activeIndex - 1)} aria-label="Servicio anterior">←</button>
          <div className="carousel-dots" aria-label="Elegir servicio">
            {services.map(({ title }, index) => (
              <button
                key={title}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                aria-label={`Mostrar ${title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => selectService(index)}
              />
            ))}
          </div>
          <button type="button" className="carousel-arrow" onClick={() => selectService(activeIndex + 1)} aria-label="Servicio siguiente">→</button>
        </div>
      </div>
      <div className="services-closer">
        <p>Cuéntanos qué quieres construir.<br />Te ayudamos a encontrar <strong>la mejor forma de hacerlo realidad.</strong></p>
        <SectionLink className="button" to={routes.contacto}>Quiero contarles mi proyecto <img src="/assets/arrow-right.svg" alt="" /></SectionLink>
      </div>
    </section>
  );
}
