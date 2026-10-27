import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { audiences } from "@/lib/content";
import { Container, SectionIntro } from "./ui";

// Politian "why people trust" bento grid, in XMEGA tones
export function Audience() {
  const [startups, local, students, creators] = audiences;

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionIntro
          label="Who we work with"
          title="Solutions for Every Stage of Growth"
          description="A new venture, an established business or your next learning milestone — start with the digital support that fits your needs."
          className="max-w-[680px]"
          tone="light"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[240px_240px]">
          {/* Feature tile — signature gradient */}
          <article className="bg-signature relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-8 text-white md:col-span-2 lg:row-span-2">
            <span className="grid size-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <startups.icon className="size-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-ice">Most common starting point</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{startups.name}</h3>
              <p className="mt-3 max-w-sm text-[17px] text-white/80">{startups.description}</p>
            </div>
          </article>

          {/* Image tile */}
          <article className="group relative min-h-[240px] overflow-hidden rounded-3xl md:col-span-2">
            <Image
              src="/images/team.jpg"
              alt="Students collaborating on laptops"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_13_34/0.92)_0%,rgb(21_41_106/0.55)_65%,rgb(47_107_255/0.15)_100%)]" />
            <div className="relative flex h-full flex-col justify-between p-7 text-white">
              <span className="glass grid size-11 place-items-center rounded-2xl">
                <students.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">{students.name}</h3>
                <p className="mt-1.5 text-soft">{students.description}</p>
              </div>
            </div>
          </article>

          {[local, creators].map(({ name, description, icon: Icon }) => (
            <article
              key={name}
              className="card-light group flex min-h-[240px] flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgb(27_70_201/0.45)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-glow text-royal">
                  <Icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-ink/30 transition-colors group-hover:text-electric" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-ink">{name}</h3>
                <p className="mt-1.5 text-slate">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
