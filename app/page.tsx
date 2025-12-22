import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechStack } from "@/components/tech-stack";
import { ProjectSection } from "@/components/project-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ContactSection } from "@/components/contact-section";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className=" min-h-screen relative">
      <CustomCursor />
      <Navigation />
      <ScrollProgress />

      <main>
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <footer className="relative border-t border-white/10 bg-black py-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left space-y-2">
              <p className="text-sm font-mono text-muted-foreground">
                © {new Date().getFullYear()} Sandesh Subedi. All rights
                reserved.
              </p>
              <p className="text-xs text-muted-foreground/50">
                Built with Next.js 16, Framer Motion & Matter.js
              </p>
              <p className="text-xs text-muted-foreground/50 font-mono">
                Designed for the future. Optimized for performance.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <FooterLink href="https://github.com" label="GitHub" />
              <FooterLink href="https://linkedin.com" label="LinkedIn" />
              <FooterLink href="mailto:hello@sandesh.dev" label="Email" />
            </div>
          </div>

          {/* Footer decoration */}
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground/50 font-mono">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>System Status: Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
