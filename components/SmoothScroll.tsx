"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Site-wide smooth (inertia) scrolling with Lenis. Off for reduced motion. */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1, // lower = smoother/longer glide
      anchors: { offset: -96 }, // in-page links (#faq …) glide too, clearing the fixed navbar
      stopInertiaOnNavigate: true,
      allowNestedScroll: true, // menus and other scroll boxes keep native scrolling
    });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // New page: start at the top instantly (unless the URL points to a section)
  useEffect(() => {
    if (!window.location.hash) lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
