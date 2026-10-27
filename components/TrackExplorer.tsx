"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { internshipTracks } from "@/lib/pages";
import { Button } from "./ui";

// Connect-style list + detail panel, on a light section
export function TrackExplorer() {
  const [active, setActive] = useState(0);
  const t = internshipTracks[active];

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <ul className="flex flex-col gap-1.5" role="tablist" aria-label="Internship tracks">
        {internshipTracks.map(({ name, icon: Icon }, i) => {
          const on = i === active;
          return (
            <li key={name}>
              <button
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                  on ? "card-light border-electric/30 shadow-[0_20px_40px_-28px_rgb(27_70_201/0.6)]" : "border-transparent hover:bg-white/60"
                }`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl transition-all ${
                    on ? "bg-primary glow-primary text-white" : "bg-glow text-royal"
                  }`}
                >
                  <Icon className="size-[18px]" />
                </span>
                <span className={`flex-1 text-lg font-semibold ${on ? "text-ink" : "text-slate group-hover:text-ink"}`}>{name}</span>
                <span className="text-xs text-slate">0{i + 1}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div role="tabpanel" className="bg-signature relative flex flex-col gap-8 overflow-hidden rounded-[28px] p-8 text-white md:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-ice">Track 0{active + 1}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.name}</h3>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">What you&apos;ll learn</p>
          <ul className="mt-4 flex flex-col gap-3">
            {t.skills.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[15px]">
                <span className="grid size-5 place-items-center rounded-full bg-white/20">
                  <Check className="size-3" />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-ice">Capstone outcome</p>
          <p className="mt-2 text-lg font-medium">{t.outcome}</p>
        </div>
        <div className="mt-auto">
          <Button href="#apply" variant="light">
            Apply for this track
          </Button>
        </div>
      </div>
    </div>
  );
}
