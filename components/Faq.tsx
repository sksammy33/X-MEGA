"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs as defaultFaqs, type Faq as FaqItem } from "@/lib/content";
import { Button, Container, SectionIntro } from "./ui";

export function Faq({
  label = "FAQ",
  title = "Answers to the questions we hear most",
  description = "A few useful starting points for your next digital project or learning journey. Have something else in mind? Let's talk.",
  items = defaultFaqs,
}: {
  label?: string;
  title?: string;
  description?: string;
  items?: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-dark py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
        <div className="flex flex-col items-start gap-7 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro label={label} title={title} description={description} />
          <Button href="/contact" variant="light">
            Let&apos;s Talk
          </Button>
        </div>

        <ul className="flex flex-col gap-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className={`rounded-2xl border bg-surface-dark-4 transition-all duration-300 ${
                  isOpen ? "border-accent-soft/25" : "border-transparent hover:border-white/10"
                }`}
              >
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs text-on-dark-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] font-semibold text-white md:text-base">{f.q}</span>
                  </span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-white text-heading" : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[3.25rem] text-[15px] leading-relaxed text-on-dark">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
