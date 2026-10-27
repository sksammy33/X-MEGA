import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNav } from "@/lib/site";
import { Button, Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ice/10 bg-night pt-20 text-white">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[380px] w-[1000px] -translate-x-1/2 rounded-full bg-royal/35 blur-[140px]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="flex flex-col items-start gap-7">
            <span className="text-2xl font-extrabold tracking-tight">XMEGA</span>
            <p className="max-w-[500px] text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Ready to turn your idea into an <span className="text-gradient">experience?</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button href="/contact">Start Your Project</Button>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-ice">
                Let&apos;s Talk <ArrowUpRight className="size-4 text-sky" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="text-[15px] font-semibold">{col.title}</p>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-[13px] text-soft hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p
          aria-hidden
          className="text-gradient mt-20 select-none text-center text-[22vw] font-extrabold leading-[0.8] tracking-tighter opacity-25 lg:text-[260px]"
        >
          XMEGA
        </p>

        <div className="flex flex-col justify-between gap-3 border-t border-ice/10 py-7 text-xs text-muted sm:flex-row">
          <span>XMEGA · Digital experiences, built around you.</span>
          <span>Ideas. Design. Technology.</span>
        </div>
      </Container>
    </footer>
  );
}
