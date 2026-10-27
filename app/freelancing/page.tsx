import type { Metadata } from "next";
import Image from "next/image";
import { freelanceAudiences, freelanceServices, freelanceSteps, principles } from "@/lib/content";
import { Button, Container, SectionIntro, SectionLabel } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Freelancing",
  description: "Professional digital services without hiring a full in-house team.",
};

export default function FreelancingPage() {
  return (
    <main>
      <PageHero
        index="01 — Freelancing"
        title={
          <>
            Great Work.
            <br />
            <span className="text-gradient-ink">Flexible Engagement.</span>
          </>
        }
        description="Need a website, mobile app, brand identity or help improving an existing product? Get professional digital services without hiring a full in-house team."
        actions={
          <>
            <Button href="/contact">Start Your Project</Button>
            <Button href="/contact" variant="outline" arrow={false}>
              Get a Free Quote
            </Button>
          </>
        }
        bandCaption="Your ambition. Our craft. A flexible way forward."
        bandCta="Explore freelance services"
      />

      {/* Freelance services — Connect icon grid */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro label="Freelance services" title="What Can We Help You Build?" tone="light" className="max-w-[720px]" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freelanceServices.map(({ name, description, icon: Icon }, i) => (
              <article
                key={name}
                className="group flex flex-col gap-6 rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgb(27_70_201/0.45)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-glow text-royal transition-all group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs text-slate">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink md:text-[23px]">{name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for — sticky intro with image, list on the right */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionIntro label="Who it's for" title="Flexible Solutions for Different Needs." tone="light" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image src="/images/team-desk.jpg" alt="A small team collaborating at a shared desk" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_40%,rgb(21_41_106/0.7)_100%)]" />
            </div>
          </div>
          <ul className="flex flex-col">
            {freelanceAudiences.map(({ name, description, icon: Icon }) => (
              <li key={name} className="group flex items-start gap-5 border-b border-ink/10 py-8 first:pt-0">
                <span className="bg-primary glow-primary grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-ink transition-colors group-hover:text-royal">{name}</h3>
                  <p className="mt-1.5 text-[16px] text-slate">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why work with XMEGA — principles over the circuit texture */}
      <section className="relative overflow-hidden">
        <Image src="/images/circuit.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="tint-brand absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_13_34/0.92)_0%,rgb(10_20_48/0.8)_55%,#070d22_100%)]" />
        <Container className="relative py-24 md:py-32">
          <SectionLabel>Why work with XMEGA</SectionLabel>
          <h2 className="mt-5 max-w-[640px] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-[52px]">
            A Straightforward Way to <span className="text-gradient">Get Things Done.</span>
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass flex min-h-[220px] flex-col justify-between rounded-3xl p-7">
                <Icon className="size-6 text-sky" />
                <div>
                  <h3 className="text-xl font-medium text-white">{title}</h3>
                  <p className="mt-2 text-[15px] text-soft">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Process
        label="How it works"
        title="From Brief to Delivery."
        description="A simple, transparent path from your first message to launch."
        items={freelanceSteps}
        numbering="dotted"
      />

      <CallToAction
        title={
          <>
            Ready to start your <span className="text-gradient">next project?</span>
          </>
        }
        description="Tell us what you need. We'll come back with a clear scope, timeline and price — no obligation."
        cta="Get a Free Quote"
      />
    </main>
  );
}
