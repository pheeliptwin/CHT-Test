import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const volunteering = [
  {
    role: "Founder & Master Coach",
    org: "Coding Happy Teens",
    detail: "Helping teens discover strengths and build resilience in the age of digital disruption",
  },
  {
    role: "Career Advisor",
    org: "NTUC Youth Career Network",
    detail: "Career coaching and mentorship for graduating students and first job seekers",
  },
  {
    role: "Token Economist & DAO Master",
    org: "Proof of Good DAO",
    detail: "Building innovative not-for-profit NFT services",
  },
  {
    role: "Coach — Network for Teaching Entrepreneurship",
    org: "Halogen Foundation",
    detail: "Activating entrepreneurial mindset in youth from underprivileged communities",
  },
];

export function VolunteeringSection() {
  return (
    <section id="volunteering" aria-labelledby="volunteering-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="volunteering-heading">Volunteering</span>
      </SectionHeading>
      <div className="space-y-3">
        {volunteering.map((item) => (
          <Card key={item.org} className="transition-colors hover:border-primary/40">
            <CardContent>
              <p className="font-medium">
                {item.role} — {item.org}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
