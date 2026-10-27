"use client";

import { useState } from "react";
import { steps as defaultSteps, type Step } from "@/lib/content";
import { Button, Container, Glow, SectionIntro } from "./ui";

// Connect "How collaboration works" — the active step lifts into the signature gradient
export function Process({
  label = "How we work",
  title = "A Clear Path From Idea to Execution.",
  description = "Every project follows a structured journey that keeps goals, design and delivery aligned.",
  items = defaultSteps,
  numbering = "padded",
  cta = { label: "Start Your Project", href: "/contact" },
}: {
  label?: string;
  title?: string;
  description?: string;
  items?: Step[];
  numbering?: "padded" | "dotted";
  cta?: { label: string; href: string };
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-base py-24 md:py-32">
      <Glow className="-left-40 bottom-0 size-[520px]" />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro label={label} title={title} description={description} className="max-w-[640px]" />
          <Button href={cta.href} className="shrink-0 self-start md:self-auto">
            {cta.label}
          </Button>
        </div>

        <ol className={`mt-14 grid gap-4 sm:grid-cols-2 ${items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
          {items.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex h-full min-h-[280px] w-full flex-col justify-between rounded-3xl p-7 text-left transition-all duration-500 ${
                    on
                      ? "bg-signature text-white shadow-[0_30px_60px_-30px_rgb(47_107_255/0.8)] ring-1 ring-ice/20"
                      : "surface text-white hover:bg-navy/60"
                  }`}
                >
                  <span
                    className={`font-semibold ${numbering === "dotted" ? "text-5xl" : "text-sm"} ${
                      on ? "text-ice" : "text-white/35"
                    }`}
                  >
                    {numbering === "dotted" ? `${i + 1}.` : `0${i + 1}`}
                  </span>
                  <span className="flex flex-col gap-3">
                    <span className="text-2xl font-semibold">{s.title}</span>
                    <span className={`text-[15px] leading-relaxed ${on ? "text-white/80" : "text-soft"}`}>
                      {s.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
