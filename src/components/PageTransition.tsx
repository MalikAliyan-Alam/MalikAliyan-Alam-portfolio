import type { ReactNode } from "react";

/**
 * Page enter animation done with a pure CSS keyframe (see globals.css) so route
 * transitions cost no JavaScript. The App Router re-mounts the template on each
 * navigation, replaying the animation.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return <main className="page-enter">{children}</main>;
}
