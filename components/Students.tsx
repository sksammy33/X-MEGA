import Image from "next/image";
import { Check } from "lucide-react";
import { pathways } from "@/lib/content";
import { Button, Container, SectionIntro } from "./ui";

// Politian event-list cards: image left, details right
export function Students() {
  return (
    <section id="students" className="bg-paper-soft py-24 md:py-32">
      <Container>
        <SectionIntro
          label="Internships & student projects"
          title="Learn, Build & Grow With XMEGA"
          description="Connect what you learn with what you can create. Explore hands-on pathways for practical experience and academic project support."
          className="max-w-[720px]"
          tone="light"
        />

        <div className="mt-14 flex flex-col gap-6">
          {pathways.map((p, i) => (
            <article
              key={p.title}
              className="card-light group grid overflow-hidden rounded-3xl p-3 transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgb(27_70_201/0.5)] md:grid-cols-[minmax(0,460px)_1fr]"
            >
              <div className="relative aspect-[536/310] overflow-hidden rounded-2xl md:aspect-auto md:min-h-[300px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Pathway 0{i + 1}
                </span>
              </div>
              <div className="flex flex-col justify-center gap-4 p-5 md:p-10">
                <p className="text-xs uppercase tracking-[0.14em] text-royal">{p.eyebrow}</p>
                <h3 className="text-2xl font-semibold text-ink md:text-[28px]">{p.title}</h3>
                <p className="text-[17px] leading-relaxed text-slate">{p.description}</p>
                <ul className="flex flex-col gap-2.5 border-t border-ink/10 py-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[15px] text-ink">
                      <span className="bg-primary grid size-5 place-items-center rounded-full">
                        <Check className="size-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button href={p.href}>{p.cta}</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
