"use client";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto flex max-w-6xl flex-col items-start justify-center px-6 pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div className="pointer-events-none absolute right-6 top-16 -z-10 hidden select-none text-[12rem] font-serif italic leading-none text-stone/25 md:right-12 md:block lg:text-[16rem]">
        A
      </div>

      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
          Personal Trainer em Barretos
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-ink md:text-7xl lg:text-8xl"
        >
          Seu próximo treino começa com uma{" "}
          <em className="not-italic text-accent">conversa</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          Conheça o atendimento presencial de Alan Henrique em Barretos e tire
          suas dúvidas sobre como começar.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-white transition-all hover:bg-accent-hover focus-visible:rounded-full"
          >
            Conhecer o atendimento
          </a>
          <a
            href="#atendimento"
            className="inline-flex h-14 items-center justify-center rounded-full border border-ink/15 px-8 text-base font-medium text-ink transition-all hover:border-accent hover:text-accent focus-visible:rounded-full"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
