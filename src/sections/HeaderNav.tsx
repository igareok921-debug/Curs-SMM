import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { content } from "../data/content";

export function HeaderNav() {
  return (
    <header className="nav-surface py-3">
      <Container>
        <div className="rounded-2xl bg-burgundy px-4 py-3 shadow-soft sm:px-6 lg:px-8">
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

            <a
              href="https://forms.gle/sVCxfXV3WMkLzeRu6"
              className="shrink-0"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                type="button"
                variant="primary"
                hoverScale={1.02}
                className="!bg-bg !text-burgundy hover:!bg-bg hover:!text-burgundy"
              >
                {content.nav.cta}
              </Button>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
