import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { Container, SectionIntro } from "./ui";
import { EnquiryForm, type Field } from "./EnquiryForm";

// Two-column form block: intro + reassurance points on the left, form card on the right
export function FormSection({
  id = "apply",
  label,
  title,
  description,
  points = [],
  aside,
  fields,
  subject,
  submitLabel,
  note,
}: {
  id?: string;
  label: string;
  title: ReactNode;
  description: string;
  points?: string[];
  aside?: ReactNode;
  fields: Field[];
  subject: string;
  submitLabel?: string;
  note?: string;
}) {
  return (
    <section id={id} className="bg-paper-soft scroll-mt-24 py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro tone="light" label={label} title={title} description={description} />
          {points.length > 0 && (
            <ul className="flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="bg-primary mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white">
                    <Check className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          )}
          {aside}
        </div>
        <div className="card-light rounded-[28px] p-6 shadow-[0_40px_80px_-50px_rgb(27_70_201/0.5)] md:p-10">
          <EnquiryForm fields={fields} subject={subject} submitLabel={submitLabel} note={note} />
        </div>
      </Container>
    </section>
  );
}
