import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const experiences = [
  {
    title: "BHP — Lead Product, Observability & Monitoring",
    detail: "Engineering and operations leader driving technology transformation",
    period: "2014 — Present",
  },
  {
    title: "Founder — Coding Happy Teens",
    detail: "University admissions consulting and teen coaching",
    period: null,
  },
  {
    title: "Mentor — Crimson Education",
    detail: "Software & Technology Capstone program",
    period: null,
  },
  {
    title: "Teen AI Coaching",
    detail:
      "Building an AI literacy and project-based learning coaching business for teens",
    period: null,
  },
  {
    title: "Currently pursuing",
    detail: "Claude Certified Architect – Foundations (CCA-F)",
    period: null,
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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
                {item.period && (
                  <span className="shrink-0 text-xs text-muted-foreground/70">
                    {item.period}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
