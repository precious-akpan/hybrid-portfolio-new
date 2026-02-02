"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export const TechStack = () => {
    const { techStack } = PORTFOLIO_DATA;
  
    return (
      <Section id="stack">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                A battle-tested stack refined over a decade of production engineering.
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {techStack.categories.map((category, idx) => {
            const Icon = category.icon;
            return (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                    <Card className="h-full hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Icon size={24} />
                            </div>
                            <h3 className="font-semibold text-lg">{category.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="bg-slate-900/50 text-slate-300 border-slate-700">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            );
          })}
        </div>
      </Section>
    );
  };
