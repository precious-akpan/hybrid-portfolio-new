
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Rocket, 
  Layout, 
  Database,
  Server,
  Layers
} from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Precious Akpan",
    role: "Senior Web2.5 Architect",
    tagline: "Bridging Centralized Systems & Decentralized Protocols",
    email: "alex@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  
  navigation: [
    { name: "About", href: "#about" },
    { name: "Tech Matrix", href: "#stack" },
    { name: "Case Studies", href: "#work" },
    { name: "Insights", href: "#insights" },
  ],

  hero: {
    headline: "10 Years of Engineering Excellence.",
    highlight: "Built for the Decentralized Future.",
    subtext: "Merging the stability of high-scale Web2 systems with the innovation and agility of Web3 protocols.",
    primaryCta: "View Case Studies",
    secondaryCta: "Technical Briefs",
  },

  about: {
    title: "The Bridge",
    subtitle: "From Centralized Systems to Decentralized Protocols",
    narrative: `I didn't just jump into crypto; I engineered my way here. With over a decade of experience shipping production-grade software for fintech and enterprise sectors, I’ve mastered the art of scalability, security, and idempotency.

My evolution from TypeScript/Node.js architecture to Solidity & Rust smart contracts wasn't a pivot—it was an upgrade. I bring the rigor of CI/CD, comprehensive testing, and audit-ready code to the wild west of Web3, ensuring that 'move fast and break things' never applies to user funds.`,
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Smart Contracts Audited", value: "50+" },
      { label: "TVL Secured", value: "$200M+" },
      { label: "Production Commits", value: "12k+" },
    ]
  },

  techStack: {
    categories: [
      {
        name: "Core Engineering",
        icon: Terminal,
        skills: ["TypeScript", "Node.js", "Next.js 15", "Go", "PostgreSQL", "Redis"]
      },
      {
        name: "Web3 & Smart Contracts",
        icon: Cpu,
        skills: ["Solidity", "Rust (Soroban)", "Ethers.js", "Hardhat", "Foundry", "Wagmi"]
      },
      {
        name: "Infrastructure & Security",
        icon: ShieldCheck,
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines", "Slither", "MythX"]
      }
    ]
  },

  caseStudies: [
    {
      id: "hop-protocol",
      title: "Hop Protocol: Cross-Chain Bridge Architecture",
      type: "Web3 / Infrastructure",
      description: "Trustless bridge enabling instant token transfers between Layer 2 scaling solutions.",
      problem: "Users faced 7-day withdrawal periods when moving assets from Optimistic Rollups to Ethereum mainnet, fragmenting liquidity.",
      solution: "Implemented a system of Bonders to provide liquidity for instant withdrawals. Architected the L1<->L2 messaging layer using canonical bridges for settlement.",
      impact: [
        "Enabled sub-5-minute cross-chain transfers",
        "Processed $1B+ in bridge volume",
        "Zero liquidity loss incidents"
      ],
      stack: ["Solidity", "TypeScript", "Ethers.js", "The Graph"],
      link: "#"
    },
    {
      id: "drips-wave",
      title: "Drips: Recurring Payment Protocol",
      type: "Web3 / Protocol",
      description: "NFT-driver streaming payments allowing one-to-many funds distribution.",
      problem: "DAO contributors and open-source maintainers lacked a reliable way to receive recurring sustainable funding without high gas friction.",
      solution: "Engineered 'Splits' and 'Drips' drivers using Cycle-based accounting. Optimized storage slots to allow thousands of streams to be processed in a single transaction.",
      impact: [
        "Recovered $15M+ in funding for public goods",
        "Reduced claim gas costs by 40% using sub-graphs",
        "Integrated by 50+ major DAOs"
      ],
      stack: ["Solidity", "Foundry", "Subgraph", "React"],
      link: "#"
    },
    {
      id: "predictify",
      title: "Predictify: Decentralized Prediction Market",
      type: "Web3 / Protocol",
      description: "Optimizing payout logic for high-frequency markets on the Stellar network.",
      problem: "Existing prediction market AMMs suffered from high gas costs and latency during payout distribution, specifically when settling markets with >10,000 participants.",
      solution: "Architected a batched payout mechanism using Soroban smart contracts. Moved calculation logic off-chain using a verifiable Merkle Proof system, allowing users to claim rewards with O(1) complexity rather than O(n) distribution.",
      impact: [
        "Reduced gas fees by 85% per transaction",
        "Cut payout time from 4 hours to instant",
        "Zero critical vulnerabilities in audit"
      ],
      stack: ["Rust", "Soroban", "Merkle Trees", "Next.js"],
      link: "#"
    },
    {
      id: "fintech-core",
      title: "LedgerPrime: High-Frequency Trading Engine",
      type: "Web2 / Systems",
      description: "Low-latency order matching engine for a centralized crypto exchange.",
      problem: "Legacy Node.js matching engine hit bottlenecks at 500 orders/sec, causing slippage during high volatility events.",
      solution: "Rewrote the core matching engine in Go with an in-memory Redis state layer. Implemented optimistic locking and an event-sourcing architecture for auditability.",
      impact: [
        "Throughput increased to 15,000 orders/sec",
        "Latency reduced to <2ms p99",
        "100% uptime during market crash"
      ],
      stack: ["Go", "Redis", "WebSockets", "TimescaleDB"],
      link: "#"
    }
  ],
  
  insights: [
    {
      title: "The State of Soroban Security",
      date: "Oct 2025",
      summary: "Analyzing common re-entrancy vectors in Stellar's new smart contract platform and how to mitigate them.",
    },
    {
      title: "Gas Optimization Patterns for 2026",
      date: "Jan 2026",
      summary: "Why memory expansion costs are the new silent killer in EVM contract design.",
    }
  ]
};
