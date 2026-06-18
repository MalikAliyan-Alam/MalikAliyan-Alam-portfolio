import PageTransition from "@/components/PageTransition";

/**
 * App Router re-mounts this template on every navigation, so the CSS enter
 * animation in PageTransition replays on each route change (no JS cost).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
