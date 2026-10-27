import { useState } from 'react';
import { WhatsAppLink } from '../components/WhatsAppLink';
import { frequentlyAskedQuestions } from '../data/faq';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="preguntas-frecuentes" aria-labelledby="faq-title">
      <div className="faq-heading" data-reveal>
        <span className="faq-kicker">RESOLVEMOS TUS DUDAS</span>
        <h2 id="faq-title">Preguntas <em>frecuentes</em></h2>
        <p>Cada proyecto es distinto, pero hay preguntas que casi siempre aparecen antes de trabajar juntos. Aquí respondemos las más importantes para ayudarte a saber por dónde empezar.</p>
      </div>

      <div className="faq-list" data-reveal>
        {frequentlyAskedQuestions.map(({ question, paragraphs, whatsapp }, index) => {
          const isOpen = openIndex === index;
          const questionId = `faq-question-${index + 1}`;
          const answerId = `faq-answer-${index + 1}`;

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
              <h3>
                <button
                  id={questionId}
                  className="faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen} inert={!isOpen}>
                <div className="faq-answer-inner">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {whatsapp && (
                    <p>¿Ya tienes una idea? <WhatsAppLink message="Hola, equipo Kanaro. Tengo una idea de proyecto y quisiera orientación sobre el alcance y el presupuesto.">Cuéntanos tu proyecto y te orientamos.</WhatsAppLink></p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
