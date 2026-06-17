"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Blobs, GridBackdrop } from "../components/ui/Background";

export default function NotFound() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-5 text-center">
        <Blobs />
        <GridBackdrop />
        <div>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
            className="relative"
          >
            <motion.h1
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="gradient-text font-display text-[7rem] font-bold leading-none sm:text-[12rem]"
            >
              404
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
              Lost in automation
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              This page wandered off the workflow. Let's get you back to
              something that actually exists.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-primary">
                <Home size={16} />
                Back to Home
              </Link>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="btn-ghost"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
