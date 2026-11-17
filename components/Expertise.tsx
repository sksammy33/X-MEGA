import Image from "next/image";
import { Quote } from "lucide-react";
import { stats } from "@/lib/content";
import { Container, SectionLabel } from "./ui";

// White section with flat grey stat cards and one featured deep-purple card (Fluxpay pricing pattern)
export function Expertise() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <h2 className="max-w-[620px] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-heading md:text-[46px]">
          Deep expertise across the sectors that <span className="text-gradient-ink">matter</span>
        </h2>
        <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-light rounded-3xl p-7">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl font-bold tracking-tight text-heading md:text-[52px]">{s.value}</dd>
              <dd className="mt-2 text-[15px] text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-6 grid overflow-hidden rounded-3xl bg-surface-dark md:grid-cols-[300px_1fr]">
          <div className="relative min-h-[260px]">
            <Image src="/images/business.jpg" alt="" fill sizes="300px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--color-surface-dark)_92%,transparent)_100%)]" />
            <Quote className="absolute right-6 top-6 size-14 text-white/25" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <Image
                src="/images/avatar.png"
                alt="Helena Vaughn"
                width={56}
                height={56}
                className="size-14 rounded-full object-cover ring-2 ring-accent/60"
              />
              <div>
                <p className="font-semibold text-white">Helena Vaughn</p>
                <p className="text-sm text-on-dark">CEO, Northbeam Industries</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 md:p-12">
            <SectionLabel>What clients say</SectionLabel>
            <blockquote className="text-balance text-2xl font-semibold leading-snug tracking-tight text-white md:text-[32px] md:leading-[1.35]">
              “XMEGA gave us more than a strategy deck. They embedded with our team, reshaped how we operate,
              and stayed until the results showed up on the balance sheet.”
            </blockquote>
          </div>
        </figure>
      </Container>
    </section>
  );
}
