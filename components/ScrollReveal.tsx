"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/*
  Scroll-in animation for the whole site (Fluxpay / Framer "appear" style):
  headings, text, buttons and cards fade + slide up (with a slight blur) as they
  enter the viewport. Items that appear together are staggered.

  It picks targets automatically inside <main>, so pages need no extra markup:
  - add data-reveal to force an element to animate as one block
  - add data-no-reveal to skip an element and everything inside it
  Respects prefers-reduced-motion.
*/

const TARGETS = [
  "h1",
  "h2",
  "h3",
  "p",
  "blockquote",
  "figure",
  "dl > div",
  "ol > li",
  "ul > li",
  ".grid > *",
  "a.group.inline-flex", // <Button>
  "[data-reveal]",
].join(",");

const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 6;

function collectTargets(root: HTMLElement) {
  const picked: HTMLElement[] = [];
  root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
    if (el.closest("[data-no-reveal], .animate-marquee, header, nav")) return;
    // A layout column that holds a section heading is not a "card": let its children animate.
    if (el.matches(".grid > *") && !el.matches("[data-reveal]") && el.querySelector("h1, h2")) return;
    // Only the outermost target animates, so nothing moves twice.
    if (picked.some((p) => p.contains(el))) return;
    picked.push(el);
  });
  return picked;
}

// React marks DOM nodes it has hydrated with an internal "__reactFiber$…" key.
// Touching classes before that point causes hydration mismatches, so we wait.
const isHydrated = (node: Element | null) =>
  !!node && Object.keys(node).some((k) => k.startsWith("__reactFiber$"));

export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup: (() => void) | undefined;
    let frame = 0;
    let tries = 0;

    const start = () => {
      const main = document.querySelector("main");
      if (!main || reduce || !("IntersectionObserver" in window)) {
        html.classList.remove("reveal-pending");
        return;
      }
      // Wait (max ~2s) until <main> and its last element are hydrated.
      if (!(isHydrated(main) && isHydrated(main.lastElementChild)) && tries++ < 120) {
        frame = requestAnimationFrame(start);
        return;
      }
      cleanup = setup(main, html);
    };

    start();
    return () => {
      cancelAnimationFrame(frame);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}

function setup(main: HTMLElement, html: HTMLElement) {
  {
    const targets = collectTargets(main);
    targets.forEach((el) => el.classList.add("reveal"));
    // Hidden state is now on each element, so the page itself can show.
    html.classList.remove("reveal-pending");

    const finish = (el: HTMLElement) => {
      el.classList.remove("reveal", "reveal-in");
      el.style.removeProperty("transition-delay");
    };

    const io = new IntersectionObserver(
      (entries) => {
        let step = 0;
        entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((e) => {
            const el = e.target as HTMLElement;
            io.unobserve(el);
            el.style.transitionDelay = `${Math.min(step++, MAX_STAGGER_STEPS) * STAGGER_MS}ms`;
            el.classList.add("reveal-in");
            el.addEventListener("transitionend", () => finish(el), { once: true });
            // Safety net in case transitionend never fires
            window.setTimeout(() => finish(el), 1600);
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      targets.forEach(finish);
    };
  }
}
