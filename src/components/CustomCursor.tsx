"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring, type MotionValue } from "framer-motion";

/** A single trailing dot that lags behind the cursor to form a comet tail. */
function TrailDot({
  x,
  y,
  index,
  hidden,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  index: number;
  hidden: boolean;
}) {
  const cfg = { stiffness: 260 - index * 42, damping: 22 + index * 3, mass: 0.5 };
  const tx = useSpring(x, cfg);
  const ty = useSpring(y, cfg);
  const size = 9 - index * 1.4;

  return (
    <m.div
      style={{
        x: tx,
        y: ty,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{ opacity: hidden ? 0 : 0.4 - index * 0.07 }}
      transition={{ opacity: { duration: 0.2 } }}
      className="absolute rounded-full bg-accent blur-[1px]"
    />
  );
}

/**
 * Creative custom cursor: a glowing accent dot with a comet trail that blooms
 * into a soft glow over interactive elements. Mouse-only (pointer: fine).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const interactiveSelector =
      'a,button,[role="button"],input,textarea,select,label,summary';

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as Element | null;
      setHovered(Boolean(target?.closest(interactiveSelector)));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden="true">
      {/* Comet trail */}
      {[1, 2, 3, 4].map((i) => (
        <TrailDot key={i} x={x} y={y} index={i} hidden={hidden} />
      ))}

      {/* Glowing head */}
      <m.div
        style={{ x, y }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: down ? 0.6 : hovered ? 2.6 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
        className={`absolute -ml-1.5 -mt-1.5 h-3 w-3 rounded-full transition-colors duration-200 ${
          hovered
            ? "bg-accent/40 shadow-[0_0_26px_7px_rgba(45,212,191,0.45)]"
            : "bg-accent shadow-[0_0_16px_3px_rgba(45,212,191,0.65)]"
        }`}
      />
    </div>
  );
}
