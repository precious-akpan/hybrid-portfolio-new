import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = ({ className, container = true, children, ...props }: SectionProps) => {
  return (
    <section
      className={twMerge(
        "py-16 md:py-24 relative",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
