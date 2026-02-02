import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & { href?: string; target?: string; rel?: string }>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const variants = {
      primary: "bg-accent-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 border border-transparent",
      secondary: "bg-muted hover:bg-slate-700 text-white border border-border",
      ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
      outline: "bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    const classes = twMerge(
      "inline-flex items-center justify-center rounded-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http");
      const isHash = href.startsWith("#");

      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHash) {
          e.preventDefault();
          const targetId = href.substring(1);
          const elem = document.getElementById(targetId);
          elem?.scrollIntoView({ behavior: "smooth" });
        }
        if (props.onClick) props.onClick(e as any);
      };

      return (
        <a 
          href={href} 
          className={classes} 
          ref={ref as any}
          onClick={handleClick}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as any}
        className={classes}
        {...(props as any)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
