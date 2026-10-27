import { projects } from "@/lib/content";
import { Button, Container, ProjectCard, SectionIntro } from "./ui";

export function Work({
  label = "Featured work",
  title = "Ideas We've Brought to Life",
  description = "Explore digital products and experiences created to solve real-world challenges.",
  limit = 4,
}: {
  label?: string;
  title?: string;
  description?: string;
  limit?: number;
}) {
  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro label={label} title={title} description={description} tone="light" className="max-w-[640px]" />
          <Button href="/projects" className="shrink-0 self-start md:self-auto">
            View All Projects
          </Button>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.slice(0, limit).map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        <p className="mt-12 text-xs text-slate">
          Illustrative concept projects, not verified client work. Shown to explore possible digital experiences.
        </p>
      </Container>
    </section>
  );
}
