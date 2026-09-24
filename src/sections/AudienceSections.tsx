import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import audienceImage from "../assets/2026-01-28 18.49.13.jpg";
import notForImage from "../assets/2026-01-28 18.49.30.jpg";

export function AudienceSections() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          <div className="overflow-hidden rounded-[38px] border border-burgundy/20 bg-[#f3e8e1] p-4 shadow-[0_18px_40px_rgba(87,41,38,0.08)] sm:p-6 lg:p-8">
            <h2 className="text-[36px] font-normal leading-[0.9] tracking-[-0.04em] text-burgundy sm:text-[48px] lg:text-[64px]">
              CINE SUNT EU?
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-ink-900 sm:text-[16px] lg:text-[18px]">
              <p>Sunt Fiiama Troian, Social Media Manager și Content Creator în Paris.</p>
              <p>
                Lucrez direct cu afaceri și branduri din domenii diferite, pentru care creez strategii, planuri de conținut,
                Reels, texte și campanii de promovare.
              </p>
              <p>
                În acest curs nu îți ofer doar informație teoretică. Îți arăt procesele, greșelile, soluțiile și metodele pe care
                le aplic zi de zi în colaborările mele reale.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeader title="ACEST CURS ESTE PENTRU" />
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-800 sm:text-[16px]">
                <li>Începători care vor să intre în domeniul Social Media Management</li>
                <li>Antreprenori care vor să-și gestioneze singuri paginile</li>
                <li>Creatori de conținut care vor structură și strategie</li>
                <li>Persoane care vor rezultate reale, nu promisiuni rapide</li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
              <div className="rounded-card border border-borderNeutral bg-white/30 p-3 shadow-[0_24px_60px_rgba(84,45,45,0.25)]">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
                  <img src={audienceImage} alt="Curs potrivit pentru tine" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="lg:order-2">
              <SectionHeader title="ACEST CURS NU ESTE PENTRU" />
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-800 sm:text-[16px]">
                <li>Cei care caută rezultate peste noapte</li>
                <li>Cei care nu aplică constant</li>
                <li>Cei care vor „rețete magice” fără muncă</li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:order-1 lg:mx-0 lg:justify-self-start">
              <div className="rounded-card border border-borderNeutral bg-white/30 p-3 shadow-[0_24px_60px_rgba(84,45,45,0.25)]">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
                  <img src={notForImage} alt="Curs nepotrivit pentru tine" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
