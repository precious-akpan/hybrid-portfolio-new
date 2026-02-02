"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <Section className="py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Let’s build the decentralized future.</h2>
                <p className="text-slate-400">Open for senior engineer / architect roles.</p>
            </div>
            <div className="flex gap-4">
                <Button size="lg" className="rounded-full">
                    <Mail className="mr-2 w-4 h-4" />
                    Get in Touch
                </Button>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
            <div className="flex gap-6">
                <a href={personal.github} className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href={personal.linkedin} className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href={personal.twitter} className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                </a>
            </div>
        </div>
      </Section>
    </footer>
  );
};
