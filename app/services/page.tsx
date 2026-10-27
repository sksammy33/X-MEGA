import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import {
  engagementOptions,
  pillars,
  serviceCategories,
  serviceDirectory,
  servicesFaqs,
} from "@/lib/content";
import { Button, Container, Glow, SectionIntro, SectionLabel } from "@/components/ui";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, mobile, design, AI, custom software and digital growth services from XMEGA.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero — Figma image + text split, with Politian-style overlapping card */}
      <section className="bg-paper-soft relative overflow-hidden pb-20 pt-36 md:pt-44">
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/5]">
              <Image src="/images/developers.jpg" alt="XMEGA team at work" fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(200deg,transparent_40%,rgb(21_41_106/0.75)_100%)]" />
            </div>
            <div className="card-light absolute -bottom-8 right-4 max-w-[280px] animate-float rounded-3xl p-6 shadow-[0_30px_60px_-30px_rgb(27_70_201/0.5)] sm:-right-6">
              <span className="bg-primary mb-4 block h-1 w-10 rounded-full" />
              <p className="text-xl font-semibold text-ink">Built around your goals.</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Design, technology and growth. Find the right starting point for your next digital experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-7">
            <SectionLabel tone="light">Our services</SectionLabel>
            <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-tight text-ink md:text-[64px]">
              Technology Solutions for Every <span className="text-gradient-ink">Ambition.</span>
            </h1>
            <p className="max-w-[520px] text-lg leading-relaxed text-slate">
              From design and development to AI and digital growth, we deliver solutions tailored to your business
              needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Start a Project</Button>
              <Button href="#directory" variant="outline" arrow={false}>
                Explore Services
              </Button>
            </div>
          </div>
        </Container>

        <Container className="relative mt-24">
          <p className="max-w-[760px] border-l-2 border-electric pl-6 text-xl leading-relaxed text-slate md:text-2xl">
            We bring design and development together to turn your ideas into useful digital products —{" "}
            <span className="text-ink">built around your needs, your users and your next stage of growth.</span>
          </p>
        </Container>
      </section>

      {/* Atmospheric introduction with category tabs */}
      <section className="relative overflow-hidden">
        <Image src="/images/expertise.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_13_34/0.9)_0%,rgb(10_20_48/0.55)_45%,rgb(10_20_48/0.9)_100%)]" />
        <Container className="relative py-24 md:py-32">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-[56px]">Explore What We Do</h2>
          <p className="mt-5 max-w-[560px] text-lg text-soft">
            Comprehensive digital services to build, launch, manage and grow your business.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {serviceCategories.map((c, i) => (
              <a
                key={c}
                href="#directory"
                className="glass flex items-center justify-between rounded-2xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/12"
              >
                <span>
                  <span className="mr-2 text-sky">0{i + 1}</span>
                  {c}
                </span>
                <ArrowUpRight className="size-4 text-ice" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Service directory — Connect feature grid with image reveal */}
      <section id="directory" className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            label="Service directory"
            title="Everything you need, under one roof."
            description="Six disciplines that work together — pick one, or combine them into a complete digital product."
            tone="light"
            className="max-w-[680px]"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {serviceDirectory.map((s, i) => (
              <article
                key={s.name}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-500 hover:border-transparent md:p-8"
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgb(7_13_34/0.88)_0%,rgb(21_41_106/0.82)_100%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="bg-primary glow-primary grid size-12 place-items-center rounded-2xl text-white">
                    <s.icon className="size-5" />
                  </span>
                  <span className="text-xs text-slate transition-colors group-hover:text-ice">0{i + 1}</span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-white md:text-[26px]">{s.name}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-slate transition-colors group-hover:text-soft">{s.description}</p>
                </div>
                <ul className="relative mt-auto flex flex-wrap gap-2 border-t border-ink/10 pt-5 transition-colors group-hover:border-ice/20">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full bg-glow px-3 py-1.5 text-xs text-royal transition-colors group-hover:bg-white/10 group-hover:text-ice">
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose — pillars + Politian donation-style stat card over image */}
      <section className="relative overflow-hidden bg-base py-24 md:py-32">
        <Glow className="-left-40 top-1/2 size-[520px]" />
        <Container className="relative">
          <SectionIntro
            align="center"
            label="Why choose XMEGA?"
            title={
              <>
                Intelligence that moves at <span className="text-gradient">the pace of your business.</span>
              </>
            }
            className="max-w-[760px]"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map(({ title, description, icon: Icon }) => (
              <div key={title} className="surface rounded-3xl p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-electric/15 text-ice">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl ring-1 ring-ice/10">
              <Image src="/images/meeting.jpg" alt="Project planning session" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgb(7_13_34/0.85)_100%)]" />
              {/* Placeholder figures — replace with real project data */}
              <div className="glass absolute inset-x-5 bottom-5 rounded-2xl p-6">
                <p className="text-sm font-semibold text-white">Project Overview</p>
                <p className="mt-3 flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-white">12</span>
                  <span className="text-sm text-soft">active projects this quarter</span>
                </p>
                <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-white/10">
                  <span className="bg-primary w-[60%]" />
                  <span className="w-[25%] bg-ice/70" />
                  <span className="w-[15%] bg-copper/80" />
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-soft">
                  <span><span className="text-sky">●</span> Building 60%</span>
                  <span><span className="text-ice">●</span> Design 25%</span>
                  <span><span className="text-copper">●</span> Discovery 15%</span>
                </div>
              </div>
            </div>

            <div className="bg-signature flex flex-col justify-between gap-10 rounded-3xl p-8 ring-1 ring-ice/15 md:p-10">
              <div>
                <h3 className="text-3xl font-semibold text-white">Results you can act on.</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-white/80">
                  Whether you&apos;re launching fast or refining a product already in place, we keep every project
                  transparent, measured, and moving. No noise — just clear, actionable progress.
                </p>
              </div>
              <div>
                <div className="glass flex items-center gap-5 rounded-2xl p-5">
                  <span className="text-5xl font-bold text-white">94%</span>
                  <span className="text-sm text-white/80">Client retention across engagements</span>
                </div>
                <p className="mt-5 text-sm text-white/70">
                  From first brief to launch and beyond, we handle scale without slowing down.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Work
        label="Our work"
        title="See Our Solutions in Action."
        description="Explore selected projects that demonstrate our approach to solving practical challenges through design and technology."
        limit={2}
      />

      {/* Engagement options — Connect pricing-card layout */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container>
          <SectionIntro
            align="center"
            label="Engagement options"
            title="Flexible Ways to Work With Us."
            description="Choose the engagement model that best fits your project scope, timeline and team needs."
            tone="light"
            className="max-w-[680px]"
          />
          <div className="mx-auto mt-14 grid max-w-[960px] gap-5 md:grid-cols-2">
            {engagementOptions.map((o) => (
              <article
                key={o.name}
                className={`relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 md:p-10 ${
                  o.featured ? "bg-signature" : "card-light"
                }`}
              >
                {o.featured && (
                  <span className="glass absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Most complete
                  </span>
                )}
                <h3 className={`text-2xl font-semibold md:text-[28px] ${o.featured ? "text-white" : "text-ink"}`}>{o.name}</h3>
                <p className={`text-[17px] leading-relaxed ${o.featured ? "text-white/80" : "text-slate"}`}>
                  {o.description}
                </p>
                <ul className={`flex flex-col gap-3 border-t pt-6 ${o.featured ? "border-white/15" : "border-ink/10"}`}>
                  {o.points.map((p) => (
                    <li key={p} className={`flex items-center gap-3 text-[15px] ${o.featured ? "text-white" : "text-ink"}`}>
                      <span className={`grid size-5 place-items-center rounded-full text-white ${o.featured ? "bg-white/20" : "bg-primary"}`}>
                        <Check className="size-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button href={o.href} variant={o.featured ? "light" : "primary"}>
                    {o.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Process />

      <CallToAction
        title={
          <>
            Let&apos;s Build Your Next <span className="text-gradient">Big Idea.</span>
          </>
        }
        description="Have a project in mind? Tell us what you're planning, and we'll explore the right solution for your needs."
        cta="Let's Discuss Your Project"
      />

      <Faq
        label="Frequently asked questions"
        title="Everything You Need to Know."
        description="A few useful starting points for your next digital project. Have something else in mind? Let's talk."
        items={servicesFaqs}
      />
    </main>
  );
}
