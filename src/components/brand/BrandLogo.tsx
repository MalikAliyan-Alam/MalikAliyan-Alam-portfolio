import BrandSymbol from "./BrandSymbol";

type BrandLogoProps = {
  /** Which surface the logo sits on. "dark" => light text/brackets. */
  variant?: "dark" | "light";
  className?: string;
  /** Height utility for the symbol (e.g. "h-9", "h-10"). */
  symbolClassName?: string;
};

/**
 * Transparent horizontal logo lockup: the brand symbol + "Malik Aliyan"
 * wordmark + tagline, rendered as vector + live text so it stays crisp and
 * blends into any background (no baked-in card).
 */
export default function BrandLogo({
  variant = "dark",
  className = "",
  symbolClassName = "h-9",
}: BrandLogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-slate-50" : "text-ink-900";
  const bracketColor = isDark ? "text-slate-100" : "text-ink-900";
  const tagColor = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandSymbol className={`${symbolClassName} w-auto ${bracketColor}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold leading-none tracking-tight ${textColor}`}
        >
          Malik Aliyan
        </span>
        <span
          className={`mt-1.5 text-[9px] font-semibold uppercase leading-none tracking-[0.2em] ${tagColor}`}
        >
          Web Developer <span className="text-[#8b5cf6]">•</span> AI Engineer
        </span>
      </span>
    </span>
  );
}
