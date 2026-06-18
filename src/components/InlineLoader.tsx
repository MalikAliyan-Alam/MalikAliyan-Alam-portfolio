import { m } from "framer-motion";
import BrandSymbol from "./brand/BrandSymbol";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type InlineLoaderProps = {
  className?: string;
  label?: string;
};

/**
 * Small reusable loader built from the brand symbol, for async UI states
 * (form submit, data loading, etc.). Falls back to a static mark under
 * prefers-reduced-m.
 */
export default function InlineLoader({
  className = "h-5 w-5",
  label = "Loading",
}: InlineLoaderProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <span
      role="status"
      aria-label={label}
      className="inline-flex items-center justify-center"
    >
      <m.span
        className="inline-flex"
        {...(!reduced
          ? {
              animate: { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] },
              transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      >
        <BrandSymbol animated={!reduced} className={`${className} w-auto`} />
      </m.span>
    </span>
  );
}
