import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  GraduationCap,
  Award,
  Heart,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Timeline from "../components/Timeline";
import BrandSymbol from "../components/brand/BrandSymbol";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { Blobs } from "../components/ui/Background";
import { SITE } from "../lib";

const CAREER = [
  {
    title: "AI Automation Engineer",
    subtitle: "GenAiTech · Belgium (Remote)",
    meta: "Sep 2025 to Present",
    description:
      "Building AI automation and Agentic AI systems with Python, plus RAG-based chatbots and n8n workflows that streamline business operations.",
  },
  {
    title: "AI Engineer",
    subtitle: "Linkopify · Part-time",
    meta: "Jan 2026 to Present",
    description:
      "Part-time AI engineering, building and refining AI-powered features and automation workflows.",
  },
  {
    title: "Data Specialist",
    subtitle: "ESHALL Limited · Karachi (On-site)",
    meta: "Jan 2022 to Jan 2025",
    description:
      "Handled data processing, quality assurance, and reporting, building the analytical mindset that now powers my automation and AI work.",
  },
];

const EDUCATION = [
  {
    title: "Master of Computer Applications (MCA)",
    subtitle: "Government Degree Boys College Baldia, Karachi",
    meta: "2025 to 2028",
    description:
      "Currently pursuing my MCA, deepening my foundations in computer science and software engineering.",
  },
  {
    title: "Full Stack Web Development",
    subtitle: "SMIT (Saylani Mass IT Training)",
    meta: "Ongoing",
    description:
      "Learning modern full stack development hands-on: React, Node.js, databases, and real-world project work.",
  },
];

