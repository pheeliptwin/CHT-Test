import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 space-y-4">
      <SectionHeading>
        <span id="contact-heading">Contact</span>
      </SectionHeading>
      <Card className="bg-gradient-to-b from-card to-muted/40">
        <CardContent className="space-y-4">
          <p className="max-w-2xl text-base leading-7 text-foreground/90">
            The best way to reach me is by email — I&apos;m happy to talk about
            enterprise AI, education, or collaborations.
          </p>
          <a
            href="mailto:pheeliptwin@gmail.com"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <Mail className="size-4" />
            pheeliptwin@gmail.com
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
