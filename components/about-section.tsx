import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="about-heading">About</span>
      </SectionHeading>
      <p className="max-w-2xl text-base leading-7 text-foreground/90">
        Seasoned IT leader with 25+ years in engineering and operations,
        currently at BHP leading observability and monitoring product strategy.
        I help organizations and students navigate applied AI — from enterprise
        AI implementation to teaching the next generation how to build with it.
      </p>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground">
        Beyond technology, I&apos;m passionate about youth development — as a
        life coach, career advisor, and mentor helping teens build resilience
        and discover their strengths in the age of digital disruption.
      </p>
    </section>
  );
}
