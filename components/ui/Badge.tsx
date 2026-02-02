import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export const Badge = ({ className, variant = "default", children, ...props }: BadgeProps) => {
  const variants = {
    default: "bg-muted text-slate-300 border border-transparent",
    outline: "bg-transparent border border-secondary text-slate-400",
    accent: "bg-accent-blue/10 text-accent-blue border border-accent-blue/20",
  };

  return (
    <span
      className={twMerge(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium font-mono tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
