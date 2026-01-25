import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { content } from "../data/content";

export function Hero() {
  return (
    <section id="top" className="hero-section pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-[36px] leading-[1.05] sm:text-[44px] lg:text-[64px]">
              {content.hero.title}
            </h1>

            <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-ink-800 sm:text-[17px] lg:text-[18px]">
              {content.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="https://forms.gle/sVCxfXV3WMkLzeRu6" target="_blank" rel="noreferrer">
                <Button
                  type="button"
                  variant="primary"
                  hoverScale={1.04}
                  className="!bg-burgundy !text-bg shadow-[0_14px_28px_rgba(107,36,38,0.18)] hover:!bg-[#F4E4D8] hover:!text-burgundy"
                >
                  {content.hero.cta}
                </Button>
              </a>
              <a href="#module">
                <Button type="button" variant="ghost" hoverScale={1.02}>
                  Vezi programul cursului →
                </Button>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <div className="rounded-card border border-borderNeutral bg-white/30 p-3 shadow-[0_24px_60px_rgba(84,45,45,0.25)]">
              {/* Placeholder imagine trainer (fără librării; înlocuiești ulterior cu asset real) */}
              <div className="aspect-[4/5] w-full rounded-[18px] bg-burgundy/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]" aria-hidden="true" />
            </div>

            {/* metrics removed */}
          </div>
        </div>
      </Container>
    </section>
  );
}
