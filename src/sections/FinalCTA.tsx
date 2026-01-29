import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { content } from "../data/content";

export function FinalCTA() {
  return (
    <section id="inscrieri" className="pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="rounded-card border border-borderNeutral bg-burgundy px-6 py-10 shadow-soft sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="font-sans text-[16px] leading-[1.7] text-white/95 sm:text-[17px] lg:text-[18px]">
              {content.finalCta.text}
            </p>

            <div>
              <a href="https://forms.gle/sVCxfXV3WMkLzeRu6" target="_blank" rel="noreferrer">
                <Button
                  type="button"
                  variant="primary"
                  hoverScale={1.02}
                  className="btn-pulse !bg-bg !text-burgundy hover:!bg-bg hover:!text-burgundy"
                >
                  {content.finalCta.button}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
