"use client";

import { m } from "framer-motion";

type Node = { id: string; cx: number; cy: number };

// Neural-node cluster that sits between the < > brackets.
const NODES: Node[] = [
  { id: "T", cx: 66, cy: 26 },
  { id: "UL", cx: 54, cy: 38 },
  { id: "UR", cx: 78, cy: 38 },
  { id: "C", cx: 66, cy: 50 },
  { id: "LL", cx: 54, cy: 62 },
  { id: "LR", cx: 78, cy: 62 },
  { id: "B", cx: 66, cy: 74 },
];
const P: Record<string, Node> = Object.fromEntries(
  NODES.map((n) => [n.id, n])
) as Record<string, Node>;

const EDGES: [string, string][] = [
  ["C", "T"], ["C", "B"], ["C", "UL"], ["C", "UR"], ["C", "LL"], ["C", "LR"],
  ["T", "UL"], ["T", "UR"], ["B", "LL"], ["B", "LR"],
  ["UL", "LL"], ["UR", "LR"], ["UL", "UR"], ["LL", "LR"],
];

type BrandSymbolProps = {
  className?: string;
  /** When true, the neural nodes pulse/glow in a loop. */
  animated?: boolean;
  /** Accessible name. Leave empty to render the mark as decorative. */
  title?: string;
};

/**
 * The brand symbol (< > brackets + neural-node mesh) as transparent, scalable
 * SVG. Brackets follow the parent text color (currentColor); nodes are the
 * brand purple. With `animated`, each node glows on a staggered loop.
 */
export default function BrandSymbol({
  className,
  animated = false,
  title = "",
}: BrandSymbolProps) {
  const decorative = title.length === 0;

  return (
    <svg
      viewBox="0 0 132 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
    >
      {!decorative && <title>{title}</title>}
      <defs>
        <linearGradient id="ma-node" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="ma-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      {/* Brackets inherit text color so they adapt to light/dark surfaces */}
      <g
        stroke="currentColor"
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="44,20 24,48 44,76" />
        <polyline points="88,20 108,48 88,76" />
      </g>

      {/* Edges */}
      <g stroke="url(#ma-node)" strokeWidth="1.8" strokeOpacity="0.55">
        {EDGES.map(([a, b]) => (
          <line key={a + b} x1={P[a].cx} y1={P[a].cy} x2={P[b].cx} y2={P[b].cy} />
        ))}
      </g>

      {/* Glow halo + nodes */}
      {NODES.map((n, i) => (
        <g key={n.id}>
          {animated && (
            <m.circle
              cx={n.cx}
              cy={n.cy}
              r={5}
              fill="#8b5cf6"
              filter="url(#ma-glow)"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              initial={{ opacity: 0.2, scale: 0.7 }}
              animate={{ opacity: [0.2, 0.75, 0.2], scale: [0.7, 1.35, 0.7] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.16,
              }}
            />
          )}
          <m.circle
            cx={n.cx}
            cy={n.cy}
            r={3.8}
            fill="url(#ma-node)"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            {...(animated
              ? {
                  animate: { scale: [1, 1.18, 1] },
                  transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.16,
                  },
                }
              : {})}
          />
        </g>
      ))}
    </svg>
  );
}
