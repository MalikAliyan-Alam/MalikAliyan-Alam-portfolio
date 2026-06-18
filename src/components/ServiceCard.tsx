import { Check } from "lucide-react";
import type { Service } from "../lib";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <article
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
      className="reveal card card-hover group flex flex-col p-6"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-950">
        <Icon size={24} />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-fg">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2.5 border-t border-overlay/10 pt-5">
        {service.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-fg-muted">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
