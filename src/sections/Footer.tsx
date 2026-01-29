import { Container } from "../components/Container";
import { content } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-burgundy/15 bg-bg py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-10">
          <div>
            <div className="font-serif text-lg text-burgundy">{content.brandName}</div>
            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
              {content.footer.links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-ink-800 hover:text-burgundy">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 text-xs text-ink-700">
          © {new Date().getFullYear()} {content.brandName}
        </div>
      </Container>
    </footer>
  );
}
