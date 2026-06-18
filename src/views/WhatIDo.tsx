"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { Blobs } from "../components/ui/Background";
import { SERVICES, PROCESS_MINI } from "../lib";

function ProcessStep({ step, index }: { step: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative flex flex-col items-center text-center"
    >
      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-card font-display text-xl font-bold text-accent shadow-[0_0_30px_-10px_rgba(45,212,191,0.6)]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-base font-semibold text-fg">{step}</h3>
    </m.div>
  );
}

export default function WhatIDo() {
  return (
    <>

      {/* Page hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What I Do
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Services that take you from{" "}
              <span className="gradient-text">idea to automated reality</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-subtle">
              I combine full stack engineering with AI and automation to build
              products that don't just look great, they work for you around the
              clock.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-8 pt-10 sm:pt-14">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process overview, horizontal stepper */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="How I Work"
            title="A simple, proven process"
            subtitle="Every project flows through five clear stages, so you always know what's happening and what comes next."
          />

          <div className="relative mt-16">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS_MINI.map((step, i) => (
                <ProcessStep key={step} step={step} index={i} />
              ))}
            </div>
          </div>

          <Reveal className="mt-14 text-center">
            <Link href="/process" className="btn-ghost">
              See the full client process
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits?"
        subtitle="Tell me about your goals and I'll recommend the right approach. No jargon, no pressure."
      />
    </>
  );
}
