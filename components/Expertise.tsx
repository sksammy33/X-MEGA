import Image from "next/image";
import { Quote } from "lucide-react";
import { stats } from "@/lib/content";
import { Container, SectionLabel } from "./ui";

export function Expertise() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="relative">
        <Image src="/images/expertise.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_20_48/0.55)_0%,rgb(10_20_48/0.3)_40%,#0a1430_100%)]" />

        <Container className="relative py-24 md:py-36">
          <h2 className="max-w-[620px] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-[46px]">
            Deep expertise across the sectors that matter
          </h2>
          <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-5xl font-bold tracking-tight text-white md:text-[52px]">{s.value}</dd>
                <dd className="mt-2 text-[15px] text-white/80">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Politian split testimonial card */}
      <Container className="relative pb-24 md:pb-32">
        <figure className="surface grid overflow-hidden rounded-3xl md:grid-cols-[300px_1fr]">
          <div className="relative min-h-[260px]">
            <Image src="/images/business.jpg" alt="" fill sizes="300px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_41_106/0.2)_0%,rgb(10_19_48/0.9)_100%)]" />
            <Quote className="absolute right-6 top-6 size-14 text-white/25" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <Image
                src="/images/avatar.png"
                alt="Helena Vaughn"
                width={56}
                height={56}
                className="size-14 rounded-full object-cover ring-2 ring-sky/60"
              />
              <div>
                <p className="font-semibold text-white">Helena Vaughn</p>
                <p className="text-sm text-soft">CEO, Northbeam Industries</p>
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
