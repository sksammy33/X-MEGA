"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** Shows the live value of a CSS custom property, so /design-system never drifts from globals.css. */
export function TokenValue({ name, className = "" }: { name: string; className?: string }) {
  const value = useSyncExternalStore(
    noopSubscribe,
    () => getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
    () => "",
  );
  return <span className={className}>{value || " "}</span>;
}
