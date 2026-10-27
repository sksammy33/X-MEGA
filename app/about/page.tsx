import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { aboutAudiences, aboutCapabilities, aboutStats, aboutSteps } from "@/lib/content";
import { Button, Container, Glow, SectionIntro, SectionLabel } from "@/components/ui";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "XMEGA is a full-cycle software development company serving startups, students, freelancers and local businesses.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 01 — Hero: Connect-style centred headline over a wide rounded image, Politian chips */}
      <section className="bg-paper-soft relative overflow-hidden pb-20 pt-36 md:pt-44">
        <Container className="flex flex-col items-center gap-7 text-center">
          <SectionLabel tone="light">About XMEGA</SectionLabel>
          <h1 className="max-w-[980px] text-balance text-5xl font-bold leading-[1.04] tracking-tight text-ink md:text-[80px]">
            Bridging Imagination to <span className="text-gradient-ink">Digital Reality.</span>
          </h1>
          <p className="max-w-[680px] text-lg leading-relaxed text-slate md:text-[19px]">
            We design, build and scale digital solutions that help turn ideas into practical products — from websites
            and mobile applications to AI-powered software and cloud platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="outline" arrow={false}>
              Let&apos;s Connect
            </Button>
          </div>
        </Container>

        <Container className="relative mt-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] md:aspect-[21/9]">
            <Image
              src="/images/presentation.jpg"
              alt="XMEGA team presenting an idea"
              fill
              priority
              sizes="(min-width: 1200px) 1140px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(7_13_34/0.75)_100%)]" />
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white">
                <Sparkles className="size-3.5 text-ice" /> Ideas. Design. Technology.
              </span>
              <div className="hidden gap-3 sm:flex">
                {aboutStats.map((s) => (
                  <div key={s.label} className="glass rounded-2xl px-5 py-3 text-left text-white">
                    <p className="text-2xl font-bold">{s.value}</p>
                    <p className="text-xs text-white/75">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Who we are: Politian about split with image collage */}
      <section className="bg-white py-24 md:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative grid grid-cols-[1.2fr_1fr] gap-4">
            <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/images/developers.jpg" alt="Developers working together" fill sizes="(min-width: 1024px) 320px, 55vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image src="/images/svc-design.jpg" alt="Sketching interface wireframes" fill sizes="(min-width: 1024px) 260px, 45vw" className="object-cover" />
            </div>
            <div className="bg-signature flex flex-col justify-end rounded-3xl p-5 text-white">
              <p className="text-3xl font-bold md:text-4xl">Full-cycle</p>
              <p className="mt-1 text-sm text-white/80">From idea to launch and support</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SectionIntro
              tone="light"
              label="Who we are"
              title={
                <>
                  Technology That Brings <span className="text-gradient-ink">Ideas to Life.</span>
                </>
              }
              description="XMEGA is a full-cycle software development company serving startups, students, freelancers and local businesses. Our services span digital design, software development and online growth solutions."
            />
            <ul className="flex flex-wrap gap-2.5">
              {aboutAudiences.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm text-ink">
                  <Icon className="size-4 text-electric" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 03 — What we do: navy capability grid */}
      <section className="relative overflow-hidden bg-base py-24 md:py-32">
        <Glow className="-right-40 top-10 size-[560px] bg-royal/30" />
        <Container className="relative">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionIntro
              label="What we do"
              title="From Creative Ideas to Complete Digital Solutions."
              className="max-w-[680px]"
            />
            <Button href="/services" className="shrink-0 self-start md:self-auto">
              All Services
            </Button>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutCapabilities.map(({ name, description, icon: Icon }, i) => (
              <article
                key={name}
                className="surface group flex min-h-[220px] flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky/30"
              >
                <div className="flex items-start justify-between">
                  <span className="bg-primary glow-primary grid size-12 place-items-center rounded-2xl text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs text-muted">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-[23px]">{name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-soft">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — Who we serve */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            align="center"
            label="Who we serve"
            title="Solutions for Different Goals and Ambitions."
            className="max-w-[720px]"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutAudiences.map(({ name, description, icon: Icon }, i) => {
              const featured = i === 0;
              return (
                <article
                  key={name}
                  className={`flex min-h-[260px] flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                    featured
                      ? "bg-signature text-white"
                      : "card-light hover:shadow-[0_24px_50px_-28px_rgb(27_70_201/0.45)]"
                  }`}
                >
                  <span
                    className={`grid size-12 place-items-center rounded-2xl ${
                      featured ? "bg-white/15 text-white ring-1 ring-white/20" : "bg-glow text-royal"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className={`text-[22px] font-semibold ${featured ? "text-white" : "text-ink"}`}>{name}</h3>
                    <p className={`mt-2 text-[15px] leading-relaxed ${featured ? "text-white/80" : "text-slate"}`}>
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 05 — Our work & experience + 06 — In numbers */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            label="Our work & experience"
            title={
              <>
                Turning Concepts Into <span className="text-gradient-ink">Deliverables.</span>
              </>
            }
            description="Selected work across business projects, student projects and freelance engagements."
            className="max-w-[680px]"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Business & Client Projects",
                text: "Websites, applications, platforms and software delivered for clients.",
                image: "/images/p-commerce.png",
                href: "/projects",
              },
              {
                title: "Student & Freelance Projects",
                text: "Relevant work presented with its scope, technologies and outcomes.",
                image: "/images/p-ai.png",
                href: "/freelancing",
              },
            ].map((c) => (
              <Link key={c.title} href={c.href} className="card-light group overflow-hidden rounded-3xl p-3">
                <div className="bg-signature rounded-2xl p-3 sm:p-4">
                  <div className="relative aspect-[584/390] overflow-hidden rounded-xl">
                    <Image src={c.image} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6 p-5 md:p-7">
                  <div>
                    <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-royal">{c.title}</h3>
                    <p className="mt-2 text-[15px] text-slate">{c.text}</p>
                  </div>
                  <span className="bg-primary glow-primary grid size-11 shrink-0 place-items-center rounded-full text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate">
            Preview visuals are illustrative concepts. Replace with verified project examples before publishing.
          </p>

          {/* XMEGA in numbers — signature band */}
          <div className="bg-signature relative mt-20 grid overflow-hidden rounded-[32px] md:grid-cols-[1.1fr_1fr]">
            <Image src="/images/network.jpg" alt="" fill sizes="1200px" className="object-cover opacity-30 mix-blend-screen" />
            <div className="relative p-8 md:p-12">
              <SectionLabel>XMEGA in numbers</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-[46px]">Our Progress So Far.</h2>
              <p className="mt-4 max-w-md text-[17px] text-white/80">
                Every number represents an idea we&apos;ve helped turn into something real.
              </p>
            </div>
            <dl className="relative grid grid-cols-2 gap-px self-stretch bg-white/10">
              {aboutStats.map((s) => (
                <div key={s.label} className="flex flex-col justify-center bg-deep/40 p-8 backdrop-blur md:p-10">
                  <dt className="order-2 mt-2 text-sm text-white/75">{s.label}</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white md:text-7xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* 07 — How we work */}
      <Process
        label="How we work"
        title="A Practical Approach to Building Digital Solutions."
        description="A clear, four-step path from understanding your problem to delivering — and supporting — the result."
        items={aboutSteps}
        numbering="dotted"
      />

      {/* 08 — Mission & vision (draft wording — requires company approval before publishing) */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container>
          <SectionIntro tone="light" align="center" label="Our mission & vision" title="Where We Want to Go." className="max-w-[640px]" />
          <div className="mx-auto mt-14 grid max-w-[1000px] gap-5 md:grid-cols-2">
            <article className="bg-signature relative overflow-hidden rounded-3xl p-8 text-white md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-ice">Our mission</p>
              <p className="mt-6 text-2xl font-semibold leading-snug md:text-[28px]">
                To help people and businesses turn ideas into useful digital solutions through design and technology.
              </p>
            </article>
            <article className="card-light rounded-3xl p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-royal">Our vision</p>
              <p className="mt-6 text-2xl font-semibold leading-snug text-ink md:text-[28px]">
                To become a trusted digital partner for businesses, creators and emerging innovators.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* 09 — Final CTA */}
      <CallToAction
        title={
          <>
            Have an Idea? <span className="text-gradient">Let&apos;s Bring It to Life.</span>
          </>
        }
        description="Whether you're starting a business, planning an application or exploring a new digital solution, XMEGA can discuss your requirements and possible next steps."
        cta="Contact XMEGA"
      />
    </main>
  );
}
