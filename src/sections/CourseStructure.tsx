import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { ModuleCard } from "../components/ModuleCard";
import { Button } from "../components/Button";
import { content } from "../data/content";
import alexandruPhoto from "../assets/bordea.png";

export function CourseStructure() {
  const participationFormats = [
    {
      title: "ONLINE COMPLET",
      description:
        "Lecții live pe Zoom, explicații pentru fiecare modul, teme și suport pe durata cursului.",
      highlighted: false,
    },
    {
      title: "EXPERIENȚA VIP — CEL MAI RECOMANDAT",
      description:
        "Tot ce conține formatul Online, plus patru lecții practice fizice, o filmare personalizată adaptată activității participantei, feedback direct și lecția exclusivă cu Alexandru Bordea.",
      highlighted: true,
    },
    {
      title: "PRACTICĂ FIZICĂ",
      description:
        "Lecții dedicate filmării, editării și aplicării informației în practică. Locurile sunt limitate și disponibile în funcție de capacitatea grupei.",
      highlighted: false,
    },
  ];

  return (
    <section id="module" className="pt-16 sm:pt-20 lg:pt-28">
      <Container>
        <SectionHeader title={content.courseStructure.title} />

        <p className="mt-4 max-w-3xl whitespace-pre-line text-[15px] leading-[1.75] text-ink-800 sm:text-[16px] lg:text-[18px]">
          {content.courseStructure.intro}
        </p>

        <div className="mt-10 space-y-5 sm:space-y-6">
          {content.modules.map((m, index) => {
            const isGuestSectionAfterModule3 = index === 2;

            return (
              <>
                {isGuestSectionAfterModule3 ? (
                  <div className="overflow-hidden rounded-[38px] border border-burgundy/20 bg-[#f3e8e1] p-4 shadow-[0_18px_40px_rgba(87,41,38,0.08)] sm:p-6 lg:p-8">
                    <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy/80 sm:text-sm">
                          Invitat special — Alexandru Bordea
                        </p>
                        <h3 className="mt-3 text-[26px] leading-[1.08] text-burgundy sm:text-[32px] lg:text-[40px]">
                          De la serviciu la afacere: cum gândește și se dezvoltă un antreprenor
                        </h3>

                        <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-ink-800 sm:text-[16px]">
                          <p>
                            Participantele care aleg formatul VIP vor avea acces la o lecție exclusivă de 60–90 de minute
                            alături de Alexandru Bordea.
                          </p>
                          <p>
                            În cadrul acestei întâlniri vor învăța cum să transforme un serviciu într-o afacere, cum să se
                            poziționeze ca specialiste, cum să comunice valoarea activității lor și cum să transforme
                            vizibilitatea din online în clienți.
                          </p>
                          <p>
                            La final, participantele vor putea să adreseze întrebări și să primească răspunsuri aplicate
                            activității lor.
                          </p>
                        </div>

                        <div className="mt-5 inline-flex items-center rounded-full border border-burgundy/20 bg-white/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-burgundy shadow-sm sm:text-[11px]">
                          Disponibil exclusiv în formatul VIP
                        </div>
                      </div>

                      <div className="relative mx-auto w-full max-w-[440px] lg:mx-0">
                        <div className="overflow-hidden rounded-[38px] border-[4px] border-[#f7efec] bg-black shadow-[0_18px_42px_rgba(46,24,20,0.18)]">
                          <img
                            src={alexandruPhoto}
                            alt="Alexandru Bordea"
                            className="aspect-[4/5] w-full object-cover object-[center_18%] grayscale sm:object-[center_8%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <ModuleCard
                  key={m.id}
                  module={m}
                  tone={index % 2 === 0 ? "base" : "alt"}
                  motionFrom={index % 2 === 0 ? "left" : "right"}
                />
              </>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20">
          <SectionHeader title="FORMATE DE PARTICIPARE" />

          <div className="mt-8 space-y-5">
            {participationFormats.map((format, index) => {
              const xOffset = index % 2 === 0 ? -30 : 30;

              return (
                <motion.article
                  key={format.title}
                  className={`rounded-[30px] border p-5 shadow-[0_10px_20px_rgba(84,45,45,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_38px_rgba(84,45,45,0.12)] sm:p-6 ${
                    format.highlighted
                      ? "border-burgundy/20 bg-[#f5e7df]"
                      : "border-[#DDCBBF] bg-[#F7EFEA]"
                  }`}
                  initial={{ x: xOffset, y: 12, scale: 0.98 }}
                  whileInView={{ x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-[22px] font-bold uppercase leading-[1.1] text-burgundy sm:text-[28px]">
                    {format.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-ink-900 sm:text-[16px]">{format.description}</p>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-8 max-w-4xl text-[15px] leading-[1.8] text-ink-800 sm:text-[16px] lg:text-[18px]">
            Completează formularul, iar eu voi reveni pentru un apel individual de aproximativ 15 minute. În cadrul apelului
            vom discuta despre obiectivele tale, formatul potrivit și toate detaliile participării.
          </p>

          <div className="mt-8">
            <a href="https://forms.gle/sVCxfXV3WMkLzeRu6" target="_blank" rel="noreferrer">
              <Button type="button" variant="primary" hoverScale={1.02} className="btn-pulse !bg-burgundy !text-bg shadow-[0_14px_28px_rgba(107,36,38,0.18)] hover:!bg-[#F4E4D8] hover:!text-burgundy">
                Solicită un apel
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
