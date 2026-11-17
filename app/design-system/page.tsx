import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { Button, Container, SectionIntro, SectionLabel } from "@/components/ui";
import { TokenValue } from "@/components/TokenValue";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

// Same 10 states as the Figma colour styles. Values are read live from globals.css.
const states = [
  "light",
  "light-hover",
  "light-active",
  "normal",
  "normal-hover",
  "normal-active",
  "dark",
  "dark-hover",
  "dark-active",
  "darker",
] as const;

const palettes = [
  { name: "purple", role: "Brand primary: buttons, headings, dark sections" },
  { name: "lilac", role: "Soft accent: glows, dots, highlights on dark" },
  { name: "mauve", role: "Purple-tinted greys: text on dark, soft borders" },
  { name: "neutral", role: "Clean whites and greys" },
];

const semantic: { token: string; maps: string; use: string }[] = [
  { token: "surface", maps: "neutral-light", use: "Page background, light sections" },
  { token: "surface-2", maps: "neutral-light-active", use: "Alternate light band" },
  { token: "heading", maps: "purple-dark-hover", use: "Headings on light" },
  { token: "ink", maps: "neutral-ink", use: "Body text on light" },
  { token: "ink-muted", maps: "mauve-dark", use: "Secondary text on light" },
  { token: "surface-dark", maps: "purple-darker", use: "Darkest section background" },
  { token: "surface-dark-2", maps: "purple-dark-active", use: "Ambient dark sections" },
  { token: "surface-dark-3", maps: "purple-dark-hover", use: "Raised dark panels" },
  { token: "surface-dark-4", maps: "purple-dark", use: "Dark card tint" },
  { token: "on-dark", maps: "mauve-light-active", use: "Body text on dark" },
  { token: "on-dark-muted", maps: "mauve-normal", use: "Secondary text on dark" },
  { token: "brand", maps: "purple-normal", use: "Primary brand colour" },
  { token: "brand-bright", maps: "purple-normal", use: "Links, icons, focus ring" },
  { token: "accent", maps: "lilac-normal", use: "Glows and dots" },
  { token: "accent-soft", maps: "purple-light-active", use: "Labels and lines on dark" },
  { token: "accent-faint", maps: "purple-light-hover", use: "Icon chips on light" },
  { token: "highlight", maps: "blush", use: "Warm light leaks" },
];

const typeScale = [
  { label: "Display / H1", cls: "font-display text-5xl font-bold tracking-tight text-ink md:text-6xl", sample: "Turning ideas into digital experiences" },
  { label: "H2", cls: "font-display text-4xl font-bold tracking-tight text-ink md:text-[46px]", sample: "A clear path from idea to execution" },
  { label: "H3", cls: "font-display text-2xl font-semibold text-ink", sample: "Business & client projects" },
  { label: "Body large", cls: "text-[17px] leading-relaxed text-ink-muted", sample: "From websites and mobile apps to AI-powered solutions, XMEGA designs and develops technology that helps businesses grow." },
  { label: "Body", cls: "text-base leading-relaxed text-ink-muted", sample: "Every project follows a structured path that keeps goals, design and delivery aligned." },
  { label: "Label", cls: "text-xs font-semibold uppercase tracking-wider text-brand", sample: "Our services" },
];

const icons = [
  { Icon: Code2, name: "Code2" },
  { Icon: Smartphone, name: "Smartphone" },
  { Icon: Globe, name: "Globe" },
  { Icon: Layers, name: "Layers" },
  { Icon: Rocket, name: "Rocket" },
  { Icon: Lightbulb, name: "Lightbulb" },
  { Icon: Target, name: "Target" },
  { Icon: BarChart3, name: "BarChart3" },
  { Icon: ShieldCheck, name: "ShieldCheck" },
  { Icon: Users, name: "Users" },
  { Icon: Briefcase, name: "Briefcase" },
  { Icon: Building2, name: "Building2" },
  { Icon: Calendar, name: "Calendar" },
  { Icon: CheckCircle2, name: "CheckCircle2" },
  { Icon: Mail, name: "Mail" },
  { Icon: Phone, name: "Phone" },
  { Icon: MapPin, name: "MapPin" },
  { Icon: ArrowRight, name: "ArrowRight" },
];

const darkText = (p: string, s: string) =>
  s.startsWith("light") || ((p === "neutral" || p === "mauve") && s.startsWith("normal"));

