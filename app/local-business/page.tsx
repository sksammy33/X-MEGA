import type { Metadata } from "next";
import Image from "next/image";
import { Store } from "lucide-react";
import { businessTypes, localBusinessFields, localFaqs, localServices, localSteps, localWhy } from "@/lib/pages";
import { Button, Container, SectionIntro } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { FormSection } from "@/components/FormSection";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "For Local Business",
  description:
    "Practical digital solutions for shops, restaurants, clinics, salons, schools and service providers.",
};

export default function LocalBusinessPage() {
  return (
    <main>
      <PageHero
        index="01 — For local business"
        title={
          <>
            Your Business Deserves a Stronger <span className="text-gradient-ink">Digital Presence.</span>
          </>
        }
        description="Practical digital solutions to help local businesses reach customers, simplify everyday work and grow online."
        actions={<Button href="#enquire">Get a Business Consultation</Button>}
        bandImage="/images/lb-street.jpg"
        bandCaption="Built for the businesses that make a neighbourhood."
        bandCta="Find your solution"
      />

      {/* 02 — Solutions by business type: Politian image cards */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            label="Solutions by business type"
            title="Made for How You Work."
            description="Every business runs differently. Start with the solutions that fit yours."
            className="max-w-[620px]"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map(({ name, description, icon: Icon, image }) => (
              <article key={name} className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 290px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_13_34/0.05)_25%,rgb(10_20_48/0.92)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgb(27_70_201/0.55)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="glass absolute left-6 top-6 grid size-11 place-items-center rounded-2xl">
                  <Icon className="size-5" />
                </span>
                <div className="relative">
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <p className="mt-1.5 text-[15px] text-white/80">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 — Services for local businesses */}
      <section className="bg-paper-soft py-24 md:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image src="/images/lb-retail.jpg" alt="A shop owner using a digital billing system" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            <div className="bg-signature absolute bottom-5 left-5 right-5 rounded-2xl p-5 text-white">
              <p className="text-sm text-ice">From counter to customer</p>
              <p className="mt-1 text-lg font-semibold">Tools that fit everyday business — not the other way around.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <SectionIntro
              tone="light"
              label="Services for local businesses"
              title="Everything You Need to Get Found and Run Smoothly."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {localServices.map(({ name, icon: Icon }) => (
                <li key={name} className="card-light flex items-start gap-4 rounded-2xl p-5">
                  <span className="bg-primary grid size-10 shrink-0 place-items-center rounded-xl text-white">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-ink">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 04 — How we help */}
      <Process
        label="How we help"
        title="Simple Steps. Clear Agreements."
        description="We keep the process practical — so you always know what's happening and what it costs."
        items={localSteps}
        cta={{ label: "Get a Consultation", href: "#enquire" }}
      />

      {/* 05 + 06 — Why XMEGA + local projects placeholder */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionIntro
            tone="light"
            align="center"
            label="Why work with XMEGA"
            title="A Partner That Respects Your Budget."
            className="max-w-[640px]"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localWhy.map(({ title, description, icon: Icon }, i) => (
              <article
                key={title}
                className={`flex min-h-[220px] flex-col justify-between rounded-3xl p-7 ${
                  i === 0 ? "bg-signature text-white" : "border border-ink/10 bg-paper"
                }`}
              >
                <Icon className={`size-6 ${i === 0 ? "text-ice" : "text-electric"}`} />
                <div>
                  <h3 className={`text-xl font-semibold ${i === 0 ? "text-white" : "text-ink"}`}>{title}</h3>
                  <p className={`mt-2 text-[15px] ${i === 0 ? "text-white/80" : "text-slate"}`}>{description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Replace with real local business examples (before/after or product screenshots) */}
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border-2 border-dashed border-ink/15 bg-paper px-6 py-14 text-center">
            <span className="grid size-12 place-items-center rounded-2xl bg-glow text-royal">
              <Store className="size-5" />
            </span>
            <p className="text-2xl font-semibold text-ink">Local business projects</p>
            <p className="max-w-md text-slate">
              Real examples from local businesses we&apos;ve worked with will be shared here once approved.
            </p>
            <Button href="/projects">See Our Work</Button>
          </div>
        </Container>
      </section>

      {/* 07 — Enquiry form + FAQs */}
      <FormSection
        id="enquire"
        label="Business enquiry"
        title={
          <>
            Tell Us About <span className="text-gradient-ink">Your Business.</span>
          </>
        }
        description="Share a few details and we'll recommend practical next steps that fit your goals and budget."
        points={["No obligation consultation", "Scope and budget agreed upfront", "Handover for your staff"]}
        fields={localBusinessFields}
        subject="Local business enquiry — XMEGA"
        submitLabel="Request Consultation"
      />
      <Faq
        label="Local business FAQs"
        title="Questions From Business Owners"
        description="Getting started, costs, staff training and support."
        items={localFaqs}
      />
    </main>
  );
}
