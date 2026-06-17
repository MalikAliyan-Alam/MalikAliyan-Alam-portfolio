"use client";

import { motion } from "framer-motion";
import BrandSymbol from "./brand/BrandSymbol";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Full-screen initial-load screen. Centers the brand symbol with a gentle
 * whole-mark pulse plus a soft purple glow that breathes behind the neural
 * nodes. Background matches the dark site theme; it fades out via the parent
 * AnimatePresence. Animation is disabled under prefers-reduced-motion.
 */
export default function Loader() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-7">
        <div className="relative grid place-items-center">
          {/* Soft ambient glow behind the mark */}
          {!reduced && (
            <motion.span
              aria-hidden="true"
              className="absolute h-32 w-32 rounded-full bg-[#7c3aed] blur-3xl"
              animate={{ opacity: [0.1, 0.35, 0.1], scale: [0.85, 1.1, 0.85] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <motion.div
            className="relative text-slate-100"
            {...(!reduced
              ? {
                  animate: { scale: [1, 1.05, 1] },
                  transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : {})}
          >
            <BrandSymbol
              animated={!reduced}
              className="h-24 w-auto"
            />
          </motion.div>
        </div>

        {/* Indeterminate loading bar */}
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
          {!reduced ? (
            <motion.span
              className="block h-full w-1/2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]"
              animate={{ x: ["-120%", "260%"] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <span className="block h-full w-full rounded-full bg-[#8b5cf6]" />
          )}
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
          Malik Aliyan
        </p>
      </div>
    </motion.div>
  );
}