export default function DesignSystemPage() {
  return (
    <main className="bg-surface pb-28 pt-36 md:pt-44">
      <Container className="flex flex-col gap-24">
        <SectionIntro
          tone="light"
          label="Design system"
          title={<>XMEGA <span className="text-gradient-ink">design system</span></>}
          description="Every colour, font and effect on the site comes from app/globals.css. Change a value there and this page, and the whole website, updates."
        />

        {/* 1. Palette */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-heading">1. Colour palette</h2>
          <p className="max-w-2xl text-ink-muted">
            The full palette of fluxpay.framer.ai: white pages, a deep purple brand, lilac accents and purple-tinted greys. Each
            colour has the same ten states as Figma colour styles, and the Tailwind classes use the same names, for
            example <code className="text-brand">bg-purple-normal</code> and{" "}
            <code className="text-brand">hover:bg-purple-normal-hover</code>.
          </p>
          {palettes.map((p) => (
            <div key={p.name} className="flex flex-col gap-3">
              <p className="text-sm font-semibold capitalize text-ink">
                {p.name} <span className="font-normal normal-case text-ink-muted">· {p.role}</span>
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
                {states.map((s) => (
                  <div
                    key={s}
                    className={`flex aspect-[4/3] flex-col justify-end rounded-xl border border-ink/5 p-2.5 text-[11px] leading-tight lg:aspect-[3/4] ${
                      darkText(p.name, s) ? "text-ink" : "text-white"
                    } ${s === "normal" ? "ring-2 ring-brand-bright ring-offset-2 ring-offset-surface" : ""}`}
                    style={{ background: `var(--color-${p.name}-${s})` }}
                  >
                    <span className="font-semibold">{s}</span>
                    <TokenValue name={`--color-${p.name}-${s}`} className="opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm text-ink-muted">
            Also available: <code className="text-brand">neutral-ink</code> (Fluxpay body text #2f2c25), <code className="text-brand">blush</code> (Fluxpay pink tint #ffe0fc) and{" "}
            <code className="text-brand">danger</code> / <code className="text-brand">success</code> for form states.
          </p>
        </section>

        {/* 2. Semantic */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-heading">2. Semantic tokens</h2>
          <p className="max-w-2xl text-ink-muted">
            Components use these names, for example <code className="text-brand">bg-surface-dark</code> or{" "}
            <code className="text-brand">text-ink-muted</code>. To recolour the site, point a token at a different
            palette colour.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {semantic.map((t) => (
              <div key={t.token} className="card-light flex items-center gap-4 rounded-2xl p-3">
                <span
                  className="size-12 shrink-0 rounded-xl border border-ink/10"
                  style={{ background: `var(--color-${t.token})` }}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{t.token}</p>
                  <p className="text-xs text-ink-muted">→ {t.maps}</p>
                  <p className="text-xs text-ink-muted">{t.use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Typography */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-heading">3. Typography</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-light rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Primary · headings</p>
              <p className="font-display mt-3 text-4xl font-bold text-ink">Plus Jakarta Sans</p>
              <p className="font-display mt-2 text-ink-muted">Aa Bb Cc 0123456789 · 400 500 600 700 800</p>
            </div>
            <div className="card-light rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Secondary · body</p>
              <p className="mt-3 font-sans text-4xl font-semibold text-ink">Inter</p>
              <p className="mt-2 font-sans text-ink-muted">Aa Bb Cc 0123456789 · 400 500 600 700</p>
            </div>
          </div>
          <div className="card-light divide-y divide-ink/10 rounded-2xl">
            {typeScale.map((t) => (
              <div key={t.label} className="grid gap-2 p-6 md:grid-cols-[160px_1fr] md:items-baseline">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{t.label}</p>
                <p className={t.cls}>{t.sample}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">Rule: no italic text anywhere. It is switched off globally in globals.css.</p>
        </section>

        {/* 4. Icons */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-heading">4. Icons</h2>
          <p className="max-w-2xl text-ink-muted">
            One library only: <strong className="text-ink">Lucide</strong> (lucide-react), with 1,500+ outline icons.
            Import by name from <code className="text-brand">lucide-react</code>. Sizes: <code className="text-brand">size-4</code>{" "}
            inline and buttons, <code className="text-brand">size-5</code> nav and chips,{" "}
            <code className="text-brand">size-6</code> feature cards. Default 2px stroke, colour from text tokens.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {icons.map(({ Icon, name }) => (
              <div key={name} className="card-light flex flex-col items-center gap-3 rounded-2xl p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-purple-light text-brand">
                  <Icon className="size-5" />
                </span>
                <span className="text-[11px] text-ink-muted">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Components */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-heading">5. Components and effects</h2>
          <div className="card-light flex flex-wrap items-center gap-4 rounded-2xl p-6">
            <Button href="/design-system">Primary</Button>
            <Button href="/design-system" variant="outline">Outline</Button>
            <Button href="/design-system" variant="light">Light</Button>
            <SectionLabel tone="light">Section label</SectionLabel>
          </div>
          <div className="bg-signature flex flex-wrap items-center gap-4 rounded-3xl p-8">
            <Button href="/design-system">Primary</Button>
            <Button href="/design-system" variant="light">Light</Button>
            <Button href="/design-system" variant="ghost">Ghost</Button>
            <SectionLabel>Section label</SectionLabel>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-signature flex h-40 items-end rounded-3xl p-5 text-sm font-semibold text-white">bg-signature</div>
            <div className="bg-ambient flex h-40 items-end rounded-3xl p-5 text-sm font-semibold text-white">bg-ambient</div>
            <div className="bg-surface-soft card-light flex h-40 items-end rounded-3xl p-5 text-sm font-semibold text-ink">bg-surface-soft</div>
            <div className="bg-primary flex h-40 items-end rounded-3xl p-5 text-sm font-semibold text-white">bg-primary</div>
            <div className="bg-surface-dark flex h-40 flex-col justify-end gap-1 rounded-3xl p-5">
              <p className="text-gradient font-display text-3xl font-bold">Gradient text</p>
              <p className="text-sm text-on-dark">text-gradient on dark</p>
            </div>
            <div className="card-light flex h-40 flex-col justify-end gap-1 rounded-3xl p-5">
              <p className="text-gradient-ink font-display text-3xl font-bold">Gradient text</p>
              <p className="text-sm text-ink-muted">text-gradient-ink on light</p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
