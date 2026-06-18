import Image from "next/image";
import { Award } from "lucide-react";
import CTASection from "../components/CTASection";
import Reveal from "../components/ui/Reveal";
import { Blobs } from "../components/ui/Background";
import { BADGES, type Badge } from "../lib";

function BadgeCard({ badge, index }: { badge: Badge; index: number }) {
  return (
    <figure
      style={{ animationDelay: `${(index % 3) * 0.08}s` }}
      className="reveal card card-hover group flex flex-col overflow-hidden p-4"
    >
      <div className="overflow-hidden rounded-xl bg-white">
        <Image
          src={badge.image}
          alt={`${badge.title} ${badge.kind} from ${badge.issuer}`}
          width={360}
          height={360}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="aspect-square w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-4 flex flex-1 flex-col px-1 pb-1">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
          <Award size={13} />
          {badge.issuer}
        </span>
        <span className="mt-1.5 flex-1 font-semibold leading-snug text-fg">
          {badge.title}
        </span>
        <span className="mt-1 text-xs text-fg-subtle">{badge.kind}</span>
      </figcaption>
    </figure>
  );
}

export default function Certifications() {
  return (
    <>

      {/* Page hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <Blobs />
        <div className="container-px">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Certifications & Badges
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Verified <span className="gradient-text">credentials</span> &
              skill badges
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-subtle">
              A growing collection of certifications and skill badges I've earned,
              focused on Generative AI, AI agents, and cloud, with more on the way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Badge grid */}
      <section className="pb-8 pt-10 sm:pt-14">
        <div className="container-px">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BADGES.map((badge, i) => (
              <BadgeCard key={badge.title} badge={badge} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Always leveling up"
        subtitle="I'm continuously earning new credentials in AI, automation, and cloud. Let's put those skills to work for you."
      />
    </>
  );
}
