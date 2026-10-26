"use client";

import Link from "next/link";

const navItems = [
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone/40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
          aria-label="Alan Henrique — Personal Trainer"
        >
          Alan Henrique
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-accent focus-visible:rounded"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:rounded-full md:inline-block"
              >
                Conhecer o atendimento
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
