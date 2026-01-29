import { HeaderNav } from "./sections/HeaderNav";
import { Hero } from "./sections/Hero";
import { MessageSection } from "./sections/MessageSection";
import { AudienceSections } from "./sections/AudienceSections";
import { CourseStructure } from "./sections/CourseStructure";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <div className="hero-wrap">
        <HeaderNav />
        <Hero />
      </div>
      <main className="page-sections pb-16 sm:pb-20 lg:pb-28">
        <MessageSection />
        <AudienceSections />
        <CourseStructure />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
