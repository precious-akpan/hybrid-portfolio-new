"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export const About = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <Section id="about" className="bg-slate-900/20 border-y border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="text-blue-500 font-mono text-sm mb-4 tracking-wider uppercase">
            {about.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {about.subtitle}
          </h2>
          <div className="prose prose-invert prose-slate max-w-none">
            {about.narrative.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-slate-400 text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <Card className="h-full flex flex-col justify-center items-center text-center py-8">
                <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-2 font-mono">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
