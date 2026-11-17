import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button, Container } from "./ui";
import { capabilities, services } from "@/lib/content";

// Light hero (Fluxpay structure): lilac-to-white wash, two-tone heading, visual on the right
export function Hero() {
  return (
    <section id="top" className="bg-wash relative overflow-hidden">
      <Container className="relative pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-heading/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              <Sparkles className="size-3.5" />
              Ideas. Design. Technology.
            </span>
            <h1 className="text-balance text-5xl font-bold leading-[1.06] tracking-tight text-heading sm:text-6xl lg:text-[72px]">
              Turning Ideas Into <span className="text-gradient-ink">Digital Experiences</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-ink md:text-[19px]">
              From websites and mobile apps to AI-powered solutions, we design and develop technology
              that helps businesses grow.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Button href="/services">Explore Our Services</Button>
              <Button href="/contact" variant="outline" arrow={false}>
                Let&apos;s Talk
              </Button>
            </div>
          </div>

          {/* Visual: artwork recoloured to the brand purple, with a white service card */}
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-surface-dark">
              <Image
                src="/images/hero.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[50%_70%]"
              />
              <div className="tint-brand absolute inset-0" />
            </div>
            <div className="absolute -bottom-8 left-4 w-[280px] animate-float rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-heading)_45%,transparent)] sm:-left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">What we build</p>
              <ul className="mt-4 flex flex-col gap-3">
                {services.slice(0, 4).map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-sm font-medium text-heading">
                    <span className="grid size-8 place-items-center rounded-xl bg-purple-light text-brand">
                      <Icon className="size-4" />
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Capabilities strip */}
      <div className="relative mt-10 border-y border-heading/10 bg-white py-7">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-16 text-xl font-bold uppercase tracking-wide text-mauve-normal"
            >
              {c}
              <span className="size-1.5 rounded-full bg-lilac-normal" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
