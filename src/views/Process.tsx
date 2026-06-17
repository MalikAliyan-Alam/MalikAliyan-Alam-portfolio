"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Timeline from "../components/Timeline";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { Blobs } from "../components/ui/Background";
import { PROCESS_STEPS, FAQS } from "../lib";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-slate-100">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 ${isOpen ? "text-accent" : "text-slate-400"}`}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Process() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>

      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              How This Works For You
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              A clear path from{" "}
              <span className="gradient-text">first hello to long-term support</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-400">
              No guesswork, no jargon. Here's exactly what it's like to work with
              me, step by step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section pt-8">
        <div className="container-px">
          <Timeline
            items={PROCESS_STEPS.map((s, i) => ({
              title: s.title,
              description: s.description,
              meta: `Step ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-900/30">
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions clients usually ask"
            subtitle="If you don't see your question here, just reach out. I'm happy to chat."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        subtitle="Explore custom solutions tailored to exactly what you need."
      />
    </>
  );
}
