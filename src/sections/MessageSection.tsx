import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import { content } from "../data/content";

export function MessageSection() {
  return (
    <section id="despre-curs" className="pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <div className="rounded-card border border-[#E3D2C6] bg-[#F8F0EA] p-6 shadow-soft sm:p-10">
          <SectionHeader title={content.message.title} />

          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.75] text-ink-800 sm:text-[16px] lg:text-[18px]">
            {content.message.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-medium text-ink-900">{content.message.highlight}</p>
          </div>

          <div className="mt-8">
            <a href="#module">
              <Button type="button" variant="secondary" hoverScale={1.02} className="text-bg">
                {content.message.cta} →
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
