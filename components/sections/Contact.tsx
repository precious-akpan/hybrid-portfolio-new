"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Twitter, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <Section className="py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Let’s build the decentralized future.</h2>
                <p className="text-slate-400">Open for senior engineer / architect roles.</p>
            </div>
            <div className="flex items-center gap-2">
                <Button size="lg" className="rounded-full" href={`mailto:${personal.email}`}>
                    <Mail className="mr-2 w-4 h-4" />
                    Get in Touch
                </Button>
                <button 
                    onClick={handleCopy}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-all active:scale-95"
                    aria-label="Copy email address"
                >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </button>
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
