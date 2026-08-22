import { ArrowDown, Mail, MapPin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <Avatar className="size-20 border-2 border-border shadow-md">
          <AvatarImage src="/profile.jpg" alt="Pheelip Sim" />
          <AvatarFallback className="bg-primary text-xl font-bold text-primary-foreground">
            PS
          </AvatarFallback>
        </Avatar>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Pheelip Sim
          </h1>
          <p className="text-xl font-medium text-foreground/80">
            AI Educator &amp; Enterprise AI Practitioner
          </p>
          <p className="max-w-xl text-base text-muted-foreground">
            I help organizations and students navigate applied AI — from
            enterprise AI implementation to teaching the next generation how to
            build with it.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="secondary"
            className="gap-1.5 font-normal text-muted-foreground"
          >
            <MapPin className="size-3" />
            Singapore
          </Badge>
          <Badge variant="outline" className="font-normal">
            25+ years in tech
          </Badge>
        </div>
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
