import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Accepted for API compatibility; the CSS reveal ignores these. */
  y?: number;
  once?: boolean;
};

/**
 * Entrance reveal using a pure-CSS animation (see `.reveal` in globals.css).
 * Renders content visible in the SSR HTML so it never blocks LCP on hydration,
 * and ships no JavaScript.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const style: CSSProperties | undefined = delay
    ? { animationDelay: `${delay}s` }
    : undefined;

  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
