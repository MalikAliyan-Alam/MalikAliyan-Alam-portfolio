"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../lib";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="card card-hover group relative flex flex-col overflow-hidden"
    >
      {/* Screenshot thumbnail */}
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="relative block h-48 overflow-hidden bg-ink-800"
        aria-label={`Open live demo of ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        {/* sheen on hover */}
        <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        <span className="absolute right-3 top-3 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          {project.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-slate-50">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="pill text-[11px]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex-1 px-4 py-2 text-xs"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost flex-1 px-4 py-2 text-xs"
          >
            <Github size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
