"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (active: boolean) =>
    `relative text-[13px] transition-colors hover:text-heading ${active ? "font-semibold text-heading" : "text-ink-muted"}`;
  const underline = <span className="bg-primary absolute -bottom-2 left-0 h-0.5 w-full rounded-full" />;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full border border-heading/10 bg-white/85 px-5 py-3 backdrop-blur-xl transition-shadow duration-500 md:px-6 ${
          scrolled || open ? "shadow-[0_16px_40px_-24px_color-mix(in_oklab,var(--color-heading)_45%,transparent)]" : ""
        }`}
      >
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-heading">
          XMEGA
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {mainNav.map((item) =>
            "href" in item ? (
              <li key={item.label}>
                <Link href={item.href} className={linkClass(pathname === item.href)}>
                  {item.label}
                  {pathname === item.href && underline}
                </Link>
              </li>
            ) : (
              <li key={item.label} className="group relative">
                <button className={`${linkClass(item.children.some((c) => c.href === pathname))} flex items-center gap-1`}>
                  {item.label}
                  <ChevronDown className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                  {item.children.some((c) => c.href === pathname) && underline}
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-2xl border border-heading/10 bg-white p-2 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-heading)_45%,transparent)]">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className={`block rounded-xl px-4 py-3 transition-colors hover:bg-purple-light ${
                            pathname === c.href ? "bg-purple-light" : ""
                          }`}
                        >
                          <span className="block text-sm font-semibold text-heading">{c.label}</span>
                          <span className="block text-xs text-ink-muted">{c.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary glow-primary hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition sm:inline-flex"
          >
            Let&apos;s Talk <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-heading xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-h-[calc(100vh-6rem)] max-w-[1200px] overflow-y-auto rounded-3xl border border-heading/10 bg-white p-6 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--color-heading)_45%,transparent)] xl:hidden">
          <ul className="flex flex-col gap-1">
            {mainNav
              .flatMap((item) => ("href" in item ? [item] : item.children))
              .map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 text-lg hover:bg-purple-light hover:text-heading ${
                      pathname === l.href ? "bg-purple-light font-semibold text-heading" : "text-ink-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
          >
            Let&apos;s Talk <ArrowUpRight className="size-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
