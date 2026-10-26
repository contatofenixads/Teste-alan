"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O atendimento é apenas presencial?",
    answer:
      "O atendimento principal é presencial em Barretos. Detalhes como local, frequência e formato serão combinados diretamente no primeiro contato.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "Basta enviar uma mensagem pelo Instagram. A primeira conversa serve para entender seus objetivos e ver se o acompanhamento faz sentido para você.",
  },
  {
    question: "Preciso ter experiência com treino?",
    answer:
      "Não. O acompanhamento é adaptado ao seu ponto de partida, seja qual for o seu nível de familiaridade com exercícios.",
  },
  {
    question: "Onde os treinos acontecem?",
    answer:
      "O local do atendimento presencial será definido junto com você, considerando sua rotina e preferências dentro de Barretos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-title"
      className="border-t border-stone/40 bg-cream-dark/40"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-accent">
          Dúvidas
        </p>
        <h2
          id="faq-title"
          className="mb-12 text-center font-serif text-3xl font-medium leading-tight text-ink md:text-4xl"
        >
          Perguntas frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-stone/40 bg-white/50"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/60"
                >
                  <span className="pr-4 font-serif text-lg font-medium text-ink md:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone text-ink"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  hidden={!isOpen}
                  className="px-6 pb-6"
                >
                  <p className="leading-relaxed text-ink-muted">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
