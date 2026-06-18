"use client";

import Image from "next/image";
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
    <article
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
      className="reveal card card-hover group relative flex flex-col overflow-hidden"
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
            <Image
              src={study.image}
              alt={study.imageAlt ?? study.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-60" />
            <span className="relative font-display text-5xl font-bold text-white/80 transition-transform duration-300 group-hover:scale-110">
              {study.title.charAt(0)}
            </span>
          </>
        )}
        {/* sheen on hover */}
        <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        <span className="absolute right-3 top-3 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {study.category}
        </span>
      </button>

      {/* Result metric badge straddling the thumbnail */}
      {study.metric && (
        <div className="absolute left-5 top-32 z-10 flex items-center gap-2 rounded-xl border border-overlay/10 bg-card/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur">
          <span className="font-display text-lg font-bold gradient-text">
            {study.metric.value}
          </span>
          <span className="text-[11px] leading-tight text-fg-subtle">
            {study.metric.label}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="text-lg font-semibold text-fg">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-subtle">
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
              className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-subtle transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
