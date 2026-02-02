"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const CaseStudies = () => {
  const { caseStudies } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState("All");

  const filteredStudies = caseStudies.filter(study => {
    if (filter === "All") return true;
    return study.type.includes(filter);
  });

  return (
    <Section id="work" className="bg-slate-900/40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Architecture</h2>
          <p className="text-slate-400">Deep dives into complex systems.</p>
        </div>
        <div className="flex gap-2">
            {["All", "Web3", "Systems"].map((category) => (
                <Badge 
                    key={category}
                    onClick={() => setFilter(category)}
                    variant={filter === category ? "accent" : "outline"} 
                    className="cursor-pointer hover:border-blue-500/50 transition-colors"
                >
                    {category}
                </Badge>
            ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            layout // Smoothly animate layout changes when filtering
          >
            <Card hoverEffect className="group overflow-hidden">
                <div className="grid md:grid-cols-[1.5fr,2fr] gap-8">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider border border-blue-500/20 px-2 py-1 rounded">
                                    {study.type}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                {study.title}
                            </h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                {study.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {study.stack.map(tech => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <Button variant="outline" className="w-fit gap-2" href={study.link} target="_blank">
                            View Case Study <ArrowUpRight size={16} />
                        </Button>
                    </div>

                    <div className="bg-slate-950/50 rounded-lg p-6 border border-white/5 font-mono text-sm relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-20 text-6xl">
                            <ExternalLink />
                         </div>
                        
                        <div className="space-y-6 relative z-10">
                            <div>
                                <span className="text-red-400 block mb-1">Problem_</span>
                                <p className="text-slate-400">{study.problem}</p>
                            </div>
                            <div>
                                <span className="text-green-400 block mb-1">Solution_</span>
                                <p className="text-slate-400">{study.solution}</p>
                            </div>
                            <div>
                                <span className="text-blue-400 block mb-1">Impact_::Metrics</span>
                                <ul className="list-disc list-inside text-slate-400 space-y-1">
                                    {study.impact.map((metric, i) => (
                                        <li key={i}>{metric}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
