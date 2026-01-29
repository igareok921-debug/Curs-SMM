import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { ModuleCard } from "../components/ModuleCard";
import { content } from "../data/content";

export function CourseStructure() {
  return (
    <section id="module" className="pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <SectionHeader title={content.courseStructure.title} />

        <p className="mt-4 max-w-3xl whitespace-pre-line text-[15px] leading-[1.75] text-ink-800 sm:text-[16px] lg:text-[18px]">
          {content.courseStructure.intro}
        </p>

        <div className="mt-10 space-y-5 sm:space-y-6">
          {content.modules.map((m, index) => (
            <ModuleCard
              key={m.id}
              module={m}
              tone={index % 2 === 0 ? "base" : "alt"}
              motionFrom={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
