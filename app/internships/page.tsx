import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { eligibility, internshipFaqs, internshipFields, internshipSteps, programStructure } from "@/lib/pages";
import { Button, Container, SectionIntro, SectionLabel } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { TrackExplorer } from "@/components/TrackExplorer";
import { Process } from "@/components/Process";
import { FormSection } from "@/components/FormSection";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Virtual Internships",
  description: "Project-based virtual internships with mentorship across web, mobile, design, AI, marketing and QA.",
};

export default function InternshipsPage() {
  return (
    <main>
      <PageHero
        index="01 — Virtual internships"
        title={
          <>
            Learn by Building <span className="text-gradient-ink">Real Projects.</span>
          </>
        }
        description="Work from anywhere. Develop practical skills through project-based learning, mentorship and structured internship tracks."
        actions={
          <>
            <Button href="#tracks">Explore Programs</Button>
            <Button href="#apply" variant="outline" arrow={false}>
              Apply Now
            </Button>
          </>
        }
        bandImage="/images/team.jpg"
        bandCaption="Learn it. Build it. Show it."
        bandCta="Explore the tracks"
      />

      {/* 02 + 03 — Tracks and what you'll learn */}
      <section id="tracks" className="bg-paper-soft scroll-mt-24 py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            label="Internship tracks"
            title={
              <>
                Seven Tracks. <span className="text-gradient-ink">One Goal: Real Skills.</span>
              </>
            }
            description="Pick a track to see the skills, practical assignments and capstone outcome you'll work towards."
            className="max-w-[720px]"
          />
          <TrackExplorer />
        </Container>
      </section>

      {/* 04 — Program structure over image (Politian stat-card treatment) */}
      <section className="relative overflow-hidden">
        <Image src="/images/internships.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_13_34/0.95)_0%,rgb(10_20_48/0.85)_45%,rgb(21_41_106/0.55)_100%)]" />
        <Container className="relative py-24 md:py-32">
          <SectionLabel>Program structure</SectionLabel>
          <h2 className="mt-5 max-w-[620px] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-[46px]">
            Structured to Help You <span className="text-gradient">Learn and Deliver.</span>
          </h2>
          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programStructure.map(({ label, value, icon: Icon }) => (
              <div key={label} className="glass flex min-h-[190px] flex-col justify-between rounded-3xl p-6">
                <Icon className="size-6 text-sky" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-ice">{label}</dt>
                  <dd className="mt-2 text-xl font-semibold text-white">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 05 — Who can apply */}
      <section className="bg-white py-24 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image src="/images/students-laughing.jpg" alt="Students working together" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            <div className="glass absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl px-5 py-3 text-white">
              <GraduationCap className="size-5 text-ice" />
              <span className="text-sm font-medium">Students & fresh graduates</span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <SectionIntro
              tone="light"
              label="Who can apply"
              title="Built for Learners Ready to Build."
              description="If you're studying technology or have just graduated, and you want hands-on experience, you're a great fit."
            />
            <ul className="flex flex-wrap gap-3">
              {eligibility.map((e) => (
                <li key={e} className="rounded-full border border-ink/10 bg-paper px-5 py-2.5 text-[15px] font-medium text-ink">
                  {e}
                </li>
              ))}
            </ul>
            <div>
              <Button href="#apply">Apply Now</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 06 — How it works */}
      <Process
        label="How it works"
        title="From Application to Completion."
        description="A simple five-step journey that keeps your learning focused and your progress visible."
        items={internshipSteps}
        cta={{ label: "Apply Now", href: "#apply" }}
      />

      {/* 07 — Application form + FAQs */}
      <FormSection
        label="Apply now"
        title={
          <>
            Start Your <span className="text-gradient-ink">Internship Journey.</span>
          </>
        }
        description="Tell us a little about yourself and the track you're interested in. We'll get back to you with the next steps."
        points={["Online, work from anywhere", "Mentor support throughout", "Capstone project for your portfolio"]}
        fields={internshipFields}
        subject="Internship application — XMEGA"
        submitLabel="Submit Application"
        note="Program details, including any fees, are confirmed with you before you begin."
      />
      <Faq
        label="Internship FAQs"
        title="Questions About Internships"
        description="Eligibility, duration, schedule, certificates and the application process."
        items={internshipFaqs}
      />
    </main>
  );
}
