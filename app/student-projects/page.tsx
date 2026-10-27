import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import {
  helpWith,
  projectCategories,
  projectIdeas,
  projectPackages,
  projectSteps,
  studentProjectFaqs,
  studentProjectFields,
} from "@/lib/pages";
import { Button, Container, Glow, SectionIntro } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { FormSection } from "@/components/FormSection";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Student Projects",
  description: "Guidance for minor and major student projects — from topic selection to demo and viva preparation.",
};

export default function StudentProjectsPage() {
  const [minor, major, ...areas] = projectCategories;

  return (
    <main>
      <PageHero
        index="01 — Minor & major projects"
        title={
          <>
            Turn Your Project Idea Into a <span className="text-gradient-ink">Working Solution.</span>
          </>
        }
        description="Get guidance with project selection, development, documentation and preparation for your final demonstration."
        actions={<Button href="#enquire">Discuss Your Project</Button>}
        bandImage="/images/student.jpg"
        bandCaption="Understand it. Build it. Present it with confidence."
        bandCta="Explore categories"
      />

      {/* 02 — Categories: Politian bento */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            label="Project categories"
            title="Support for Every Kind of Project."
            description="From focused semester projects to comprehensive final-year builds across today's key technologies."
            className="max-w-[680px]"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[minor, major].map(({ name, description, icon: Icon }, i) => (
              <article
                key={name}
                className={`flex min-h-[260px] flex-col justify-between rounded-3xl p-8 text-white md:col-span-1 lg:col-span-2 ${
                  i === 1 ? "bg-signature" : "relative overflow-hidden bg-navy"
                }`}
              >
                {i === 0 && (
                  <>
                    <Image src="/images/laptop-glow.jpg" alt="" fill sizes="600px" className="object-cover opacity-50" />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(7_13_34/0.9)_30%,rgb(21_41_106/0.4)_100%)]" />
                  </>
                )}
                <span className="relative grid size-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                  <Icon className="size-5" />
                </span>
                <div className="relative">
                  <h3 className="text-3xl font-bold tracking-tight">{name}</h3>
                  <p className="mt-2 text-[17px] text-white/80">{description}</p>
                </div>
              </article>
            ))}
            {areas.map(({ name, description, icon: Icon }) => (
              <article
                key={name}
                className="group flex min-h-[200px] flex-col justify-between rounded-3xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgb(27_70_201/0.45)]"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-glow text-royal transition-all group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{name}</h3>
                  <p className="mt-1.5 text-[15px] text-slate">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 — What we help with + transparency commitment */}
      <section className="relative overflow-hidden bg-base py-24 md:py-32">
        <Glow className="-right-40 top-0 size-[560px] bg-royal/30" />
        <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionIntro
              label="What we help with"
              title="Guidance at Every Stage."
              description="From choosing the right topic to standing in front of your examiners — we support the parts that matter most."
            />
            <ul className="grid grid-cols-2 gap-3">
              {helpWith.map(({ name, icon: Icon }) => (
                <li key={name} className="surface flex items-center gap-3 rounded-2xl px-4 py-4 text-[15px] font-medium text-white">
                  <span className="bg-primary grid size-9 shrink-0 place-items-center rounded-xl">
                    <Icon className="size-4" />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-3xl">
              <Image src="/images/svc-design.jpg" alt="Planning a project on paper" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
            <div className="bg-signature flex gap-5 rounded-3xl p-7">
              <ShieldCheck className="size-8 shrink-0 text-ice" />
              <div>
                <p className="text-lg font-semibold text-white">Our commitment: you learn, you own it.</p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                  We focus on helping you understand your project and explain it independently. We don&apos;t make
                  guarantees about grades or outcomes — and we never aim to replace your learning.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — Popular ideas */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionIntro
              tone="light"
              label="Popular project ideas"
              title="Need Inspiration?"
              description="A few ideas students often explore. We'll help you shape one to your course and interests."
              className="max-w-[620px]"
            />
            <Button href="#enquire" className="shrink-0 self-start md:self-auto">
              Suggest My Topic
            </Button>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectIdeas.map((idea, i) => (
              <li
                key={idea.name}
                className="card-light group flex items-center justify-between gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-electric/30"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gradient-ink text-3xl font-bold">0{i + 1}</span>
                  <div>
                    <p className="text-lg font-semibold text-ink">{idea.name}</p>
                    <p className="text-xs uppercase tracking-wider text-royal">{idea.tag}</p>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-ink/30 transition-colors group-hover:text-electric" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 05 — Process */}
      <Process
        label="Our process"
        title="A Clear, Guided Process."
        description="Five steps from first conversation to a demo you can confidently present."
        items={projectSteps}
        cta={{ label: "Discuss Your Project", href: "#enquire" }}
      />

      {/* 06 — Packages (Connect pricing layout, scope only — pricing after discussion) */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            align="center"
            label="Deliverables & packages"
            title="Choose the Right Level of Support."
            description="Pricing depends on scope and is shared after we understand your requirements."
            className="max-w-[680px]"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projectPackages.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col gap-6 rounded-3xl p-8 ${
                  p.featured ? "bg-signature text-white lg:-my-4 lg:py-12" : "card-light"
                }`}
              >
                {p.featured && (
                  <span className="glass absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    Final year
                  </span>
                )}
                <h3 className={`text-2xl font-semibold ${p.featured ? "text-white" : "text-ink"}`}>{p.name}</h3>
                <p className={`text-[15px] ${p.featured ? "text-white/80" : "text-slate"}`}>{p.description}</p>
                <ul className={`flex flex-col gap-3 border-t pt-6 ${p.featured ? "border-white/15" : "border-ink/10"}`}>
                  {p.points.map((pt) => (
                    <li key={pt} className={`flex items-center gap-3 text-[15px] ${p.featured ? "text-white" : "text-ink"}`}>
                      <span className={`grid size-5 place-items-center rounded-full text-white ${p.featured ? "bg-white/20" : "bg-primary"}`}>
                        <Check className="size-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Button href="#enquire" variant={p.featured ? "light" : "primary"}>
                    Enquire
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 07 — Enquiry form + FAQs */}
      <FormSection
        id="enquire"
        label="Project enquiry"
        title={
          <>
            Let&apos;s Plan <span className="text-gradient-ink">Your Project.</span>
          </>
        }
        description="Share your project type, deadline and any institution requirements. We'll suggest the right scope and next steps."
        points={["Guidance shaped to your syllabus", "Clear milestones before your deadline", "Help to explain your project confidently"]}
        fields={studentProjectFields}
        subject="Student project enquiry — XMEGA"
        submitLabel="Send Enquiry"
      />
      <Faq
        label="Project FAQs"
        title="Questions About Project Support"
        description="Technology, timelines, deliverables, pricing and institution requirements."
        items={studentProjectFaqs}
      />
    </main>
  );
}
