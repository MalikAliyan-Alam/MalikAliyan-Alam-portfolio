"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

/**
 * Shows the full-screen brand loader on first paint, then fades it out once the
 * page is ready (with a small minimum display time so the animation is seen).
 */
export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY = 900;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(MIN_DISPLAY - elapsed, 0);
      window.setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <AnimatePresence>{loading && <Loader key="app-loader" />}</AnimatePresence>
  );
}