const SKILL_GROUPS: {
  group: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    group: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Redux Toolkit", level: 82 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 82 },
    ],
  },
  {
    group: "AI / GenAI",
    skills: [
      { name: "RAG Pipelines", level: 85 },
      { name: "Chatbots & Voicebots", level: 85 },
      { name: "Agentic AI", level: 82 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Generative AI (Gemini, Streamlit)", level: 85 },
      { name: "AI Evaluation / LLM Review", level: 80 },
    ],
  },
  {
    group: "Automation",
    skills: [
      { name: "n8n Workflow Automation", level: 88 },
      { name: "GoHighLevel", level: 78 },
    ],
  },
  {
    group: "SEO & Marketing",
    skills: [
      { name: "On-page SEO", level: 85 },
      { name: "Technical SEO", level: 80 },
      { name: "Local SEO", level: 86 },
      { name: "Google Business Profile", level: 88 },
      { name: "Google Ads", level: 80 },
      { name: "GA4", level: 78 },
    ],
  },
  {
    group: "Cloud & Tools",
    skills: [
      { name: "Google Cloud Run", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "Docker", level: 78 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "Microsoft Azure (basics)", level: 65 },
      { name: "AWS (basics)", level: 60 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-fg-muted">{name}</span>
        <span className="text-fg-faint">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-overlay/10">
        <div
          style={{ width: `${level}%` }}
          className="skill-grow h-full rounded-full bg-gradient-to-r from-accent-deep to-accent-soft"
        />
      </div>
    </div>
  );
}

// `link` is an empty slot — paste the Credly verification URL to reveal a Verify link.
const CERTIFICATIONS: { title: string; issuer: string; link: string }[] = [
  { title: "Enterprise Agents and Use Cases", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Agent Fundamentals", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Develop GenAI Apps with Gemini and Streamlit", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Introduction to AI Agents", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Introduction to Responsible AI", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Introduction to Large Language Models", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud · Skill Badge (2026)", link: "" },
  { title: "Cloud Concepts", issuer: "Microsoft Azure", link: "" },
  { title: "AWS Cloud Practitioner Essentials (in progress)", issuer: "Amazon Web Services", link: "" },
  { title: "C# Programming", issuer: "JDC Education System", link: "" },
  { title: "AI Seekho 2026, Phase 1 Silver Tier", issuer: "Recognized for Vibe Coding", link: "" },
];

export default function About() {
  return (
    <>

      {/* Hero / intro */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                About Me
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Hi, I'm Malik Aliyan, I build for the{" "}
                <span className="gradient-text">web and beyond</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-subtle">
                I build intelligent web apps, AI-powered automations, and
                chatbots that solve real business problems. I work across the
                full stack (React, Node.js, Python) and specialize in RAG-based
                chatbots, n8n automation, and Generative AI applications.
                Currently an AI Automation Engineer at GenAiTech (Belgium,
                remote), and pursuing my MCA in Karachi.
              </p>

              <div className="mt-6">
                <span className="pill border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to Work
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="group relative mx-auto w-full max-w-[19rem]">
                {/* ambient glow */}
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/25 via-accent-glow/15 to-indigo-500/20 blur-3xl" />

                {/* gradient ring frame */}
                <div className="relative animate-float-y rounded-[1.75rem] bg-gradient-to-br from-accent/70 via-accent-glow/40 to-overlay/10 p-px shadow-2xl shadow-accent/10">
                  <div className="relative aspect-[9/10] overflow-hidden rounded-[1.7rem] bg-card">
                    <Image
                      src="/malikaliyan.webp"
                      alt="Malik Aliyan Alam"
                      fill
                      priority
                      sizes="(min-width: 640px) 304px, 80vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-overlay/10" />
                  </div>

                  {/* floating brand chip */}
                  <div className="absolute -bottom-4 -left-4 grid h-14 w-14 place-items-center rounded-2xl border border-overlay/10 bg-card text-fg shadow-xl">
                    <BrandSymbol className="h-7 w-auto" />
                  </div>

                  {/* floating status chip */}
                  <div className="absolute -right-3 top-6 flex items-center gap-1.5 rounded-full border border-overlay/10 bg-card px-3 py-1.5 text-xs font-medium text-fg-muted shadow-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career timeline */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Experience"
            title="My career so far"
            subtitle="A journey from data into the world of AI, automation, and full stack development."
          />
          <div className="mt-14">
            <Timeline items={CAREER} />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-surface2/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="Education"
            title="Always learning"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.title} delay={i * 0.1}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap size={22} />
                  </span>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-accent">
                    {edu.meta}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-fg">
                    {edu.title}
                  </h3>
                  <p className="text-sm font-medium text-fg-subtle">
                    {edu.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
                    {edu.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Skills"
            title="My toolkit"
            subtitle="The technologies I reach for to design, build, and automate."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.group} delay={(i % 2) * 0.1}>
                <div className="card h-full p-6">
                  <h3 className="text-lg font-semibold text-fg">
                    {g.group}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {g.skills.map((s) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-surface2/50">
        <div className="container-px">
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials & badges"
            subtitle="Recent certifications and skill badges. Credly verification links coming soon."
          />
          <Reveal className="mt-5 text-center">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
            >
              View all badges
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="card card-hover flex h-full flex-col p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Award size={20} />
                  </span>
                  <p className="mt-4 flex-1 font-medium leading-snug text-fg">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-fg-subtle">{c.issuer}</p>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all hover:gap-2.5"
                    >
                      Verify
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="mt-3 text-xs font-medium text-fg-faint">
                      Verification link coming soon
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Personal note */}
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <div className="card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Heart size={22} />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-fg">
                A personal note
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg-subtle">
                Coding isn't just my job, it's genuinely what I love doing.
                There's a special kind of satisfaction in solving a tricky
                problem, shipping something people actually use, and then
                automating it so it runs on its own.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-subtle">
                I'm a firm believer in continuous learning. The tech world moves
                fast, and I move with it, always exploring new tools in AI,
                automation, and web development to deliver better results for the
                people I work with.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <Link href="/case-studies" className="btn-ghost">
              See what I've built
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
