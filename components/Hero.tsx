import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button, Container } from "./ui";
import { capabilities, services } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-base">
      {/* Arc artwork — sits on the right, fades into the navy on the left */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-[50%_70%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070d22_0%,rgb(7_13_34/0.9)_38%,rgb(7_13_34/0.45)_62%,rgb(7_13_34/0.15)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#070d22_100%)]" />

      <Container className="relative pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-col items-start gap-7">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-white">
              <Sparkles className="size-3.5 text-ice" />
              Ideas. Design. Technology.
            </span>
            <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[80px] lg:leading-[1.1]">
              Turning Ideas Into <span className="text-gradient">Digital Experiences</span>
            </h1>
            <p className="max-w-[620px] text-lg leading-relaxed text-soft md:text-[19px]">
              From websites and mobile apps to AI-powered solutions, we design and develop technology
              that helps businesses grow.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Button href="/services">Explore Our Services</Button>
              <Button href="/contact" variant="ghost" arrow={false}>
                Let&apos;s Talk
              </Button>
            </div>
          </div>

          {/* Floating glass card — Politian-style hero chip, XMEGA content */}
          <div className="glass hidden animate-float rounded-3xl p-6 text-white lg:block">
            <p className="text-xs uppercase tracking-[0.14em] text-ice">What we build</p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {services.slice(0, 4).map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-3 text-sm">
                  <span className="bg-primary grid size-9 place-items-center rounded-xl">
                    <Icon className="size-4" />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between border-t border-ice/15 pt-5 text-xs text-soft">
              <span>+ 2 more services</span>
              <span className="font-semibold text-white">6 disciplines</span>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden items-center justify-end gap-2.5 text-xs font-semibold tracking-widest text-white/50 md:flex">
          SCROLL <ArrowDown className="size-4" />
        </div>
      </Container>

      {/* Capabilities strip as a marquee (Connect logo-strip treatment) */}
      <div className="relative border-y border-ice/10 bg-night/70 py-7 backdrop-blur">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-16 text-xl font-bold uppercase tracking-wide text-ice/40"
            >
              {c}
              <span className="size-1.5 rounded-full bg-sky shadow-[0_0_10px_2px_rgb(91_140_255/0.7)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
