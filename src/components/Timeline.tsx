export type TimelineItem = {
  title: string;
  subtitle?: string;
  description: string;
  meta?: string;
};

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <li className="relative">
      <div
        style={{ animationDelay: `${index * 0.08}s` }}
        className={`reveal relative pl-12 sm:w-1/2 sm:pl-0 ${
          isLeft ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12 sm:text-left"
        }`}
      >
        {/* Node */}
        <span
          className={`absolute left-4 top-1.5 z-10 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-card text-xs font-bold text-accent sm:left-auto ${
            isLeft
              ? "sm:-right-3.5 sm:translate-x-1/2"
              : "sm:-left-3.5 sm:-translate-x-1/2"
          }`}
        >
          {index + 1}
        </span>

        <div className="card card-hover p-5">
          {item.meta && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {item.meta}
            </span>
          )}
          <h3 className="mt-1 text-lg font-semibold text-fg">{item.title}</h3>
          {item.subtitle && (
            <p className="text-sm font-medium text-fg-subtle">{item.subtitle}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-fg-subtle">
            {item.description}
          </p>
        </div>
      </div>
    </li>
  );
}

/** Animated vertical timeline with a growing connector line. */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Track */}
      <div className="absolute left-4 top-2 h-full w-px bg-overlay/10 sm:left-1/2 sm:-translate-x-1/2" />

      <ul className="space-y-10">
        {items.map((item, i) => (
          <TimelineRow key={item.title} item={item} index={i} />
        ))}
      </ul>
    </div>
  );
}
