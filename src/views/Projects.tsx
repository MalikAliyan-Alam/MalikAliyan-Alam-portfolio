"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { Blobs } from "../components/ui/Background";
import {
  FEATURED_PROJECT,
  GRID_PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "../lib";

type Filter = "All" | ProjectCategory;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];

const FOODSTORE_HIGHLIGHTS = [
  { value: "500+", label: "Restaurants" },
  { value: "10K+", label: "Active users" },
  { value: "50K+", label: "Orders delivered" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? GRID_PROJECTS
      : GRID_PROJECTS.filter((p) => p.category === filter);

  return (
    <>

      {/* Page hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Projects
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Things I've <span className="gradient-text">designed and built</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-subtle">
              A collection of web apps, e-commerce stores, landing pages and
              front-end builds. Every card links straight to the live demo and
              the source code.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured project: FoodStore */}
      <section className="pb-6 pt-10 sm:pt-14">
        <div className="container-px">
          <Reveal>
            <article className="card card-hover group overflow-hidden">
              {/* Full-width banner so the whole screenshot fits the card width */}
              <a
                href={FEATURED_PROJECT.live}
                target="_blank"
                rel="noreferrer"
                className="relative block h-56 w-full overflow-hidden bg-bg sm:h-72 lg:h-80"
                aria-label={`Open live demo of ${FEATURED_PROJECT.title}`}
              >
                <Image
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
                  <Star size={14} className="fill-accent text-accent" />
                  Featured Project
                </span>
              </a>

              <div className="p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-fg sm:text-3xl">
                  {FEATURED_PROJECT.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg-subtle">
                  {FEATURED_PROJECT.description}
                </p>

                <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
                  {FOODSTORE_HIGHLIGHTS.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl border border-overlay/10 bg-overlay/[0.03] p-3 text-center"
                    >
                      <div className="gradient-text font-display text-xl font-bold">
                        {h.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-fg-subtle">
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {FEATURED_PROJECT.tech.map((t) => (
                    <span key={t} className="pill text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={FEATURED_PROJECT.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={FEATURED_PROJECT.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section pt-10">
        <div className="container-px">
          <SectionHeading
            eyebrow="All Work"
            title="Browse by category"
            subtitle="Filter the builds by what they are."
          />

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-ink-950"
                      : "text-fg-subtle hover:text-fg"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-accent" />
                  )}
                  {f}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <m.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <m.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} index={i} />
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>

          <p className="mt-8 text-center text-sm text-fg-faint">
            Showing {visible.length} project{visible.length === 1 ? "" : "s"}
            {filter !== "All" ? ` in ${filter}` : ""}.
          </p>
        </div>
      </section>

      <CTASection
        title="Like what you see?"
        subtitle="I'm always building. Let's create something for your business next."
      />
    </>
  );
}
