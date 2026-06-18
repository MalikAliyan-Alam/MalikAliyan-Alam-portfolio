"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the DOM animation feature set of framer-motion (instead of the full
 * `motion` bundle). Components use the lightweight `m` component so unused
 * animation features are tree-shaken out of the client bundle.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
  );
}
