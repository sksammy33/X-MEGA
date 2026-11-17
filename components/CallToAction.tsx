import type { ReactNode } from "react";
import { Button, Container } from "./ui";

// Politian rounded banner, using the XMEGA digital-wave artwork recoloured to brand blue
export function CallToAction({
  eyebrow,
  title = (
    <>
      Let&apos;s build your next <span className="text-gradient-ink">digital experience.</span>
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
    <section id={id} className="bg-white py-10 md:py-16">
      <Container>
        <div className="bg-wash relative overflow-hidden rounded-[32px]">
          <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-7 px-6 py-24 text-center md:py-32">
            {eyebrow && <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{eyebrow}</span>}
            <h2 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-heading md:text-[56px]">
              {title}
            </h2>
            <p className="max-w-[600px] text-[17px] leading-relaxed text-ink">{description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={href}>{cta}</Button>
              <Button href={secondary.href} variant="outline" arrow={false}>
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
