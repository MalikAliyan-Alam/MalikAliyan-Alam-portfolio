import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Blobs, GridBackdrop } from "./ui/Background";
import { SITE } from "../lib";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20 sm:pb-16">
      <Blobs />
      <GridBackdrop />

      <div className="container-px">
        <div className="max-w-4xl">
          <div className="reveal flex flex-wrap items-center gap-2.5">
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
          </div>

          <h1
            className="reveal mt-6 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="gradient-text">AI Automation</span> Engineer
            <span className="block">& Full-Stack Web Developer</span>
          </h1>

          <p
            className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-fg-subtle"
            style={{ animationDelay: "0.16s" }}
          >
            Hi, I'm <span className="font-semibold text-fg">Malik Aliyan Alam</span>.
            I build intelligent web apps, AI-powered automations, and chatbots
            that solve real business problems, specializing in RAG-based
            chatbots, n8n automation, and Generative AI applications. Currently
            an AI Automation Engineer at GenAiTech (Belgium, remote).
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <Link href="/case-studies" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-ghost">
              <Sparkles size={16} />
              Let's Build Something
            </Link>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-overlay/20 p-1.5">
          <span className="h-1.5 w-1.5 animate-float-y rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
