"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, Mail, CheckCircle2, Send } from "lucide-react";
import InlineLoader from "../components/InlineLoader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { Blobs } from "../components/ui/Background";
import { SOLUTION_OPTIONS, SITE, WHATSAPP_LINK, MAILTO_LINK } from "../lib";

function Toast({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 40, x: "-50%" }}
      onAnimationComplete={() => setTimeout(onDone, 3500)}
      className="fixed bottom-24 left-1/2 z-[70] flex items-center gap-3 rounded-full border border-accent/30 bg-ink-800 px-5 py-3 shadow-xl shadow-black/40"
    >
      <CheckCircle2 size={20} className="text-accent" />
      <span className="text-sm font-medium text-slate-100">
        Message sent! I'll get back to you soon.
      </span>
    </motion.div>
  );
}

export default function Solutions() {
  const [selected, setSelected] = useState(SOLUTION_OPTIONS[0].id);
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const active = SOLUTION_OPTIONS.find((o) => o.id === selected)!;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    // Simulate an async submit so the inline loader is shown (UI-only form).
    window.setTimeout(() => {
      setSubmitting(false);
      setShowToast(true);
      form.reset();
    }, 1300);
  };

  return (
    <>

      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Custom Solutions
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Tailored to{" "}
              <span className="gradient-text">exactly what you need</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-400">
              Tell me what you're after and I'll suggest the right approach.
              Pick an option below to see how we'd tackle it together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Project type selector */}
      <section className="pb-4">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Options */}
            <div className="space-y-3">
              {SOLUTION_OPTIONS.map((opt) => {
                const isActive = opt.id === selected;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelected(opt.id)}
                    className={`group flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent/60 bg-accent/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`text-base font-semibold ${
                        isActive ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                        isActive
                          ? "bg-accent text-ink-950"
                          : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic pitch */}
            <div className="card relative min-h-[320px] overflow-hidden p-7 sm:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="eyebrow">Suggested approach</span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-50">
                    {active.label.replace("I need ", "")}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-400">
                    {active.pitch}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {active.approach.map((step, i) => (
                      <motion.li
                        key={step}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                          <Check size={14} />
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Tell me about your project"
            subtitle="Fill in the form and I'll reply within a day. Prefer something quicker? Use WhatsApp or email below."
          />

          <div className="mx-auto mt-12 max-w-2xl">
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="card space-y-5 p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Project Type" htmlFor="type">
                  <select
                    id="type"
                    name="type"
                    defaultValue={active.id}
                    className="form-input"
                  >
                    {SOLUTION_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id} className="bg-ink-800">
                        {opt.label.replace("I need ", "")}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about what you're looking to build..."
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {submitting ? (
                    <>
                      <InlineLoader className="h-5 w-5" label="Sending message" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </Reveal>

            {/* Direct contact */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost flex-1"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.52 11.99c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a href={MAILTO_LINK} className="btn-ghost flex-1">
                <Mail size={18} />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showToast && <Toast onDone={() => setShowToast(false)} />}
      </AnimatePresence>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>
      {children}
    </label>
  );
}
