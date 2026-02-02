import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechnicalInsights } from "@/components/sections/TechnicalInsights";
import { Contact } from "@/components/sections/Contact";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative z-0">
        {/* Navigation - simplified for this iteration, keeping it inside page or layout is fine, putting it here as fixed overlay */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-white/5">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between text-sm">
                <span className="font-bold text-lg tracking-tight">{PORTFOLIO_DATA.personal.name}</span>
                <div className="hidden md:flex gap-8">
                    {PORTFOLIO_DATA.navigation.map(link => (
                        <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>

      <Hero />
      <About />
      <TechStack />
      <CaseStudies />
      <TechnicalInsights />
      <Contact />
    </main>
  );
}
