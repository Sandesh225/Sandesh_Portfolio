"use client";

import Navigation from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechStack } from "@/components/tech-stack";
import { ProjectSection } from "@/components/project-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ContactSection } from "@/components/contact-section";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Footer } from "@/components/footer";

export default function PortfolioApp() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <CustomCursor />
      <Navigation />
      <ScrollProgress />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
