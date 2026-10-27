import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Check } from "lucide-react";
import { careerFields, careerTeams, careerWhy, hiringSteps, openPositions } from "@/lib/pages";
import { Button, Container, SectionIntro } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { FormSection } from "@/components/FormSection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore opportunities to build digital products, software and technology projects with XMEGA.",
};

export default function CareersPage() {
  const [first, ...rest] = careerWhy;

  return (
    <main>
      <PageHero
        index="01 — Careers"
        title={
          <>
            Build What&apos;s Next <span className="text-gradient-ink">With XMEGA.</span>
          </>
        }
        description="Explore opportunities to contribute to digital products, software and technology projects."
        actions={
          <>
            <Button href="#positions">View Open Positions</Button>
            <Button href="#apply" variant="outline" arrow={false}>
              Send Your Resume
            </Button>
          </>
        }
        bandImage="/images/career-office.jpg"
        bandCaption="Good work, built by people who care about it."
        bandCta="Why join us"
      />

      {/* 02 — Why work with us: bento */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            label="Why work with us"
            title="Grow by Building Things That Matter."
            className="max-w-[620px]"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[230px_230px]">
            <article className="group relative min-h-[300px] overflow-hidden rounded-3xl md:col-span-2 lg:row-span-2">
              <Image src="/images/career-team.jpg" alt="Team members collaborating" fill sizes="(min-width: 1024px) 580px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(10_20_48/0.92)_100%)]" />
              <div className="absolute bottom-0 p-8 text-white">
                <first.icon className="size-6 text-ice" />
                <h3 className="mt-4 text-3xl font-bold">{first.title}</h3>
                <p className="mt-2 max-w-sm text-white/80">{first.description}</p>
              </div>
            </article>
            {rest.map(({ title, description, icon: Icon }, i) => (
              <article
                key={title}
                className={`flex flex-col justify-between rounded-3xl p-7 ${
                  i === 2 ? "bg-signature text-white md:col-span-2" : "border border-ink/10 bg-paper"
                }`}
              >
                <Icon className={`size-6 ${i === 2 ? "text-ice" : "text-electric"}`} />
                <div>
                  <h3 className={`text-xl font-semibold ${i === 2 ? "text-white" : "text-ink"}`}>{title}</h3>
                  <p className={`mt-2 text-[15px] ${i === 2 ? "text-white/80" : "text-slate"}`}>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 + 04 — Open positions and teams */}
      <section id="positions" className="bg-paper-soft scroll-mt-24 py-24 md:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionIntro tone="light" label="Open positions" title="Current Opportunities." className="max-w-[560px]" />
            <div className="flex flex-wrap gap-2">
              {careerTeams.map(({ name, icon: Icon }) => (
                <span key={name} className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink">
                  <Icon className="size-4 text-electric" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {openPositions.length > 0 ? (
            <ul className="mt-12 flex flex-col gap-4">
              {openPositions.map((p) => (
                <li key={p.role} className="card-light grid gap-6 rounded-3xl p-7 md:grid-cols-[1fr_1.4fr_auto] md:items-start">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-royal">{p.team}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">{p.role}</h3>
                    <p className="mt-2 text-sm text-slate">
                      {p.experience} · {p.mode}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Responsibilities", p.responsibilities],
                      ["Skills", p.skills],
                    ].map(([title, items]) => (
                      <div key={title as string}>
                        <p className="text-sm font-semibold text-ink">{title}</p>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {(items as string[]).map((it) => (
                            <li key={it} className="flex gap-2 text-sm text-slate">
                              <Check className="mt-0.5 size-3.5 shrink-0 text-electric" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Button href="#apply">Apply</Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="card-light mt-12 grid items-center gap-8 rounded-3xl p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
              <span className="bg-primary glow-primary grid size-14 place-items-center rounded-2xl text-white">
                <Briefcase className="size-6" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-ink">No open positions right now.</h3>
                <p className="mt-2 max-w-xl text-slate">
                  We&apos;re not actively hiring for a specific role at the moment. You&apos;re welcome to share your
                  resume — we&apos;ll reach out when a relevant opportunity opens.
                </p>
              </div>
              <Button href="#apply" className="justify-self-start">
                Submit Your Resume
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 05 — Hiring process */}
      <Process
        label="Hiring process"
        title="A Clear, Respectful Hiring Process."
        description="Four simple stages, and we keep you informed at each one."
        items={hiringSteps}
        cta={{ label: "Apply Now", href: "#apply" }}
      />

      {/* 06 + 07 — No suitable opening / application form */}
      <FormSection
        label="Apply"
        title={
          <>
            Don&apos;t See the Right Role? <span className="text-gradient-ink">Tell Us Anyway.</span>
          </>
        }
        description="Apply for an open role, or share your resume for future opportunities in the team that fits you best."
        points={["Every application is reviewed", "Share a resume link we can open", "Portfolios and GitHub welcome"]}
        fields={careerFields}
        subject="Job application — XMEGA"
        submitLabel="Submit Application"
        note="Looking for an internship instead? Visit the Internships page."
      />
    </main>
  );
}
