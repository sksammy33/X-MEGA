"use client";

import { useEffect } from "react";

/*
  Interactive card hover: the card tilts in 3D towards the cursor, lifts a little,
  and a soft light follows the pointer across it.

  Applies to cards inside <main>: .card-light, .card-dark and anything with
  data-tilt. Add data-no-tilt to opt out. Large panels and cards that hold forms
  are skipped. Mouse/trackpad only; off for reduced motion.
*/

const SELECTOR = "main .card-light, main .card-dark, main [data-tilt]";
const MAX_DEG = 6;

function eligible(el: HTMLElement) {
  if (el.closest("[data-no-tilt]")) return false;
  if (el.querySelector("form, input, textarea, select")) return false;
  if (!el.matches("[data-tilt]") && el.getBoundingClientRect().width > 720) return false;
  return true;
}

export function CardTilt() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let current: HTMLElement | null = null;
    let frame = 0;

    const reset = (el: HTMLElement) => {
      el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "";
      el.classList.remove("is-tilting");
    };

    const onMove = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest<HTMLElement>(SELECTOR) ?? null;
      const card = hit && eligible(hit) ? hit : null;

      if (card !== current) {
        if (current) reset(current);
        current = card;
        if (card) {
          if (getComputedStyle(card).position === "static") card.style.position = "relative";
          card.classList.add("tilt", "is-tilting");
          card.style.transition = "transform 0.18s ease-out";
        }
      }
      if (!card) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width; // 0 → 1
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX_DEG}deg) rotateY(${(x - 0.5) * MAX_DEG}deg) translateY(-4px) scale(1.012)`;
      });
    };

    const onLeaveWindow = () => {
      if (current) reset(current);
      current = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
      if (current) reset(current);
    };
  }, []);

  return null;
}
