import { useState } from 'react';
import { frequentlyAskedQuestions } from '../data/faq';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="preguntas-frecuentes" aria-labelledby="faq-title">
      <div className="faq-heading" data-reveal>
        <h2 id="faq-title">Preguntas frecuentes</h2>
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
                  <span>{question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId} hidden={!isOpen}>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {whatsapp && (
                  <p>¿Ya tienes una idea? <a href="https://wa.me/51992934447" target="_blank" rel="noopener noreferrer">Cuéntanos tu proyecto y te orientamos.</a></p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
