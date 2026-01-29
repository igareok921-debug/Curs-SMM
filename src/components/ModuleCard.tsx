import { motion } from "framer-motion";
import type { CourseModule } from "../data/content";

type Props = {
  module: CourseModule;
  tone?: "base" | "alt";
  motionFrom?: "left" | "right";
};

export function ModuleCard({ module, tone = "base", motionFrom = "left" }: Props) {
  const bgTone = tone === "alt" ? "bg-[#F8F0EA]" : "bg-[#F7EFEA]";
  const xOffset = motionFrom === "left" ? -28 : 28;

  return (
    <motion.article
      className={`rounded-card border border-[#DDCBBF] ${bgTone} p-5 shadow-[0_10px_24px_rgba(84,45,45,0.08)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(84,45,45,0.16)] sm:p-7`}
      initial={{ x: xOffset, y: 12, scale: 0.98 }}
      whileInView={{ x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="flex items-center gap-3 text-[18px] leading-snug sm:text-[22px] lg:text-[26px]">
        <span className="h-2 w-2 rounded-full bg-burgundy/70" aria-hidden="true" />
        {module.title}
      </h3>

      <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink-800 sm:text-[16px]">
        {module.subtitle}
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-800 sm:text-[16px]">
        {module.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-900 sm:text-[16px]">
        {module.goal}
      </p>
    </motion.article>
  );
}
