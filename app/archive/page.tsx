import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ArchivePage() {
  const { insights, personal } = PORTFOLIO_DATA;

  interface ArchiveItem {
    title: string;
    date: string;
    summary: string;
    category?: string;
    link?: string;
  }

  // Let's pretend we have a longer list for the archive
  const archiveItems: ArchiveItem[] = [
    ...insights,
    {
        title: "The Death of the Private Key",
        date: "Aug 2025",
        summary: "Why Account Abstraction (ERC-4337) is the only path to mass adoption.",
        category: "Security",
        link: "#"
    },
    {
        title: "Rust vs Solidity: A Systems Engineer's Perspective",
        date: "June 2025",
        summary: "Comparing memory safety, tooling, and developer velocity across the two dominant smart contract languages.",
        category: "Languages",
        link: "#"
    },
    {
        title: "Building Resilient Oracles",
        date: "Mar 2025",
        summary: "Lessons learned from securing $50M in TVL against flash loan attacks.",
        category: "Infrastructure",
        link: "#"
    }
  ];

  return (
    <main className="min-h-screen relative z-0 pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5 mb-12">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-blue-400" href="/">
                <ArrowLeft size={16} /> Back to Portfolio
            </Button>
            <span className="font-mono text-sm text-slate-500 hidden sm:block">
                {personal.name} / Archive
            </span>
        </div>
      </nav>

      <Section className="max-w-4xl">
        <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Archive</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                A collection of thoughts on distributed systems, cryptography, and the future of the internet.
            </p>
        </div>

        <div className="space-y-4">
            {archiveItems.map((item, idx) => (
                <a 
                    key={idx} 
                    href={item.link || "#"}
                    className="block group"
                >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 p-6 rounded-lg border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-blue-500/30 transition-all">
                        <div className="sm:w-32 flex-shrink-0 flex items-center gap-2 text-slate-500 font-mono text-sm">
                            <Calendar size={14} />
                            {item.date}
                        </div>
                        
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-3">
                                {item.title}
                                <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-500" />
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-3">
                                {item.summary}
                            </p>
                            {item.category && (
                                <Badge variant="outline" className="text-xs border-white/10 text-slate-500">
                                    {item.category}
                                </Badge>
                            )}
                        </div>
                    </div>
                </a>
            ))}
        </div>
      </Section>
    </main>
  );
}
