import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="about-heading">About</span>
      </SectionHeading>
      <p className="max-w-2xl text-base leading-7 text-foreground/90">
        I help organizations and students navigate applied AI — from enterprise
        AI implementation to teaching the next generation how to build with it.
      </p>
    </section>
  );
}
