export function Footer() {
  return (
    <footer className="border-t border-stone/40 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="font-serif text-lg font-medium text-ink">
          Alan Henrique
        </p>
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} Demonstração conceitual. Conteúdo sujeito à
          aprovação.
        </p>
      </div>
    </footer>
  );
}
