import { SectionLink } from '../components/SectionLink';
import { frictionPoints, routes } from '../data/site';

export function FrictionSection() {
  return (
    <section className="friction" aria-labelledby="friction-title">
      <div className="friction-inner">
        <img className="thinking-face" src="/assets/thinking-face.png" alt="" />
        <h2 id="friction-title">¿Te ha pasado que <em>sientes que…</em></h2>
        <ul>
          {frictionPoints.map((point) => <li key={point}>❌ {point}</li>)}
        </ul>
        <p className="friction-close">Si marcaste más de una…<br /><strong>es momento de hacer algo al respecto.</strong></p>
        <SectionLink className="button" to={routes.contacto}>
          Quiero dar el primer paso <img src="/assets/arrow-right-alt.svg" alt="" />
        </SectionLink>
      </div>
    </section>
  );
}
