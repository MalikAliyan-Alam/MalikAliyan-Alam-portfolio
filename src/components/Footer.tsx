import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE, MAILTO_LINK } from "../lib/site";
import BrandLogo from "./brand/BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink-900/60">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + CTA */}
          <div>
            <Link
              href="/"
              aria-label="Malik Aliyan, home"
              className="inline-flex items-center"
            >
              <BrandLogo variant="dark" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE.role}. I build modern web apps and AI-powered automation
              systems that move businesses forward.
            </p>
            <Link href="/solutions" className="btn-primary mt-6">
              Let's build something
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-accent" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={MAILTO_LINK}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail size={16} className="text-accent" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent/50 hover:text-accent hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent/50 hover:text-accent hover:-translate-y-0.5"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
