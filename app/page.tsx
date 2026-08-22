import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { FocusSection } from "@/components/focus-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { VolunteeringSection } from "@/components/volunteering-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-6">
        <HeroSection />
        <Separator />
        <div className="space-y-16 py-16">
          <AboutSection />
          <ExperienceSection />
          <VolunteeringSection />
          <FocusSection />
          <ContactSection />
        </div>
        <SiteFooter />
      </main>
    </div>
  );
}
