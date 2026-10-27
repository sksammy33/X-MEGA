"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Button, Container, Glow, SectionIntro } from "./ui";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative overflow-hidden bg-base py-24 md:py-32">
      <Glow className="-right-40 top-1/3 size-[620px] bg-royal/30" />
      <Container className="relative">
        <SectionIntro
          label="What we do"
          title="Digital Solutions Built Around Your Needs"
          description="From your first website to a custom digital platform, we connect thoughtful design with technology that works for you."
          className="max-w-[720px]"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ul className="flex flex-col gap-1.5" role="tablist" aria-label="Services">
            {services.map(({ name, scope, icon: Icon }, i) => {
              const selected = i === active;
              return (
                <li key={name}>
                  <button
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex w-full items-center gap-5 rounded-[18px] px-6 py-5 text-left transition-all duration-300 ${
                      selected ? "surface" : "border border-transparent hover:bg-navy/30"
                    }`}
                  >
                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-xl transition-all ${
                        selected ? "bg-primary glow-primary text-white" : "bg-navy/60 text-ice/60"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-1 flex-col gap-1.5">
                      <span
                        className={`text-xl font-semibold transition-colors md:text-[23px] ${
                          selected ? "text-white" : "text-white/45 group-hover:text-white/75"
                        }`}
                      >
                        {name}
                      </span>
                      <span className={`text-[13px] ${selected ? "text-soft" : "text-muted/70"}`}>{scope}</span>
                    </span>
                    <ArrowUpRight
                      className={`size-5 shrink-0 transition-all ${
                        selected ? "text-sky" : "text-white/0 group-hover:text-white/40"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div role="tabpanel" className="flex flex-col gap-5">
            <div className="relative aspect-[572/395] overflow-hidden rounded-3xl ring-1 ring-ice/10">
              {services.map((s, i) => (
                <Image
                  key={s.name}
                  src={s.image}
                  alt={`${s.name} illustration`}
                  fill
                  sizes="(min-width: 1024px) 572px, 100vw"
                  className={`object-cover transition-all duration-700 ${
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(7_13_34/0.85)_100%)]" />
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <span key={t} className="glass rounded-full px-3 py-1.5 text-xs text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="mt-2 text-[28px] font-semibold text-white">{current.name}</h3>
            <p className="max-w-[500px] text-[17px] leading-relaxed text-soft">{current.description}</p>
            <div className="pt-2">
              <Button href="/services">Explore All Services</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
