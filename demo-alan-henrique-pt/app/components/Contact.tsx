export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <div className="rounded-3xl bg-ink px-6 py-16 text-center text-cream md:px-16 md:py-24">
        <h2
          id="contact-title"
          className="mx-auto max-w-2xl font-serif text-4xl font-medium leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
        >
          Vamos conversar antes do primeiro treino?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
          Envie uma mensagem pelo Instagram. É por lá que a gente troca ideia,
          tira dúvidas e agenda o primeiro bate-papo.
        </p>

        <a
          href="https://www.instagram.com/alanhenriquepersonal/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-white transition-all hover:bg-accent-hover focus-visible:rounded-full"
        >
          Falar pelo Instagram
        </a>

        <p className="mt-6 text-sm text-cream/60">
          @alanhenriquepersonal
        </p>
      </div>
    </section>
  );
}
