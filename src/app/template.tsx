"use client";

import PageTransition from "@/components/PageTransition";

/**
 * App Router re-mounts this template on every navigation, so the enter
 * animation in PageTransition runs on each route change.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
