"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export const TechnicalInsights = () => {
  const { insights } = PORTFOLIO_DATA;

  return (
    <Section id="insights">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Technical Insights</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium transition-colors">
            View All <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((post, idx) => (
          <Card key={idx} hoverEffect className="cursor-pointer group h-full flex flex-col justify-between">
            <div>
                <span className="text-xs font-mono text-slate-500 mb-3 block">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {post.summary}
                </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                Read Article <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </Card>
        ))}
        
        {/* Placeholder for 'See More' visual */}
        <Card className="flex flex-col justify-center items-center text-center p-8 bg-slate-900/30 border border-dashed border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer group">
             <div className="p-4 rounded-full bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors mb-4">
                <ArrowRight size={24} />
             </div>
             <p className="font-medium text-slate-300">View Full Archive</p>
             <p className="text-sm text-slate-500 mt-2">Substack & Medium</p>
        </Card>
      </div>
    </Section>
  );
};
