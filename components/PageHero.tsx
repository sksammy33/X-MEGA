import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "./ui";

// Inner-page hero from the Figma Projects/Freelancing frames: light context row, oversized
// headline, then a navy atmospheric image band (recoloured to brand blue).
export function PageHero({
  index,
  title,
  description,
  actions,
  bandImage = "/images/wave.jpg",
  bandCaption,
  bandCta,
  aside,
}: {
  index: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  bandImage?: string;
  bandCaption: string;
  bandCta: string;
  aside?: ReactNode;
}) {
  return (
    <section className="bg-paper-soft relative overflow-hidden">
      <Container className="relative pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate">
          <span className="text-royal">{index}</span>
          <span className="hidden sm:inline">Ideas. Design. Technology.</span>
        </div>
        <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-[104px]">
          {title}
        </h1>
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-[560px] text-lg leading-relaxed text-slate md:text-[19px]">{description}</p>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
          {aside}
        </div>
      </Container>

      <div className="relative h-[220px] overflow-hidden md:h-[260px]">
        <Image src={bandImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="tint-brand absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_13_34/0.35)_0%,rgb(7_13_34/0.15)_40%,rgb(7_13_34/0.6)_100%)]" />
        <Container className="relative flex h-full items-end justify-between pb-7 text-white">
          <span className="text-sm text-white/85">{bandCaption}</span>
          <span className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-white/70 sm:flex">
            {bandCta} <ArrowDown className="size-4" />
          </span>
        </Container>
      </div>
    </section>
  );
}
