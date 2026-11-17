import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNav } from "@/lib/site";
import { Button, Container } from "./ui";

// White footer (Fluxpay structure)
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-heading/10 bg-white pt-20 text-heading">
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col items-start gap-7">
            <span className="font-display text-2xl font-extrabold tracking-tight">XMEGA</span>
            <p className="font-display max-w-[500px] text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Ready to turn your idea into an <span className="text-gradient-ink">experience?</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button href="/contact">Start Your Project</Button>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-brand">
                Let&apos;s Talk <ArrowUpRight className="size-4 text-brand" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="text-[15px] font-semibold">{col.title}</p>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-[13px] text-ink-muted hover:text-heading">
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p
          aria-hidden
          className="font-display mt-20 select-none text-center text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-purple-light-hover lg:text-[260px]"
        >
          XMEGA
        </p>

        <div className="flex flex-col justify-between gap-3 border-t border-heading/10 py-7 text-xs text-ink-muted sm:flex-row">
          <span>XMEGA · Digital experiences, built around you.</span>
          <span>Ideas. Design. Technology.</span>
        </div>
      </Container>
    </footer>
  );
}
