import { Button, Container, SectionLabel } from "./ui";

// Connect-style centred statement
export function Statement() {
  return (
    <section id="about" className="bg-paper-soft py-24 md:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionLabel tone="light">Why choose us</SectionLabel>
        <h2 className="text-2xl font-semibold tracking-tight text-slate md:text-[32px]">
          Built on Ideas. Backed by Results.
        </h2>
        <p className="max-w-[900px] text-balance text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[32px] md:leading-[1.35]">
          We bring design and development together to turn your ideas into useful digital products
          <span className="text-slate"> — built around your needs, your users and your next stage of growth.</span>
        </p>
        <Button href="/services" className="mt-2">
          Explore Our Services
        </Button>
      </Container>
    </section>
  );
}
