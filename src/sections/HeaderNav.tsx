import { useState } from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { content } from "../data/content";

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-surface py-1.5 sm:py-3">
      <Container>
        <div className="rounded-2xl bg-burgundy px-3 py-2 shadow-soft sm:px-6 sm:py-3 lg:px-8">
          <nav className="flex items-center justify-between gap-4" aria-label="Primary">
            <a href="#top" className="font-serif text-lg tracking-wide text-white sm:text-xl">
              {content.brandName}
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {content.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/85 hover:text-white hover:opacity-90 hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://forms.gle/sVCxfXV3WMkLzeRu6"
                className="hidden shrink-0 md:inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  type="button"
                  variant="primary"
                  hoverScale={1.02}
                  className="btn-pulse !bg-bg !text-burgundy hover:!bg-bg hover:!text-burgundy"
                >
                  {content.nav.cta}
                </Button>
              </a>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
                aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="sr-only">Meniu</span>
                {isOpen ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          <div
            id="mobile-nav"
            className={`mt-3 grid gap-4 rounded-xl bg-white/95 p-4 text-ink-900 shadow-soft md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-3">
              {content.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-ink-800"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a href="https://forms.gle/sVCxfXV3WMkLzeRu6" target="_blank" rel="noreferrer">
              <Button
                type="button"
                variant="primary"
                hoverScale={1.02}
                className="btn-pulse !bg-burgundy !text-bg hover:!bg-burgundy/90"
              >
                {content.nav.cta}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
