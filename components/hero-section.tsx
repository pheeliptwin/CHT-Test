import { ArrowDown, Mail, MapPin } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_30rem_at_top,var(--color-primary)/10%,transparent)]"
      />
      <div className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <Avatar className="size-16 border border-border shadow-sm">
          <AvatarFallback className="bg-primary text-lg font-bold text-primary-foreground">
            PS
          </AvatarFallback>
        </Avatar>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Pheelip Sim
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            AI Educator &amp; Enterprise AI Practitioner — helping organizations
            and students navigate applied AI.
          </p>
        </div>
        <Badge
          variant="secondary"
          className="gap-1.5 font-normal text-muted-foreground"
        >
          <MapPin className="size-3" />
          Singapore
        </Badge>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="mailto:pheeliptwin@gmail.com"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <Mail className="size-4" />
            Get in touch
          </a>
          <a
            href="#experience"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View experience
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
