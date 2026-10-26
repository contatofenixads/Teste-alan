export function Service() {
  return (
    <section
      id="atendimento"
      aria-labelledby="service-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Como funciona
      </p>
      <h2
        id="service-title"
        className="max-w-3xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl"
      >
        Atendimento presencial, com conversa antes de tudo.
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
        <article className="rounded-2xl border border-stone/40 bg-white/40 p-8">
          <span
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent"
            aria-hidden="true"
          >
            01
          </span>
          <h3 className="mb-3 font-serif text-xl font-medium text-ink">
            Primeiro contato
          </h3>
          <p className="leading-relaxed text-ink-muted">
            Você envia uma mensagem pelo Instagram e conta um pouco sobre seus
            objetivos e rotina.
          </p>
        </article>

        <article className="rounded-2xl border border-stone/40 bg-white/40 p-8">
          <span
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent"
            aria-hidden="true"
          >
            02
          </span>
          <h3 className="mb-3 font-serif text-xl font-medium text-ink">
            Alinhamento
          </h3>
          <p className="leading-relaxed text-ink-muted">
            Juntos, combinamos local, frequência e formato que façam sentido
            para você — com base na sua disponibilidade real.
          </p>
        </article>

        <article className="rounded-2xl border border-stone/40 bg-white/40 p-8">
          <span
            className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent"
            aria-hidden="true"
          >
            03
          </span>
          <h3 className="mb-3 font-serif text-xl font-medium text-ink">
            Acompanhamento
          </h3>
          <p className="leading-relaxed text-ink-muted">
            Os treinos acontecem de forma presencial, com acompanhamento durante
            a execução e ajustes conforme a evolução.
          </p>
        </article>
      </div>
    </section>
  );
}
