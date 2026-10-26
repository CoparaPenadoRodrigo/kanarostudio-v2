import { useEffect, useState } from 'react';
import { SectionLink } from '../components/SectionLink';
import { frictionPoints, routes } from '../data/site';

function TypedRecommendation({ text }: { text: string }) {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleLength(text.length);
      return;
    }

    const interval = window.setInterval(() => {
      setVisibleLength((length) => {
        if (length + 1 >= text.length) window.clearInterval(interval);
        return Math.min(length + 1, text.length);
      });
    }, 35);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <>
      <span className="friction-typed" aria-hidden="true">{text.slice(0, visibleLength)}</span>
      <span className="visually-hidden" role="status">{text}</span>
    </>
  );
}

export function FrictionSection() {
  const [selected, setSelected] = useState<number[]>([]);

  function togglePoint(index: number) {
    setSelected((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  }

  return (
    <section className="friction" aria-labelledby="friction-title">
      <div className="friction-inner" data-reveal>
        <img className="thinking-face" src="/assets/thinking-face.png" alt="" />
        <h2 id="friction-title">¿Te ha pasado que sientes que…</h2>
        <ul>
          {frictionPoints.map(({ problem, recommendation }, index) => {
            const isSelected = selected.includes(index);
            return (
              <li key={problem}>
                <label className={`friction-option${isSelected ? ' is-selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => togglePoint(index)}
                    aria-label={problem}
                  />
                  <span className="friction-option-text">
                    {isSelected ? <TypedRecommendation text={recommendation} /> : problem}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        <p className="friction-close">Si marcaste más de una…<br /><strong>es momento de hacer algo al respecto.</strong></p>
        <SectionLink className="button" to={routes.contacto}>
          Quiero dar el primer paso <img src="/assets/arrow-right-alt.svg" alt="" />
        </SectionLink>
      </div>
    </section>
  );
}
