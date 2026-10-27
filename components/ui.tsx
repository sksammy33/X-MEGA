import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export type Tone = "dark" | "light";

const buttonStyles = {
  primary: "bg-primary text-white glow-primary hover:brightness-110",
  light: "bg-glow text-deep hover:bg-white",
  ghost: "glass text-white hover:bg-white/12",
  outline: "border border-ink/15 bg-white/60 text-ink hover:border-electric/50 hover:text-royal",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function SectionLabel({ children, tone = "dark" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
        tone === "dark"
          ? "border-ice/15 bg-electric/10 text-ice"
          : "border-ink/10 bg-electric/[0.06] text-royal"
      }`}
    >
      <span className="size-1.5 rounded-full bg-sky shadow-[0_0_10px_2px_rgb(91_140_255/0.7)]" />
      {children}
    </span>
  );
}

export function SectionIntro({
  label,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: {
  label: string;
  title: ReactNode;
  description?: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col gap-5 ${center ? "mx-auto items-center text-center" : ""} ${className}`}>
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2
        className={`text-balance text-4xl font-bold leading-[1.08] tracking-tight md:text-[46px] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-pretty text-[17px] leading-relaxed ${
            tone === "dark" ? "text-soft" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>;
}

/** Soft blue light leak used behind dark sections */
export function Glow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full bg-electric/20 blur-[140px] ${className}`} />;
}

export type Project = {
  name: string;
  category: string;
  filters: string[];
  description: string;
  image: string;
};

/** Figma UI mockup presented on a signature-gradient stage; sits on light sections */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href="/projects" className="group flex flex-col gap-4">
      <div className="bg-signature relative overflow-hidden rounded-3xl p-3 sm:p-4">
        <div className="relative aspect-[584/390] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgb(3_8_25/0.8)]">
          <Image
            src={project.image}
            alt={`${project.name} concept preview`}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <span className="glass absolute left-6 top-6 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
          0{index + 1}
        </span>
        <span className="bg-primary glow-primary absolute bottom-7 right-7 grid size-11 translate-y-2 place-items-center rounded-full text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-slate">{project.category}</p>
        <span className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-royal">
          Concept
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-royal">{project.name}</h3>
      <p className="text-base leading-relaxed text-slate">{project.description}</p>
      <span className="flex items-center justify-between border-b border-ink/10 pb-4 text-sm font-semibold text-ink">
        View Case Study
        <ArrowUpRight className="size-4 text-electric transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
