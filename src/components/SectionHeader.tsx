import type { ReactNode } from "react";

type Props = {
  title: string;
  eyebrow?: ReactNode;
  className?: string;
};

export function SectionHeader({ title, eyebrow, className = "" }: Props) {
  return (
    <header className={`max-w-2xl ${className}`}>
      {eyebrow ? <div className="mb-3 text-sm text-ink-700">{eyebrow}</div> : null}
      <h2 className="text-[28px] leading-tight sm:text-[34px] lg:text-[40px]">{title}</h2>
    </header>
  );
}
