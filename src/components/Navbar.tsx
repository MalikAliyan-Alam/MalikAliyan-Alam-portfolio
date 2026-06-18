"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/site";
import BrandLogo from "./brand/BrandLogo";
import BrandSymbol from "./brand/BrandSymbol";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) => {
    if (!pathname) return false;
    return to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-overlay/10 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          aria-label="Malik Aliyan, home"
          className="group flex items-center transition-transform duration-300 hover:-translate-y-0.5"
        >
          {/* Symbol only on mobile, full horizontal logo from sm+ */}
          <BrandSymbol className="h-9 w-auto text-fg sm:hidden" />
          <BrandLogo variant="dark" className="hidden sm:inline-flex" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-fg" : "text-fg-subtle hover:text-fg"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-overlay/10" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/solutions" className="hidden btn-primary xl:inline-flex">
            Let's Talk
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-overlay/10 bg-overlay/5 text-fg lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-overlay/10 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link, i) => (
                <m.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(link.to)
                        ? "bg-accent/10 text-accent"
                        : "text-fg-muted hover:bg-overlay/5 hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
              <li className="pt-2">
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
