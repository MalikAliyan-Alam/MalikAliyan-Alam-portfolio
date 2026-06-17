"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Blobs, GridBackdrop } from "./ui/Background";
import { SITE } from "../lib";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <Blobs />
      <GridBackdrop />

      <div className="container-px">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
            <span className="pill border-accent/30 bg-accent/10 text-accent">
              <MapPin size={14} />
              {SITE.location} · Open to remote
            </span>
            <span className="pill border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">AI Automation</span> Engineer
            <span className="block">& Full-Stack Web Developer</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Hi, I'm <span className="font-semibold text-slate-200">Malik Aliyan Alam</span>.
            I build intelligent web apps, AI-powered automations, and chatbots
            that solve real business problems, specializing in RAG-based
            chatbots, n8n automation, and Generative AI applications. Currently
            an AI Automation Engineer at GenAiTech (Belgium, remote).
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/case-studies" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-ghost">
              <Sparkles size={16} />
              Let's Build Something
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
