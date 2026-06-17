"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Workflow, Bot } from "lucide-react";
import Hero from "../components/Hero";
import CaseStudyCard from "../components/CaseStudyCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import CountUp from "../components/ui/CountUp";
import { CASE_STUDIES, STATS, TECH_STACK } from "../lib";

const TRUSTED_BY = [
  "Barham Dental Care",
  "City Dental Care",
  "GenAiTech",
  "ESHALL Limited",
];

const TEASERS = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern React + Node.js applications, fast and built to scale.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    text: "n8n workflows and AI agents that handle the repetitive work.",
  },
  {
    icon: Bot,
    title: "Chatbots & Voicebots",
    text: "Conversational assistants that support and convert, 24/7.",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero />

      {/* Tech stack ticker */}
      <section className="border-y border-white/10 bg-ink-900/40 py-8">
        <p className="container-px text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          My Tech Stack
        </p>
        <div className="relative mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max shrink-0 animate-marquee items-center gap-3 pr-3">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="pill whitespace-nowrap text-sm text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="pt-14">
        <div className="container-px">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Trusted by clinics & growing businesses
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {TRUSTED_BY.map((name) => (
                <span
                  key={name}
                  className="font-display text-lg font-semibold text-slate-500 transition-colors duration-300 hover:text-slate-200 sm:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I do teaser */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="What I Do"
            title="From idea to launch, and the automation that runs after"
            subtitle="I help businesses build their web presence and put AI to work behind the scenes."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {TEASERS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <t.icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-50">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/what-i-do" className="btn-ghost">
              Explore all services
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="section bg-ink-900/30">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Work"
              title="Selected case studies"
              subtitle="A look at recent projects across web, AI, and automation."
            />
            <Reveal>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                View all <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.slice(0, 3).map((study, i) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={i}
                onOpen={() => router.push("/case-studies")}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Want the full story?{" "}
            <Link href="/case-studies" className="text-accent hover:underline">
              See detailed breakdowns →
            </Link>
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="section">
        <div className="container-px">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-ink-900 p-7 text-center transition-colors hover:bg-ink-800"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180 }}
                    className="gradient-text font-display text-4xl font-bold sm:text-5xl"
                  >
                    <CountUp value={stat.value} />
                  </motion.div>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
