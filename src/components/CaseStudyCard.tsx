"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { CaseStudy } from "../lib";

export default function CaseStudyCard({
  study,
  index = 0,
  onOpen,
}: {
  study: CaseStudy;
  index?: number;
  onOpen: (study: CaseStudy) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card card-hover group relative flex flex-col overflow-hidden"
    >
      {/* Thumbnail placeholder */}
      <button
        type="button"
        onClick={() => onOpen(study)}
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${study.accent}`}
        aria-label={`View details for ${study.title}`}
      >
        {study.image ? (
          <>
            <img
              src={study.image}
              alt={study.imageAlt ?? study.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-60" />
            <motion.span
              className="relative font-display text-5xl font-bold text-white/80"
              whileHover={{ scale: 1.1 }}
            >
              {study.title.charAt(0)}
            </motion.span>
          </>
        )}
        {/* sheen on hover */}
        <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        <span className="absolute right-3 top-3 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          {study.category}
        </span>
      </button>

      {/* Result metric badge straddling the thumbnail */}
      {study.metric && (
        <div className="absolute left-5 top-32 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur">
          <span className="font-display text-lg font-bold gradient-text">
            {study.metric.value}
          </span>
          <span className="text-[11px] leading-tight text-slate-400">
            {study.metric.label}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="text-lg font-semibold text-slate-50">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {study.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="pill text-[11px]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpen(study)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5"
          >
            View Details
            <ArrowUpRight size={16} />
          </button>
          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              Live site
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
