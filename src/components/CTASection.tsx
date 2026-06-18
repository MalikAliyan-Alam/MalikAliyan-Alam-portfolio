import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./ui/Reveal";
import { Blobs } from "./ui/Background";
import { WHATSAPP_LINK } from "../lib/site";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
};

export default function CTASection({
  title = "Have an idea? Let's build something great.",
  subtitle = "Whether it's a website, an AI assistant, or an automation that saves you hours every week, I'd love to help you make it real.",
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-overlay/10 bg-gradient-to-br from-surface2 to-card px-6 py-14 text-center sm:px-12 sm:py-20">
            <Blobs />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-fg-subtle">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/solutions" className="btn-primary">
                Start a project
                <ArrowRight size={16} />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
