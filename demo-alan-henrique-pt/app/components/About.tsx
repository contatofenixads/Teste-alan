export function About() {
  return (
    <section
      id="apresentacao"
      aria-labelledby="about-title"
      className="border-t border-stone/40 bg-cream-dark/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2
              id="about-title"
              className="font-serif text-3xl font-medium leading-tight text-ink md:text-4xl"
            >
              Um acompanhamento pensado para o seu dia a dia.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted md:col-span-8 md:text-lg">
            <p>
              Alan Henrique atua como personal trainer em Barretos, com foco no
              atendimento presencial. O trabalho é construído a partir da
              rotina, dos objetivos e das preferências de cada pessoa.
            </p>
            <p>
              Antes de qualquer planilha, o primeiro passo é entender onde você
              está e para onde quer ir. A partir daí, os treinos são ajustados
              para fazer sentido no seu dia a dia — com atenção, consistência e
              conversa aberta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
