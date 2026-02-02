"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Code, Terminal } from "lucide-react";

export const Hero = () => {
  const { hero } = PORTFOLIO_DATA;

  return (
    <Section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Senior Roles
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-[90vw] mx-auto break-words">
            {hero.headline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              {hero.highlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group" href="#work">
              {hero.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" href="#insights">
              {hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        {/* Code Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none select-none overflow-hidden blur-sm z-[-1]">
          <pre className="text-xs font-mono text-blue-300 p-4">
            {`
contract Portfolio is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct Engineer {
        string name;
        uint256 experience; // 10 years
        string[] skills;
        mapping(address => Project) portfolio;
    }

    /* 
     * @notice Bridges Web2 stability with Web3 agility
     * @dev Optimized for high-frequency hiring
     */
    function deployArchitect() external pure returns (Engineer memory) {
        // Implementation hidden
    }
}
            `}
          </pre>
        </div>
      </div>
    </Section>
  );
};
