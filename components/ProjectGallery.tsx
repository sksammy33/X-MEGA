"use client";

import { useState } from "react";
import { projectFilters, projects } from "@/lib/content";
import { Button, Container, ProjectCard, SectionLabel } from "./ui";

export function ProjectGallery() {
  const [filter, setFilter] = useState(projectFilters[0]);
  const visible = filter === projectFilters[0] ? projects : projects.filter((p) => p.filters.includes(filter));

  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-5">
            <SectionLabel tone="light">Project filters</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight text-ink md:text-[46px]">Explore Our Work</h2>
          </div>
          <p className="text-sm text-slate">
            {String(visible.length).padStart(2, "0")} illustrative concept{visible.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Project categories">
          {projectFilters.map((f) => {
            const on = f === filter;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-[13px] transition-all ${
                  on ? "bg-primary glow-primary font-semibold text-white" : "border border-ink/10 bg-paper text-slate hover:border-electric/40 hover:text-ink"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex items-end justify-between gap-6 border-b border-ink/10 pb-6">
          <h3 className="text-3xl font-semibold text-ink md:text-[38px]">Selected Projects</h3>
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-slate sm:block">Concept collection</span>
        </div>
        <p className="mt-4 text-[13px] text-slate">
          Illustrative project concepts, not verified completed XMEGA projects. Replace with actual work before publishing.
        </p>

        {visible.length > 0 ? (
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {visible.map((p) => (
              <ProjectCard key={p.name} project={p} index={projects.indexOf(p)} />
            ))}
          </div>
        ) : (
          <div className="card-light mt-12 flex flex-col items-center gap-5 rounded-3xl px-6 py-20 text-center">
            <p className="text-2xl font-semibold text-ink">Freelance case studies are on their way.</p>
            <p className="max-w-md text-slate">
              We&apos;re preparing write-ups of recent freelance work. In the meantime, explore what we offer.
            </p>
            <Button href="/freelancing">Explore Freelancing</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
