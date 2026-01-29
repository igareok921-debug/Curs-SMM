import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { content } from "../data/content";
import femaleIcon from "../assets/ChatGPT Image Jan 29, 2026, 08_06_42 PM.png";

export function Testimonials() {
  return (
    <section id="testimoniale" className="pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <SectionHeader title={content.testimonials.title} />

        <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {content.testimonials.items.map((item, index) => (
            <article
              key={`${index}-${item.name}`}
              className="rounded-card border border-[#DDCBBF] bg-[#F8F0EA] p-5 shadow-[0_10px_24px_rgba(84,45,45,0.08)] sm:p-7"
            >
              <div className="text-[28px] leading-none text-burgundy/60" aria-hidden="true">
                “
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-800 sm:text-[16px]">
                {item.text}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-burgundy">
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/70 shadow-[0_6px_16px_rgba(84,45,45,0.12)]"
                >
                  <img src={femaleIcon} alt="" className="h-5 w-5" />
                </span>
                <span>{item.name}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
