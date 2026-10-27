import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactFaqs, contactFields, contactSteps } from "@/lib/pages";
import { site } from "@/lib/site";
import { Container, SectionLabel } from "@/components/ui";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell XMEGA what you're planning and how we can help.",
};

export default function ContactPage() {
  // Address and hours only render once they're filled in lib/site.ts
  const channels = [
    { label: "Email", value: site.email.value, href: `mailto:${site.email.value}`, icon: Mail },
    { label: "Phone", value: site.phone.value, href: `tel:${site.phone.value.replace(/\s/g, "")}`, icon: Phone },
    { label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp.value}`, icon: MessageCircle },
    site.address.value && { label: "Office", value: site.address.value, icon: MapPin },
    site.hours.value && { label: "Working hours", value: site.hours.value, icon: Clock },
  ].filter(Boolean) as { label: string; value: string; href?: string; icon: typeof Mail }[];

  return (
    <main>
      {/* 01 + 02 + 03 — Hero, contact information and enquiry form */}
      <section id="enquire" className="bg-paper-soft pb-24 pt-36 md:pb-32 md:pt-44">
        <Container>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate">
            <span className="text-royal">01 — Contact</span>
            <span className="hidden sm:inline">Ideas. Design. Technology.</span>
          </div>
          <h1 className="mt-8 max-w-[980px] text-balance text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-[96px]">
            Let&apos;s Talk About <span className="text-gradient-ink">Your Idea.</span>
          </h1>
          <p className="mt-8 max-w-[600px] text-lg leading-relaxed text-slate md:text-[19px]">
            Tell us what you&apos;re planning, what challenge you&apos;re facing and how we can help.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-[380px_1fr]">
            <aside className="bg-signature relative flex flex-col gap-8 overflow-hidden rounded-[28px] p-8 text-white md:p-10">
              <div>
                <SectionLabel>Get in touch</SectionLabel>
                <p className="mt-5 text-2xl font-semibold leading-snug">Prefer to reach us directly?</p>
              </div>
              <ul className="flex flex-col gap-3">
                {channels.map(({ label, value, href, icon: Icon }) => {
                  const inner = (
                    <>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/12 ring-1 ring-white/20">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.14em] text-ice">{label}</span>
                        <span className="block truncate text-[15px] font-medium">{value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/12">
                          {inner}
                        </a>
                      ) : (
                        <div className="glass flex items-center gap-4 rounded-2xl p-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-auto text-sm text-white/70">
                Working on a student project or internship? Choose it as your service category so it reaches the right
                team.
              </p>
            </aside>

            <div className="card-light rounded-[28px] p-6 shadow-[0_40px_80px_-50px_rgb(27_70_201/0.5)] md:p-10">
              <p className="text-2xl font-semibold text-ink">Send an enquiry</p>
              <p className="mb-8 mt-2 text-slate">Fields marked * are required.</p>
              <EnquiryForm fields={contactFields} subject="New enquiry — XMEGA website" submitLabel="Send Enquiry" />
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — What happens next (no response-time promise until one is agreed) */}
      <Process
        label="What happens next?"
        title="From Your Message to a Clear Plan."
        description="Here's how an enquiry moves forward once you hit send."
        items={contactSteps}
        cta={{ label: "Send an Enquiry", href: "#enquire" }}
      />

      {/* 05 — FAQs */}
      <Faq
        label="Contact FAQs"
        title="Before You Reach Out"
        description="Project enquiries, pricing, scope, support and consultations."
        items={contactFaqs}
      />

      {/* 06 — Final CTA */}
      <CallToAction
        title={
          <>
            Ready When <span className="text-gradient">You Are.</span>
          </>
        }
        description="Submit an enquiry, or reach the team directly on WhatsApp."
        cta="Submit an Enquiry"
        href="#enquire"
        secondary={{ label: "Chat on WhatsApp", href: `https://wa.me/${site.whatsapp.value}` }}
      />
    </main>
  );
}
