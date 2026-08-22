import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const experiences = [
  {
    title: "Founder — Coding Happy Teens",
    detail: "University admissions consulting",
  },
  {
    title: "Mentor — Crimson Education",
    detail: "Software & Technology Capstone program",
  },
  {
    title: "Teen AI Coaching",
    detail:
      "Building an AI literacy and project-based learning coaching business for teens",
  },
  {
    title: "Currently pursuing",
    detail: "Claude Certified Architect – Foundations (CCA-F)",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="experience-heading">Experience</span>
      </SectionHeading>
      <div className="space-y-3">
        {experiences.map((item) => (
          <Card
            key={item.title}
            className="transition-colors hover:border-primary/40"
          >
            <CardContent>
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
