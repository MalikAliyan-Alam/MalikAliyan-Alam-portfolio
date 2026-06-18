"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import {
  X,
  AlertCircle,
  Lightbulb,
  Wrench,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import CaseStudyCard from "../components/CaseStudyCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import { Blobs } from "../components/ui/Background";
import { CASE_STUDIES, type CaseStudy } from "../lib";

function DetailBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof AlertCircle;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
        <Icon size={16} />
        {label}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-fg-muted">{children}</div>
    </div>
  );
}

function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-bg/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <m.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-overlay/10 bg-card sm:rounded-3xl"
      >
        <div
          className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${study.accent}`}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt={study.imageAlt ?? study.title}
              fill
              sizes="(min-width: 640px) 640px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-60" />
              <span className="relative font-display text-6xl font-bold text-white/80">
                {study.title.charAt(0)}
              </span>
            </>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink-950/60 text-white backdrop-blur transition-colors hover:bg-ink-950 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Metric badge floating over the header */}
        {study.metric && (
          <div className="absolute right-5 top-32 flex items-center gap-2 rounded-xl border border-overlay/10 bg-card/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur">
            <span className="font-display text-xl font-bold gradient-text">
              {study.metric.value}
            </span>
            <span className="max-w-[90px] text-[11px] leading-tight text-fg-subtle">
              {study.metric.label}
            </span>
          </div>
        )}

        <div className="space-y-6 p-6 pt-8 sm:p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {study.category}
            </span>
            <h3 className="mt-1 text-2xl font-bold text-fg">{study.title}</h3>
          </div>

          <DetailBlock icon={AlertCircle} label="Problem">
            {study.problem}
          </DetailBlock>
          <DetailBlock icon={Lightbulb} label="Solution">
            {study.solution}
          </DetailBlock>
          <DetailBlock icon={Wrench} label="Tools Used">
            <div className="mt-1 flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span key={tool} className="pill">
                  {tool}
                </span>
              ))}
            </div>
          </DetailBlock>
          <DetailBlock icon={TrendingUp} label="Result / Outcome">
            {study.result}
          </DetailBlock>

          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              Visit Live Site
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </m.div>
    </m.div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <>

      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Case Studies
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Real problems, <span className="gradient-text">real outcomes</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-subtle">
              A selection of projects showing how the right mix of web
              engineering, AI, and automation solves business problems. Click any
              card for the full breakdown.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 pt-10 sm:pt-14">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, i) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={i}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your project could be next"
        subtitle="Let's turn your challenge into a clean, well-built solution with measurable results."
      />

      <AnimatePresence>
        {active && (
          <CaseStudyModal study={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
