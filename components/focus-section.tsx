import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const focusAreas = [
  "Enterprise AI strategy",
  "DevOps / SRE",
  "AIOps & observability",
  "Prompt engineering",
  "Agentic systems",
  "AI education & curriculum design",
  "Admissions consulting",
  "Youth career development",
];

export function FocusSection() {
  return (
    <section id="focus" aria-labelledby="focus-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="focus-heading">Focus Areas</span>
      </SectionHeading>
      <ul className="flex flex-wrap gap-2">
        {focusAreas.map((area) => (
          <li key={area}>
            <Badge
              variant="outline"
              className="px-3 py-1.5 text-sm font-normal transition-colors hover:border-primary/40 hover:bg-accent"
            >
              {area}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
