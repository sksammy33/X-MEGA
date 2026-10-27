import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseFramework } from "@/lib/content";
import { Button, Container, SectionIntro } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Our Work",
  description: "A closer look at the digital experiences, applications and solutions XMEGA has worked on.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        index="01 — Our work"
        title={
          <>
            Ideas Into <span className="text-gradient-ink">Impact.</span>
          </>
        }
        description="A closer look at the digital experiences, applications and solutions we've worked on for businesses, students and innovators."
        actions={<Button href="#gallery">Explore Projects</Button>}
        bandCaption="A space for ideas to take shape."
        bandCta="Scroll to explore"
      />

      <div id="gallery">
        <ProjectGallery />
      </div>

      {/* How we solve problems — case-study framework over atmospheric texture */}
      <section className="relative overflow-hidden">
        <Image src="/images/expertise.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_13_34/0.85)_0%,rgb(10_20_48/0.65)_50%,#0a1430_100%)]" />
        <Container className="relative py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro label="How we solve problems" title="Beyond the Final Screen." />
            <p className="max-w-[260px] text-soft">The questions behind a thoughtful digital experience.</p>
          </div>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseFramework.map((c, i) => (
              <li key={c.title} className="glass flex min-h-[200px] flex-col justify-between rounded-3xl p-7">
                <span className="text-sm font-semibold text-sky">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-medium text-white">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-soft">{c.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-xs text-muted">
            A framework for future case studies. Verified project details and measured outcomes have not yet been supplied.
          </p>
        </Container>
      </section>

      {/* Clients & collaborations — Politian split card */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_440px] lg:items-end">
            <SectionIntro
              label="Our clients & collaborations"
              tone="light"
              title={
                <>
                  Built Through <span className="text-gradient-ink">Collaboration.</span>
                </>
              }
            />
            <p className="text-[17px] leading-relaxed text-slate">
              Good work starts with a shared ambition. Bring your business challenge, student project or next product
              idea. Let&apos;s find the right way forward, together.
            </p>
          </div>

          <div className="card-light mt-14 grid overflow-hidden rounded-3xl md:grid-cols-[380px_1fr]">
            <div className="bg-signature relative flex min-h-[260px] items-center justify-center">
              <div className="flex">
                <span className="size-36 rounded-full border border-white/50" />
                <span className="-ml-10 size-36 rounded-full border border-white/50 bg-white/5 backdrop-blur" />
              </div>
              <span className="absolute bottom-6 text-[11px] uppercase tracking-[0.16em] text-white/80">
                Your ambition × Our craft
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-medium text-ink md:text-[28px]">A space for our next shared story.</h3>
                <ArrowUpRight className="size-6 shrink-0 text-electric" />
              </div>
              <p className="max-w-lg text-[15px] leading-relaxed text-slate">
                Selected client engagements, genuine testimonials and project partnerships will appear here once
                approved for sharing.
              </p>
              <div className="pt-2">
                <Button href="/contact">
                  Start a collaboration
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction
        eyebrow="06 — Your next chapter"
        title={
          <>
            Have a Project <span className="text-gradient">in Mind?</span>
          </>
        }
        description="Your next idea could be our next collaboration. Let's discuss."
        cta="Let's Discuss Your Project"
      />
    </main>
  );
}
