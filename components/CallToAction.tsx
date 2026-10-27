import Image from "next/image";
import type { ReactNode } from "react";
import { Button, Container } from "./ui";

// Politian rounded banner, using the XMEGA digital-wave artwork recoloured to brand blue
export function CallToAction({
  eyebrow,
  title = (
    <>
      Let&apos;s build your next <span className="text-gradient">digital experience.</span>
    </>
  ),
  description = "Have an idea, a challenge or a project in mind? Start a conversation with XMEGA and explore what's possible.",
  cta = "Let's Talk",
  id = "contact",
  href = "/contact",
  secondary = { label: "View Services", href: "/services" },
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  cta?: string;
  id?: string;
  href?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section id={id} className="bg-paper py-10 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-navy">
          <Image src="/images/wave.jpg" alt="" fill sizes="1200px" className="object-cover" />
          <div className="tint-brand absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgb(7_13_34/0.35)_0%,rgb(7_13_34/0.7)_60%,rgb(7_13_34/0.9)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(60%_100%_at_50%_100%,rgb(91_140_255/0.5)_0%,transparent_70%)]" />
          <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-7 px-6 py-24 text-center md:py-32">
            {eyebrow && <span className="text-[11px] uppercase tracking-[0.16em] text-ice">{eyebrow}</span>}
            <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-[56px]">
              {title}
            </h2>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-soft">{description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={href}>{cta}</Button>
              <Button href={secondary.href} variant="ghost" arrow={false}>
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
