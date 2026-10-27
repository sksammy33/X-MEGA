"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  placeholder?: string;
  full?: boolean;
};

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-slate/60 outline-none transition focus:border-electric focus:bg-white focus:ring-4 focus:ring-electric/10";

/**
 * Posts JSON to `site.formEndpoint` when configured; otherwise opens a pre-filled email
 * to the XMEGA inbox so no enquiry is silently lost.
 */
export function EnquiryForm({
  fields,
  subject,
  submitLabel = "Send Enquiry",
  note,
}: {
  fields: Field[];
  subject: string;
  submitLabel?: string;
  note?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: subject, ...data }),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = fields.map((f) => `${f.label}: ${data[f.name] || "—"}`).join("\n");
    window.location.href = `mailto:${site.email.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle2 className="size-12 text-electric" />
        <p className="text-2xl font-semibold text-ink">Thank you — we&apos;ve got your details.</p>
        <p className="max-w-sm text-slate">
          {site.formEndpoint
            ? "Your enquiry has been sent to the XMEGA team."
            : "Your email app should open with everything filled in — just press send."}
        </p>
        <button onClick={() => setStatus("idle")} className="text-sm font-semibold text-royal hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const span = f.full || f.type === "textarea" ? "sm:col-span-2" : "";
        return (
          <label key={f.name} htmlFor={id} className={`flex flex-col gap-2 ${span}`}>
            <span className="text-sm font-medium text-ink">
              {f.label}
              {f.required && <span className="text-electric"> *</span>}
            </span>
            {f.type === "textarea" ? (
              <textarea id={id} name={f.name} required={f.required} placeholder={f.placeholder} rows={5} className={inputClass} />
            ) : f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input id={id} name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} className={inputClass} />
            )}
          </label>
        );
      })}

      <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        {note && <p className="text-xs text-slate">{note}</p>}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-primary glow-primary group inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-70"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" /> : null}
          {submitLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:col-span-2">
          Something went wrong. Please try again or email {site.email.value}.
        </p>
      )}
    </form>
  );
}
